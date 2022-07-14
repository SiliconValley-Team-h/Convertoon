from django.shortcuts import render, redirect

from textExtract.forms import SrcImgForm
from easyocr import Reader
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from django.core import serializers
from rest_framework.response import Response
import urllib.request
import urllib.parse

from .models import SrcImg,ExtractText,ResultImg
from .serializers import SrcImgSerializer,ResultImgSerializer,ExtractTextSerializer

from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont
import numpy as np
import ast
import os

@method_decorator(csrf_exempt, name="dispatch")
def getOcrResults(request):
    if(request.method=='POST'):
        form = SrcImgForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()

            latestSrcImg = SrcImg.objects.last()
            
            image = '.'+latestSrcImg.image.url
            reader = Reader(["ko"], gpu=False)
            results = reader.readtext(image)
            text_lists = []
            for x in results:
                text_lists.append(x[1])
            
            cnt=0
            for result in results:
                extractText = ExtractText()
                extractText.src_img_id = latestSrcImg
                extractText.src_text = result[1]
                extractText.coordinate = str(result[0])
                extractText.save()
                cnt+=1
            

            return JsonResponse({
                'text_lists' : text_lists,
                'count' : cnt,
                'img_id' : latestSrcImg.img_id,
            }, json_dumps_params = {'ensure_ascii': True})
    
    else:
        return HttpResponse(json.dumps({"status":"Failed"}))





def getSrcImg(request, img_id):
    srcImg = SrcImg.objects.get(img_id=img_id)
    serializer = SrcImgSerializer(srcImg)

    return JsonResponse(serializer.data)




def getExtractTexts(request, img_id):
    querySet = ExtractText.objects.filter(src_img_id=img_id)
    data = serializers.serialize("json", querySet)
    
    return HttpResponse(content=data)
    



def getInsTextImg(reqeust, img_id):
    querySet = ExtractText.objects.filter(src_img_id=img_id)
    listTextExtract = serializers.serialize("json", querySet)

    srcImg = SrcImg.objects.get(img_id=img_id)
    image = Image.open("."+srcImg.image.url)

    fontsize = 15
    fnt = ImageFont.truetype("../Font/Roboto-Black.ttf", fontsize, encoding="UTF-8")
    draw = ImageDraw.Draw(image)


    for extractText in querySet:
        coord = ast.literal_eval(extractText.coordinate)
        rect = []
        rect.extend(coord[0])
        rect.extend(coord[2])
        draw.rectangle(rect, outline=(255,255,255,0),fill=(255,255,255,0),width=2 )
    

    for extractText in querySet:
        coord = ast.literal_eval(extractText.coordinate)
        rect = []
        rect.extend(coord[0])
        rect.extend(coord[2])

        enText = extractText.trs_text
        draw.text((rect[0],rect[1]),enText,font=fnt,fill="black")
    

    filename = 'resultImg_'+str(img_id)+'.jpg'
    image.save('./media/'+filename)


    resultImg = ResultImg()
    resultImg.image = filename
    resultImg.img_id = img_id
    resultImg.save()

    serializer = ResultImgSerializer(resultImg)

    return JsonResponse(serializer.data)



@method_decorator(csrf_exempt, name="dispatch")
def api_papago(request,img_id):
    if request.method == 'POST': 
        firstText = ExtractText.objects.filter(src_img_id=img_id).first()
        lastText = ExtractText.objects.filter(src_img_id=img_id).last()
        trstext_lists = []
        cnt = 0

        for i in range(firstText.text_id,lastText.text_id+1):
            client_id = "BrFK4uZx3EBSvR_PfNIW" # 개발자센터에서 발급받은 Client ID 값
            client_secret = "1teZNlNgnu" # 개발자센터에서 발급받은 Client Secret 값

            source = ExtractText.objects.get(text_id=i)
            encText = urllib.parse.quote(source.src_text)
            

            data = "source=ko&target=en&text=" + encText
            url = "https://openapi.naver.com/v1/papago/n2mt"
            request = urllib.request.Request(url)
            request.add_header("X-Naver-Client-Id",client_id)
            request.add_header("X-Naver-Client-Secret",client_secret)
            response = urllib.request.urlopen(request, data=data.encode("utf-8"))
            rescode = response.getcode()
            if(rescode==200):
                response_body = response.read()
                result_dict = json.loads(response_body.decode('utf-8'))
                translatedText = result_dict["message"]["result"]["translatedText"]
                trstext_lists.append(translatedText)
                source.trs_text = translatedText
                source.save()
                cnt += 1
            else:
                return HttpResponse("error")
        return JsonResponse({
            'text_lists' : trstext_lists,
            'count' : cnt,
            'img_id' : img_id,
            }, json_dumps_params = {'ensure_ascii': True})


@method_decorator(csrf_exempt, name="dispatch")
def trs_text_modify(request,img_id):
    if request.method == "GET":
        return redirect('text_extract:getText')
    elif request.method == "POST":
        req = json.loads(request.body.decode('utf-8')) #front에서 데이터 전달 받음
        firstText = ExtractText.objects.filter(src_img_id=img_id).first() #img_id에 해당하는 첫번째 값 저장
        textId = firstText.text_id #firstText의 text_id 가져옴
        
        for value in req['text_lists']: #text_lists값 하나씩 넣으며 반복
            targetText = ExtractText.objects.get(text_id=textId) #targetText에 text_Id에 해당하는 ExtractText 저장
            targetText.trs_text = value #값 수정
            targetText.save() #수정한 값 저장
            textId += 1 # 다음 text로 이동

        return HttpResponse("success")

@method_decorator(csrf_exempt, name="dispatch")
def src_text_modify(request,img_id):
    if request.method == "GET":
        return redirect('text_extract:getText')
    elif request.method == "POST":
        req = json.loads(request.body.decode('utf-8')) #front에서 데이터 전달 받음
        firstText = ExtractText.objects.filter(src_img_id=img_id).first() #img_id에 해당하는 첫번째 값 저장
        textId = firstText.text_id #firstText의 text_id 가져옴
        
        for value in req['text_lists']: #text_lists값 하나씩 넣으며 반복
            targetText = ExtractText.objects.get(text_id=textId)
            targetText.src_text = value
            targetText.save()
            textId += 1

        return HttpResponse("success")

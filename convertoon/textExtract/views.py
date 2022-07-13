from cgitb import text
from django.shortcuts import render, redirect,get_object_or_404
from textExtract.forms import SrcImgForm, TranslateForm
from easyocr import Reader
from django.http import HttpResponse, JsonResponse, Http404, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
import urllib.request
from django.core import serializers
from rest_framework.response import Response
from django.urls import reverse


from .models import SrcImg,ExtractText,ResultImg
from .serializers import SrcImgSerializer,ResultImgSerializer,ExtractTextSerializer


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
    else:
        return HttpResponse("error")

def index(request,img_id):
    form = TranslateForm()
    ExtractText_list = ExtractText.objects.filter(src_img_id=img_id)
    text = ExtractText.objects.filter(src_img_id=img_id).first()
    context = {'ExtractText_list': ExtractText_list, 'text':text,'form':form}
    return render(request,'textExtract/srcText_list.html',context)


def trs_text_modify(request,img_id):
    if request.method == "GET":
        return redirect('text_extract:getText')
    elif request.method == "POST":
        req = json.loads(request.body.decode('utf-8')) #front에서 데이터 전달 받음
        firstText = ExtractText.objects.filter(src_img_id=img_id).first() #img_id에 해당하는 첫번째 값 저장
        textId = firstText.text_id #firstText의 text_id 가져옴
        
        for value in req['text_lists']: #text_lists값 하나씩 넣으며 반복
            targetText = ExtractText.objects.get(text_id=textId)
            targetText.trs_text = value
            targetText.save()
            textId += 1

        return HttpResponse("success")

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

def test(request,img_id):
     if request.method == "GET":
        req = {
            "text_lists": [
                "Not at all",
				"Graduate school",
				"I'm going to go!",
                ],
                "count": 3,
                "img_id": 1
                } #front에서 데이터 전달 받음
        firstText = ExtractText.objects.filter(src_img_id=img_id).first() #img_id에 해당하는 첫번째 값 저장
        textId = firstText.text_id #firstText의 text_id 가져옴
        
        for value in req['text_lists']: #text_lists값 하나씩 넣으며 반복
            targetText = ExtractText.objects.get(text_id=textId)
            targetText.trs_text = value
            targetText.save()
            textId +=1
        return HttpResponse("success")
        

    

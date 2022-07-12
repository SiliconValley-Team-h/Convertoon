from django.shortcuts import render, redirect

from textExtract.forms import SrcImgForm
from easyocr import Reader
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from django.core import serializers
from rest_framework.response import Response


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
    
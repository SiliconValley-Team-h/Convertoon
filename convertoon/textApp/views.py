from email import message
from django.shortcuts import redirect, render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404, HttpResponse,HttpResponseRedirect
from django.urls import reverse

from .serializers import src_imgSerializer
from .models import src_img

from .serializers import tar_imgSerializer
from .models import tar_img

from .serializers import TextSerializer
from .models import Text

import urllib.request
import json

class Textlist(APIView):
    def get(self, request):
        Texts = Text.objects.all()

        serializer = TextSerializer(Texts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TextSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class src_img_list(APIView):
    def get(self, request):
        src_imgs = src_img.objects.all()

        serializer = src_imgSerializer(src_imgs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = src_imgSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class tar_img_list(APIView):
    def get(self, request):
        tar_imgs = tar_img.objects.all()

        serializer = tar_imgSerializer(tar_imgs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = tar_imgSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

def api_papago(request):
    if request.method == 'POST':
        lastText = Text.objects.last()
        firstText = Text.objects.first()
        for i in range(firstText.id,lastText.id+1):
            client_id = "BrFK4uZx3EBSvR_PfNIW" # 개발자센터에서 발급받은 Client ID 값
            client_secret = "1teZNlNgnu" # 개발자센터에서 발급받은 Client Secret 값

            source = Text.objects.get(id=i)
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
                source.tar_text = translatedText
                source.save()
            else:
                return HttpResponse("error")
        
        return HttpResponseRedirect(reverse("textApp:textExtract"))

def index(request):
    Text_list = Text.objects.order_by('id')
    context = {'Text_list': Text_list}
    return render(request,'textApp/srcText_list.html',context)
        
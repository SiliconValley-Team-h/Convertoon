from django.urls import path, URLPattern
from .views import *
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'text_extract'


urlpatterns = [
    path('api/results/', getOcrResults),
    path('api/extractTexts/<int:img_id>/', getExtractTexts,name="getText"),
    path('api/getSrcImg/<int:img_id>/', getSrcImg),
    path('api/getSrcText/<int:img_id>/',index, name="textSource"),
    path('api/translate/<int:img_id>/',api_papago,name="translate"),
    path('api/trsModify/<int:img_id>/',test,name="trs_modify"),
    path('api/srcModify/',src_text_modify,name="src_modify"),
]

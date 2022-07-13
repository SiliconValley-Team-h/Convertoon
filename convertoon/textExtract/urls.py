from django.urls import path
from .views import *

app_name = 'text_extract'


urlpatterns = [
    
    path('api/results/', getOcrResults),
    path('api/extractTexts/<int:img_id>/', getExtractTexts),
    path('api/getSrcImg/<int:img_id>/', getSrcImg),
    path('api/getInsTextImg/<int:img_id>/', getInsTextImg),
    path('api/translate/<int:img_id>/',api_papago,name="translate"),
    path('api/trsModify/<int:img_id>',trs_text_modify,name="trsModify"),
    path('api/srcModify/<int:img_id>',src_text_modify,name="srcModify"),
]

from django.urls import path
from .views import *

app_name = 'text_extract'


urlpatterns = [
    
    path('api/results/', getOcrResults),
    path('api/getInsTextImg/<int:img_id>/<str:lang>/', getInsTextImg, name="insert"),
    path('api/translate/<int:img_id>/',api_papago,name="translate"),
    path('api/trsModify/<int:img_id>/',trs_text_modify,name="trsModify"),
    path('api/srcModify/<int:img_id>/',src_text_modify,name="srcModify"),
]

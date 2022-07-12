from django.urls import path
from .views import *

app_name = 'text_extract'


urlpatterns = [
    
    path('api/results/', getOcrResults),
    path('api/extractTexts/<int:img_id>/', getExtractTexts),
    path('api/getSrcImg/<int:img_id>/', getSrcImg),
]

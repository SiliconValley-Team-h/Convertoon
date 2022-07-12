from django.urls import URLPattern, path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import Textlist, api_papago
from .views import src_img_list
from .views import tar_img_list
from .views import index

app_name = 'textApp'

urlpatterns = [
    path('',index, name="textExtract"),
    path('text/', Textlist.as_view()),
    path('sourceimage/', src_img_list.as_view()),
    path('targetimage/', tar_img_list.as_view()),
    path('translate/',api_papago,name="translate")
]
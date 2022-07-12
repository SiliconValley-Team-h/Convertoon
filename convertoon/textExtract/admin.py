from django.contrib import admin
from .models import ExtractText,SrcImg,ResultImg

# Register your models here.
admin.site.register(ExtractText)
admin.site.register(SrcImg)
admin.site.register(ResultImg)

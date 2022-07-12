from django.contrib import admin
from .models import src_img
from .models import tar_img
from .models import Text

# Register your models here.
admin.site.register(src_img)
admin.site.register(tar_img)
admin.site.register(Text)


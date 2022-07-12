from rest_framework import serializers
from .models import src_img
from .models import tar_img
from .models import Text

class src_imgSerializer(serializers.ModelSerializer):
    class Meta:
        model = src_img
        fields = ('id','image')

class tar_imgSerializer(serializers.ModelSerializer):
    class Meta:
        model = tar_img
        fields = ('id','image')

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ('id','src_img_id','tar_img_id','src_text','tar_text','coordinate_xy')

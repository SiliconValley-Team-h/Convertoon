from rest_framework import serializers
from .models import SrcImg,ResultImg,ExtractText

class SrcImgSerializer(serializers.ModelSerializer):
    # image = serializers.ImageField(use_url=True)
    class Meta:
        model = SrcImg
        fields = ('img_id', 'image')

class ResultImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResultImg
        fields = ('img_id', 'image')


class ExtractTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtractText
        fields = ('text_id','src_img_id','res_img_id','src_text','trs_text','coordinate')
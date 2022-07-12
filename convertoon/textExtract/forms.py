from django import forms

from .models import SrcImg

class SrcImgForm (forms.ModelForm):
    class Meta:
        model = SrcImg
        fields = ["image"]
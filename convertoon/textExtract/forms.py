from django import forms

from .models import ExtractText, SrcImg

class SrcImgForm (forms.ModelForm):
    class Meta:
        model = SrcImg
        fields = ["image"]

class TranslateForm(forms.ModelForm):
    class Meta : 
        model = ExtractText
        fields = ["trs_text"]
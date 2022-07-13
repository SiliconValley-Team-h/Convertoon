from django.db import models

# Create your models here.
class SrcImg(models.Model):
    img_id = models.BigAutoField(help_text="ResultImg ID", primary_key=True)
    image = models.ImageField(blank=True, null=True, upload_to="")

    # def __str__(self):
    #     return self.img_id

class ResultImg(models.Model):
    img_id = models.BigAutoField(help_text="ResultImg ID", primary_key=True)
    image = models.ImageField(blank=True, null=True, upload_to="")

    # def __str__(self):
    #     return self.img_id

class ExtractText(models.Model):
    text_id = models.BigAutoField(help_text="Extract Text ID", primary_key=True)
    src_img_id = models.ForeignKey("SrcImg", related_name="SrcImg", on_delete=models.CASCADE)
    res_img_id = models.ForeignKey("ResultImg", related_name="ResultImg", on_delete=models.CASCADE, blank=True, null=True)
    src_text = models.TextField(help_text="source text", blank=True, null=True)
    trs_text = models.TextField(help_text="result text", blank=True, null=True)
    coordinate = models.TextField(help_text="coordinate")
    
    # def __str__(self):
    #     return self.text_id
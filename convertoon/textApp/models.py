from django.db import models

# Create your models here.
class src_img(models.Model):
    image = models.ImageField()

class tar_img(models.Model):
    image = models.ImageField()

class Text(models.Model):
    src_img_id = models.ForeignKey(src_img, on_delete=models.CASCADE)
    tar_img_id = models.ForeignKey(tar_img, on_delete=models.CASCADE)
    src_text = models.TextField()
    tar_text = models.TextField(blank=True)
    coordinate_xy = models.TextField()

    def __str__(self):
        return self.src_text

from django.db import models

class Info(models.Model):
    name = models.CharField(max_length=500)
    status = models.CharField(max_length=500)

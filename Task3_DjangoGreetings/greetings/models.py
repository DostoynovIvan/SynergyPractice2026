from django.db import models

class UserName(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    
    def __str__(self):
        return self.name
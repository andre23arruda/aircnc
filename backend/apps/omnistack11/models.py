from django.db import models
import uuid

def get_uuid_8_length():
    '''Retorna uuid com 8 caracteres'''
    return str(uuid.uuid4())[:8]

class Ong(models.Model):
    id = models.CharField(primary_key=True, max_length=8, default=get_uuid_8_length, editable=False)
    name = models.CharField(max_length=50)
    email = models.EmailField(blank=True, null=True)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    uf = models.CharField(max_length=2, blank=True, null=True)

    def __str__(self):
        return f'{ self.name }'

class Incident(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    value = models.FloatField(blank=True, null=True)
    ong = models.ForeignKey(Ong, related_name='incidents', on_delete=models.CASCADE)

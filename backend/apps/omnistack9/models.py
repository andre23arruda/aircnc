from django.db import models
from datetime import date
import uuid


def get_uuid_8_length():
    '''Retorna uuid com 8 caracteres'''
    return str(uuid.uuid4())[:8]


class Tech(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{ self.name }'


class User(models.Model):
    id = models.CharField(primary_key=True, max_length=8, default=get_uuid_8_length, editable=False)
    email = models.EmailField()

    def __str__(self):
        return f'{ self.email }'



class Spot(models.Model):
    id = models.CharField(primary_key=True, max_length=8, default=get_uuid_8_length, editable=False)
    thumbail = models.ImageField(upload_to='uploads/%Y/%m/%d/', blank=True)
    company = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2, max_digits=8, blank=True, null=True)
    techs = models.ManyToManyField(Tech, related_name='spot_techs', blank=True, null=True)
    user = models.ForeignKey(User,  on_delete=models.CASCADE)

    def __str__(self):
        return f'{ self.company }'


class Booking(models.Model):
    spot = models.ForeignKey(Spot, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_approved = models.BooleanField(default=False)
    booking_date = models.DateField(default=date.today)

    def __str__(self):
        return f'{ self.company }'

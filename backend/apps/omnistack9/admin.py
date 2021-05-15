from django.contrib import admin
from .models import Spot, User, Tech, Booking

@admin.register(Spot)
class SpotRegister(admin.ModelAdmin):
    list_per_page = 25
    ordering = ('company',)

@admin.register(Booking)
class BookingRegister(admin.ModelAdmin):
    list_per_page = 25

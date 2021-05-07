from django.contrib import admin
from .models import Ong, Incident

@admin.register(Ong)
class OngRegister(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'whatsapp')
    list_display_links = ('id', 'name')
    search_fields = ('name',)
    list_per_page = 25
    ordering = ('name',)

@admin.register(Incident)
class IncidentRegister(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 25

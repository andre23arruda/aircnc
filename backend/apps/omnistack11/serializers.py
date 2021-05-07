from django.shortcuts import get_object_or_404
from rest_framework import serializers

from .models import Ong, Incident

class OngSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ong
        fields = '__all__'

    def validate(self, data):
        return data



class OngSessionSerializer(serializers.ModelSerializer):
    id = serializers.CharField(max_length=8)

    class Meta:
        model = Ong
        fields = ['id', 'name']


class IncidentSerializer(serializers.ModelSerializer):

    ong_name = serializers.ReadOnlyField(source='ong.name')
    ong_email = serializers.ReadOnlyField(source='ong.email')
    ong_whatsapp = serializers.ReadOnlyField(source='ong.whatsapp')
    ong_city = serializers.ReadOnlyField(source='ong.city')
    ong_uf = serializers.ReadOnlyField(source='ong.uf')

    class Meta:
        model = Incident
        fields = [
            'id',
            'title',
            'description',
            'value',
            'ong',
            'ong_name',
            'ong_email',
            'ong_whatsapp',
            'ong_city',
            'ong_uf',
        ]

    def validate(self, data):
        return data


class IncidentsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Incident
        fields = '__all__'

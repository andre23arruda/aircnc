from django.shortcuts import get_object_or_404
from rest_framework import serializers

from .models import User, Tech, Spot, Booking

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

    def validate(self, data):
        return data


class SpotSerializer(serializers.ModelSerializer):
    tech_list = serializers.SerializerMethodField()
    def get_tech_list(self, obj):
        return [ tech.name for tech in obj.techs.all() ]

    class Meta:
        model = Spot
        fields = '__all__'


class TechSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tech
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):

    user_email = serializers.ReadOnlyField(source='user.email')
    tech_list = serializers.SerializerMethodField()
    def get_tech_list(self, obj):
        return [ tech.name for tech in obj.spot.techs.all() ]
    # ong_email = serializers.ReadOnlyField(source='ong.email')
    # ong_whatsapp = serializers.ReadOnlyField(source='ong.whatsapp')
    # ong_city = serializers.ReadOnlyField(source='ong.city')
    # ong_uf = serializers.ReadOnlyField(source='ong.uf')


    class Meta:
        model = Booking
        fields = '__all__'

from django.shortcuts import get_object_or_404

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, generics, status, pagination
from rest_framework.authentication import BasicAuthentication
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import pagination

from .models import User, Spot, Tech, Booking
from .serializers import (
    UserSerializer, UserSessionSerializer,
    SpotSerializer,
    TechSerializer, BookingSerializer
)


def get_techs(techs_text: str):
    '''
        Cria Techs a partir de uma string separada por vírgulas.
        Retorna lista de Techs
    '''
    techs = techs_text.split(',')
    techs = [ tech.strip().lower() for tech in techs ] # minúsculo
    techs_obj_list = []
    for tech in techs:
        obj, _ = Tech.objects.get_or_create(name=tech)
        techs_obj_list.append(obj)
    return techs_obj_list


class PaginationFive(pagination.PageNumberPagination):
    '''Número de elementos listados por página'''
    page_size = 5


class UsersViewSet(viewsets.ModelViewSet):
    '''Lista de usuários'''
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = None
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['email']
    search_fields = ['email',]


class UserLogin(viewsets.ModelViewSet):
    '''Login do usuário'''
    serializer_class = UserSessionSerializer
    queryset = User.objects.all()

    def create(self, serializer):
        '''
            Cria usuário se não existir.
            Retorna id do usuário
        '''
        email = serializer.data['email']
        user, _ = User.objects.get_or_create(email=email)
        user_data = { 'id': user.id, 'email': email }
        return Response(user_data, status=status.HTTP_200_OK)
        # return Response({'detail': 'User with this email does not exist'}, status=status.HTTP_401_UNAUTHORIZED)


class TechsViewSet(viewsets.ModelViewSet):
    '''Registro de tecnologias'''
    queryset = Tech.objects.all()
    serializer_class = TechSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['name']
    search_fields = ['name']


class SpotsViewSet(viewsets.ModelViewSet):
    '''Registro de spots'''
    queryset = Spot.objects.all()
    serializer_class = SpotSerializer
    parser_classes = [MultiPartParser, FormParser]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['company']
    search_fields = ['company',]
    filterset_fields = ['techs', 'user']
    # pagination_class = PaginationFive

    def create(self, serializer):
        '''Cria Spot se houver Authorization no header da requisição'''
        if 'Authorization' in self.request.headers:
            id = self.request.headers['Authorization']
            user = User.objects.filter(id=id).first()
            if user:
                spot_data = serializer.data

                spot_data_dict = spot_data.dict()
                spot_data_dict.pop('thumbnail', None)
                techs_text = spot_data_dict.pop('techs', None)
                techs = get_techs(techs_text)
                thumbnail =  None if spot_data['thumbnail'] == 'null' else spot_data['thumbnail']
                print(thumbnail)
                spot = Spot.objects.create(
                    **spot_data_dict,
                    user=user,
                    thumbnail=thumbnail
                )
                spot.techs.set(techs)
                created_spot = {
                    'id': spot.id,
                    'techs': techs_text,
                    **spot_data_dict
                }
                return Response(created_spot, status=status.HTTP_200_OK)
        return Response({'detail': 'Forbidden operation'}, status=status.HTTP_401_UNAUTHORIZED)


    def destroy(self, request, *args, **kwargs):
        '''Exclui Spot se houver Authorization no header da requisição'''
        spot_id = self.kwargs.pop('pk', None)
        if 'Authorization' in self.request.headers:
            id = self.request.headers['Authorization']
            spot = get_object_or_404(Spot, pk=spot_id)
            spot.delete()
            return Response({'detail': 'Objeto deletado'}, status=status.HTTP_200_OK)
        return Response({'detail': 'Forbidden operation'}, status=status.HTTP_401_UNAUTHORIZED)


    def get_queryset(self):
        queryset = Spot.objects.all()
        query_params = self.request.query_params.dict()
        if 'techsfilter' in query_params:
            techs = query_params['techsfilter']
            techs_name = techs.split('-')
            queryset = queryset.filter(techs__name__in=techs_name)
        return queryset

class SpotsTechsViewSet(viewsets.ModelViewSet):
    '''Registro de spots'''
    queryset = Spot.objects.all()
    serializer_class = SpotSerializer
    parser_classes = [MultiPartParser, FormParser]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['company']
    http_method_names = ['get']

    def get_queryset(self):
        techs = self.request.query_params.dict()
        print(techs)
        # queryset = Spot.objects.all()
        queryset = Spot.objects.filter()
        return queryset

class BookingsViewSet(viewsets.ModelViewSet):
    '''Registro de tecnologias'''
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['booking_date']
    search_fields = ['booking_date',]

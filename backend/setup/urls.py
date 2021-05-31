from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static # para servir mídia
from rest_framework import routers
from omnistack9.views import (
    UsersViewSet, UserLogin,
    SpotsViewSet,
    TechsViewSet, BookingsViewSet
)

# router
router = routers.DefaultRouter()
router.register('omnistack9/users', UsersViewSet, basename='Users')
router.register('omnistack9/sessions', UserLogin, basename='Sessions')
router.register('omnistack9/spots', SpotsViewSet, basename='Spots')
router.register('omnistack9/techs', TechsViewSet, basename='Techs')
router.register('omnistack9/bookings', BookingsViewSet, basename='Bookings')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # servindo mídia

# para servir estáticos quando rodar manage.py runserver_ip
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
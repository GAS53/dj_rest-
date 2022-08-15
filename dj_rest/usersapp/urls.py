from django.views.generic import RedirectView
from django.urls import path, include
from rest_framework.routers import DefaultRouter


app_name = 'userapp'




urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),

    ]
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from django.views.generic import RedirectView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todoapp.urls', namespace='todoapp')),
    path("", RedirectView.as_view(url="api/")),
    path('api-auth/',  views.obtain_auth_token),
    
]
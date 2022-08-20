from django.contrib import admin
from django.urls import path, include

from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todoapp.urls', namespace='todoapp')),
    path("", RedirectView.as_view(url="api/")),
    
]
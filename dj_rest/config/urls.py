from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from django.views.generic import RedirectView
from graphene_django.views import GraphQLView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todoapp.urls', namespace='todoapp')),
    path("", RedirectView.as_view(url="api/")),
    path('api-auth2/', include('rest_framework.urls')), # удалить
    path('api-auth/',  views.obtain_auth_token),
    
    path("graphql/", GraphQLView.as_view(graphiql=True)),
    
]
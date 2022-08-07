from django.views.generic import RedirectView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todoapp.views import AuthorModelViewSet

app_name = 'todoapp'

router = DefaultRouter()
router.register('users', AuthorModelViewSet)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', include(router.urls)),
    # path("", RedirectView.as_view(url="api/")),
    ]
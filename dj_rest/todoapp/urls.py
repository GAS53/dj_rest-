from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todoapp.views import TODOModelViewSet, ProjectrModelViewSet
from usersapp.views import UserModelViewSet

app_name = 'todoapp'

router = DefaultRouter()
router.register('todo', TODOModelViewSet)
router.register('project', ProjectrModelViewSet)
router.register('users', UserModelViewSet)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', include(router.urls)),
    ]
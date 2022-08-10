from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todoapp.views import TODOModelViewSet, ProjectrModelViewSet
from usersapp.views import AuthorModelViewSet

app_name = 'todoapp'

router = DefaultRouter()
router.register('todo', TODOModelViewSet)
router.register('project', ProjectrModelViewSet)
router.register('users', AuthorModelViewSet)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', include(router.urls)),
    ]
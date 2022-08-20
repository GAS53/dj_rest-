from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todoapp.views import TODOModelViewSet, ProjectrModelViewSet
from usersapp.views import UserModelViewSet
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView, TokenVerifyView)

app_name = 'todoapp'

router = DefaultRouter()
router.register('todo', TODOModelViewSet)
router.register('project', ProjectrModelViewSet)
router.register('users', UserModelViewSet)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', include(router.urls)),
    ]
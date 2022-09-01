# from django.contrib.auth.models import User
from tokenize import group
from urllib import response
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase, URLPatternsTestCase
from mixer.backend.django import mixer
from django.urls import path, include, reverse



from .views import ProjectrModelViewSet, TODOModelViewSet
from usersapp.models import UserModel
from todoapp.models import TODO, Project

class TodoTestCase(TestCase):
    def setUp(self):
        self.usr = 'test_user'
        self.pswd = 'test_password'
        self.admin = UserModel.objects.create_superuser(username=self.usr,)
    

    def test_create_user(self):
        factory = APIRequestFactory()
        request = factory.get('/api/todo')
        self.sub_test(request, status.HTTP_401_UNAUTHORIZED)
        force_authenticate(request, self.admin)
        self.sub_test(request, status.HTTP_200_OK)


    def sub_test(self, request, st):
        view = TODOModelViewSet.as_view({'get': 'list'})
        response= view(request)
        self.assertEqual(response.status_code, st)


class ProjectTestCase(TestCase):
    


    def test_edit_admin(self):
        user = mixer.blend(UserModel)
        project = mixer.blend(Project, users=user)

        self.client.login(username=user.username)
        response = self.client.put(f'/api/project/{project.id}', {'name':'it_is_name','link':'it_is_lint','users':user.id })


        self.assertEqual(response.status_code, status.HTTP_301_MOVED_PERMANENTLY)

class AccountTest(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('todoapp.urls')),
    ]

    def test_check_url(self):
        response = self.client.get('/api/')
        # print(response.status_code)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class ProjectTestCase(TestCase):

    def test_check_tocken(self):
        user = mixer.blend(UserModel)
        client = APIClient()
        client.force_authenticate(user=user)
        response = client.get('/api/todo')

        self.assertEqual(response.status_code, status.HTTP_301_MOVED_PERMANENTLY)
    

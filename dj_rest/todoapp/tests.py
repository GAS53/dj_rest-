# from django.contrib.auth.models import User
from tokenize import group
from urllib import response
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase
from mixer.backend.django import mixer

from views import ProjectrModelViewSet
from usersapp.models import UserModel
from todoapp.models import TODO, Project

class TodoTestCase(TestCase):

    def setUp(self):
        self.user = mixer.blend('usersapp.UserModel', groups__name='admin')
        self.user.set_password('password')
        self.user.save()
        self.project = mixer.blend('todoapp.Project', groups=mixer.select)
        self.todo = mixer.blend(TODO)
        # UserModel.objects.create_superuser(username='testname', password='testpass')
        #     first_name = models.CharField(verbose_name="имя", max_length=64)
        #     last_name = models.CharField(verbose_name='фамилия', max_length=64)
        #     email = models.EmailField("email address", unique=True)

        #     is_admin = models.BooleanField(verbose_name='Администратор проектов', default=False, help_text="Администрирует сайт",)
        #     is_manager = models.BooleanField(verbose_name='Менеджер', default=False)
        #     is_developer = models.BooleanField(verbose_name='Разработчик', default=False)
        #     is_staff = models.BooleanField(verbose_name='Персонал', default=True)
            
        #     is_active = models.BooleanField("активный", default=True, help_text="Для использования сайта пользователь должен быть активным. выбрать это вместо удаления аккаунта.")
        #     date_joined
        # self.project = Project.objects.create(users=self.user, )
        #         name = models.CharField(max_length=64, verbose_name='Название проекта')
        #     link = models.CharField(max_length=128, verbose_name='Ссылка на репозиторий', null=True, blank=True)
        #     users = models.ManyToManyField(UserModel)
        # self.todo = TODO.
        #         project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='Проект к которому относиться')
        # text = models.TextField(verbose_name='Текст заметки')
        # created = models.DateTimeField(auto_now_add=True, verbose_name="Заметка создана", editable=False)
        # updated = models.DateTimeField(auto_now=True, verbose_name="Заметка откорректирована")
        # user = models.ForeignKey(UserModel, on_delete=models.CASCADE, verbose_name='создатель заметки')
        # is_activ = models.BooleanFie

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/project/')
        view = ProjectrModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

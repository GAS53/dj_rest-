from tkinter.tix import Tree
from django.db import models
from usersapp.models import UserModel

class Project(models.Model):
    name = models.CharField(max_length=64, verbose_name='Название проекта')
    link = models.CharField(max_length=128, verbose_name='Ссылка на репозиторий', null=True, blank=True)
    users = models.ManyToManyField(UserModel)


class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='Проект к которому относиться')
    text = models.TextField(verbose_name='Текст заметки')
    created = models.DateTimeField(auto_now_add=True, verbose_name="Заметка создана", editable=False)
    updated = models.DateTimeField(auto_now=True, verbose_name="Заметка откорректирована")
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE, verbose_name='создатель заметки')
    is_activ = models.BooleanField(verbose_name='Задание активно', default=True)
    

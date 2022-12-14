# Generated by Django 4.0.6 on 2022-08-10 05:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='Название проекта')),
                ('link', models.CharField(blank=True, max_length=128, null=True, verbose_name='Ссылка на репозиторий')),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TODO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(verbose_name='Текст заметки')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Заметка создана')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Заметка откорректирована')),
                ('is_activ', models.BooleanField(default=True, verbose_name='Задание активно')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todoapp.project', verbose_name='Проект к которому относиться')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='создатель заметки')),
            ],
        ),
    ]

from django.contrib import admin
from todoapp.models import TODO, Project


@admin.register(TODO)
class TODOAdmin(admin.ModelAdmin):
    list_display = ['project', 'user', 'created', 'is_activ']
    ordering = ['project']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'link']
    ordering = ['name']



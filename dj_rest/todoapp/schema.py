import re
from typing_extensions import Required
import graphene
from graphene_django import DjangoObjectType
from todoapp.models import TODO, Project
from usersapp.models import UserModel


class TodoType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'

class ProjectsType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class UserType(DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ['first_name', 'last_name', 'is_admin']


class Query(graphene.ObjectType):
    # hello = graphene.String(default_value="Hi!")
    get_todo = graphene.List(TodoType)
    get_todo_by_id = graphene.Field(TodoType, id=graphene.Int(required=True))
    get_project = graphene.List(ProjectsType)
    get_users = graphene.List(UserType)
 

    def resolve_get_todo(self, info):
        return TODO.objects.all()

    def resolve_get_todo_by_id(self, info, id):
        res = TODO.objects.get(id=id)
        if res:
            return res
        return None


    def resolve_get_project(self, info):
        return Project.objects.all()

    def resolve_get_users(self, info):
        return UserModel.objects.all()

class ProjectMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        link = graphene.String(required=False)
    
    project = graphene.Field(ProjectsType)

    @classmethod
    def mutate(cls, root, info, name, link):
        project = Project.objects.get(id=id)
        project.name = name
        project.link = link
        project.save()
        return  ProjectMutation(project=project)

class Mutation(graphene.ObjectType):
    update_project = ProjectMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)




'''
Запрос
    {
    getTodo{
    id
    text
    user{
        firstName
        lastName
    }
    project{
        id
        name
        link
    }
    }
    }

Ответ
    {
  "data": {
    "getTodo": [
      {
        "id": "1",
        "text": "Основной текст заметки",
        "user": {
          "firstName": "Yriy",
          "lastName": "Blymin"
        },
        "project": {
          "id": "1",
          "name": "New projject",
          "link": "www.dfgdsfg.com"
        }
      },
      {
        "id": "2",
        "text": "Основной текст заметки",
        "user": {
          "firstName": "Darya",
          "lastName": "Shmaldaeva"
        },
        "project": {
          "id": "2",
          "name": "New projject 2",
          "link": "www.dfgdcfgbfsghsfg.com"
        }
      },
      {
        "id": "3",
        "text": "Основной текст заметки 2",
        "user": {
          "firstName": "Lydmila",
          "lastName": "Stepankova"
        },
        "project": {
          "id": "2",
          "name": "New projject 2",
          "link": "www.dfgdcfgbfsghsfg.com"
        }
      },
      {
        "id": "4",
        "text": "gfdgdfgsdgsdgdsfg",
        "user": {
          "firstName": "Yriy",
          "lastName": "Blymin"
        },
        "project": {
          "id": "1",
          "name": "New projject",
          "link": "www.dfgdsfg.com"
        }
    ...
'''
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
    get_project = graphene.List(ProjectsType)
    get_users = graphene.List(UserType)

    def resolve_get_todo(root, info):
        print(TODO.objects.all())
        return TODO.objects.all()

    def resolve_get_project(root, info):
        return Project.objects.all()

    def resolve_get_users(root, info):
        return UserModel.objects.all()

schema = graphene.Schema(query=Query)




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
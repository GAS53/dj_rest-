from rest_framework.viewsets import ModelViewSet
from usersapp.models import UserModel
from usersapp.serializers import AuthorModelSerializer

class AuthorModelViewSet(ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = AuthorModelSerializer
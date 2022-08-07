from rest_framework.viewsets import ModelViewSet
from todoapp.models import UserModel
from todoapp.serializers import AuthorModelSerializer

class AuthorModelViewSet(ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = AuthorModelSerializer
from rest_framework import viewsets
from usersapp.models import UserModel
from usersapp.serializers import UserModelSerializer
from rest_framework import mixins

class UserModelViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserModelSerializer
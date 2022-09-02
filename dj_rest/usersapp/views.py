from rest_framework import viewsets
from usersapp.models import UserModel
from usersapp.serializers import UserModelSerializer, UserModelSerializer2
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class UserModelViewSet(mixins.UpdateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if 'version = 2.0' in self.request.headers['Accept']:
            return UserModelSerializer2
        return UserModelSerializer
    

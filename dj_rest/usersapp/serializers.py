from rest_framework.serializers import HyperlinkedModelSerializer
from usersapp.models import UserModel

class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserModel
        fields = ['username', 'first_name', 'last_name', 'email' ]



class UserModelSerializer2(HyperlinkedModelSerializer):
    class Meta:
        model = UserModel
        fields = ['username', 'first_name', 'last_name', 'email','is_staff','is_superuser']
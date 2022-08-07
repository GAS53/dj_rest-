from rest_framework.serializers import HyperlinkedModelSerializer
from todoapp.models import UserModel

class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserModel
        fields = ['username', 'first_name', 'last_name', 'email' ]

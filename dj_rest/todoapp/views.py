from rest_framework.viewsets import ModelViewSet
from todoapp.models import Project, TODO
from todoapp.serializers import ProjectModelSerializer, TODOModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class ProjectrModelViewSet(ModelViewSet, LimitOffsetPagination, APIView):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    default_limit = 10
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        projects = Project.objects.all() 
        if name:
            projects = projects.filter(name__contains=name)
        return projects


class TODOModelViewSet(ModelViewSet, LimitOffsetPagination, APIView):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    default_limit = 20
    filterset_fields = ['project', 'created']
    permission_classes = [IsAuthenticated]

    def perform_destroy(self, instance):
        instance.is_activ = False
        instance.save()



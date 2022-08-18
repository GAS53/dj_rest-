from rest_framework.viewsets import ModelViewSet
from todoapp.models import Project, TODO
from todoapp.serializers import ProjectModelSerializer, TODOModelSerializer
from rest_framework.pagination import LimitOffsetPagination


class ProjectrModelViewSet(ModelViewSet, LimitOffsetPagination):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    default_limit = 10

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        projects = Project.objects.all() 
        if name:
            projects = projects.filter(name__contains=name)
        return projects


class TODOModelViewSet(ModelViewSet, LimitOffsetPagination):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    default_limit = 20
    filterset_fields = ['project', 'created']

    def perform_destroy(self, instance):
        instance.is_activ = False
        instance.save()



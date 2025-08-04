from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Students
from .serializers import StudentSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer


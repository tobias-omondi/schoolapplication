from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Students, Class , Teachers , StudentsPortfolio
from .serializers import StudentSerializer ,ClassSerializer , TeacherSerializer ,StudentPortfolioSerializer

# --CLASS SERIALIZER--

class ClassViewSet (viewsets.ModelViewSet):
    serializer_class = ClassSerializer

    queryset = Class.objects.all()

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teachers.objects.all()

    serializer_class = TeacherSerializer

class StudentPortfolioViewSet (viewsets.ModelViewSet):

    queryset = StudentsPortfolio.objects.all()

    serializer_class = StudentPortfolioSerializer


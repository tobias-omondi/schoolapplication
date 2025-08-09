from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Students, Class , Teachers , StudentsProfile , PortfolioAchievements
from .serializers import StudentSerializer ,ClassSerializer , TeacherSerializer ,StudentProfileSerializer , PortfolioSerializer

# --CLASS VIEWSET--

class ClassViewSet (viewsets.ModelViewSet):
    serializer_class = ClassSerializer

    queryset = Class.objects.all()


# --STUDENTVIEWSET --

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer


# -- TEACHERS VIEWSET--

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teachers.objects.all()

    serializer_class = TeacherSerializer


# --STUDENT PORTFOLIO VIEWSET--

class StudentProfileViewSet (viewsets.ModelViewSet):

    queryset = StudentsProfile.objects.all()

    serializer_class = StudentProfileSerializer

# --PORTFOLIO VIEWSET--

class PortfolioViewSet (viewsets.ModelViewSet):

    queryset = PortfolioAchievements.objects.all()

    serializer_class = PortfolioSerializer




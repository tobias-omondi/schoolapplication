from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Students, Class , Teachers , StudentsProfile , PortfolioAchievements , Subjects , Parents, TeacherComments , News , Blog
from .serializers import StudentSerializer ,ClassSerializer , TeacherSerializer ,StudentProfileSerializer , SubjectsSerializer , PortfolioSerializer , ParentsSerializer ,TcommentsSerializer , NewsSerializer , BlogSerializer

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


# --SUBJECTS--

class SubjectsViewSet (viewsets.ModelViewSet):

    queryset = Subjects.objects.all()

    serializer_class = SubjectsSerializer

# --Parents--

class ParentsViewSet (viewsets.ModelViewSet):

    queryset = Parents.objects.all()

    serializer_class = ParentsSerializer


# --Teachers Comments--

class TcommentsViewSet (viewsets.ModelViewSet):

    queryset = TeacherComments.objects.all()

    serializer_class = TcommentsSerializer



# --SCHOOL NEWS--

class NewsViewSet (viewsets.ModelViewSet):

    queryset = News.objects.all()

    serializer_class = NewsSerializer


# --SCHOOL blog--

class BlogsViewSet (viewsets.ModelViewSet):

    queryset = Blog.objects.all()

    serializer_class = BlogSerializer




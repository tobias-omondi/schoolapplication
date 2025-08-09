from rest_framework import serializers
from .models import Students, Class , Teachers , StudentsPortfolio

# --CLASS SERIALIZER--
class ClassSerializer (serializers.ModelSerializer):

  class Meta:
    model = Class
    fields = '__all__'

#--STUDENT SERIALIZER--

class StudentSerializer (serializers.ModelSerializer):

  class Meta:
    model = Students
    fields = '__all__'

# -- TEACHERS SERIALIZER--

class TeacherSerializer (serializers.ModelSerializer):

  class Meta:
    model = Teachers
    fields = '__all__'


# --STUDENT PORTFOLIO--

class StudentPortfolioSerializer (serializers.ModelSerializer):

  class Meta:
    model = StudentsPortfolio
    fields = '__all__'

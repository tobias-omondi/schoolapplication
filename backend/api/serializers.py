from rest_framework import serializers
from .models import Students, Class , Teachers , StudentsProfile , PortfolioAchievements

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

class StudentProfileSerializer (serializers.ModelSerializer):

  class Meta:
    model = StudentsProfile
    fields = '__all__'

class PortfolioSerializer (serializers.ModelSerializer):

  class Meta:
    model = PortfolioAchievements
    fields = '__all__'

from rest_framework import serializers
from .models import Students, Class , Teachers , StudentsProfile , PortfolioAchievements ,Subjects ,Parents , TeacherComments , News , Blog

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


# --PORTFOLIO--
class PortfolioSerializer (serializers.ModelSerializer):

  class Meta:
    model = PortfolioAchievements
    fields = '__all__'

# ---SUBJECTS --
class SubjectsSerializer (serializers.ModelSerializer):

  class Meta:
    model = Subjects
    fields = '__all__'

# ---PARENTS FIELD --
class ParentsSerializer (serializers.ModelSerializer):

  class Meta:
    model = Parents
    fields = '__all__'


# ---TEACHERS COMMENTS --
class TcommentsSerializer (serializers.ModelSerializer):

  class Meta:
    model = TeacherComments
    fields = '__all__'

# ---NEWS SERIALIZER --
class NewsSerializer (serializers.ModelSerializer):

  class Meta:
    model = News
    fields = '__all__'


# ---CLASS SERIALIZER --
class BlogSerializer (serializers.ModelSerializer):

  class Meta:
    model = Blog
    fields = '__all__'


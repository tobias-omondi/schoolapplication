from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User


# ---- CLASS MODEL ----
class Class(models.Model):
    class_name = models.CharField(max_length=30)
    level_type = models.CharField(max_length=20)

    class_teacher = models.ForeignKey('Teachers', on_delete=models.SET_NULL, null=True, blank=True, related_name='classes' )
    number_of_students = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.class_name} ({self.level_type})"
    



# ---- TEACHERS MODEL ----
class Teachers(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teachers_profile')
    full_name = models.CharField(max_length=50)
    school_email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=False, null= False)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.full_name


# ---- STUDENTS MODEL ----
class Students(models.Model):
    full_name = models.CharField(max_length=50)
    username = models.CharField(max_length= 20, unique=True, null= True , blank= True)

    student_class = models.ForeignKey( Class, on_delete=models.CASCADE, related_name='students' )
    teacher = models.ForeignKey(Teachers, on_delete=models.SET_NULL, related_name='students', null=True)
    created_at = models.DateField(auto_now_add=True)


    def __str__(self):
        return self.full_name


# ---- STUDENT PORTFOLIO ----
class StudentsProfile (models.Model):
    student = models.OneToOneField(Students, on_delete=models.CASCADE, related_name='portfolio')
    profile = models.ImageField(upload_to='profiles/')
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=300)   #---ABOUT ME FROM A CHILD INPUT----

    def __str__(self):
        return f"Portfolio of {self.student.full_name}"
    
class  PortfolioAchievements(models.Model):
    portfolio = models.ForeignKey (StudentsProfile, on_delete=models.CASCADE, related_name='term_records')
    term_one = models.CharField(max_length=20)
    term_two = models.CharField(max_length=20)
    term_three = models.CharField(max_length=20)
    score = models.PositiveIntegerField()
    grade = models.CharField (max_length=7)
    achievements = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/')
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
         return f"{self.term_name} - {self.portfolio.student.full_name}"

#----SUBJECTS PORTFOLIO---
class Subjects (models.Model):
    portfolio = models.ForeignKey (StudentsProfile, on_delete=models.CASCADE, related_name='subjects')
    mathematics = models.PositiveIntegerField(null=True, blank=True)
    english = models.PositiveIntegerField(null=True, blank=True)
    kiswahili = models.PositiveIntegerField(null=True, blank=True)
    science = models.PositiveIntegerField(null=True, blank=True)
    religious_education = models.PositiveIntegerField(null=True, blank=True)
    environmental_activities = models.PositiveIntegerField(null=True, blank=True)
    creative_arts = models.PositiveIntegerField(null=True, blank=True)
    agriculture = models.PositiveIntegerField(null=True, blank=True)
    physics = models.PositiveIntegerField(null=True, blank=True)
    health_education = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return f"Subjects for {self.portfolio.student.full_name}"



# ---- PARENTS MODEL ----
class Parents(models.Model):
    full_name = models.CharField(max_length=50)
    student = models.ForeignKey(Students, on_delete=models.CASCADE, related_name='parents')
    comments = models.TextField(max_length=300)

    def __str__(self):
        return f"{self.full_name} (Parent of {self.student.full_name})"
    
# ---- TEACHER COMMENTS ----
class TeacherComments(models.Model):
    teacher = models.ForeignKey(Teachers, on_delete=models.CASCADE, related_name='comments')
    student = models.ForeignKey(Students, on_delete=models.CASCADE, related_name='teacher_comments')
    comment = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.teacher.full_name} on {self.student.full_name}"




# ---- NEWS MODEL ----
class News(models.Model):
    image = models.ImageField(upload_to='newsimages/', null=True, blank=True)
    title = models.CharField(max_length=100)
    content = models.TextField()


# ---- BLOG MODEL ----
class Blog(models.Model):
    image = models.ImageField (upload_to='blogimages/', null=True, blank= True)
    title = models.CharField(max_length=100)
    content = models.TextField()


# ---- SIGNALS TO UPDATE STUDENT COUNT ----
@receiver(post_save, sender=Students)
@receiver(post_delete, sender=Students)
def update_student_count(sender, instance, **kwargs):
    class_obj = instance.student_class
    class_obj.number_of_students = class_obj.students.count()
    class_obj.save()

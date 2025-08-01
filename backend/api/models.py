from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver


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
    full_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.full_name


# ---- STUDENTS MODEL ----
class Students(models.Model):
    full_name = models.CharField(max_length=50)
    username = models.CharField(max_length= 20, unique=True, null= True , blank= True)

    student_class = models.ForeignKey( Class, on_delete=models.CASCADE, related_name='students' )

    def __str__(self):
        return self.full_name


# ---- STUDENT PORTFOLIO ----
class StudentsPortfolio(models.Model):
    student = models.OneToOneField(Students, on_delete=models.CASCADE, related_name='portfolio')
    profile = models.ImageField(upload_to='profiles/')
    description = models.CharField(max_length=200)
    subjects = models.CharField(max_length=100)
    achievements = models.CharField(max_length=200)
    score = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Portfolio of {self.student.full_name}"


# ---- PARENTS MODEL ----
class Parents(models.Model):
    full_name = models.CharField(max_length=50)
    student = models.ForeignKey(Students, on_delete=models.CASCADE, related_name='parents')
    comments = models.CharField(max_length=300)

    def __str__(self):
        return f"{self.full_name} (Parent of {self.student.full_name})"
    
class PortfolioComments (models.Model):
    pass




# ---- NEWS MODEL ----
class News(models.Model):
    image = models.ImageField(upload_to ='newsimages')
    title = models.CharField(max_length=100)
    content = models.TextField()


# ---- BLOG MODEL ----
class Blog(models.Model):
    image = models.ImageField (upload_to='blogimages/')
    title = models.CharField(max_length=100)
    content = models.TextField()


# ---- SIGNALS TO UPDATE STUDENT COUNT ----
@receiver(post_save, sender=Students)
@receiver(post_delete, sender=Students)
def update_student_count(sender, instance, **kwargs):
    class_obj = instance.student_class
    class_obj.number_of_students = class_obj.students.count()
    class_obj.save()

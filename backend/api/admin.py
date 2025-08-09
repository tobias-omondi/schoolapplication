from django.contrib import admin
from .models import Class, Teachers, Students, Parents , StudentsProfile, News, Blog, PortfolioAchievements, Subjects

admin.site.register(Class)
admin.site.register(Teachers)
admin.site.register(Students)
admin.site.register(Parents)
admin.site.register(StudentsProfile)
admin.site.register(PortfolioAchievements)
admin.site.register(Subjects)
admin.site.register(News)
admin.site.register(Blog)

# Register your models here.

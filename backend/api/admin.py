from django.contrib import admin
from .models import Class, Teachers, Students, Parents , StudentsPortfolio, PortfolioComments , News, Blog

admin.site.register(Class)
admin.site.register(Teachers)
admin.site.register(Students)
admin.site.register(Parents)
admin.site.register(StudentsPortfolio)
admin.site.register(PortfolioComments)
admin.site.register(News)
admin.site.register(Blog)

# Register your models here.

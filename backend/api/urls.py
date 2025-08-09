from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  StudentViewSet, ClassViewSet, TeacherViewSet , StudentPortfolioViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'teachers', TeacherViewSet)
router.register(r'childprofile', StudentPortfolioViewSet)


urlpatterns = [
    path('', include(router.urls)),
]

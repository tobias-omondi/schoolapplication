from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  StudentViewSet, ClassViewSet, TeacherViewSet , StudentProfileViewSet , PortfolioViewSet 

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'teachers', TeacherViewSet)
router.register(r'childprofile', StudentProfileViewSet)
router.register(r'portfolio', PortfolioViewSet)


urlpatterns = [
    path('', include(router.urls)),
]

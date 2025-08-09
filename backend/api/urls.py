from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  StudentViewSet, ClassViewSet, TeacherViewSet , StudentProfileViewSet , PortfolioViewSet , SubjectsViewSet , ParentsViewSet , TcommentsViewSet, NewsViewSet , BlogsViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'teachers', TeacherViewSet)
router.register(r'childprofile', StudentProfileViewSet)
router.register(r'portfolio', PortfolioViewSet)
router.register(r'subjects', SubjectsViewSet)
router.register(r'parents', ParentsViewSet)
router.register(r'tcomments', TcommentsViewSet )
router.register(r'news', NewsViewSet )
router.register(r'blogs', BlogsViewSet )


urlpatterns = [
    path('', include(router.urls)),
]

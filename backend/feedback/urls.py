from django.urls import path, include
from rest_framework import routers

from feedback.views import SubmitViewSet
from feedback import views


router = routers.DefaultRouter()
router.register('submit', SubmitViewSet, basename='submit')

urlpatterns = [
    path('', include(router.urls)),
]

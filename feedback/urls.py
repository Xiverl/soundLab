from django.urls import path

from feedback import views


app_name = 'feedback'

urlpatterns = [
    path('submit_info/', views.submit_info, name='submit-info'),
]

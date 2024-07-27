from django.urls import path

from pages import views


app_name = 'pages'

urlpatterns = [
    path('', views.about, name='about'),
    path('succes/', views.succes, name='succes'),
]

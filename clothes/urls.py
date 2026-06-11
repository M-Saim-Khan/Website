from django.urls import path
from . import views
urlpatterns = [
    path('', views.store, name='store'),
    path('fill/', views.fill, name='fill'),
]
# This file is in charge of connecting the views to urls 

from django.urls import path
from . import views

urlpatterns = [
  path('', views.getRoutes, name='routes'),
  path('api/', include('base.urls')),
]
from django.urls import path
from base.views import display_views as views

urlpatterns = [

    path('', views.getDisplay, name="Displays"),

    path('create/', views.createDisplay, name="display-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/', views.getProduct, name="product"),

    path('update/<str:pk>/', views.updateDisplay, name="product-display"),
    path('delete/<str:pk>/', views.deleteDisplay, name="product-display"),
]
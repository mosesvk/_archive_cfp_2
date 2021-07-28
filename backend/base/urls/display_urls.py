from django.urls import path
from base.views import display_views as views

urlpatterns = [

    path('', views.getDisplay, name="Displays"),

    path('create/', views.createDisplay, name="display-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/', views.getProduct, name="product"),

    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
]
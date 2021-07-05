from django.urls import path
from base.views import product_views as views

urlpatterns = [
  path('', views.getProducts, name='products'),
  
  path('create/', views.createProduct, name='product-create'),
  # Make sure the createProduct is above getProduct because it is one parameter and it will think it's a dynamic value 
  path('upload/', views.uploadImage, name='product-upload'),
  
  path('<str:pk>/reviews/', views.createProductReview, name='create-review'), 
  path('top/', views.getTopProducts, name='top-products'), 
  path('<str:pk>', views.getProduct, name='product'),
  
  path('update/<str:pk>/', views.updateProduct, name='product-update'),
  path('delete/<str:pk>/', views.deleteProduct, name='product-delete')
]


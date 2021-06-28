from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product 

class UserSerializer(serializers.ModelSerializer): 
  name = serializers.SerializerMethodField(read_only=True)
  _id = serializers.SerializerMethodField(read_only=True)
  
  class Meta: 
    model = User
    fields = ['id', '_id' 'username', 'email', 'name']
  
  # remember it's a double underscore because the original is '_id'
  def get__id(self, obj):
    return obj.id
    
  def get_name(self, obj):
    name = obj.first_name
    if name == '':
      name == obj.email
    return name

class ProductSerializer(serializers.ModelSerializer): 
  class Meta: 
    model = Product
    fields = '__all__'
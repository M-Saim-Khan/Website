from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, Category, Cart, CartItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password" : {"write_only" : True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Cart.objects.create(user=user)
        return user
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only = True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),source='category',write_only=True
    )
    class Meta:
        model = Product
        fields=['id','title','description','price','inventory','category','category_id']

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only = True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset = Product.objects.all(), source = 'product',write_only = True #id for updating
    )
    class Meta:
        model = CartItem
        fields=['id','amount','product','product_id']

class CartSerializer(serializers.ModelSerializer):
    cartitems = CartItemSerializer (many = True,read_only = True)
    class Meta:
        model = Cart
        fields=['id','created_at','user','cartitems']
        extra_kwargs={"user":{"read_only" : True}}
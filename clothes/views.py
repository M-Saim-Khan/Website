from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, CategorySerializer, ProductSerializer, CartItemSerializer, CartSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny, IsAdminUser
from clothes.models import Product, Category, Cart, CartItem
# Create your views here.


class PublicReadAdminWriteBase:
    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAdminUser()]
    
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CategoryListView(PublicReadAdminWriteBase, generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    
class ProductListView(PublicReadAdminWriteBase,generics.ListCreateAPIView):
    serializer_class = ProductSerializer


    def get_queryset(self):
        queryset = Product.objects.all()
        category_id = self.request.query_params.get('category')
        if category_id:
            queryset = queryset.filter(category_id= category_id)
        return queryset

class ProductDetailView(PublicReadAdminWriteBase,generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CartItemCreate(generics.CreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]
    
    def perform_create(self,serializer):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        serializer.save(cart=cart)


class CartItemDelete(generics.DestroyAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return CartItem.objects.filter(cart__user = user)
        
class CartView(generics.ListAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)
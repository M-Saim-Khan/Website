from django.contrib import admin
from clothes.models import Product, Category, Cart, CartItem, OrderItem, Customer, Order, Tag
# Register your models here.
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Customer)
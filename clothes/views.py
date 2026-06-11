from django.http import HttpResponse
from django.shortcuts import render

from clothes.models import Product, Category, Cart, CartItem, OrderItem, Customer, Order, Tag
# Create your views here.

def fill(request):
    clothes = Category.objects.create(title = "Clothes")
    shoes = Category.objects.create(title = "Shoes")
    
    p1 = Product(title = "T-shirt",description = "A Minimalist T-Shirt",price = 2500,inventory = 50, category = clothes)
    p2 = Product(title = "HighNeck",description = "A Sleek Aesthetic Highneck", price = 5000 ,inventory = 80, category = clothes)
    p3 = Product(title = "Sneakers", description = "Very Comfortable Sneakers to be worn by the best", price = 8000,inventory = 20, category = shoes)
    p4 = Product(title = "Pants", description = "Slim Fit Pants",price =  4000, inventory = 30, category = shoes)
    p5 = Product(title = "Jeans", description = "Baggy Jeans", price = 5000, inventory = 40, category = clothes)
    p6 = Product(title = "Shoes", description = "Dress Shoes", price = 1500,inventory = 25, category = shoes)

    NewArrivals = Tag.objects.create(label = "NewArrivals")
    Sale = Tag.objects.create(label = "Sale")

    p1.save()
    p6.save()
    p4.save()
    p5.save()

    p1.tags.add(NewArrivals)
    p6.tags.add(Sale)
    p5.tags.add(NewArrivals)
    p4.tags.add(Sale)
    
    return HttpResponse("Database filled successfully!")

def store(request):
    categories = Category.objects.prefetch_related('products__tags').all()
    return render(request, 'shop.html', {'categories': categories})
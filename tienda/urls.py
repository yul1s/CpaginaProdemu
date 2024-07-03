from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('productos', views.productos, name='productos'),
    path('contacto', views.contacto, name='contacto'),
    path('login/', views.login, name='login'),
    path('signup', views.signup, name='signup'),
    path('logout/', views.exit, name='exit'),
    path('search', views.search, name='search'),
    path('carrito', views.carrito, name='carrito')
]
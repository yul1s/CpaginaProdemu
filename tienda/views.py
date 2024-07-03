from django.shortcuts import render, redirect
from .models import Producto
from .forms import ContactoForm, CustomUserCreationForm
from django.contrib.auth import authenticate, login, logout

# Create your views here.

def index(request):
    return render(request, 'tienda/index.html')

def productos(request):
    productos = Producto.objects.all() #<-eso de ahi es un select * from Producto pero en python, se guarda en la variable.
    data = {"productos" : productos} #<- diccionario.
    return render(request, 'tienda/productos.html', data)

def contacto(request):
    data = {'form' : ContactoForm() }
    if request.method == 'POST':
        formulario = ContactoForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Mensaje enviado correctamente"
        else:
            data["form"] = formulario
    return render(request, 'tienda/contacto.html', data)

def signup(request):
    data = {'form' : CustomUserCreationForm()}
    if request.method == "POST":
        user_creation_form = CustomUserCreationForm(data=request.POST)
        if user_creation_form.is_valid():
            user_creation_form.save()
            user = authenticate(username=user_creation_form.cleaned_data['username'], password=user_creation_form.cleaned_data['password1'])
            login(request, user)

            return redirect('/')
    return render(request, 'tienda/signup.html', data)

def login(request):
    return render(request, 'tienda/login.html')

def exit(request):
    logout(request)
    return redirect('/')


def search(request):
    if request.method == "POST":
        searched = request.POST['searched']
        prod = Producto.objects.filter(producto__contains=searched)
        return render(request, 'tienda/search.html', {'searched' : searched, 'prod' : prod})
    else:
        return render(request, 'tienda/search.html')
    
def carrito(request):
    return render(request, 'tienda/carrito.html')
from django.contrib import admin
from .models import Producto, Usuario, Contacto
# Register your models here.

admin.site.register(Producto)
admin.site.register(Usuario)
admin.site.register(Contacto)
from django.db import models

# Create your models here.
class Producto(models.Model):
    id_producto = models.AutoField(db_column='idProducto', primary_key=True)
    producto = models.CharField(max_length=50, blank=False, null=False)
    portada = models.ImageField(upload_to="productos", null=True)
    precio = models.IntegerField()

    def __str__(self):
        return str(self.producto)
    
class Usuario(models.Model):
    rut              = models.CharField(primary_key=True, max_length=10)
    nombre           = models.CharField(max_length=20)
    apellido_paterno = models.CharField(max_length=20)
    apellido_materno = models.CharField(max_length=20, blank=True)
    id_producto      = models.ForeignKey('Producto',on_delete=models.PROTECT, db_column='idProducto')  
    telefono         = models.CharField(max_length=45)
    email            = models.EmailField(unique=True, max_length=100, blank=False, null=False)
    direccion        = models.CharField(max_length=50, blank=False, null=False)  
    activo           = models.IntegerField()

    def __str__(self):
        return str(self.rut)  

class Contacto(models.Model):
    email            = models.EmailField(max_length=100, blank=False, null=False)
    nombre           = models.CharField(max_length=20)
    comentario       = models.CharField(max_length=500)

    def __str__(self):
        return str(self.email)
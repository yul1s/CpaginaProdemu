from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Contacto

class ContactoForm(forms.ModelForm):
    class Meta:
        model = Contacto
        fields  = "__all__"


class CustomUserCreationForm(UserCreationForm):
    pass
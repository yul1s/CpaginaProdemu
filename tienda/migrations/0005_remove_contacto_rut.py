# Generated by Django 5.0.6 on 2024-07-01 22:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0004_contacto_rut'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contacto',
            name='rut',
        ),
    ]

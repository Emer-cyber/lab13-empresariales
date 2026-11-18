from django.contrib import admin
from .models import Categoria, Producto

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "descripcion")
    search_fields = ("nombre",)
    ordering = ("id",)


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "nombre",
        "categoria",
        "precio",
        "cantidad_disponible",
        "descuento",
        "rating"
    )
    list_filter = ("categoria", "cantidad_disponible")
    search_fields = ("nombre", "descripcion")
    list_editable = ("precio", "cantidad_disponible")
    ordering = ("id",)

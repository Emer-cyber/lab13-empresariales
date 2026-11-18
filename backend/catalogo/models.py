from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True, verbose_name="Nombre de la categoria")
    descripcion = models.TextField(blank=True, null=True, verbose_name="Descripcion")

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"
        ordering = ["nombre"]

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=200, verbose_name="Nombre del producto")
    descripcion = models.TextField(verbose_name="Descripcion")
    precio = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio")
    precio_anterior = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, verbose_name="Precio anterior")
    descuento = models.CharField(max_length=10, blank=True, null=True, default="-20%", verbose_name="Porcentaje de descuento")
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=4.9, verbose_name="Calificacion")
    reviews = models.PositiveIntegerField(default=120, verbose_name="Numero de resenas")
    imagen = models.URLField(max_length=500, verbose_name="URL de imagen")
    cantidad_disponible = models.PositiveIntegerField(default=0, verbose_name="Cantidad disponible en stock")
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
        related_name="productos",
        verbose_name="Categoria"
    )
    creado_en = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creacion")

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"
        ordering = ["id"]

    def __str__(self):
        return f"{self.nombre} - S/ {self.precio}"

from rest_framework import generics, filters
from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer

class CategoriaListAPIView(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class CategoriaDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ProductoListAPIView(generics.ListCreateAPIView):
    serializer_class = ProductoSerializer

    def get_queryset(self):
        queryset = Producto.objects.all()
        categoria_param = self.request.query_params.get("categoria", None)
        categoria_id_param = self.request.query_params.get("categoria_id", None)

        if categoria_id_param:
            queryset = queryset.filter(categoria_id=categoria_id_param)
        elif categoria_param and categoria_param != "Todos":
            queryset = queryset.filter(categoria__nombre__iexact=categoria_param)

        return queryset


class ProductoDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

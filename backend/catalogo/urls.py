from django.urls import path
from .views import (
    CategoriaListAPIView,
    CategoriaDetailAPIView,
    ProductoListAPIView,
    ProductoDetailAPIView
)

urlpatterns = [
    path('categorias/', CategoriaListAPIView.as_view(), name='categoria-list'),
    path('categorias/<int:pk>/', CategoriaDetailAPIView.as_view(), name='categoria-detail'),
    path('productos/', ProductoListAPIView.as_view(), name='producto-list'),
    path('productos/<int:pk>/', ProductoDetailAPIView.as_view(), name='producto-detail'),
]

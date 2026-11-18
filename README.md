# Mundo de Mesa - Tienda Virtual de Comercio Electronico

Laboratorio 13: Aplicacion de Comercio Electronico con ReactJS y Django REST Framework.
Institucion: Tecsup.

## Descripcion del Proyecto
Mundo de Mesa es una plataforma de comercio electronico desacoplada orientada a la venta de juegos de mesa modernos y de estrategia. Cuenta con un cliente interactivo construido con ReactJS y estilizado con Tailwind CSS, respaldado por una API REST construida con Django REST Framework y persistencia en base de datos relacional.

## Arquitectura del Sistema
- **Frontend:** ReactJS 19, Vite, Tailwind CSS, Lucide Icons. Puerto local 5173.
- **Backend:** Python 3.13, Django 6, Django REST Framework, django-cors-headers. Puerto local 8000.
- **Base de Datos:** SQLite3 relacional con modelos Categoria y Producto.

## Estructura de Directorios
```
lab13/
├── backend/
│   ├── ecommerce_backend/     # Configuracion general de Django y CORS
│   ├── catalogo/              # Modelos, Vistas REST, Serializadores y Admin
│   ├── db.sqlite3             # Base de datos relacional con productos y categorias
│   └── manage.py
├── frontend/
│   ├── src/
│   │   ├── components/        # Header, ProductCard, ProductList, CategoryFilter
│   │   ├── services/          # Cliente API centralizado (api.js)
│   │   ├── data/              # Datos de catalogo
│   │   ├── App.jsx            # Gestion de estado con useState y useEffect
│   │   └── main.jsx
│   ├── public/images/         # Portadas oficiales de juegos de mesa
│   └── package.json
└── README.md
```

## Instrucciones de Ejecucion

### 1. Servidor Backend (Django)
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt   # o django djangorestframework django-cors-headers pillow
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```
- Panel de Administracion: `http://127.0.0.1:8000/admin/` (Usuario: `admin`, Contrasena: `admin123`)
- Endpoint de Productos: `http://127.0.0.1:8000/api/productos/`
- Endpoint de Categorias: `http://127.0.0.1:8000/api/categorias/`

### 2. Servidor Frontend (ReactJS)
```bash
cd frontend
npm install
npm run dev
```
- Aplicacion Cliente: `http://127.0.0.1:5173/`

## Funcionalidades Implementadas
- Catalogo de juegos interactivo en cuadricula responsiva.
- Filtrado por categorias en tiempo real sin recargar la pagina.
- Gestion de inventario desde el panel administrativo de Django.
- Comunicacion asincrona desacoplada mediante servicios REST en formato JSON.
- Estados visuales de carga y control de errores.

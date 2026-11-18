export const MOCK_CATEGORIES = [
  { id: 'todos', nombre: 'Ver Todos', icon: 'Grid', color: 'bg-stone-100 text-stone-700' },
  { id: 'Estrategia', nombre: 'Estrategia', icon: 'Crown', color: 'bg-blue-50 text-blue-600' },
  { id: 'Familiares', nombre: 'Familiares', icon: 'Users', color: 'bg-pink-50 text-pink-600' },
  { id: 'Party Games', nombre: 'Party Games', icon: 'Sparkles', color: 'bg-amber-50 text-amber-600' },
  { id: 'Cooperativos', nombre: 'Cooperativos', icon: 'Shield', color: 'bg-emerald-50 text-emerald-600' },
  { id: 'Cartas', nombre: 'Cartas', icon: 'Layers', color: 'bg-purple-50 text-purple-600' },
  { id: 'Aventura', nombre: 'Aventura', icon: 'Compass', color: 'bg-cyan-50 text-cyan-600' }
]

export const MOCK_PRODUCTS = [
  {
    id: 1,
    nombre: 'Catan: El Juego',
    descripcion: 'Juego clasico de colonizacion, negociacion de recursos y construccion de poblados en la isla de Catan.',
    precio: 179.90,
    precio_anterior: 229.00,
    descuento: '-22%',
    rating: 4.9,
    reviews: 1420,
    categoria: 'Estrategia',
    imagen: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
    cantidad_disponible: 14
  },
  {
    id: 2,
    nombre: 'Carcassonne Medieval',
    descripcion: 'Coloca losetas para expandir caminos, monasterios y ciudades amuralladas medievales con tus seguidores.',
    precio: 149.50,
    precio_anterior: 189.00,
    descuento: '-21%',
    rating: 4.8,
    reviews: 875,
    categoria: 'Estrategia',
    imagen: '/images/carcassonne.jpg',
    cantidad_disponible: 8
  },
  {
    id: 3,
    nombre: 'Dixit Odyssey',
    descripcion: 'Inspirador juego de deduccion y fantasia con maravillosas ilustraciones poeticas para toda la familia.',
    precio: 139.90,
    precio_anterior: 169.00,
    descuento: '-17%',
    rating: 4.9,
    reviews: 960,
    categoria: 'Familiares',
    imagen: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=800&q=80',
    cantidad_disponible: 20
  },
  {
    id: 4,
    nombre: 'Pandemic: Edicion Global',
    descripcion: 'Trabajo en equipo cooperativo para contener brotes globales de cuatro plagas mientras se descubren las curas.',
    precio: 169.00,
    precio_anterior: 210.00,
    descuento: '-20%',
    rating: 4.8,
    reviews: 1120,
    categoria: 'Cooperativos',
    imagen: 'https://images.unsplash.com/photo-1563941402622-4e7a488bcc57?auto=format&fit=crop&w=800&q=80',
    cantidad_disponible: 6
  },
  {
    id: 5,
    nombre: 'Exploding Kittens',
    descripcion: 'Divertidicima ruleta rusa de gatitos explosivos con sabotajes, cartas tacticas y risas aseguradas.',
    precio: 89.90,
    precio_anterior: 119.00,
    descuento: '-25%',
    rating: 4.7,
    reviews: 2310,
    categoria: 'Party Games',
    imagen: '/images/exploding_kittens.jpg',
    cantidad_disponible: 25
  },
  {
    id: 6,
    nombre: 'Virus! Juego de Cartas',
    descripcion: 'Enfrentate a la pandemia y compite por aislar un cuerpo totalmente sano de cuatro organos antes que los demas.',
    precio: 65.00,
    precio_anterior: 85.00,
    descuento: '-24%',
    rating: 4.9,
    reviews: 1840,
    categoria: 'Cartas',
    imagen: '/images/virus.jpg',
    cantidad_disponible: 18
  },
  {
    id: 7,
    nombre: 'Aventureros al Tren: Europa',
    descripcion: 'Conecta las principales capitales europeas a traves de ferrocarriles y completa tus billetes de ruta estrategicos.',
    precio: 219.00,
    precio_anterior: 269.00,
    descuento: '-19%',
    rating: 5.0,
    reviews: 3120,
    categoria: 'Familiares',
    imagen: '/images/ticket_to_ride.jpg',
    cantidad_disponible: 12
  },
  {
    id: 8,
    nombre: 'Dungeons & Dragons: Set de Inicio',
    descripcion: 'El clasico juego de rol de mesa por excelencia con manual de reglas, dados poliedricos y campana de aventura.',
    precio: 129.90,
    precio_anterior: 159.00,
    descuento: '-18%',
    rating: 4.9,
    reviews: 1540,
    categoria: 'Aventura',
    imagen: '/images/dnd.jpg',
    cantidad_disponible: 9
  }
]

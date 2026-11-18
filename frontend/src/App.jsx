import React, { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { CategoryFilter } from './components/CategoryFilter'
import { ProductList } from './components/ProductList'
import { getCategorias, getProductos } from './services/api'
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users2,
  Mail,
  Truck,
  RotateCcw,
  Headphones,
  CheckCircle2,
  Star,
  Flame,
  Globe,
  Share2,
  MessageCircle,
  Send,
  Loader2,
  AlertCircle,
  RefreshCw,
  Database
} from 'lucide-react'

export default function App() {
  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([{ id: 'todos', nombre: 'Ver Todos' }])
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Carga inicial de categorias desde la API de Django
  useEffect(() => {
    async function loadCategorias() {
      try {
        const data = await getCategorias()
        setCategorias([{ id: 'todos', nombre: 'Ver Todos' }, ...data])
      } catch (err) {
        console.error('Error cargando categorias desde Django:', err)
      }
    }
    loadCategorias()
  }, [])

  // Carga de productos desde la API segun categoria seleccionada
  useEffect(() => {
    async function loadProductos() {
      setLoading(true)
      setError(null)
      try {
        const data = await getProductos(selectedCategory)
        setProductos(data)
      } catch (err) {
        setError(err.message || 'Error al conectar con la API de Django')
      } finally {
        setLoading(false)
      }
    }
    loadProductos()
  }, [selectedCategory])

  // Filtrado local por termino de busqueda en tiempo real
  const filteredProducts = productos.filter((product) => {
    const term = searchTerm.toLowerCase()
    const matchesName = product.nombre?.toLowerCase().includes(term)
    const matchesDesc = product.descripcion?.toLowerCase().includes(term)
    return matchesName || matchesDesc
  })

  // Reintento manual en caso de fallo
  const handleRetry = () => {
    setLoading(true)
    setError(null)
    getProductos(selectedCategory)
      .then(setProductos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 flex flex-col font-sans antialiased">
      {/* Header */}
      <Header
        totalCartCount={3}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-10">
        {/* Status Indicator Bar */}
        <div className="bg-white px-4 py-2 rounded-xl border border-stone-200/80 shadow-2xs flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-800">Servicio Backend:</span>
            <span className="text-emerald-700 font-medium">Django REST Framework activo en http://127.0.0.1:8000/api/</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-stone-500">
            <span>Categorias: <strong>{categorias.length - 1}</strong></span>
            <span>•</span>
            <span>Juegos registrados: <strong>{productos.length}</strong></span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-[#f4efe8] border border-stone-200/60 p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0b2b20] text-xs font-bold tracking-wide shadow-2xs border border-stone-200/80">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>TEMPORADA LUDICA 2026 - HASTA 30% OFF</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-[1.1]">
                Eleva tus noches <br />
                <span className="italic font-normal text-emerald-900">de juego</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 max-w-lg leading-relaxed">
                Descubre juegos de mesa de alta calidad seleccionados para cada ocasion. Conectados directamente con la base de datos de Django.
              </p>

              <div className="pt-2">
                <a
                  href="#catalogo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0b2b20] hover:bg-[#134232] text-white text-xs font-bold tracking-wide shadow-md transition-all hover:gap-3"
                >
                  <span>Explorar Catalogo</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </a>
              </div>

              {/* Value Badges */}
              <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-stone-600 font-medium">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0b2b20]" />
                  <span>Juegos 100% Originales</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0b2b20]" />
                  <span>Mejores Precios</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-[#0b2b20]" />
                  <span>+10,000 Jugadores Felices</span>
                </div>
              </div>
            </div>

            {/* Right Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1000&q=80"
                  alt="Juegos de mesa en exhibicion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#0b2b20]/90 backdrop-blur-xs text-white p-3 rounded-2xl text-center border border-emerald-500/30">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-amber-300 block">
                    OFERTA
                  </span>
                  <span className="text-2xl font-black">
                    -30%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Circular Categories Bar (Data dinamica de Django) */}
        <section className="pt-2">
          <CategoryFilter
            categories={categorias}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>

        {/* Main Product Catalog Section */}
        <section id="catalogo">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-200/80 my-4 shadow-2xs">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-50 flex items-center justify-center text-[#0b2b20]">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                Consultando API REST de Django...
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Obteniendo el listado de juegos en tiempo real desde el servidor.
              </p>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="text-center py-12 px-6 bg-rose-50 border border-rose-200 rounded-3xl my-4 text-rose-800 space-y-3 max-w-lg mx-auto">
              <AlertCircle className="w-10 h-10 mx-auto text-rose-500" />
              <h3 className="text-base font-bold">
                Error al cargar el catalogo
              </h3>
              <p className="text-xs text-rose-600">
                {error}
              </p>
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reintentar conexion
              </button>
            </div>
          )}

          {/* Success State with Dynamic Products */}
          {!loading && !error && (
            <ProductList
              products={filteredProducts}
              title={
                selectedCategory === 'Todos'
                  ? 'Juegos Disponibles en Catalogo'
                  : `Juegos en Categoria: ${selectedCategory}`
              }
            />
          )}
        </section>

        {/* Trio Promo Banners */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#f0ece6] rounded-2xl p-6 flex items-center justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
            <div className="space-y-2 z-10 max-w-[65%]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                Novedades 2026
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Ediciones Especiales
              </h3>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0b2b20] hover:text-emerald-800 pt-1"
              >
                Comprar Ahora <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <img
              src="/images/carcassonne.jpg"
              alt="Edicion especial Carcassonne"
              className="w-24 h-24 object-cover rounded-xl shadow-xs group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="bg-[#e9f2ee] rounded-2xl p-6 flex items-center justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
            <div className="space-y-2 z-10 max-w-[65%]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">
                Tardes Familiares
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Diversion en Casa
              </h3>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0b2b20] hover:text-emerald-800 pt-1"
              >
                Ver Familiares <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <img
              src="/images/ticket_to_ride.jpg"
              alt="Juegos familiares Aventureros al Tren"
              className="w-24 h-24 object-cover rounded-xl shadow-xs group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="bg-[#f5f1eb] rounded-2xl p-6 flex items-center justify-between overflow-hidden relative group hover:shadow-md transition-shadow">
            <div className="space-y-2 z-10 max-w-[65%]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">
                Fiestas y Risas
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Party Games
              </h3>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0b2b20] hover:text-emerald-800 pt-1"
              >
                Descubrir Titulos <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <img
              src="/images/virus.jpg"
              alt="Party Games Virus"
              className="w-24 h-24 object-cover rounded-xl shadow-xs group-hover:scale-105 transition-transform"
            />
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-1.5">
              Elegido por miles de jugadores
              <span className="text-rose-500 text-base">♥</span>
            </h2>
            <div className="flex items-center gap-1 text-xs text-slate-600 font-semibold">
              <span>4.9 / 5 Calificacion Promedio</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0b2b20] font-bold flex items-center justify-center text-xs">
                  CR
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900">Carlos R.</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Excelente calidad en las cajas de Catan y Carcassonne. Llegaron perfectamente embalados y al dia siguiente en Lima.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">
                  MA
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900">Mariana A.</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compre Dixit para compartir en familia los fines de semana. Las cartas son una joya de arte y la atencion al cliente fue impecable.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-xs">
                  DV
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900">Diego V.</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Los mejores precios en juegos de estrategia moderna. El catalogo organizado por categorias ayuda muchisimo a elegir.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Banner */}
        <section className="bg-[#0b2b20] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  Unete a la Comunidad Lúdica
                </h3>
                <p className="text-xs text-emerald-200 mt-0.5">
                  Recibe promociones exclusivas, guias de juego y nuevos lanzamientos directo en tu correo.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electronico..."
                  className="w-full px-4 py-2.5 rounded-full bg-white text-slate-900 text-xs focus:outline-hidden placeholder:text-slate-400"
                />
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide transition-colors shrink-0"
                >
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-stone-200/60 shadow-2xs">
            <Truck className="w-5 h-5 text-[#0b2b20] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Envios a todo el Peru</span>
              <span className="text-[10px] text-slate-500">Gratis desde S/ 150</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-stone-200/60 shadow-2xs">
            <RotateCcw className="w-5 h-5 text-[#0b2b20] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">30 Dias de Garantia</span>
              <span className="text-[10px] text-slate-500">Cambio sin complicaciones</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-stone-200/60 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-[#0b2b20] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Pagos 100% Seguros</span>
              <span className="text-[10px] text-slate-500">Tarjetas, Yape y Plin</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-stone-200/60 shadow-2xs">
            <Headphones className="w-5 h-5 text-[#0b2b20] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Soporte Continuo</span>
              <span className="text-[10px] text-slate-500">Asesoria especializada</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#071c15] text-stone-300 border-t border-emerald-950 mt-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-white uppercase">
                  Mundo
                </span>
                <span className="text-lg font-light tracking-tight text-emerald-400 uppercase">
                  de Mesa
                </span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Tu tienda especializada en juegos de mesa modernos, de estrategia, cooperativos y familiares. Llevando diversion inteligente a tu hogar.
              </p>
              <div className="flex items-center gap-3 pt-2 text-stone-400">
                <Globe className="w-4 h-4 hover:text-white cursor-pointer" />
                <Share2 className="w-4 h-4 hover:text-white cursor-pointer" />
                <MessageCircle className="w-4 h-4 hover:text-white cursor-pointer" />
                <Send className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                Catalogo
              </h4>
              <ul className="space-y-2 text-[11px] text-stone-400">
                <li><a href="#catalogo" className="hover:text-white">Juegos de Estrategia</a></li>
                <li><a href="#catalogo" className="hover:text-white">Juegos Familiares</a></li>
                <li><a href="#catalogo" className="hover:text-white">Party Games</a></li>
                <li><a href="#catalogo" className="hover:text-white">Juegos Cooperativos</a></li>
                <li><a href="#catalogo" className="hover:text-white">Juegos de Cartas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                Servicio al Cliente
              </h4>
              <ul className="space-y-2 text-[11px] text-stone-400">
                <li><a href="#" className="hover:text-white">Seguimiento de Envios</a></li>
                <li><a href="#" className="hover:text-white">Politica de Devoluciones</a></li>
                <li><a href="#" className="hover:text-white">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-white">Metodos de Pago</a></li>
                <li><a href="#" className="hover:text-white">Libro de Reclamaciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                Informacion Academica
              </h4>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Laboratorio 13 - Tecsup 2026.
                Desarrollo de Aplicacion de Comercio Electronico con ReactJS y Django REST Framework.
              </p>
            </div>
          </div>

          <div className="border-t border-emerald-900/60 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500">
            <p>2026 Mundo de Mesa. Todos los derechos reservados.</p>
            <p>Disenado con ReactJS, Vite y Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

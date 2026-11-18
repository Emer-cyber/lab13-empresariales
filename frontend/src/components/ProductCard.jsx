import React from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'

export function ProductCard({
  nombre,
  descripcion,
  precio,
  precio_anterior,
  descuento,
  rating = 4.9,
  reviews = 120,
  imagen,
  categoria,
  categoria_nombre,
  cantidad_disponible = 0
}) {
  const displayCategory = categoria_nombre || categoria || 'Juegos'
  const currentPrice = typeof precio === 'number' 
    ? precio.toFixed(2) 
    : parseFloat(precio || 0).toFixed(2)

  const originalPrice = precio_anterior 
    ? (typeof precio_anterior === 'number' ? precio_anterior.toFixed(2) : parseFloat(precio_anterior).toFixed(2))
    : (parseFloat(currentPrice) * 1.25).toFixed(2)

  const discountBadge = descuento || '-20%'
  const isAvailable = cantidad_disponible > 0

  return (
    <div className="group bg-white rounded-2xl border border-slate-100/90 p-3 flex flex-col justify-between hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative">
      {/* Top Badges */}
      <div className="flex items-center justify-between z-10 mb-1">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
          {discountBadge}
        </span>
        <button
          type="button"
          aria-label="Guardar en favoritos"
          className="w-7 h-7 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-rose-500 flex items-center justify-center transition-colors shadow-2xs"
        >
          <Heart className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square w-full rounded-xl bg-slate-50/80 overflow-hidden flex items-center justify-center mb-3">
        <img
          src={imagen || 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80'}
          alt={nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-2 left-2">
          <span className="text-[9px] font-medium tracking-wide bg-white/90 backdrop-blur-xs text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/50">
            {displayCategory}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1 group-hover:text-[#0b2b20] transition-colors">
          {nombre}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5 mb-2">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>
          <span className="text-[10px] text-slate-400 font-medium ml-0.5">
            ({reviews})
          </span>
        </div>

        {/* Bottom Price & Cart Button */}
        <div className="mt-auto pt-2 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-extrabold text-[#0b2b20]">
              S/ {currentPrice}
            </span>
            <span className="text-[11px] text-slate-400 line-through">
              S/ {originalPrice}
            </span>
          </div>

          <button
            type="button"
            disabled={!isAvailable}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isAvailable
                ? 'bg-[#0b2b20] hover:bg-[#144434] active:scale-95 text-white shadow-xs'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
            title={isAvailable ? 'Agregar al carrito' : 'Agotado'}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

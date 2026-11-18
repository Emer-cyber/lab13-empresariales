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
  badge = 'DESTACADO',
  isCenter = false,
  onClick
}) {
  const currentPrice = typeof precio === 'number'
    ? precio.toFixed(2)
    : parseFloat(precio || 0).toFixed(2)

  const displayCategory = categoria_nombre || categoria || 'Juegos'

  return (
    <div
      onClick={onClick}
      className={`transition-all duration-500 rounded-3xl border flex flex-col justify-between cursor-pointer select-none ${
        isCenter
          ? 'bg-[#fcfaf7] border-stone-300/90 shadow-2xl scale-100 sm:scale-105 z-20 p-5 sm:p-7 ring-1 ring-stone-200'
          : 'bg-[#faf7f2]/90 hover:bg-[#fcfaf7] border-stone-200/70 shadow-sm hover:shadow-md scale-95 opacity-85 hover:opacity-100 z-10 p-4 sm:p-5'
      }`}
    >
      {/* Top Bar: Badge & Wishlist */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#eee7dd] text-[#826e55]">
          {badge}
        </span>
        <button
          type="button"
          aria-label="Favoritos"
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="w-7 h-7 rounded-full text-stone-400 hover:text-rose-500 flex items-center justify-center transition-colors"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square w-full rounded-2xl bg-white/60 overflow-hidden flex items-center justify-center p-3 mb-3 shadow-inner">
        <img
          src={imagen || '/images/carcassonne.jpg'}
          alt={nombre}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Image Pagination Dots indicator inside card */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#b89f80]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 text-left">
        <h3 className={`font-serif font-bold text-slate-900 line-clamp-1 ${isCenter ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
          {nombre}
        </h3>

        <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
          {descripcion}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs text-stone-600 font-semibold mt-2.5 mb-3">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{rating}</span>
          <span className="text-stone-400 font-normal">({reviews})</span>
        </div>

        {/* Price & Action Button */}
        <div className="mt-auto pt-3 border-t border-stone-200/50 flex items-center justify-between gap-3">
          <div className="flex items-baseline">
            <span className={`font-serif font-bold text-slate-900 ${isCenter ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
              S/ {currentPrice}
            </span>
          </div>

          {isCenter ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="px-4 py-2 rounded-xl bg-[#b89f80] hover:bg-[#a38a6c] active:scale-95 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Agregar</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="w-8 h-8 rounded-xl bg-[#eee7dd] hover:bg-[#b89f80] text-[#826e55] hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

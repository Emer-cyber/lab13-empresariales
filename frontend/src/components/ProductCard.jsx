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
  level = 0,
  onClick
}) {
  const isCenter = level === 0
  const isFlank = Math.abs(level) === 1
  const isEdge = Math.abs(level) === 2

  const currentPrice = typeof precio === 'number'
    ? precio.toFixed(2)
    : parseFloat(precio || 0).toFixed(2)

  // Clases dinamicas segun el nivel de profundidad en el carrusel
  const levelClasses = isCenter
    ? 'scale-100 sm:scale-108 z-30 opacity-100 shadow-2xl bg-[#fcfaf7] border-stone-300 ring-1 ring-stone-200/70 p-5 sm:p-7'
    : isFlank
    ? 'scale-[0.92] sm:scale-[0.94] z-20 opacity-85 hover:opacity-95 shadow-md bg-[#faf7f2] border-stone-200/90 p-4 sm:p-5'
    : 'scale-[0.80] sm:scale-[0.82] z-10 opacity-45 hover:opacity-75 shadow-xs bg-[#f8f5ef] border-stone-200/60 p-3 sm:p-4'

  return (
    <div
      onClick={onClick}
      className={`transition-all duration-500 rounded-3xl border flex flex-col justify-between cursor-pointer select-none origin-bottom h-full ${levelClasses}`}
    >
      {/* Top Bar: Badge & Wishlist */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <span
          className={`uppercase font-bold tracking-widest rounded-md bg-[#eee7dd] text-[#826e55] ${
            isCenter
              ? 'text-[10px] sm:text-xs px-2.5 py-1'
              : 'text-[9px] sm:text-[10px] px-2 py-0.5'
          }`}
        >
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
          <Heart className={`${isCenter ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
        </button>
      </div>

      {/* Product Image */}
      <div className={`relative aspect-square w-full rounded-2xl bg-white/70 overflow-hidden flex items-center justify-center shadow-inner ${isCenter ? 'p-3.5 mb-3.5' : isFlank ? 'p-2.5 mb-2.5' : 'p-2 mb-2'}`}>
        <img
          src={imagen || '/images/carcassonne.jpg'}
          alt={nombre}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Image Pagination Dots indicator inside card */}
      <div className="flex items-center justify-center gap-1.5 mb-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#b89f80]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 text-left">
        <h3
          className={`font-serif font-bold text-slate-900 line-clamp-1 ${
            isCenter ? 'text-lg sm:text-xl' : isFlank ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          }`}
        >
          {nombre}
        </h3>

        <p className={`text-stone-500 line-clamp-2 mt-1 leading-relaxed ${isEdge ? 'text-[11px]' : 'text-xs'}`}>
          {descripcion}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs text-stone-600 font-semibold mt-2 mb-3">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{rating}</span>
          <span className="text-stone-400 font-normal">({reviews})</span>
        </div>

        {/* Price & Action Button */}
        <div className="mt-auto pt-2.5 border-t border-stone-200/50 flex items-center justify-between gap-2">
          <div className="whitespace-nowrap flex items-baseline gap-1">
            <span className="text-xs font-semibold text-stone-600">S/</span>
            <span
              className={`font-serif font-bold text-slate-900 ${
                isCenter ? 'text-xl sm:text-2xl' : isFlank ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}
            >
              {currentPrice}
            </span>
          </div>

          {isCenter ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#b89f80] hover:bg-[#a38a6c] active:scale-95 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-sm transition-all cursor-pointer whitespace-nowrap"
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
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#eee7dd] hover:bg-[#b89f80] text-[#826e55] hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

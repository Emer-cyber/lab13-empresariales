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
    ? 'scale-100 sm:scale-108 z-30 opacity-100 shadow-2xl bg-[#fcfaf7] border-stone-300 ring-1 ring-stone-200/70 p-4 sm:p-5'
    : isFlank
    ? 'scale-[0.92] sm:scale-[0.94] z-20 opacity-85 hover:opacity-95 shadow-md bg-[#faf7f2] border-stone-200/90 p-3.5 sm:p-4'
    : 'scale-[0.80] sm:scale-[0.82] z-10 opacity-45 hover:opacity-75 shadow-xs bg-[#f8f5ef] border-stone-200/60 p-3 sm:p-3.5'

  return (
    <div
      onClick={onClick}
      className={`transition-all duration-500 rounded-3xl border flex flex-col justify-between cursor-pointer select-none origin-bottom h-full overflow-hidden ${levelClasses}`}
    >
      {/* Top Bar: Badge & Wishlist */}
      <div className="flex items-center justify-between mb-2">
        <span
          className={`uppercase font-bold tracking-widest rounded-md bg-[#eee7dd] text-[#826e55] ${
            isCenter
              ? 'text-[10px] px-2 py-0.5'
              : 'text-[9px] px-1.5 py-0.5'
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
          className="w-6 h-6 rounded-full text-stone-400 hover:text-rose-500 flex items-center justify-center transition-colors"
        >
          <Heart className={`${isCenter ? 'w-3.5 h-3.5' : 'w-3 h-3'}`} />
        </button>
      </div>

      {/* Product Image: Ampliada al maximo dentro de la ventana sin padding excesivo */}
      <div className="relative aspect-square w-full rounded-2xl bg-white overflow-hidden shadow-xs mb-2">
        <img
          src={imagen || '/images/carcassonne.jpg'}
          alt={nombre}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Image Pagination Dots indicator inside card */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#b89f80]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 text-left">
        <h3
          className={`font-serif font-bold text-slate-900 line-clamp-1 ${
            isCenter ? 'text-base sm:text-lg' : isFlank ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
          }`}
        >
          {nombre}
        </h3>

        <p className={`text-stone-500 line-clamp-2 mt-0.5 leading-relaxed ${isEdge ? 'text-[10px]' : 'text-[11px]'}`}>
          {descripcion}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[11px] text-stone-600 font-semibold mt-1.5 mb-2">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          <span>{rating}</span>
          <span className="text-stone-400 font-normal">({reviews})</span>
        </div>

        {/* Price & Action Button: Perfectamente ajustado sin desborde */}
        <div className="mt-auto pt-2 border-t border-stone-200/60 flex items-center justify-between gap-1.5 w-full">
          <div className="whitespace-nowrap flex items-baseline gap-1 shrink-0">
            <span className="text-[10px] font-semibold text-stone-500">S/</span>
            <span
              className={`font-serif font-bold text-slate-900 ${
                isCenter ? 'text-base sm:text-lg' : isFlank ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
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
              className="px-2.5 py-1.5 rounded-lg bg-[#b89f80] hover:bg-[#a38a6c] active:scale-95 text-white text-[11px] font-semibold tracking-tight flex items-center gap-1 shadow-2xs transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <ShoppingCart className="w-3 h-3" />
              <span>Agregar</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#eee7dd] hover:bg-[#b89f80] text-[#826e55] hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            >
              <ShoppingCart className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

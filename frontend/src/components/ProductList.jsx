import React, { useState } from 'react'
import { ProductCard } from './ProductCard'
import { ChevronLeft, ChevronRight, PackageOpen } from 'lucide-react'

const BADGES = ['NUEVO', 'TENDENCIA', 'MAS VENDIDO', 'POPULAR', 'DESTACADO']

export function ProductList({ products = [], title = 'Juegos Destacados' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-stone-200 max-w-md mx-auto my-6">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-50 flex items-center justify-center text-[#0b2b20]">
          <PackageOpen className="w-7 h-7" />
        </div>
        <h4 className="text-base font-bold text-slate-800">
          No hay juegos disponibles
        </h4>
        <p className="text-xs text-stone-500 mt-1">
          Intenta seleccionando otra categoria o restableciendo los filtros.
        </p>
      </div>
    )
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length)
  }

  // Obtenemos los 5 indices circulares con su nivel de profundidad
  const getVisibleProducts = () => {
    const offsets = [-2, -1, 0, 1, 2]
    return offsets.map((offset) => {
      const idx = (activeIndex + offset + products.length) % products.length
      return {
        product: products[idx],
        level: offset,
        badge: offset === 0 ? 'MAS VENDIDO' : BADGES[(idx + 1) % BADGES.length],
        index: idx
      }
    })
  }

  const visibleCards = getVisibleProducts()

  return (
    <div className="w-full py-8 text-center space-y-8 select-none">
      {/* Editorial Header */}
      <div className="space-y-2 max-w-xl mx-auto px-4">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#998369] block">
          NUESTRA COLECCION
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
          Explora los juegos de mesa mas populares y valorados por nuestra comunidad
        </p>
      </div>

      {/* Carousel Container with Perspective Gradient Effect */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-10 py-6">
        {/* Left Arrow Button */}
        <button
          type="button"
          aria-label="Anterior"
          onClick={handlePrev}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-slate-900 shadow-xl border border-stone-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          aria-label="Siguiente"
          onClick={handleNext}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-stone-700 hover:text-slate-900 shadow-xl border border-stone-200/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Row with Graduated Perspective */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2.5 lg:gap-3 items-end justify-center min-h-[480px]">
          {visibleCards.map(({ product, level, badge, index }, slotIdx) => (
            <div
              key={`${product.id}-${slotIdx}`}
              className={`h-full transition-all duration-500 ${
                slotIdx === 0 || slotIdx === 4
                  ? 'hidden lg:flex'
                  : slotIdx === 1 || slotIdx === 3
                  ? 'hidden sm:flex'
                  : 'flex'
              } flex-col justify-end`}
            >
              <ProductCard
                nombre={product.nombre}
                descripcion={product.descripcion}
                precio={product.precio}
                precio_anterior={product.precio_anterior}
                descuento={product.descuento}
                rating={product.rating}
                reviews={product.reviews}
                imagen={product.imagen}
                categoria={product.categoria}
                categoria_nombre={product.categoria_nombre}
                badge={badge}
                level={level}
                onClick={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Dots */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {products.map((p, idx) => (
          <button
            key={p.id}
            type="button"
            aria-label={`Ver ${p.nombre}`}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeIndex
                ? 'w-7 h-2.5 bg-[#b89f80]'
                : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

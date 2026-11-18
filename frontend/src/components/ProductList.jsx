import React from 'react'
import { ProductCard } from './ProductCard'
import { Sparkles, ArrowRight, PackageOpen } from 'lucide-react'

export function ProductList({ products = [], title = 'Juegos Destacados para Ti' }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-200 max-w-md mx-auto my-6">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-50 flex items-center justify-center text-[#0b2b20]">
          <PackageOpen className="w-7 h-7" />
        </div>
        <h4 className="text-base font-bold text-slate-800">
          No hay juegos disponibles
        </h4>
        <p className="text-xs text-slate-500 mt-1">
          Intenta seleccionando otra categoria o restableciendo los filtros.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </div>

        <a
          href="#todos"
          className="text-xs font-bold text-[#0b2b20] hover:text-emerald-800 flex items-center gap-1 transition-colors"
        >
          Ver Todas las Ofertas
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid: 4 columns matching the exact previous size */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4.5">
        {products.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            precio_anterior={producto.precio_anterior}
            descuento={producto.descuento}
            rating={producto.rating}
            reviews={producto.reviews}
            imagen={producto.imagen}
            categoria={producto.categoria}
            categoria_nombre={producto.categoria_nombre}
            cantidad_disponible={producto.cantidad_disponible}
          />
        ))}
      </div>
    </div>
  )
}

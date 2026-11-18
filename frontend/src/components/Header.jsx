import React from 'react'
import {
  ShoppingBag,
  Search,
  User,
  Heart,
  Menu,
  ChevronDown,
  Truck,
  RotateCcw,
  ShieldCheck,
  Dices
} from 'lucide-react'

export function Header({ totalCartCount = 0, onSearch, searchTerm = '' }) {
  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b2b20] text-emerald-100 text-[11px] py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-6 mx-auto">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-amber-300" />
              Envio gratis a todo el Peru por compras mayores a S/ 150
            </span>
            <span className="text-emerald-500">|</span>
            <span className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
              30 Dias de devolucion garantizada
            </span>
            <span className="text-emerald-500">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              Pagos 100% protegidos y seguros
            </span>
          </div>
          <div className="sm:hidden text-center w-full">
            Envios gratis por compras mayores a S/ 150 en todo el Peru
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-2xl bg-[#0b2b20] text-white flex items-center justify-center shadow-xs group-hover:bg-[#124232] transition-colors">
              <Dices className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black tracking-tight text-slate-900 uppercase">
                  Mundo
                </span>
                <span className="text-xl font-light tracking-tight text-emerald-700 uppercase">
                  de Mesa
                </span>
              </div>
              <span className="text-[9px] tracking-widest text-slate-400 font-bold block -mt-1 uppercase">
                Juegos y Estrategia
              </span>
            </div>
          </a>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Busca por juego, categoria, editorial o tematica..."
                value={searchTerm}
                onChange={(e) => onSearch && onSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/90 text-slate-800 text-xs rounded-full pl-5 pr-12 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#0b2b20] focus:ring-2 focus:ring-[#0b2b20]/10 transition-all placeholder:text-slate-400"
              />
              <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0b2b20] text-white flex items-center justify-center hover:bg-[#124232] transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-5 sm:gap-7 shrink-0 text-slate-700">
            <button className="flex flex-col items-center gap-0.5 hover:text-[#0b2b20] transition-colors group">
              <User className="w-5 h-5 text-slate-600 group-hover:text-[#0b2b20]" />
              <span className="text-[10px] font-medium hidden sm:block">Cuenta</span>
            </button>

            <button className="flex flex-col items-center gap-0.5 hover:text-[#0b2b20] transition-colors relative group">
              <div className="relative">
                <Heart className="w-5 h-5 text-slate-600 group-hover:text-[#0b2b20]" />
                <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
              <span className="text-[10px] font-medium hidden sm:block">Favoritos</span>
            </button>

            <button className="flex flex-col items-center gap-0.5 hover:text-[#0b2b20] transition-colors relative group">
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-slate-600 group-hover:text-[#0b2b20]" />
                <span className="absolute -top-1.5 -right-2 bg-[#0b2b20] text-amber-300 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartCount || 3}
                </span>
              </div>
              <span className="text-[10px] font-medium hidden sm:block">Carrito</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Bar */}
      <div className="border-t border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-8">
              {/* Category Dropdown Trigger */}
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#0b2b20] hover:bg-[#124232] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
              >
                <Menu className="w-3.5 h-3.5" />
                <span>Todas las Categorias</span>
                <ChevronDown className="w-3 h-3 text-emerald-300 ml-1" />
              </button>

              {/* Navigation Links */}
              <nav className="flex items-center gap-7 text-xs font-medium text-slate-600">
                <a href="#catalogo" className="text-[#0b2b20] font-bold relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#0b2b20]">
                  Inicio
                </a>
                <a href="#catalogo" className="hover:text-[#0b2b20] transition-colors">
                  Tienda
                </a>
                <a href="#catalogo" className="hover:text-[#0b2b20] transition-colors">
                  Ofertas
                </a>
                <a href="#catalogo" className="hover:text-[#0b2b20] transition-colors">
                  Novedades
                </a>
                <a href="#catalogo" className="hover:text-[#0b2b20] transition-colors">
                  Marcas
                </a>
                <a href="#inspiracion" className="hover:text-[#0b2b20] transition-colors">
                  Inspiracion
                </a>
                <a href="#rastreo" className="hover:text-[#0b2b20] transition-colors">
                  Rastreo
                </a>
              </nav>
            </div>

            <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1.5 border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Atencion inmediata en linea
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

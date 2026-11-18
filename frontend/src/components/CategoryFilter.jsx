import React from 'react'
import {
  Grid,
  Crown,
  Users,
  Sparkles,
  ShieldCheck,
  Layers,
  Compass
} from 'lucide-react'

const CATEGORY_STYLES = {
  'Ver Todos': { icon: Grid, color: 'bg-slate-100 text-slate-700' },
  'Todos': { icon: Grid, color: 'bg-slate-100 text-slate-700' },
  'Estrategia': { icon: Crown, color: 'bg-blue-50 text-blue-600' },
  'Familiares': { icon: Users, color: 'bg-pink-50 text-pink-600' },
  'Party Games': { icon: Sparkles, color: 'bg-amber-50 text-amber-600' },
  'Cooperativos': { icon: ShieldCheck, color: 'bg-emerald-50 text-emerald-600' },
  'Cartas': { icon: Layers, color: 'bg-purple-50 text-purple-600' },
  'Aventura': { icon: Compass, color: 'bg-cyan-50 text-cyan-600' }
}

export function CategoryFilter({
  categories = [],
  selectedCategory = 'Todos',
  onSelectCategory
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-7 overflow-x-auto py-3 px-2 scrollbar-none">
        {categories.map((cat) => {
          const categoryName = typeof cat === 'string' ? cat : cat.nombre
          const filterValue = categoryName === 'Ver Todos' ? 'Todos' : categoryName
          const isSelected =
            selectedCategory === filterValue ||
            (selectedCategory === 'Todos' && categoryName === 'Ver Todos')

          const styleConfig = CATEGORY_STYLES[categoryName] || {
            icon: Grid,
            color: 'bg-slate-100 text-slate-700'
          }

          const IconComponent = styleConfig.icon
          const colorClasses = styleConfig.color

          return (
            <button
              key={categoryName}
              type="button"
              onClick={() => onSelectCategory(filterValue)}
              className="flex flex-col items-center gap-2 group cursor-pointer shrink-0 transition-transform hover:-translate-y-0.5"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isSelected
                    ? 'ring-2 ring-[#0b2b20] ring-offset-2 bg-[#0b2b20] text-amber-300 shadow-md'
                    : `${colorClasses} group-hover:scale-105 shadow-2xs`
                }`}
              >
                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span
                className={`text-[11px] sm:text-xs font-medium tracking-tight text-center ${
                  isSelected
                    ? 'text-[#0b2b20] font-bold'
                    : 'text-slate-600 group-hover:text-slate-900'
                }`}
              >
                {categoryName}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import { BarChart3, Bot, LayoutDashboard, Lightbulb } from 'lucide-react'
import type { Dict } from './i18n'

const ICONS = [BarChart3, Bot, LayoutDashboard, Lightbulb]
const COLORS = [
  'from-purple-500 to-purple-600',
  'from-pink-500 to-pink-600',
  'from-blue-500 to-blue-600',
  'from-amber-500 to-orange-500',
]

export default function LpServices({ t }: { t: Dict }) {
  const s = t.services
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{s.title}</h2>
        <p className="section-subtitle">{s.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.items.map((service, i) => {
            const Icon = ICONS[i] ?? BarChart3
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${COLORS[i]} flex items-center justify-center mb-5`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{service.description}</p>
              </div>
            )
          })}
        </div>

        <p
          className="text-center text-gray-600 mt-10 max-w-2xl mx-auto [&_strong]:text-gray-900 [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: s.footerHtml }}
        />
      </div>
    </section>
  )
}

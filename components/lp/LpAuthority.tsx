'use client'

import { Languages, Globe2, LineChart, Bot } from 'lucide-react'
import type { Dict } from './i18n'

const ICONS = [Languages, Globe2, LineChart, Bot]

export default function LpAuthority({ t }: { t: Dict }) {
  const a = t.authority
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{a.title}</h2>
        <p className="section-subtitle">{a.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.items.map((p, i) => {
            const Icon = ICONS[i] ?? Languages
            return (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{p.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

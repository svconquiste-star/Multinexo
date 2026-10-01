'use client'

import type { Dict } from './i18n'

export default function LpHowItWorks({ t }: { t: Dict }) {
  const h = t.how
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">{h.title}</h2>
        <p className="section-subtitle">{h.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {h.steps.map((s, i) => (
            <div key={s.title} className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

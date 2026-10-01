'use client'

import { Star, Quote } from 'lucide-react'
import type { Dict } from './i18n'

const logos = [
  { src: '/images/clients/bravo-bet.svg', alt: 'Bravo Bet', dark: true },
  { src: '/images/clients/iq-option-expert.jpg', alt: 'IQ Option — Expert & Affiliate' },
  { src: '/images/clients/seu-phone.jpg', alt: 'Seu Phone', round: true },
  { src: '/images/clients/rei-do-sabor.jpg', alt: 'Rei do Sabor', round: true },
]

export default function LpProof({ t }: { t: Dict }) {
  const p = t.proof
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">{p.title}</h2>

        {/* Métricas */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-4 mb-14">
          {p.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">{m.value}</p>
              <p className="text-gray-600 text-sm font-medium">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {p.testimonials.map((tst) => (
            <div key={tst.segment} className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote size={28} className="text-purple-200" />
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{tst.quote}&rdquo;</p>
              <p className="font-bold text-gray-900 text-sm">{tst.segment}</p>
            </div>
          ))}
        </div>

        {/* Logos */}
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">
          {p.logosCaption}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {logos.map((l) =>
            l.dark ? (
              <span
                key={l.src}
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-3 opacity-90"
              >
                <img src={l.src} alt={l.alt} loading="lazy" className="h-5 w-auto object-contain" />
              </span>
            ) : (
              <img
                key={l.src}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className={
                  l.round
                    ? 'h-12 w-12 rounded-full object-cover grayscale opacity-80'
                    : 'h-9 w-auto object-contain opacity-80'
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

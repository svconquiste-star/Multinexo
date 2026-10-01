'use client'

import { ArrowRight, Globe, MessageSquare } from 'lucide-react'
import WhatsAppLink from '../WhatsAppLink'
import { waUrl } from './wa'
import type { Dict } from './i18n'

export default function LpHero({ t }: { t: Dict }) {
  const h = t.hero
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48" />

      <div className="max-w-4xl mx-auto relative z-10 text-white text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
          <Globe size={18} />
          <span className="text-sm font-semibold">{h.eyebrow}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{h.h1}</h1>

        <p
          className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto [&_strong]:text-white [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: h.subheadHtml }}
        />

        <p
          className="text-sm md:text-base text-white/80 mb-8 max-w-2xl mx-auto [&_strong]:text-white [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: h.publicsHtml }}
        />

        <div className="flex justify-center">
          <WhatsAppLink
            href={waUrl(t.wa.default)}
            location="lp-europa-hero"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare size={20} />
            <span>{h.cta}</span>
            <ArrowRight size={20} />
          </WhatsAppLink>
        </div>
        <p className="text-sm text-white/80 mt-3 mb-10">{h.microcopy}</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {h.countries.map((c) => (
            <span
              key={c}
              className="text-sm font-medium bg-white/10 border border-white/20 px-4 py-2 rounded-full"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

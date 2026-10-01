'use client'

import { ArrowRight, MessageSquare } from 'lucide-react'
import WhatsAppLink from '../WhatsAppLink'
import { waUrl } from './wa'
import type { Dict } from './i18n'

export default function LpCta({ t }: { t: Dict }) {
  const c = t.cta
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full -mr-48 -mt-48" />

      <div className="max-w-3xl mx-auto relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">{c.title}</h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">{c.subtext}</p>

        <div className="flex justify-center">
          <WhatsAppLink
            href={waUrl(t.wa.default)}
            location="lp-europa-cta-final"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare size={20} />
            <span>{c.button}</span>
            <ArrowRight size={20} />
          </WhatsAppLink>
        </div>
        <p className="text-sm text-white/70 mt-3">{c.microcopy}</p>
      </div>
    </section>
  )
}

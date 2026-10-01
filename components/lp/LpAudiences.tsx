'use client'

import { Building2, Store, Megaphone, GraduationCap, Sparkles, ArrowRight } from 'lucide-react'
import WhatsAppLink from '../WhatsAppLink'
import { waUrl } from './wa'
import type { Dict } from './i18n'

const ICONS: Record<string, any> = {
  empresa: Building2,
  'loja-local': Store,
  afiliado: Megaphone,
  expert: GraduationCap,
  influencer: Sparkles,
}

const COLORS: Record<string, string> = {
  empresa: 'from-purple-500 to-purple-600',
  'loja-local': 'from-pink-500 to-pink-600',
  afiliado: 'from-blue-500 to-blue-600',
  expert: 'from-emerald-500 to-emerald-600',
  influencer: 'from-amber-500 to-orange-500',
}

export default function LpAudiences({ t }: { t: Dict }) {
  const a = t.audiences
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{a.title}</h2>
        <p className="section-subtitle">{a.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {a.items.map((item) => {
            const Icon = ICONS[item.key] ?? Building2
            return (
              <div
                key={item.key}
                className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${COLORS[item.key]} flex items-center justify-center mb-5`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-5 flex-1">{item.text}</p>
                <WhatsAppLink
                  href={waUrl(t.wa[item.key])}
                  location={`lp-europa-publico-${item.key}`}
                  className="inline-flex items-center gap-1.5 text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors"
                >
                  {a.cta}
                  <ArrowRight size={16} />
                </WhatsAppLink>
              </div>
            )
          })}

          {/* Card de reforço: qualquer outro segmento */}
          <div className="flex flex-col justify-center bg-gradient-primary rounded-2xl p-7 text-white">
            <h3 className="text-xl font-bold mb-2">{a.other.title}</h3>
            <p className="text-white/90 leading-relaxed text-[15px] mb-5 flex-1">{a.other.text}</p>
            <WhatsAppLink
              href={waUrl(t.wa.default)}
              location="lp-europa-publico-outro"
              className="inline-flex items-center gap-1.5 font-semibold text-sm text-white hover:underline"
            >
              {a.other.cta}
              <ArrowRight size={16} />
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Target, Filter, BarChart3, PenLine, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react'
import WhatsAppLink from '../WhatsAppLink'
import { waUrl } from './wa'
import type { Dict } from './i18n'

const ICONS = [Target, Filter, BarChart3, PenLine]

export default function LpNicheExpert({ t }: { t: Dict }) {
  const n = t.niche
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 opacity-10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/15 text-emerald-300 px-4 py-2 rounded-full mb-5 text-sm font-semibold">
            <TrendingUp size={16} />
            <span>{n.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight max-w-4xl mx-auto">
            {n.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{n.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {n.deliverables.map((item, i) => {
            const Icon = ICONS[i] ?? Target
            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-emerald-500/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-3">{n.authorityTitle}</h3>
            <p className="text-gray-300 leading-relaxed">{n.authorityText}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-4">{n.forWhomTitle}</h3>
            <div className="flex flex-wrap gap-2.5">
              {n.forWhom.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-white/5 border border-white/10 text-gray-200 px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppLink
            href={waUrl(t.wa.nicho)}
            location="lp-europa-nicho-forex-igaming"
            className="inline-flex items-center justify-center gap-3 px-9 py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={22} />
            <span>{n.cta}</span>
            <ArrowRight size={20} />
          </WhatsAppLink>
          <p className="text-gray-400 text-sm mt-4">{n.microcopy}</p>
        </div>
      </div>
    </section>
  )
}

'use client'

import type { ReactNode } from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import WhatsAppLink from '@/components/WhatsAppLink'

// Hero da landing do Google Ads e da home (mesma copy nas duas): a palavra-chave
// está no H1 e a oferta é só tráfego pago, página de captação e dashboard.
// `location` identifica o botão nos relatórios ('ads-hero' na landing, 'hero' na home).
// `children` (opcional) aparece logo abaixo do botão: a landing coloca ali a faixa de prova.
// No celular o Hero é compacto, para título, frase e botão caberem na primeira tela.
const TITULO_LANDING = 'Gestor de Tráfego Pago para atrair mais clientes ao seu negócio'
const FRASE_LANDING = (
  <>
    Cuido das campanhas, da página e do rastreamento no GA4 para você saber{' '}
    <strong className="text-white">quanto custa cada cliente</strong>, no Meta, Google, TikTok, LinkedIn e Kwai Ads.
  </>
)

// `title`/`subtitle`: a home usa os próprios, para não disputar a mesma busca com a landing.
export default function AdsHero({
  location = 'ads-hero',
  title = TITULO_LANDING,
  subtitle = FRASE_LANDING,
  children,
}: {
  location?: string
  title?: string
  subtitle?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-white">
          <div className="hidden sm:inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Zap size={18} />
            <span className="text-sm font-semibold">Daniel Aguiar • Betim/MG — atendo todo o Brasil</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-xl text-white text-opacity-90 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
            <WhatsAppLink
              href="https://wa.me/5531993121211?text=Olá!%20Quero%20uma%20análise%20gratuita%20do%20meu%20tráfego%20pago."
              location={location}
              className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Quero minha análise gratuita</span>
              <ArrowRight size={20} />
            </WhatsAppLink>
          </div>
          <p className="text-sm text-white text-opacity-80 mb-5">
            ⚡ Atendimento direto no WhatsApp • Análise gratuita • Sem compromisso
          </p>

          {children}

          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white border-opacity-20">
            <div>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold break-words">5 canais</p>
              <p className="text-white text-opacity-80">Meta, Google e mais</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold break-words">Dashboard</p>
              <p className="text-white text-opacity-80">Resultados à vista</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold break-words">WhatsApp</p>
              <p className="text-white text-opacity-80">Atendimento direto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

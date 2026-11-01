'use client'

import { ArrowRight, Zap } from 'lucide-react'
import WhatsAppLink from '@/components/WhatsAppLink'

// Hero da página para o Google Ads: a palavra-chave está no H1 e a oferta é só
// tráfego pago, página de captação e dashboard.
export default function AdsHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-white">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Zap size={18} />
            <span className="text-sm font-semibold">Daniel Aguiar • Betim/MG — atendo todo o Brasil</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Gestor de Tráfego Pago: mais clientes todos os dias para o seu negócio
          </h1>

          <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed max-w-2xl">
            Eu crio e gerencio as suas campanhas no <strong className="text-white">Google Ads e no Meta Ads</strong>, com
            página de captação e <strong className="text-white">dashboard</strong> para você ver, em tempo real, o que traz
            cliente de verdade. Sem achismo.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
            <WhatsAppLink
              href="https://wa.me/5531993121211?text=Olá!%20Quero%20uma%20análise%20gratuita%20do%20meu%20tráfego%20pago."
              location="ads-hero"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Quero minha análise gratuita</span>
              <ArrowRight size={20} />
            </WhatsAppLink>
          </div>
          <p className="text-sm text-white text-opacity-80 mb-12">
            ⚡ Resposta em minutos • Análise gratuita • Sem compromisso
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white border-opacity-20">
            <div>
              <p className="text-3xl font-bold">+40</p>
              <p className="text-white text-opacity-80">Negócios atendidos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">Google + Meta</p>
              <p className="text-white text-opacity-80">Campanhas nos dois</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-white text-opacity-80">Atendimento com IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

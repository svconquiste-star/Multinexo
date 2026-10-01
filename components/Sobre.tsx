'use client'

import { BarChart3, Bot, LayoutDashboard, Lightbulb, ArrowRight } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink'

const WHATS =
  'https://wa.me/5531993121211?text=' +
  encodeURIComponent('Olá, Daniel! Vi o seu site e quero uma análise gratuita para o meu negócio.')

const qualidades = [
  'Estratégia antes de tudo — cada real investido segue um plano com objetivo claro, nada de impulsionar por impulsionar.',
  'Orientado a dados — acompanho cada resultado em dashboard, em tempo real, e decido por números.',
  'IA como vantagem — automações que atendem e qualificam seus leads 24/7, sem aumentar a sua operação.',
  'Atendimento próximo — você fala direto comigo, com transparência e foco no seu resultado.',
]

const servicos = [
  { icon: BarChart3, title: 'Tráfego & Estratégia' },
  { icon: Bot, title: 'IA como Vantagem' },
  { icon: LayoutDashboard, title: 'Criação de Dashboard' },
  { icon: Lightbulb, title: 'Consultoria' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Coluna identidade */}
        <div className="lg:col-span-2">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-4xl font-extrabold shadow-lg mb-6">
            DA
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Daniel Aguiar</h2>
          <p className="text-purple-600 font-semibold mb-6">Estrategista de Marketing Digital</p>

          <div className="grid grid-cols-3 gap-4 max-w-sm">
            <div>
              <p className="text-2xl font-bold text-gray-900">+40</p>
              <p className="text-xs text-gray-500">Negócios escalados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3x</p>
              <p className="text-xs text-gray-500">ROI médio em tráfego</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">24/7</p>
              <p className="text-xs text-gray-500">Atendimento com IA</p>
            </div>
          </div>
        </div>

        {/* Coluna conteúdo */}
        <div className="lg:col-span-3">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Eu ajudo negócios a atrair mais clientes todos os dias com um sistema completo de
            marketing — <strong className="text-gray-900">tráfego, estratégia, automação com IA e
            dashboards</strong>. Atendo negócios locais, empresas, experts, afiliados e influencers,
            no Brasil e no exterior, sempre de forma remota e orientada a resultado.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Meu trabalho não é dar sorte uma vez: é construir uma máquina previsível de clientes,
            com cada real medido e cada decisão guiada por dados.
          </p>

          {/* Qualidades */}
          <ul className="space-y-3 mb-8">
            {qualidades.map((q) => (
              <li key={q} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{q}</span>
              </li>
            ))}
          </ul>

          {/* Serviços resumo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {servicos.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="flex flex-col items-center text-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-4"
                >
                  <Icon size={22} className="text-purple-600" />
                  <span className="text-xs font-semibold text-gray-700">{s.title}</span>
                </div>
              )
            })}
          </div>

          <WhatsAppLink
            href={WHATS}
            location="sobre"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Falar com o Daniel
            <ArrowRight size={18} />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}

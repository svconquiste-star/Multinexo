'use client'

import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

const cases = [
  {
    id: 1,
    title: 'Loja de Smartphone',
    description: 'Aumento de vendas com tráfego pago otimizado e automação de atendimento por IA para consultas de produtos.',
    metric: '+80%',
    metricLabel: 'Aumento em Vendas',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Agência de Empréstimo',
    description: 'Redução de custo por lead e mais aprovações com funis inteligentes e atendimento por IA 24/7.',
    metric: '-35%',
    metricLabel: 'Redução em CPL',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Clínicas de Estética e Odontologia',
    description: 'Mais agendamentos com automação de funis, chatbot de IA para pré-qualificação e gestão de tráfego focada em ROI.',
    metric: '+70%',
    metricLabel: 'Aumento em Agendamentos',
    color: 'from-green-500 to-emerald-500',
  },
]

const featured = [
  {
    href: '/cases/contatos-em-17-dias',
    badge: 'Case de contato',
    title: 'Mais de 440 contatos em 17 dias',
    text: '443 contatos a R$ 1,00 cada, de 1 a 17/06/2026, com prints do dashboard.',
  },
  {
    href: '/cases/midia-social-ia',
    badge: 'Case de produto',
    title: 'Máquina de conteúdo com IA',
    text: 'Sistema próprio que planeja, cria e publica no Instagram e no LinkedIn.',
  },
  {
    href: '/cases/lp-filtro-de-leads',
    badge: 'Case de projeto',
    title: 'LP com filtro de leads e banco de dados',
    text: 'Formulário de 2 etapas que qualifica o lead antes do WhatsApp.',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">O tipo de resultado que busco pra cada segmento</h2>
          <p className="section-subtitle">
            Exemplos do que costuma ser possível por segmento — veja números de campanhas reais na seção abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className={`bg-gradient-to-br ${caseItem.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-white text-opacity-90">{caseItem.description}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                <div className="flex items-center space-x-3">
                  <TrendingUp size={24} />
                  <div>
                    <p className="text-3xl font-bold">{caseItem.metric}</p>
                    <p className="text-sm text-white text-opacity-80">{caseItem.metricLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featured.map((f) => (
            <div key={f.href} className="rounded-2xl bg-gray-950 text-white p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-300">{f.badge}</p>
              <p className="mt-2 text-2xl font-bold">{f.title}</p>
              <p className="mt-2 text-gray-300">{f.text}</p>
              <Link
                href={f.href}
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 font-semibold"
              >
                Ver o case completo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

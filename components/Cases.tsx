'use client'

import { TrendingUp } from 'lucide-react'

const cases = [
  {
    id: 1,
    title: 'Loja de Smartphone',
    description: 'Aumentamos as vendas em 145% com tráfego pago otimizado e automação de atendimento IA para consultas de produtos.',
    metric: '+145%',
    metricLabel: 'Aumento em Vendas',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Agência de Empréstimo',
    description: 'Reduzimos custo por lead em 42% e aumentamos aprovações com funis inteligentes e atendimento IA 24/7.',
    metric: '-42%',
    metricLabel: 'Redução em CPL',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Clínicas de Estética e Odontologia',
    description: 'Aumentamos agendamentos em 128% com automação de funis, chatbot IA para pré-qualificação e gestão de tráfego focada em ROI.',
    metric: '+128%',
    metricLabel: 'Aumento em Agendamentos',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Cases de Sucesso</h2>
          <p className="section-subtitle">
            Veja como transformamos negócios com nossas soluções de marketing digital
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
      </div>
    </section>
  )
}

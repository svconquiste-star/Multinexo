'use client'

import { TrendingUp } from 'lucide-react'

const cases = [
  {
    id: 1,
    title: 'E-commerce de Moda',
    description: 'Aumentamos as vendas em 340% com gestão de tráfego otimizada e automação de email marketing.',
    metric: '+340%',
    metricLabel: 'Aumento em Vendas',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Agência de Viagens',
    description: 'Reduzimos custo por lead em 65% e aumentamos conversões com atendimento IA 24/7.',
    metric: '-65%',
    metricLabel: 'Redução em CPL',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'SaaS B2B',
    description: 'Triplicamos leads qualificados com automação de funis e agentes IA para pré-qualificação.',
    metric: '+300%',
    metricLabel: 'Aumento em Leads',
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

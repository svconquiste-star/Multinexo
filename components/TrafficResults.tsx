'use client'

import { ShoppingCart, Smartphone, UserPlus, MessageSquare } from 'lucide-react'

type Result = {
  id: number
  objective: string
  icon: typeof ShoppingCart
  highlight: string
  highlightLabel: string
  stats: { value: string; label: string }[]
  color: string
  image: string
}

const results: Result[] = [
  {
    id: 1,
    objective: 'Vendas — E-commerce',
    icon: ShoppingCart,
    highlight: '40',
    highlightLabel: 'Vendas geradas',
    stats: [
      { value: 'R$ 38,43', label: 'Custo por venda' },
      { value: 'R$ 1.537', label: 'Investido' },
      { value: '50 mil', label: 'Impressões' },
    ],
    color: 'from-purple-500 to-purple-600',
    image: '/images/results/vendas.png',
  },
  {
    id: 2,
    objective: 'Instalações de App',
    icon: Smartphone,
    highlight: '377',
    highlightLabel: 'Instalações',
    stats: [
      { value: 'R$ 2,87', label: 'Custo por instalação' },
      { value: 'R$ 1.082', label: 'Investido' },
      { value: '42 mil', label: 'Impressões' },
    ],
    color: 'from-pink-500 to-pink-600',
    image: '/images/results/app.png',
  },
  {
    id: 3,
    objective: 'Geração de Leads — Registros',
    icon: UserPlus,
    highlight: '1.309',
    highlightLabel: 'Registros concluídos',
    stats: [
      { value: 'R$ 5,91', label: 'Custo por registro' },
      { value: 'R$ 7.730', label: 'Investido' },
      { value: '508 mil', label: 'Impressões' },
    ],
    color: 'from-blue-500 to-blue-600',
    image: '/images/results/registros.png',
  },
  {
    id: 4,
    objective: 'Geração de Contatos',
    icon: MessageSquare,
    highlight: '562',
    highlightLabel: 'Contatos no site',
    stats: [
      { value: 'R$ 1,23', label: 'Custo por contato' },
      { value: '10,12%', label: 'CTR' },
      { value: '1.212', label: 'Cliques no link' },
    ],
    color: 'from-emerald-500 to-green-600',
    image: '/images/results/contatos.png',
  },
]

export default function TrafficResults() {
  return (
    <section id="resultados" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Provas reais de campanhas que gerenciei</h2>
          <p className="section-subtitle">
            Resultados extraídos diretamente do Gerenciador de Anúncios (Meta) em campanhas reais que rodei para clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {results.map((result) => {
            const Icon = result.icon
            return (
              <div
                key={result.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                {/* Print real da campanha */}
                <div className="bg-gray-100 p-4 border-b border-gray-200 flex items-center justify-center h-56">
                  <img
                    src={result.image}
                    alt={`Print real de campanha: ${result.objective}`}
                    className="max-h-full max-w-full w-auto object-contain rounded-lg shadow-sm"
                    loading="lazy"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${result.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{result.objective}</h3>
                </div>

                <div className="mb-6">
                  <p className={`text-5xl font-extrabold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                    {result.highlight}
                  </p>
                  <p className="text-gray-600 font-semibold mt-1">{result.highlightLabel}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 mt-auto">
                  {result.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          * Dados reais de campanhas gerenciadas por mim. Métricas conforme Gerenciador de Anúncios da Meta.
        </p>
      </div>
    </section>
  )
}

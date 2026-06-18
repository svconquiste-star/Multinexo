'use client'

import { LayoutDashboard, Filter, LineChart, MapPin, CalendarClock } from 'lucide-react'

const boards = [
  {
    id: 1,
    image: '/images/dashboards/funil.png',
    icon: Filter,
    title: 'Funil de conversão em tempo real',
    description: 'Do investimento ao contato: impressões, cliques, página de destino e custo por resultado em uma visão clara.',
  },
  {
    id: 2,
    image: '/images/dashboards/tendencia.png',
    icon: LineChart,
    title: 'Tendência diária e perfil do público',
    description: 'Evolução das campanhas dia a dia e quem está comprando — por gênero, plataforma e dispositivo.',
  },
  {
    id: 3,
    image: '/images/dashboards/mapa.png',
    icon: MapPin,
    title: 'Distribuição geográfica e ranking de criativos',
    description: 'Onde estão seus resultados no mapa do Brasil e quais anúncios trazem o melhor custo por lead.',
  },
  {
    id: 4,
    image: '/images/dashboards/relatorio.png',
    icon: CalendarClock,
    title: 'Relatório diário completo',
    description: 'Investimento, CPM, CTR, CPC, custo por contato e ROAS detalhados por dia — sem planilha confusa.',
  },
]

export default function DashboardShowcase() {
  return (
    <section id="dashboards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-purple-300 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            <LayoutDashboard size={16} />
            <span>Criação de Dashboard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Dashboards que eu crio para meus clientes
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Você acompanha cada real investido e cada resultado em tempo real, com painéis sob medida. Decisões com dados, não com achismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {boards.map((board) => {
            const Icon = board.icon
            return (
              <div
                key={board.id}
                className="bg-gray-800/60 rounded-2xl shadow-xl border border-white/10 overflow-hidden flex flex-col h-full hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="bg-black/40 p-3 border-b border-white/10 flex items-center justify-center h-60">
                  <img
                    src={board.image}
                    alt={board.title}
                    className="max-h-full max-w-full w-auto object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{board.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{board.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Dashboards reais desenvolvidos por mim com dados de campanhas que gerencio.
        </p>
      </div>
    </section>
  )
}

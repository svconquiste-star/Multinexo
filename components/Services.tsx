'use client'

import { BarChart3, Bot, LayoutDashboard, Lightbulb } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Tráfego & Estratégia',
    description: 'Gestão de tráfego pago com foco em escala e ROI real. Estruturo campanhas no Google e Meta Ads guiadas por estratégia — não por achismo — para gerar clientes de forma previsível.',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 2,
    title: 'IA como Vantagem Competitiva',
    description: 'Automatizo atendimento, captação e qualificação com Inteligência Artificial. Sua operação responde em segundos, 24/7, enquanto você foca no que realmente faz o negócio crescer.',
    icon: Bot,
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Criação de Dashboard',
    description: 'Dashboards sob medida que centralizam suas métricas de tráfego, vendas e atendimento. Você acompanha cada resultado em tempo real e toma decisões com dados — sem planilhas confusas.',
    icon: LayoutDashboard,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 4,
    title: 'Consultoria',
    description: 'Consultoria estratégica de marketing para destravar o seu crescimento. Analiso seu funil, posicionamento e canais e entrego um plano claro de ação focado em resultado.',
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Como eu escalo o seu negócio</h2>
          <p className="section-subtitle">
            Tráfego, IA, dados e estratégia trabalhando juntos para transformar o seu marketing em crescimento previsível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <a href="#contact" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
                  Quero isso no meu negócio
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Por que trabalhar comigo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎯</div>
              <div>
                <p className="text-xl font-bold mb-2">Estratégia antes de tudo</p>
                <p className="text-white text-opacity-90">Nada de impulsionar por impulsionar — cada real investido segue um plano com objetivo claro</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🤖</div>
              <div>
                <p className="text-xl font-bold mb-2">IA a seu favor</p>
                <p className="text-white text-opacity-90">Automações que atendem e qualificam seus leads 24/7, sem aumentar sua operação</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📊</div>
              <div>
                <p className="text-xl font-bold mb-2">Tudo medido em dashboard</p>
                <p className="text-white text-opacity-90">Você enxerga em tempo real para onde vai o investimento e o retorno que ele gera</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📈</div>
              <div>
                <p className="text-xl font-bold mb-2">Foco em crescimento previsível</p>
                <p className="text-white text-opacity-90">O objetivo não é dar sorte uma vez, é construir uma máquina que gera clientes todo dia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

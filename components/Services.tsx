'use client'

import { BarChart3, Zap, MessageCircle } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Gestão de Tráfego',
    description: 'Otimize suas campanhas de publicidade com estratégias baseadas em dados. Maximize ROI e minimize custos com nossa expertise em Google Ads, Facebook Ads e plataformas de tráfego pago.',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Automações com IA',
    description: 'Automatize processos repetitivos e aumente a eficiência operacional. Desde email marketing até funis de vendas, nossa IA trabalha 24/7 para converter leads em clientes.',
    icon: Zap,
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Atendimento com Agentes IA',
    description: 'Suporte ao cliente inteligente e disponível 24/7. Nossos agentes de IA resolvem 80% das dúvidas automaticamente, melhorando satisfação e reduzindo custos operacionais.',
    icon: MessageCircle,
    color: 'from-blue-500 to-blue-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas de marketing digital com inteligência artificial para transformar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Saiba Mais
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">+500%</p>
              <p className="text-lg text-white text-opacity-90">Aumento Médio em Conversões</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">-60%</p>
              <p className="text-lg text-white text-opacity-90">Redução em Custos Operacionais</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-lg text-white text-opacity-90">Suporte e Automação Contínua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

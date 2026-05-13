'use client'

import { BarChart3, Zap, MessageCircle } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Automação com IA',
    description: 'Automatizamos atendimento, captação e vendas com Inteligência Artificial. Estruturamos funis inteligentes que geram clientes todos os dias, reduzindo operação manual e aumentando previsibilidade.',
    icon: Zap,
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 2,
    title: 'Tráfego Pago Focado em ROI',
    description: 'Criamos estratégias de tráfego pago com foco em resultado real. Maximize conversões e minimize custos com nossa expertise em Google Ads, Facebook Ads e plataformas de publicidade.',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    title: 'Funis de Vendas Inteligentes',
    description: 'Estruturamos funis que convertem. Do primeiro contato até a venda, cada etapa é otimizada com IA para gerar clientes previsíveis e escalar seu negócio.',
    icon: MessageCircle,
    color: 'from-blue-500 to-blue-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">O Que Fazemos</h2>
          <p className="section-subtitle">
            Automatizamos atendimento, captação e vendas com IA. Criamos estratégias de tráfego pago focadas em ROI e estruturamos funis que geram clientes todos os dias.
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

                <a href="#contact" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
                  Saiba Mais
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
          <h3 className="text-3xl font-bold text-center mb-12">Nosso Diferencial</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">💡</div>
              <div>
                <p className="text-xl font-bold mb-2">Menos Operação Manual</p>
                <p className="text-white text-opacity-90">Automatizamos processos repetitivos para você focar no que importa</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📈</div>
              <div>
                <p className="text-xl font-bold mb-2">Mais Vendas e Escala</p>
                <p className="text-white text-opacity-90">Estruturamos funis que geram clientes previsíveis todos os dias</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🤖</div>
              <div>
                <p className="text-xl font-bold mb-2">IA Aplicada no Crescimento</p>
                <p className="text-white text-opacity-90">Inteligência artificial otimizando cada etapa do seu funil de vendas</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎯</div>
              <div>
                <p className="text-xl font-bold mb-2">Estratégia Focada em Resultado Real</p>
                <p className="text-white text-opacity-90">Cada ação é medida e otimizada para ROI máximo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

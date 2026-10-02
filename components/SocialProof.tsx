'use client'

import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Transformou completamente nossos resultados. Aumentamos as vendas de forma consistente com a gestão de tráfego.",
    segment: 'Loja de smartphones',
    local: 'São Paulo/SP',
  },
  {
    id: 2,
    quote: "Reduzimos bastante o custo por lead com os funis inteligentes. O atendimento por IA 24/7 aumentou muito nossas aprovações.",
    segment: 'Agência de empréstimo',
    local: 'Minas Gerais/MG',
  },
  {
    id: 3,
    quote: "Aumentamos muito nossos agendamentos com a automação de funis. Recomendo para clínicas que querem crescer.",
    segment: 'Clínica de estética',
    local: 'Rio de Janeiro/RJ',
  },
  {
    id: 4,
    quote: "O atendimento com IA resolveu grande parte das dúvidas dos pacientes automaticamente. A economia de tempo foi impressionante.",
    segment: 'Consultório odontológico',
    local: 'Bahia/BA',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">O que clientes relatam depois de trabalhar comigo</h2>
          <p className="section-subtitle">
            Feedback real de clientes, por segmento — identidade preservada a pedido deles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-end mb-4">
                <Quote size={32} className="text-purple-200" />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900 text-base">{testimonial.segment}</p>
                <p className="text-gray-600 text-sm">{testimonial.local}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <p className="text-4xl font-bold text-purple-600 mb-2">+40</p>
            <p className="text-gray-700 font-semibold">Negócios escalados</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-purple-600 mb-2">24/7</p>
            <p className="text-gray-700 font-semibold">Atendimento com IA</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-purple-600 mb-2">3x</p>
            <p className="text-gray-700 font-semibold">ROI médio em tráfego</p>
          </div>
        </div>
      </div>
    </section>
  )
}

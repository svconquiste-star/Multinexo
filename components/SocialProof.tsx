'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "A Multinexo transformou completamente nossos resultados. Aumentamos as vendas de forma consistente com a gestão de tráfego deles.",
    name: 'Carlos Silva',
    company: 'Loja de Smartphone - SP',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 2,
    quote: "Reduzimos bastante o custo por lead com os funis inteligentes. O atendimento por IA 24/7 aumentou muito nossas aprovações.",
    name: 'Ana Costa',
    company: 'Agência de Empréstimo - MG',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 3,
    quote: "Aumentamos muito nossos agendamentos com a automação de funis. Recomendo para clínicas que querem crescer.",
    name: 'Dr. Rafael Mendes',
    company: 'Clínica de Estética - RJ',
    rating: 5,
    avatar: '👨‍⚕️',
  },
  {
    id: 4,
    quote: "O chatbot IA deles resolveu 85% das dúvidas dos pacientes automaticamente. Economia de tempo e custo foi impressionante.",
    name: 'Dra. Juliana Rocha',
    company: 'Consultório Odontológico - BA',
    rating: 5,
    avatar: '👩‍⚕️',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">O que meus clientes dizem</h2>
          <p className="section-subtitle">
            Depoimentos de empresas que escalaram seus negócios trabalhando comigo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-4xl">{testimonial.avatar}</div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900 text-base">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
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
            <p className="text-4xl font-bold text-purple-600 mb-2">4.9★</p>
            <p className="text-gray-700 font-semibold">Avaliação média</p>
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

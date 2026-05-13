'use client'

const clients = [
  { id: 1, name: 'TechStart', logo: '🚀' },
  { id: 2, name: 'E-Shop Pro', logo: '🛍️' },
  { id: 3, name: 'Digital Hub', logo: '💻' },
  { id: 4, name: 'Growth Co', logo: '📈' },
  { id: 5, name: 'Smart Biz', logo: '🎯' },
]

const testimonials = [
  {
    id: 1,
    quote: "A Multinexo transformou completamente nossos resultados de marketing. Em apenas 3 meses, triplicamos nossas conversões e reduzimos custos operacionais em 50%.",
    name: 'Igor',
    company: 'Emprestimos Braz',
    rating: 5,
  },
  {
    id: 2,
    quote: "Com a gestão de tráfego da Multinexo, aumentamos nossas vendas em 280% em apenas 2 meses. O atendimento com IA também melhorou muito a experiência dos clientes.",
    name: 'Miacon',
    company: 'Tceel Iphones',
    rating: 5,
  },
  {
    id: 3,
    quote: "Excelente trabalho! A automação com IA implementada pela Multinexo revolucionou nosso processo de vendas. Recomendo muito para qualquer empresa que quer crescer.",
    name: 'Fernanda',
    company: 'Moda Intima',
    rating: 5,
  },
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Clientes</h2>
          <p className="section-subtitle">
            Empresas que confiam em nossas soluções de marketing digital
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-5xl mb-2">{client.logo}</div>
                <p className="text-sm font-semibold text-gray-700">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">O que nossos clientes dizem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

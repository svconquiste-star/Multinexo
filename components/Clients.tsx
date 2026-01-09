'use client'

const clients = [
  { id: 1, name: 'TechStart', logo: '🚀' },
  { id: 2, name: 'E-Shop Pro', logo: '🛍️' },
  { id: 3, name: 'Digital Hub', logo: '💻' },
  { id: 4, name: 'Growth Co', logo: '📈' },
  { id: 5, name: 'Smart Biz', logo: '🎯' },
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

        {/* Testimonial */}
        <div className="mt-20 bg-white rounded-2xl p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              "A Multinexo transformou completamente nossos resultados de marketing. Em apenas 3 meses, triplicamos nossas conversões e reduzimos custos operacionais em 50%."
            </p>
            <div>
              <p className="font-bold text-gray-900">João Silva</p>
              <p className="text-gray-600">CEO, TechStart Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

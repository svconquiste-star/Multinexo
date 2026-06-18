'use client'

type Client = {
  id: number
  name: string
  logo?: string
  round?: boolean
  dark?: boolean
}

const clients: Client[] = [
  { id: 1, name: 'Bravo Bet', logo: '/images/clients/bravo-bet.svg', dark: true },
  { id: 2, name: 'Seu Phone Betim', logo: '/images/clients/seu-phone.jpg', round: true },
  { id: 3, name: 'Rei do Sabor Hamburgueria', logo: '/images/clients/rei-do-sabor.jpg', round: true },
  { id: 4, name: 'C3 Empréstimo' },
  { id: 5, name: 'CredTop' },
  { id: 6, name: 'Empréstimo Braz' },
  { id: 7, name: 'Hamburguer Irmão' },
  { id: 8, name: 'Consultório Bem de Vida' },
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Quem já confiou no meu trabalho</h2>
          <p className="section-subtitle">
            Negócios locais e experts que escalaram com tráfego, estratégia e IA
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className={`flex items-center justify-center h-32 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 ${
                client.dark ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              {client.logo ? (
                client.round ? (
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-16 w-16 rounded-full object-cover shadow-sm"
                      loading="lazy"
                    />
                    <p className="text-center text-xs font-semibold text-gray-700 leading-tight">{client.name}</p>
                  </div>
                ) : (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full w-auto object-contain"
                    loading="lazy"
                  />
                )
              ) : (
                <p className="text-center text-lg font-bold text-gray-800">{client.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

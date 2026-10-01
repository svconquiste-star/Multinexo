'use client'

// Faixa de prova social logo abaixo do Hero (acima da dobra).
const logos = [
  { src: '/images/clients/bravo-bet.svg', alt: 'Bravo Bet', dark: true },
  { src: '/images/clients/iq-option-expert.jpg', alt: 'IQ Option — Expert & Affiliate' },
  { src: '/images/clients/seu-phone.jpg', alt: 'Seu Phone Betim', round: true },
  { src: '/images/clients/rei-do-sabor.jpg', alt: 'Rei do Sabor Hamburgueria', round: true },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Quem já confia no meu trabalho
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {logos.map((l) =>
            l.dark ? (
              <span
                key={l.src}
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-3 opacity-90 hover:opacity-100 transition"
              >
                <img src={l.src} alt={l.alt} loading="lazy" className="h-5 w-auto object-contain" />
              </span>
            ) : (
              <img
                key={l.src}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className={
                  l.round
                    ? 'h-12 w-12 rounded-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition'
                    : 'h-9 w-auto object-contain opacity-80 hover:opacity-100 transition'
                }
              />
            )
          )}
          <span className="text-sm text-gray-500">
            CredTop · Empréstimo Braz · Consultório Bem de Vida
          </span>
        </div>
      </div>
    </section>
  )
}

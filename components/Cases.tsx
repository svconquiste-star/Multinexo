'use client'

import Link from 'next/link'

// Cases reais (cada um tem página própria com prints). Os cartões ilustrativos
// com porcentagens (+80%, -35%, +70%) saíram: eram números sem comprovação.
const featured = [
  {
    href: '/cases/contatos-em-17-dias',
    badge: 'Case de contato',
    title: 'Mais de 440 contatos em 17 dias',
    text: '443 contatos a R$ 1,00 cada, de 1 a 17/06/2026, com prints do dashboard.',
  },
  {
    href: '/cases/midia-social-ia',
    badge: 'Case de produto',
    title: 'Máquina de conteúdo com IA',
    text: 'Sistema próprio que planeja, cria e publica no Instagram e no LinkedIn.',
  },
  {
    href: '/cases/lp-filtro-de-leads',
    badge: 'Case de projeto',
    title: 'LP com filtro de leads e banco de dados',
    text: 'Formulário de 2 etapas que qualifica o lead antes do WhatsApp.',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Cases e projetos</h2>
          <p className="section-subtitle">
            Resultados e sistemas que construí, com prints reais. Cada case tem a sua página com os detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((f) => (
            <div key={f.href} className="rounded-2xl bg-gray-950 text-white p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-300">{f.badge}</p>
              <p className="mt-2 text-2xl font-bold">{f.title}</p>
              <p className="mt-2 text-gray-300">{f.text}</p>
              <Link
                href={f.href}
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 font-semibold"
              >
                Ver o case completo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

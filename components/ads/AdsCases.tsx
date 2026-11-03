import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Prova social da página para o Google Ads: só 2 cases "limpos", sem nada de
// Forex, apostas ou crédito. Os prints já existem em public/images/cases/.
const cases = [
  {
    href: '/cases/contatos-em-17-dias',
    badge: 'Case de contato',
    title: 'Mais de 440 contatos em 17 dias',
    text: '443 contatos a R$ 1,00 cada, de 1 a 17/06/2026, com campanhas, página de captação e dashboard.',
    img: '/images/cases/contatos-em-17-dias/relatorio.png',
    alt: 'Relatório do dashboard com os resultados por dia de 1 a 17 de junho de 2026',
  },
  {
    href: '/cases/midia-social-ia',
    badge: 'Case de produto',
    title: 'Máquina de conteúdo com IA',
    text: 'Sistema próprio que planeja, cria e publica no Instagram e no LinkedIn, com calendário e fila de publicação.',
    img: '/images/cases/midia-social-ia/calendario.png',
    alt: 'Calendário de 30 dias e fila de publicação do sistema de conteúdo com IA',
  },
]

export default function AdsCases() {
  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Resultados e projetos reais</h2>
          <p className="section-subtitle">Prints de dashboards e sistemas que eu construí e acompanho.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="h-52 overflow-hidden bg-gray-950">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">{c.badge}</p>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{c.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-purple-600">
                  Ver o case completo <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowLeft, BarChart3, Compass, Rocket, CheckCircle2, MessageCircle } from 'lucide-react'
import WhatsAppLink from '@/components/WhatsAppLink'
import { waUrl } from '@/components/lp/wa'
import type { CaseStudy } from '@/lib/cases'

const IS_DEV = process.env.NODE_ENV !== 'production'

const PILLARS = [
  {
    icon: Compass,
    title: 'Estratégia',
    text: 'Campanhas planejadas para atrair o público certo, com oferta e meta definidas antes de investir.',
  },
  {
    icon: BarChart3,
    title: 'Inteligência de dados',
    text: 'Análise constante para identificar oportunidades e melhorar os resultados, com cada real acompanhado no dashboard.',
  },
  {
    icon: Rocket,
    title: 'Crescimento',
    text: 'Foco em oportunidades comerciais, vendas e faturamento, não só em cliques.',
  },
]

export default function CaseView({ study }: { study: CaseStudy }) {
  const wa = waUrl(study.whatsappMessage)
  const facts = study.client.facts.filter((f) => IS_DEV || !f.pending)
  const ui = study.ui ?? {}
  const pendingNote =
    ui.proofsPendingNote ??
    'Espaço do depoimento em vídeo e dos prints do Google Analytics: ainda sem arquivo. Só aparece aqui no localhost; na página publicada fica oculto.'

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Cabeçalho mínimo */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
            <ArrowLeft size={16} /> Voltar ao site
          </Link>
          <Link href="/" className="font-extrabold tracking-tight">
            Daniel Aguiar
          </Link>
          <WhatsAppLink
            href={wa}
            location={`case-${study.slug}-header`}
            className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold"
          >
            Falar no WhatsApp
          </WhatsAppLink>
        </div>
      </header>

      {/* 1. Título de impacto */}
      <section className="bg-gray-950 text-white px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pink-300 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            {ui.badge ?? 'Case real'}
            {study.period ? ` • ${study.period}` : ''}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            {study.headline.before}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {study.headline.highlight}
            </span>{' '}
            {study.headline.after}
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">{study.subhead}</p>
          <WhatsAppLink
            href={wa}
            location={`case-${study.slug}-hero`}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={20} /> Quero resultados assim
          </WhatsAppLink>
          <p className="mt-3 text-sm text-gray-400">Resposta em minutos • Análise gratuita • Sem compromisso</p>
        </div>
      </section>

      {/* 2. Sobre o cliente */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{ui.clientTitle ?? 'Sobre o cliente'}</h2>
          <p className="text-lg text-gray-600 mb-8">{study.client.intro}</p>
          {facts.length > 0 && (
            <dl className="grid sm:grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="rounded-xl border border-gray-200 p-5">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{f.label}</dt>
                  <dd className="mt-1 font-semibold">
                    {f.value}
                    {f.pending && (
                      <span className="ml-2 text-xs font-normal text-amber-600">(a confirmar, só aparece no localhost)</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-6 text-sm text-gray-500">
            {ui.clientNote ?? 'Cliente mantido em sigilo: nenhum nome, conta ou dado de contato aparece nesta página.'}
          </p>
        </div>
      </section>

      {/* 3. Desafio */}
      <section className="px-4 sm:px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">O desafio inicial</h2>
          <p className="text-lg text-gray-600 mb-8">{study.challenge.intro}</p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {study.challenge.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl bg-white border border-gray-200 p-5">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-pink-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Estratégia */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">A estratégia aplicada</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">{study.strategy.intro}</p>
          <ol className="grid md:grid-cols-2 gap-6">
            {study.strategy.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-gray-200 p-7 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.text}</p>
                {s.details && s.details.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-purple-600" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="rounded-2xl bg-gray-950 text-white p-7">
                <Icon className="text-pink-400" size={28} />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-gray-300">{ui.pillarTexts?.[i] ?? text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Resultados */}
      <section className="px-4 sm:px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">{ui.resultsTitle ?? 'Resultados conquistados'}</h2>
          {ui.resultsSubtitle ? (
            <p className="text-lg text-gray-600 mb-12 text-center">{ui.resultsSubtitle}</p>
          ) : study.period ? (
            <p className="text-lg text-gray-600 mb-12 text-center">Período analisado: {study.period}.</p>
          ) : (
            <p className="text-lg text-gray-600 mb-12 text-center">
              Números extraídos do Gerenciador de Anúncios da Meta.
              {IS_DEV && (
                <span className="block text-sm text-amber-600">
                  Período a confirmar (o print não mostra a data); só aparece no localhost.
                </span>
              )}
            </p>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {study.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white border border-gray-200 p-6 text-center shadow-sm">
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-2 font-semibold">{s.label}</p>
                {s.note && <p className="text-xs text-gray-500 mt-1">{s.note}</p>}
              </div>
            ))}
          </div>
          {study.funnel && (
            <div className="mt-10">
              <h3 className="text-xl font-bold text-center mb-4">{study.funnel.title}</h3>
              <ol className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {study.funnel.steps.map((f, i) => (
                  <li key={f.label} className="relative rounded-xl bg-gray-950 text-white p-5 text-center">
                    {!study.funnel?.hideIndex && <span className="text-xs text-pink-300">Etapa {i + 1}</span>}
                    <p className="text-2xl font-extrabold mt-1">{f.value}</p>
                    <p className="text-sm text-gray-300">{f.label}</p>
                    {f.note && <p className="text-xs text-gray-400 mt-1">{f.note}</p>}
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6 text-center">
            <p className="text-xl font-bold text-purple-900">{study.extended.value}</p>
            <p className="mt-1 text-sm text-purple-900/80">{study.extended.text}</p>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            {ui.disclaimer ??
              'Resultado deste cliente, neste período. Os números variam conforme o negócio, a oferta e o investimento; não há garantia de resultado.'}
          </p>
        </div>
      </section>

      {/* 6. Provas */}
      {(study.proofs.length > 0 || IS_DEV) && (
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">{ui.proofsTitle ?? 'Provas reais'}</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            {ui.proofsSubtitle ?? 'Prints do dashboard e do Gerenciador de Anúncios.'}
          </p>
          <div
            className={
              ui.proofsGrid === 'phones'
                ? 'grid grid-cols-1 sm:grid-cols-3 gap-6 items-start'
                : ui.proofsGrid
                  ? 'grid md:grid-cols-2 gap-8 items-start'
                  : 'space-y-10'
            }
          >
            {study.proofs.map((p) => (
              <figure key={p.src} className="rounded-2xl border border-gray-200 bg-gray-950 p-3 sm:p-4 shadow-sm">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`h-auto rounded-lg ${p.narrow ? 'mx-auto w-full max-w-[260px]' : 'w-full'}`}
                />
                <figcaption className="mt-3 text-sm text-gray-300 text-center">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
          {IS_DEV && pendingNote && (
            <p className="mt-8 text-center text-sm text-amber-600">{pendingNote}</p>
          )}
        </div>
      </section>
      )}

      {/* 7. CTA */}
      <section className="bg-gray-950 text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle2 className="mx-auto text-pink-400" size={36} />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            Quer descobrir como atrair mais clientes para a sua empresa?
          </h2>
          <p className="mt-4 text-gray-300">Conheça a estratégia da Multinexo e receba uma análise gratuita do seu cenário.</p>
          <WhatsAppLink
            href={wa}
            location={`case-${study.slug}-cta`}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={20} /> Quero minha análise gratuita
          </WhatsAppLink>
        </div>
      </section>

      <footer className="px-4 sm:px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Daniel Aguiar · Multinexo ·{' '}
        <Link href="/politica-de-privacidade" className="underline">
          Política de Privacidade
        </Link>
      </footer>
    </main>
  )
}

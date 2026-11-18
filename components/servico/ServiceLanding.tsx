import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react'
import Header from '@/components/Header'
import AdsHero from '@/components/ads/AdsHero'
import AdsProofCompact from '@/components/ads/AdsProofCompact'
import AdsCases from '@/components/ads/AdsCases'
import AdsInvestimento from '@/components/ads/AdsInvestimento'
import AdsSteps from '@/components/ads/AdsSteps'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import WhatsAppLink from '@/components/WhatsAppLink'
import LeadFormProvider from '@/components/lead/LeadFormProvider'
import { PAISES, type Servico } from '@/lib/servicos'
import { PRECO_TEXTO } from '@/lib/preco'

const SITE = 'https://multinexo.com.br'

// Página de serviço por plataforma (Meta Ads, Google Ads). A ordem prioriza a resposta
// direta (AEO/GEO) logo depois do Hero e mantém o mesmo formulário curto da landing.
export default function ServiceLanding({ s }: { s: Servico }) {
  const url = `${SITE}/${s.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#servico`,
        name: s.h1,
        serviceType: s.serviceType,
        description: s.description,
        url,
        provider: { '@id': `${SITE}/#business` },
        areaServed: PAISES.map((name) => ({ '@type': 'Country', name })),
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, availableLanguage: ['pt-BR'] },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: `Gestor de ${s.plataforma}`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { q: s.oQueE.pergunta, a: s.oQueE.resposta },
          { q: s.comparacao.pergunta, a: s.comparacao.resposta },
          ...s.faq,
        ].map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  return (
    <LeadFormProvider variant="short">
      <main className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <AdsHero location={`${s.slug}-hero`} title={s.h1} subtitle={s.heroFrase}>
          <AdsProofCompact />
        </AdsHero>

        {/* Resposta direta: o trecho que Google e IAs citam */}
        <section id="o-que-e" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Você está em" className="mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-purple-600">Início</Link> / <span>Gestor de {s.plataforma}</span>
            </nav>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{s.oQueE.pergunta}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{s.oQueE.resposta}</p>
          </div>
        </section>

        <section id="entregas" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">O que eu faço na sua conta de {s.plataforma}</h2>
              <p className="section-subtitle">Do planejamento à otimização, com cada etapa medida.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {s.entregas.map((e) => (
                <div key={e.titulo} className="rounded-xl bg-white border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{e.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{e.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="campanhas" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{s.campanhasTitulo}</h2>
              <ul className="space-y-4">
                {s.campanhas.map((c) => (
                  <li key={c.nome} className="flex gap-3">
                    <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">{c.nome}:</strong> {c.texto}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Mensuração e tracking</h2>
              <ul className="space-y-4">
                {s.mensuracao.map((m) => (
                  <li key={m} className="flex gap-3">
                    <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{m}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Acompanho CAC, ROAS, LTV, CTR e CPL num dashboard, para você saber quanto custa cada cliente e onde
                vale investir mais.
              </p>
            </div>
          </div>
        </section>

        <section id="brasil-e-exterior" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <Globe2 className="mx-auto text-purple-600 mb-4" size={36} />
            <h2 className="section-title">Gestor de {s.plataforma} para empresas no Brasil e no exterior</h2>
            <p className="section-subtitle">
              Atendo 100% online. As campanhas são segmentadas para o país, a cidade e o idioma do seu público, e a
              verba é cobrada pela plataforma na moeda da sua conta de anúncios.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {PAISES.map((p) => (
                <li key={p} className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Mora ou empreende na Europa?{' '}
              <Link href="/europa" className="text-purple-600 font-semibold hover:underline">
                Veja a página para brasileiros na Europa
              </Link>
              .
            </p>
          </div>
        </section>

        <AdsCases />
        <AdsInvestimento preco={PRECO_TEXTO} />

        <section id="comparacao" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{s.comparacao.pergunta}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{s.comparacao.resposta}</p>
            <Link
              href={`/${s.comparacao.outroSlug}`}
              className="mt-5 inline-flex items-center gap-2 text-purple-600 font-semibold hover:underline"
            >
              Conheça a gestão de {s.comparacao.outroNome}
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <AdsSteps
          title={`Como funciona a gestão de ${s.plataforma}`}
          subtitle="Você fala direto com quem cuida das campanhas, do primeiro contato ao resultado medido, em quatro etapas."
        />

        <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Perguntas frequentes sobre {s.plataforma}</h2>
            <div className="mt-10 space-y-6">
              {s.faq.map((f) => (
                <div key={f.q} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <WhatsAppLink
                href={`https://wa.me/5531993121211?text=${encodeURIComponent(s.whatsMsg)}`}
                location={`${s.slug}-faq`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Quero minha análise gratuita</span>
                <ArrowRight size={20} />
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </LeadFormProvider>
  )
}

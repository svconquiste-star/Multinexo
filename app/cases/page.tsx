import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormProvider from '@/components/lead/LeadFormProvider'
import { CASES, CASE_SLUGS } from '@/lib/cases'

const TITLE = 'Cases de tráfego pago, dashboards e IA | Daniel Aguiar'
const DESCRIPTION =
  'Cases reais de tráfego pago, dashboards e automação com IA: o que foi feito, os números e os prints de cada projeto.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/cases' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/cases', type: 'website', locale: 'pt_BR' },
  robots: { index: true, follow: true },
}

export default function CasesIndexPage() {
  const items = CASE_SLUGS.map((slug) => CASES[slug])
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Cases de tráfego pago, dashboards e IA',
    url: 'https://multinexo.com.br/cases',
    inLanguage: 'pt-BR',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.metaTitle,
        url: `https://multinexo.com.br/cases/${c.slug}`,
      })),
    },
  }

  return (
    <LeadFormProvider variant="short">
      <main className="min-h-screen bg-gray-50">
        <Header />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="section-title text-center">Cases de tráfego pago, dashboards e IA</h1>
            <p className="section-subtitle text-center">
              Projetos reais, com o que foi feito, os números e os prints de cada resultado. Os números de cada case
              são do período indicado, e os resultados variam conforme negócio, oferta e verba.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition flex flex-col"
                >
                  {c.ui?.badge && (
                    <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">{c.ui.badge}</p>
                  )}
                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    {c.headline.before} {c.headline.highlight} {c.headline.after}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">{c.subhead}</p>
                  {c.period && <p className="mt-3 text-sm text-gray-500">Período: {c.period}</p>}
                  <p className="mt-auto pt-4 font-semibold text-purple-600">Ver o case completo</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </LeadFormProvider>
  )
}

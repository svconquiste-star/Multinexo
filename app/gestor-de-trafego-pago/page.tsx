import type { Metadata } from 'next'
import AdsHeader from '@/components/ads/AdsHeader'
import AdsHero from '@/components/ads/AdsHero'
import AdsSteps from '@/components/ads/AdsSteps'
import AdsCases from '@/components/ads/AdsCases'
import AdsFit from '@/components/ads/AdsFit'
import AdsInvestimento from '@/components/ads/AdsInvestimento'
import AdsComparativo from '@/components/ads/AdsComparativo'
import BlogLinks from '@/components/BlogLinks'
import AdsProofCompact from '@/components/ads/AdsProofCompact'
import ServiceCatalog from '@/components/ServiceCatalog'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import LeadFormProvider from '@/components/lead/LeadFormProvider'
import { PRECO_TEXTO } from '@/lib/preco'
import { BUSINESS_ID, SITE_URL, breadcrumb, ogImage } from '@/lib/schema'

// Página de destino para os anúncios do Google Ads. Fica SEM as seções da home
// que podem pesar na análise da política de anúncios (Forex/Opções Binárias,
// apostas, crédito): só tráfego pago, página de captação e dashboard.
// Texto do honorário: lib/preco.ts (vale para esta página e para as páginas de serviço).

const TITLE = 'Gestor de Tráfego Pago | Daniel Aguiar'
const DESCRIPTION =
  'Gestor de tráfego pago: campanhas no Meta Ads, Google Ads, TikTok, LinkedIn e Kwai Ads, com GA4 e tracking para medir cada lead. Peça sua análise gratuita.'

const OG = ogImage('gestor-de-trafego-pago', 'Gestor de Tráfego Pago: Meta, Google, TikTok, LinkedIn e Kwai Ads')
const URL_PAGINA = `${SITE_URL}/gestor-de-trafego-pago`

// Schema próprio da landing: o serviço (ligado à empresa e à pessoa por @id) e a trilha
// de navegação. As perguntas (FAQPage) vêm do componente FAQ, com o mesmo texto visível.
// O preço entra porque aparece na página (seção "Quanto custa", lib/preco.ts).
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${URL_PAGINA}#servico`,
      name: 'Gestão de tráfego pago',
      serviceType: 'Gestão de tráfego pago no Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Kwai Ads',
      description: DESCRIPTION,
      url: URL_PAGINA,
      provider: { '@id': BUSINESS_ID },
      areaServed: ['Brasil', 'Portugal', 'Espanha', 'Irlanda', 'Reino Unido', 'Estados Unidos'].map((name) => ({
        '@type': 'Country',
        name,
      })),
      offers: {
        '@type': 'Offer',
        description: PRECO_TEXTO + ' (honorário de gestão; a verba de anúncios é paga direto às plataformas)',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 1000, priceCurrency: 'BRL' },
      },
    },
    breadcrumb([
      { name: 'Início', path: '/' },
      { name: 'Gestor de tráfego pago', path: '/gestor-de-trafego-pago' },
    ]),
  ],
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/gestor-de-trafego-pago' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/gestor-de-trafego-pago',
    siteName: 'Multinexo',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG.url] },
  robots: { index: true, follow: true },
}

export default function GestorDeTrafegoPago() {
  return (
    <LeadFormProvider variant="short">
      <main className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <AdsHeader />
        <AdsHero>
          <AdsProofCompact />
        </AdsHero>
        <AdsCases />
        <ServiceCatalog showSeo={false} title="Serviço de tráfego pago: o que você recebe" />
        <AdsFit />
        <AdsComparativo />
        <AdsInvestimento preco={PRECO_TEXTO} />
        <AdsSteps />
        <BlogLinks />
        <CTA />
        <FAQ />
        <Footer homeHref="/gestor-de-trafego-pago" />
        <FloatingWhatsApp />
      </main>
    </LeadFormProvider>
  )
}

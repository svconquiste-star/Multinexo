import type { Metadata } from 'next'
import AdsHeader from '@/components/ads/AdsHeader'
import AdsHero from '@/components/ads/AdsHero'
import AdsSteps from '@/components/ads/AdsSteps'
import AdsCases from '@/components/ads/AdsCases'
import AdsFit from '@/components/ads/AdsFit'
import AdsInvestimento from '@/components/ads/AdsInvestimento'
import AdsProofCompact from '@/components/ads/AdsProofCompact'
import ServiceCatalog from '@/components/ServiceCatalog'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import LeadFormProvider from '@/components/lead/LeadFormProvider'
import { PRECO_TEXTO } from '@/lib/preco'

// Página de destino para os anúncios do Google Ads. Fica SEM as seções da home
// que podem pesar na análise da política de anúncios (Forex/Opções Binárias,
// apostas, crédito): só tráfego pago, página de captação e dashboard.
// Texto do honorário: lib/preco.ts (vale para esta página e para as páginas de serviço).

const TITLE = 'Gestor de Tráfego Pago | Daniel Aguiar'
const DESCRIPTION =
  'Gestor de tráfego pago: campanhas no Meta Ads, Google Ads, TikTok, LinkedIn e Kwai Ads, com GA4 e tracking para medir cada lead. Peça sua análise gratuita.'

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
    images: [{ url: '/images/logo.png', width: 1536, height: 1024, alt: 'Daniel Aguiar — Gestor de Tráfego Pago' }],
  },
  robots: { index: true, follow: true },
}

export default function GestorDeTrafegoPago() {
  return (
    <LeadFormProvider variant="short">
      <main className="min-h-screen">
        <AdsHeader />
        <AdsHero>
          <AdsProofCompact />
        </AdsHero>
        <AdsCases />
        <ServiceCatalog showSeo={false} title="Serviço de tráfego pago: o que você recebe" />
        <AdsFit />
        <AdsInvestimento preco={PRECO_TEXTO} />
        <AdsSteps />
        <CTA />
        <FAQ />
        <Footer homeHref="/gestor-de-trafego-pago" />
        <FloatingWhatsApp />
      </main>
    </LeadFormProvider>
  )
}

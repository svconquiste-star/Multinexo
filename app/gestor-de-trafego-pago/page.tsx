import type { Metadata } from 'next'
import AdsHeader from '@/components/ads/AdsHeader'
import AdsHero from '@/components/ads/AdsHero'
import AdsSteps from '@/components/ads/AdsSteps'
import AdsCases from '@/components/ads/AdsCases'
import AdsFit from '@/components/ads/AdsFit'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import LeadFormProvider from '@/components/lead/LeadFormProvider'

// Página de destino para os anúncios do Google Ads. Fica SEM as seções da home
// que podem pesar na análise da política de anúncios (Forex/Opções Binárias,
// apostas, crédito): só tráfego pago, página de captação e dashboard.
const TITLE = 'Gestor de Tráfego Pago | Daniel Aguiar'
const DESCRIPTION =
  'Gestor de tráfego pago para o seu negócio: campanhas no Google Ads e Meta Ads, página de captação e dashboard. Peça sua análise gratuita.'

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
        <AdsHero />
        <AdsCases />
        <AdsFit />
        <Services
          title="Serviço de tráfego pago: o que você recebe"
          subtitle="Campanhas, página de captação, atendimento e dashboard em um só lugar."
        />
        <AdsSteps />
        <CTA />
        <FAQ />
        <Footer homeHref="/gestor-de-trafego-pago" />
        <FloatingWhatsApp />
      </main>
    </LeadFormProvider>
  )
}

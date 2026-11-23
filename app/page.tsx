import Header from '@/components/Header'
import AdsHero from '@/components/ads/AdsHero'
import AdsSteps from '@/components/ads/AdsSteps'
import TrustBar from '@/components/TrustBar'
import Sobre from '@/components/Sobre'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import TrafficResults from '@/components/TrafficResults'
import DashboardShowcase from '@/components/DashboardShowcase'
import AutomacoesIA from '@/components/AutomacoesIA'
import Clients from '@/components/Clients'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import LeadFormProvider from '@/components/lead/LeadFormProvider'
import AdsFit from '@/components/ads/AdsFit'
import ServiceCatalog from '@/components/ServiceCatalog'
import PerformanceB2BB2C from '@/components/PerformanceB2BB2C'
import BlogLinks from '@/components/BlogLinks'
import { BUSINESS_ID, OFFER_CATALOG } from '@/lib/schema'

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  hasOfferCatalog: OFFER_CATALOG,
}

// A home fala da marca e da visão ampla: marketing de performance (tráfego pago, SEO,
// GEO e dados) para B2B e B2C, alinhada ao <title> em app/layout.tsx. A busca
// "gestor de tráfego pago" fica com /gestor-de-trafego-pago, para as duas não
// disputarem a mesma palavra. As provas sobem para logo depois do Hero.
// A seção de experts/afiliados (Forex/OB) fica em /experts, fora da home.
export default function Home() {
  return (
    // Formulário curto (nome, WhatsApp e uma pergunta), como na landing do Google Ads.
    <LeadFormProvider variant="short">
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <Header />
      <AdsHero
        location="hero"
        title="Marketing de performance: mais clientes para a sua loja ou a sua empresa"
        subtitle={
          <>
            Anúncios no Instagram, Facebook, Google, TikTok e Kwai, o seu negócio no Google e nas respostas de IA,
            e um painel que mostra <strong className="text-white">quanto custa cada cliente</strong>.
          </>
        }
      />
      <TrustBar />
      <Cases />
      <TrafficResults />
      <Sobre />
      <PerformanceB2BB2C />
      <Services
        title="Como eu ajudo o seu negócio a crescer"
        subtitle="Atrair, atender e medir em um só lugar: tráfego pago, atendimento com IA, dashboard e consultoria."
      />
      <ServiceCatalog />
      <AdsFit />
      <AdsSteps
        title="Como funciona o trabalho comigo"
        subtitle="Do primeiro contato ao resultado medido, em quatro etapas."
      />
      <DashboardShowcase />
      <AutomacoesIA />
      <Clients />
      <BlogLinks />
      <CTA />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
    </LeadFormProvider>
  )
}

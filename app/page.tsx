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

// A home fala da marca e da visão ampla (tráfego pago, SEO, GEO e dados). A busca
// "gestor de tráfego pago" fica com /gestor-de-trafego-pago, para as duas não
// disputarem a mesma palavra. As provas sobem para logo depois do Hero.
// A seção de experts/afiliados (Forex/OB) fica em /experts, fora da home.
export default function Home() {
  return (
    // Formulário curto (nome, WhatsApp e uma pergunta), como na landing do Google Ads.
    <LeadFormProvider variant="short">
    <main className="min-h-screen">
      <Header />
      <AdsHero
        location="hero"
        title="Tráfego pago, SEO e GEO para o seu negócio ser encontrado e escolhido"
        subtitle={
          <>
            Anúncios no Meta, Google, TikTok, LinkedIn e Kwai, presença no Google e nas respostas de IAs, e um
            dashboard para você saber <strong className="text-white">quanto custa cada cliente</strong>.
          </>
        }
      />
      <TrustBar />
      <Cases />
      <TrafficResults />
      <Sobre />
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
      <CTA />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
    </LeadFormProvider>
  )
}

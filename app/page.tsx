import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Sobre from '@/components/Sobre'
import Services from '@/components/Services'
import ExpertAffiliate from '@/components/ExpertAffiliate'
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

export default function Home() {
  return (
    // Formulário curto (nome, WhatsApp e uma pergunta), como na landing do Google Ads.
    <LeadFormProvider variant="short">
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Sobre />
      <Services
        title="Serviço de tráfego pago e consultoria: como eu escalo o seu negócio"
        subtitle="Procurando uma agência de tráfego pago, uma empresa de tráfego pago ou uma consultoria de tráfego pago? Aqui você fala direto comigo: atrair, converter e medir, em um só lugar."
      />
      <AdsFit />
      <ExpertAffiliate />
      <Cases />
      <TrafficResults />
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

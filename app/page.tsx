import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import TrafficResults from '@/components/TrafficResults'
import DashboardShowcase from '@/components/DashboardShowcase'
import AutomacoesIA from '@/components/AutomacoesIA'
import Clients from '@/components/Clients'
import SocialProof from '@/components/SocialProof'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Cases />
      <TrafficResults />
      <DashboardShowcase />
      <AutomacoesIA />
      <Clients />
      <SocialProof />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

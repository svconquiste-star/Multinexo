import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import Clients from '@/components/Clients'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Cases />
      <Clients />
      <CTA />
      <Footer />
    </main>
  )
}

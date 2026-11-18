import type { Metadata } from 'next'
import Link from 'next/link'
import ExpertAffiliate from '@/components/ExpertAffiliate'
import Footer from '@/components/Footer'

// Página própria para experts e afiliados de Forex/Opções Binárias, fora da home:
// o tema não se mistura com a marca de serviço para empresas nem com a landing do
// Google Ads. Fica fora do índice do Google e do sitemap (tema sensível); serve
// para campanhas e links diretos. Os botões vão direto ao WhatsApp (sem formulário).
export const metadata: Metadata = {
  title: 'Estratégia para Experts e Afiliados | Daniel Aguiar',
  description: 'Estratégia, funil, tráfego e copy para experts e afiliados do mercado digital.',
  alternates: { canonical: '/experts' },
  robots: { index: false, follow: true },
}

export default function ExpertsPage() {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Daniel Aguiar
            </span>
            <span className="text-xs text-gray-500">Estrategista de Marketing Digital</span>
          </Link>
        </div>
      </header>
      <div className="pt-16">
        <ExpertAffiliate />
      </div>
      <Footer />
    </main>
  )
}

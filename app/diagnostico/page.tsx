import type { Metadata } from 'next'
import Diagnostico from '@/components/diagnostico/Diagnostico'
import { MARKETS, parseLocale, parseMarket } from '@/components/diagnostico/config'

// Página de destino dos anúncios: não deve aparecer em buscas. Sem Disallow no
// robots.ts de propósito — o crawler de revisão da Meta precisa conseguir abri-la.
export const metadata: Metadata = {
  title: 'Diagnóstico gratuito | Daniel Aguiar',
  description: 'Diagnóstico gratuito do seu tráfego pago, em 2 etapas rápidas.',
  alternates: { canonical: '/diagnostico' },
  robots: { index: false, follow: false },
}

type SearchParams = { [key: string]: string | string[] | undefined }

export default function DiagnosticoPage({ searchParams }: { searchParams: SearchParams }) {
  // Lê ?mercado= e ?lang= no servidor: o HTML já chega na moeda e no idioma certos.
  const market = parseMarket(searchParams.mercado)
  const locale = parseLocale(searchParams.lang) ?? MARKETS[market].defaultLocale
  return <Diagnostico initialMarket={market} initialLocale={locale} />
}

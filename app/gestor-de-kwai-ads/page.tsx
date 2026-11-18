import type { Metadata } from 'next'
import ServiceLanding from '@/components/servico/ServiceLanding'
import { SERVICOS } from '@/lib/servicos'

const s = SERVICOS['gestor-de-kwai-ads']

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: '/gestor-de-kwai-ads' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/gestor-de-kwai-ads',
    siteName: 'Multinexo',
    title: s.title,
    description: s.description,
    images: [{ url: '/images/logo.png', width: 1536, height: 1024, alt: s.h1 }],
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ServiceLanding s={s} />
}

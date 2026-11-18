import type { Metadata } from 'next'
import ServiceLanding from '@/components/servico/ServiceLanding'
import { SERVICOS } from '@/lib/servicos'

const s = SERVICOS['seo-e-geo']

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: '/seo-e-geo' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/seo-e-geo',
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

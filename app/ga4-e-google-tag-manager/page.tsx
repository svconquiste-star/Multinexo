import type { Metadata } from 'next'
import ServiceLanding from '@/components/servico/ServiceLanding'
import { SERVICOS } from '@/lib/servicos'

const s = SERVICOS['ga4-e-google-tag-manager']

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: '/ga4-e-google-tag-manager' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/ga4-e-google-tag-manager',
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

import type { Metadata } from 'next'
import ServiceLanding from '@/components/servico/ServiceLanding'
import { SERVICOS } from '@/lib/servicos'
import { ogImage } from '@/lib/schema'

const s = SERVICOS['ga4-e-google-tag-manager']
const OG = ogImage('ga4-e-google-tag-manager', s.h1)

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
    images: [OG],
  },
  twitter: { card: 'summary_large_image', title: s.title, description: s.description, images: [OG.url] },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ServiceLanding s={s} />
}

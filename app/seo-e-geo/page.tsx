import type { Metadata } from 'next'
import ServiceLanding from '@/components/servico/ServiceLanding'
import { SERVICOS } from '@/lib/servicos'
import { ogImage } from '@/lib/schema'

const s = SERVICOS['seo-e-geo']
const OG = ogImage('seo-e-geo', s.h1)

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
    images: [OG],
  },
  twitter: { card: 'summary_large_image', title: s.title, description: s.description, images: [OG.url] },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ServiceLanding s={s} />
}

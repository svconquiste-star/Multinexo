import type { Metadata } from 'next'
import ServiceLanding from '@/components/servico/ServiceLanding'
import { SERVICOS } from '@/lib/servicos'
import { ogImage } from '@/lib/schema'

const s = SERVICOS['gestor-de-kwai-ads']
const OG = ogImage('gestor-de-kwai-ads', s.h1)

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
    images: [OG],
  },
  twitter: { card: 'summary_large_image', title: s.title, description: s.description, images: [OG.url] },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ServiceLanding s={s} />
}

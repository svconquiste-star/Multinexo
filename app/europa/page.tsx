import type { Metadata } from 'next'
import EuropaLanding from '@/components/lp/EuropaLanding'
import { DICT, HREFLANG_ALTERNATES, localeMeta } from '@/components/lp/i18n'

const locale = 'pt-BR' as const
const t = DICT[locale]
const lm = localeMeta(locale)

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: { canonical: lm.path, languages: HREFLANG_ALTERNATES },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: lm.path,
    siteName: 'Multinexo',
    locale: lm.ogLocale,
    type: 'website',
    images: [{ url: '/images/logo.png', alt: 'Multinexo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta.title,
    description: t.meta.description,
    images: ['/images/logo.png'],
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <EuropaLanding locale={locale} />
}

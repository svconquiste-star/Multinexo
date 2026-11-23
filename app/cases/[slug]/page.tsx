import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseView from '@/components/case/CaseView'
import LeadFormProvider from '@/components/lead/LeadFormProvider'
import { CASES, CASE_SLUGS } from '@/lib/cases'
import { breadcrumb } from '@/lib/schema'

export const dynamicParams = false

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = CASES[params.slug]
  if (!study) return {}
  const url = `/cases/${study.slug}`
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url,
      type: 'article',
      locale: 'pt_BR',
      images: [{ url: study.proofs[0]?.src ?? '/images/logo.png', alt: study.proofs[0]?.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.metaTitle,
      description: study.metaDescription,
      images: [study.proofs[0]?.src ?? '/images/logo.png'],
    },
    robots: { index: true, follow: true },
  }
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const study = CASES[params.slug]
  if (!study) notFound()
  const jsonLd = {
    '@context': 'https://schema.org',
    ...breadcrumb([
      { name: 'Início', path: '/' },
      { name: 'Cases', path: '/cases' },
      { name: study.metaTitle.split(' | ')[0], path: `/cases/${study.slug}` },
    ]),
  }
  return (
    <LeadFormProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseView study={study} />
    </LeadFormProvider>
  )
}

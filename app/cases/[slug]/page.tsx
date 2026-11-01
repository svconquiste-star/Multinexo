import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseView from '@/components/case/CaseView'
import LeadFormProvider from '@/components/lead/LeadFormProvider'
import { CASES, CASE_SLUGS } from '@/lib/cases'

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
      images: [{ url: study.proofs[0]?.src ?? '/images/logo.png' }],
    },
    robots: { index: true, follow: true },
  }
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const study = CASES[params.slug]
  if (!study) notFound()
  return (
    <LeadFormProvider>
      <CaseView study={study} />
    </LeadFormProvider>
  )
}

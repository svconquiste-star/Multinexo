import type { MetadataRoute } from 'next'
import { CASE_SLUGS } from '@/lib/cases'

const BASE_URL = 'https://multinexo.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/gestor-de-trafego-pago`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/europa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/europa/pt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/europa/en`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Cases publicados (os rascunhos ficam de fora; ver CASE_SLUGS em lib/cases.ts).
    ...CASE_SLUGS.map((slug) => ({
      url: `${BASE_URL}/cases/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/normas`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}

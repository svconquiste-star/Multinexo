import type { MetadataRoute } from 'next'

const BASE_URL = 'https://multinexo.com.br'

// Crawlers de IA liberados explicitamente para permitir indexação e citação
// por assistentes como ChatGPT, Claude, Gemini e Perplexity.
const aiBots = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'Applebot-Extended',
  'CCBot',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin', '/proposta/', '/api/'] },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/admin', '/proposta/', '/api/'],
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}

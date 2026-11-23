// Dados estruturados (Schema.org) e imagens de compartilhamento usados em várias páginas.
// A pessoa e a empresa ficam em app/layout.tsx (@id abaixo); aqui ficam as peças por página.

export const SITE_URL = 'https://multinexo.com.br'
export const PERSON_ID = `${SITE_URL}/#daniel`
export const BUSINESS_ID = `${SITE_URL}/#business`

// Imagens 1200x630 em public/images/og/ (geradas a partir do título de cada página).
export function ogImage(nome: string, alt: string) {
  return { url: `/images/og/${nome}.png`, width: 1200, height: 630, alt }
}
export const OG_HOME = ogImage('home', 'Multinexo · Daniel Aguiar: tráfego pago, SEO e GEO')

export function breadcrumb(itens: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}

// Catálogo de serviços da empresa (só na home, onde o preço do honorário aparece no FAQ).
export const OFFER_CATALOG = {
    '@type': 'OfferCatalog',
    name: 'Serviços de Marketing Digital',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestão de tráfego pago',
          description:
            'Gestão de tráfego pago no Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Kwai Ads, guiada por estratégia e acompanhada em dashboard.',
        },
        // Honorário inicial (lib/preco.ts); a verba de anúncios é paga direto às plataformas.
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 1000, priceCurrency: 'BRL' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO e GEO',
          description:
            'Otimização para o Google (SEO) e para respostas de IAs como ChatGPT, Gemini e Google AI Overviews (GEO).',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mensuração e tracking',
          description:
            'Configuração de Google Analytics 4, Google Tag Manager e rastreamento de conversões, com qualificação de leads (MQL e SQL).',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IA como Vantagem Competitiva',
          description:
            'Automação de atendimento, captação e qualificação com Inteligência Artificial, com atendente de IA no WhatsApp.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Criação de Dashboard',
          description:
            'Dashboards sob medida que centralizam métricas de tráfego, vendas e atendimento em tempo real.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria',
          description:
            'Consultoria estratégica de marketing que analisa funil, posicionamento e canais e entrega um plano de ação focado em resultado.',
        },
      },
    ],
  }

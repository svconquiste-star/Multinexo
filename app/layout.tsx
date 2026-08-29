import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const SITE_URL = 'https://multinexo.com.br'
const SITE_TITLE = 'Multinexo | Estrategista de Marketing Digital — Tráfego, IA e Dashboards'
const SITE_DESCRIPTION =
  'Escalo negócios com tráfego pago, estratégia e IA como vantagem competitiva. Consultoria e criação de dashboards para crescimento previsível e mensurável.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'marketing digital',
    'estrategista de marketing digital',
    'gestão de tráfego',
    'tráfego pago',
    'Google Ads',
    'Meta Ads',
    'automação com IA',
    'agente de IA no WhatsApp',
    'atendimento com IA',
    'criação de dashboard',
    'consultoria de marketing digital',
    'marketing digital Betim MG',
  ],
  authors: [{ name: 'Multinexo' }],
  creator: 'Multinexo',
  publisher: 'Multinexo',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Multinexo',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/logo.png',
        width: 1536,
        height: 1024,
        alt: 'Multinexo — Estrategista de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'Multinexo',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  telephone: '+5531993121211',
  email: 'contato@multinexo.com',
  priceRange: '$$',
  areaServed: { '@type': 'Country', name: 'Brasil' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Betim',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/daguiar.ai/',
    'https://www.linkedin.com/in/daniel-aguiar-871628268/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Marketing Digital',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tráfego & Estratégia',
          description:
            'Gestão de tráfego pago (Google Ads e Meta Ads) com foco em escala e ROI real, guiada por estratégia.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IA como Vantagem Competitiva',
          description:
            'Automação de atendimento, captação e qualificação com Inteligência Artificial, com atendente de IA 24/7 no WhatsApp.',
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {/* Dados estruturados (Schema.org) para buscadores e IAs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}

        {/* Meta Pixel Code (noscript fallback) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1023132310698997&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-45HQ87876L"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-45HQ87876L');
        `}
      </Script>

      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1023132310698997');
          fbq('track', 'PageView');
        `}
      </Script>
    </html>
  )
}

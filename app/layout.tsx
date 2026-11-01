import type { Metadata } from 'next'
import Script from 'next/script'
import ConsentBanner from '@/components/consent/ConsentBanner'
import AttributionCapture from '@/components/lead/AttributionCapture'
import './globals.css'

// Contexto Europa/UK = páginas /europa* OU ?mercado=PT|IE|ES|UK. Sem aceite
// gravado, GA4 e Pixel nascem com consentimento negado (GDPR/ePrivacy).
// Mesma regra de components/consent/consent.ts — mantenha as duas iguais.
// String.raw preserva as barras invertidas da regex.
const CONSENT_SNIPPET = String.raw`
  var mxEu = /^\/europa(\/|$)/.test(location.pathname) || /[?&]mercado=(PT|IE|ES|UK)(&|$)/i.test(location.search);
  var mxC = null; try { mxC = localStorage.getItem('mx_consent'); } catch (e) {}
  window.__mxDeny = mxEu && mxC !== 'granted';
`

// Testes no localhost não podem mandar evento para o GA4/Pixel de produção.
// Com ?mx_debug=1 os scripts carregam mesmo no localhost e o GA4 entra em
// debug_mode (aparece no DebugView, inclusive em produção).
const ENV_SNIPPET = String.raw`
  window.__mxLocal = /^(localhost|127\.0\.0\.1|\[::1\]|.+\.localhost)$/.test(location.hostname);
  window.__mxDebug = /[?&]mx_debug=1(&|$)/.test(location.search);
`

const SITE_URL = 'https://multinexo.com.br'
const SITE_TITLE = 'Daniel Aguiar | Estrategista de Marketing Digital — Tráfego, IA e Dashboards'
const SITE_DESCRIPTION =
  'Sou o Daniel Aguiar. Escalo negócios com tráfego pago, estratégia e IA como vantagem competitiva. Consultoria e criação de dashboards para crescimento previsível e mensurável.'

// <title> com até ~60 caracteres (o Google corta o resto). Redes sociais
// (openGraph/twitter) usam o título completo, que não tem esse limite.
const PAGE_TITLE = 'Daniel Aguiar | Gestor de Tráfego Pago, IA e Dashboards'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: 'Daniel Aguiar' }],
  creator: 'Daniel Aguiar',
  publisher: 'Daniel Aguiar · Multinexo',
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
        alt: 'Daniel Aguiar — Estrategista de Marketing Digital',
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

const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#daniel`,
  name: 'Daniel Aguiar',
  url: SITE_URL,
  jobTitle: 'Estrategista de Marketing Digital',
  description:
    'Daniel Aguiar é estrategista de marketing digital. Escala negócios com tráfego pago, estratégia, automação com IA e dashboards, no Brasil e no exterior.',
  knowsAbout: [
    'Gestão de tráfego',
    'Google Ads',
    'Meta Ads',
    'Automação com Inteligência Artificial',
    'Criação de dashboards',
    'Consultoria de marketing digital',
  ],
  worksFor: { '@id': `${SITE_URL}/#business` },
  sameAs: [
    'https://www.instagram.com/daguiar.ai/',
    'https://www.linkedin.com/in/daniel-aguiar-871628268/',
  ],
}

const business = {
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'Multinexo',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  founder: { '@id': `${SITE_URL}/#daniel` },
  employee: { '@id': `${SITE_URL}/#daniel` },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [person, business],
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

        {/*
          Guarda gclid, gbraid, wbraid, UTM e fbclid assim que qualquer página
          carrega, para o lead do formulário não perder a origem do anúncio.
          (A conversão do Google Ads sai de lib/whatsapp-track.ts.)
        */}
        <AttributionCapture />

        {/* Banner de consentimento — só aparece em contexto Europa/UK */}
        <ConsentBanner />

        {/*
          O fallback <noscript><img …facebook.com/tr…> foi removido de propósito:
          o React o transforma em <link rel="preload">, e isso mandava um PageView
          à Meta para todo visitante, com ou sem consentimento (e em duplicidade
          com o fbq PageView abaixo).
        */}
      </body>

      {/*
        GA4 + Meta Pixel. Fora de Europa/UK carregam logo (como antes). Em
        Europa/UK sem aceite gravado NÃO são carregados: o script espera o evento
        'mx:consent' (disparado pelo banner) e só então injeta gtag.js e fbevents.js.
      */}
      <Script id="analytics-loader" strategy="afterInteractive">
        {`
          ${CONSENT_SNIPPET}
          ${ENV_SNIPPET}
          function mxLoadGA() {
            if (window.__mxGA) return; window.__mxGA = true;
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtag/js?id=G-45HQ87876L';
            document.head.appendChild(s);
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () { window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', 'G-45HQ87876L', window.__mxDebug ? { debug_mode: true } : {});
            // Tag do Google Ads: necessária para a conversão do clique no WhatsApp
            // (lib/whatsapp-track.ts) ser registrada na conta.
            window.gtag('config', 'AW-18518810455');
          }
          function mxLoadPixel() {
            if (window.__mxPx) return; window.__mxPx = true;
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
          }
          function mxLoadAll() {
            if (window.__mxLocal && !window.__mxDebug) return;
            mxLoadGA(); mxLoadPixel();
          }
          if (!window.__mxDeny) {
            mxLoadAll();
          } else {
            window.addEventListener('mx:consent', function (e) {
              if (e.detail === 'granted') mxLoadAll();
            });
          }
        `}
      </Script>
    </html>
  )
}

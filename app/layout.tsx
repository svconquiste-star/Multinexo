import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Multinexo | Estrategista de Marketing Digital — Tráfego, IA e Dashboards',
  description: 'Escalo negócios com tráfego pago, estratégia e IA como vantagem competitiva. Consultoria e criação de dashboards para crescimento previsível e mensurável.',
  keywords: 'marketing digital, estrategista de tráfego, gestão de tráfego, automação com IA, criação de dashboard, consultoria de marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">{children}</body>

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
    </html>
  )
}

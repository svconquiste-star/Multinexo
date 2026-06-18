import type { Metadata } from 'next'
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
    </html>
  )
}

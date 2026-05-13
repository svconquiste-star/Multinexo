import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Multinexo - Gestão de Tráfego, Automações com IA e Atendimento Inteligente',
  description: 'Soluções de marketing digital com inteligência artificial para transformar seu negócio',
  keywords: 'marketing digital, IA, gestão de tráfego, automação, atendimento',
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

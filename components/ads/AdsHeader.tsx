'use client'

import Link from 'next/link'
import { useLeadForm } from '@/components/lead/context'

// Cabeçalho mínimo da página para o Google Ads: sem menu (nada de Europa, cases
// ou clientes), só a marca e um botão que abre o formulário.
export default function AdsHeader() {
  const leadForm = useLeadForm()
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Daniel Aguiar
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-gray-500 tracking-wide">
              Gestor de Tráfego Pago
            </span>
          </Link>
          <button
            type="button"
            onClick={() => leadForm?.open('ads-header')}
            className="btn-primary"
          >
            Análise Gratuita
          </button>
        </div>
      </div>
    </header>
  )
}

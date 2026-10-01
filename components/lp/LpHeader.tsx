'use client'

import { MessageCircle } from 'lucide-react'
import WhatsAppLink from '../WhatsAppLink'
import LpLangSwitcher from './LpLangSwitcher'
import { waUrl } from './wa'
import type { Dict, Locale } from './i18n'

// Barra minimalista da landing: logo + seletor de idioma + 1 CTA, SEM menu de
// navegacao (foco total em 1 acao = melhor conversao em trafego pago).
export default function LpHeader({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <img src="/images/logo.png" alt="Multinexo" className="h-9 w-auto object-contain" />
        <div className="flex items-center gap-2 sm:gap-3">
          <LpLangSwitcher locale={locale} />
          <WhatsAppLink
            href={waUrl(t.wa.default)}
            location="lp-europa-header"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">{t.nav.whatsapp}</span>
            <span className="sm:hidden">{t.nav.whatsappShort}</span>
          </WhatsAppLink>
        </div>
      </div>
    </header>
  )
}

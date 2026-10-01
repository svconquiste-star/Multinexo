'use client'

import { MessageCircle } from 'lucide-react'
import WhatsAppLink from '../WhatsAppLink'
import { waUrl } from './wa'
import type { Dict } from './i18n'

// Barra fixa no rodape do mobile para manter o CTA sempre a 1 toque.
export default function LpStickyCta({ t }: { t: Dict }) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-white/95 backdrop-blur border-t border-gray-200">
      <WhatsAppLink
        href={waUrl(t.wa.default)}
        location="lp-europa-sticky-mobile"
        className="flex items-center justify-center gap-2 w-full bg-green-500 active:bg-green-600 text-white font-bold py-3.5 rounded-xl"
      >
        <MessageCircle size={20} />
        <span>{t.nav.whatsapp}</span>
      </WhatsAppLink>
    </div>
  )
}

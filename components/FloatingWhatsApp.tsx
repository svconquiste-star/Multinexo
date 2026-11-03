'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink'

// Só depois de a pessoa rolar uma parte da página (evita clique acidental logo
// na chegada). Mostrar o botão dispara o evento floating_whatsapp_shown (uma
// vez) para medirmos quanta gente chega a vê-lo.
const SHOW_AFTER = 0.25 // fração da rolagem total

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY / max >= SHOW_AFTER) {
        setVisible(true)
        window.removeEventListener('scroll', onScroll)
        try {
          window.gtag?.('event', 'floating_whatsapp_shown', { page_path: window.location.pathname })
        } catch {}
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappLink =
    'https://wa.me/5531993121211?text=Olá!%20Gostaria%20de%20agendar%20uma%20análise%20gratuita%20para%20escalar%20meu%20negócio.'

  return (
    <>
      {/* Bolha flutuante — desktop/tablet. No celular não há botão flutuante. */}
      <WhatsAppLink
        href={whatsappLink}
        location="float"
        className={`hidden md:flex fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 items-center justify-center group ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        title="Fale comigo no WhatsApp"
        ariaLabel="Fale comigo no WhatsApp"
      >
        <MessageCircle size={34} className="group-hover:animate-bounce" />
      </WhatsAppLink>
    </>
  )
}

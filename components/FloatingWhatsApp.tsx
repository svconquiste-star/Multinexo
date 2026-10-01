'use client'

import { MessageCircle, ArrowRight } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink'

export default function FloatingWhatsApp() {
  const whatsappLink =
    'https://wa.me/5531993121211?text=Olá!%20Gostaria%20de%20agendar%20uma%20análise%20gratuita%20para%20escalar%20meu%20negócio.'

  return (
    <>
      {/* Bolha flutuante — desktop/tablet */}
      <WhatsAppLink
        href={whatsappLink}
        location="float"
        className="hidden md:flex fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 items-center justify-center group"
        title="Fale comigo no WhatsApp"
        ariaLabel="Fale comigo no WhatsApp"
      >
        <MessageCircle size={34} className="group-hover:animate-bounce" />
      </WhatsAppLink>

      {/* Barra fixa — mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/90 backdrop-blur border-t border-gray-200">
        <WhatsAppLink
          href={whatsappLink}
          location="mobile-bar"
          className="w-full py-3.5 bg-green-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
          ariaLabel="Agendar análise gratuita no WhatsApp"
        >
          <MessageCircle size={20} />
          <span>Agendar análise gratuita</span>
          <ArrowRight size={18} />
        </WhatsAppLink>
      </div>
    </>
  )
}

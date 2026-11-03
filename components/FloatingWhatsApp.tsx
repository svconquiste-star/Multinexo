'use client'

import { MessageCircle } from 'lucide-react'
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
      {/* No celular não há botão flutuante (a barra verde fixa foi removida a pedido). */}
    </>
  )
}

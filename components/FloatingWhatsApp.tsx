'use client'

import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const whatsappLink = 'https://wa.me/5531984125407?text=Olá%20Multinexo!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20escalar%20meu%20negócio.'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={34} className="group-hover:animate-bounce" />
    </a>
  )
}

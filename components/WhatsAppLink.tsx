'use client'

import { MouseEvent, ReactNode } from 'react'
import { useLeadForm } from '@/components/lead/context'
import { trackWhatsAppClick } from '@/lib/whatsapp-track'

type Props = {
  href: string
  location: string
  children: ReactNode
  className?: string
  title?: string
  ariaLabel?: string
  /** Ação extra no clique (ex.: fechar o menu mobile). */
  onClick?: () => void
}

// Link de WhatsApp. Dentro do LeadFormProvider (home e cases), o clique abre o
// formulário de captação, que salva os dados e só então abre o WhatsApp.
// Fora dele (/europa, /diagnostico), vai direto ao WhatsApp e dispara os
// eventos de conversão no GA4 e no Meta Pixel.
export default function WhatsAppLink({
  href,
  location,
  children,
  className,
  title,
  ariaLabel,
  onClick,
}: Props) {
  const leadForm = useLeadForm()

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.()
    if (leadForm) {
      // preventDefault também impede que o ouvinte de conversão do Google Ads
      // (app/layout.tsx) conte este clique: a conversão sai quando o WhatsApp abre.
      e.preventDefault()
      leadForm.open(location)
      return
    }
    trackWhatsAppClick(location)
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

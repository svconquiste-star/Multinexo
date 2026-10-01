'use client'

import { ReactNode } from 'react'

type Props = {
  href: string
  location: string
  children: ReactNode
  className?: string
  title?: string
  ariaLabel?: string
}

// Link de WhatsApp que dispara eventos de conversão no GA4 e no Meta Pixel
// ao ser clicado. Centraliza todos os CTAs de WhatsApp do site.
export default function WhatsAppLink({
  href,
  location,
  children,
  className,
  title,
  ariaLabel,
}: Props) {
  function handleClick() {
    try {
      window.fbq?.('track', 'Contact', { source: location })
    } catch {}
    try {
      window.gtag?.('event', 'generate_lead', {
        method: 'whatsapp',
        location,
      })
    } catch {}
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

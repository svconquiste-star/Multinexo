// Rastreamento do clique que realmente abre o WhatsApp (GA4 + Meta Pixel).
// Usado pelo WhatsAppLink (link direto) e pelo formulário de captação.
// A conversão do Google Ads sai do ouvinte de clique do app/layout.tsx.

// Tipo de página do clique, para separar os botões nos relatórios do GA4.
export function pageType(): string {
  const p = window.location.pathname
  if (p === '/') return 'home'
  if (p.startsWith('/europa')) return 'europa'
  if (p.startsWith('/cases')) return 'case'
  if (p.startsWith('/diagnostico')) return 'diagnostico'
  return 'outro'
}

export function trackWhatsAppClick(location: string) {
  try {
    window.fbq?.('track', 'Contact', { source: location })
  } catch {}
  try {
    window.gtag?.('event', 'generate_lead', { method: 'whatsapp', location })
    // Mesmo clique, com o botão e o tipo de página.
    window.gtag?.('event', 'whatsapp_click', { location, page_type: pageType() })
  } catch {}
}

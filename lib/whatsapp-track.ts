// Rastreamento do clique que realmente abre o WhatsApp (GA4, Meta Pixel e
// conversão do Google Ads). Usado pelo WhatsAppLink (link direto) e pelo
// formulário de captação. Cada abertura do WhatsApp chama esta função uma
// vez, e só aqui a conversão do Ads é disparada.

// Ação de conversão do Google Ads (clique no WhatsApp).
const ADS_CONVERSION = 'AW-18518810455/1seBCMCrxa8dENe-uv5E'

// Tipo de página do clique, para separar os botões nos relatórios do GA4.
export function pageType(): string {
  const p = window.location.pathname
  if (p === '/') return 'home'
  if (p.startsWith('/gestor-de-trafego-pago')) return 'ads_lp'
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
  try {
    // window.gtag só existe depois do consentimento (Europa/UK) e não existe
    // no localhost: sem ele, nada é enviado.
    window.gtag?.('event', 'conversion', { send_to: ADS_CONVERSION })
  } catch {}
}

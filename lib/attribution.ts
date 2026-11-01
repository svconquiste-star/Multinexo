// Origem do clique do anúncio (UTM e identificadores de clique do Google e da Meta).
// Guardada no sessionStorage assim que a pessoa chega, para o lead não perder a
// origem se ela navegar para outra página antes de abrir o formulário.

const ATTR_KEY = 'mx_lead_attr'

export const ATTR_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid', // Google Ads, iPhone (app/ATT)
  'wbraid', // Google Ads, iPhone (web)
  'fbclid',
] as const

export type Attr = Partial<Record<(typeof ATTR_KEYS)[number], string>>

/**
 * Lê os parâmetros da URL atual, junta com o que já estava guardado nesta
 * sessão (o que vem na URL vence) e salva. Chamada em toda página
 * (AttributionCapture) e de novo no envio do formulário.
 */
export function captureAttr(): Attr {
  let stored: Attr = {}
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}')
  } catch {}
  const q = new URLSearchParams(window.location.search)
  const next: Attr = { ...stored }
  for (const k of ATTR_KEYS) {
    const v = q.get(k)
    if (v) next[k] = v.slice(0, 200)
  }
  try {
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(next))
  } catch {}
  return next
}

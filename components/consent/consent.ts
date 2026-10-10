// Consentimento para Pixel e GA4 nos mercados sujeitos a GDPR/ePrivacy.
// Contexto "Europa/UK" = páginas /europa* OU ?mercado=PT|IE|ES|UK.
// Brasil e EUA seguem sem banner. A MESMA regra roda inline no app/layout.tsx
// (antes de o Pixel/GA4 iniciarem) — se mudar aqui, mude lá.

export const CONSENT_KEY = 'mx_consent'
export type ConsentChoice = 'granted' | 'denied'

const EU_MARKET_CODES = ['PT', 'IE', 'ES', 'UK']

export function isEuContext(pathname: string, search: string): boolean {
  if (/^\/europa(\/|$)/.test(pathname)) return true
  const m = new URLSearchParams(search).get('mercado')?.toUpperCase()
  return !!m && EU_MARKET_CODES.includes(m)
}

export function readConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice)
  } catch {}
}

/**
 * Aplica a escolha do visitante. Em Europa/UK o Pixel e o GA4 nem foram
 * carregados: o evento 'mx:consent' (ouvido pelo app/layout.tsx) os injeta ao
 * aceitar. Os avisos diretos ao fbq/gtag cobrem o caso em que as bibliotecas
 * já estavam carregadas (visitante que veio de uma página fora da Europa).
 */
export function applyConsent(granted: boolean) {
  const v = granted ? 'granted' : 'denied'
  try {
    window.dispatchEvent(new CustomEvent('mx:consent', { detail: v }))
  } catch {}
  try {
    window.fbq?.('consent', granted ? 'grant' : 'revoke')
  } catch {}
  try {
    window.gtag?.('consent', 'update', {
      ad_storage: v,
      analytics_storage: v,
      ad_user_data: v,
      ad_personalization: v,
    })
  } catch {}
}

// Eventos do formulário /diagnostico para Meta Pixel e GA4.
// Regra: só categorias e faixas — nunca nome, empresa ou texto livre.
// Todo evento leva um eventID (reaproveitado depois pela API de Conversões).

type Params = Record<string, string | number>

interface TrackEvent {
  /** Nome do evento no Pixel. */
  fb: string
  /** true = trackCustom; false = evento padrão da Meta. */
  fbCustom?: boolean
  /** Nome do evento no GA4 (omitir quando o GA4 já cobre, ex.: page_view). */
  ga?: string
  params?: Params
}

function newEventId(): string {
  try {
    return crypto.randomUUID()
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
  }
}

// O Pixel e o GA4 carregam depois da hidratação (afterInteractive). Se o
// evento sair antes, espera até 5 s pela função em vez de perder o evento.
function whenReady(get: () => ((...a: any[]) => void) | undefined, run: (fn: (...a: any[]) => void) => void) {
  let tries = 0
  const attempt = () => {
    const fn = get()
    if (fn) {
      try {
        run(fn)
      } catch {}
      return
    }
    if (++tries < 20) setTimeout(attempt, 250)
  }
  attempt()
}

export function track({ fb, fbCustom, ga, params = {} }: TrackEvent): string {
  const eventID = newEventId()
  if (typeof window === 'undefined') return eventID

  whenReady(
    () => window.fbq,
    (fbq) => fbq(fbCustom ? 'trackCustom' : 'track', fb, params, { eventID })
  )
  if (ga) {
    whenReady(
      () => window.gtag,
      (gtag) => gtag('event', ga, { ...params, event_id: eventID })
    )
  }
  return eventID
}

// ————— Origem do clique (UTM, fbclid, cookies da Meta) —————

const ATTR_KEY = 'mx_attr'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'] as const

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number] | 'fbc' | 'fbp', string>>

function readCookie(name: string): string | undefined {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return m ? decodeURIComponent(m[1]) : undefined
}

/**
 * Lê UTM/fbclid da URL e _fbc/_fbp dos cookies, junta com o que já estava
 * guardado nesta sessão (a URL atual vence) e salva no sessionStorage.
 * fbclid/fbc/fbp ficam só aqui (uso futuro na API de Conversões) — não vão
 * na mensagem do WhatsApp.
 */
export function captureAttribution(): Attribution {
  let stored: Attribution = {}
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}')
  } catch {}

  const q = new URLSearchParams(window.location.search)
  const next: Attribution = { ...stored }
  // O clique mais recente vence: o que vem na URL sobrescreve o guardado.
  // Sem parâmetros na URL (ex.: recarregou), mantém o da sessão.
  for (const k of UTM_KEYS) {
    const v = q.get(k)
    if (v) next[k] = v.slice(0, 120)
  }
  const fbc = readCookie('_fbc')
  const fbp = readCookie('_fbp')
  if (fbc && !next.fbc) next.fbc = fbc
  if (fbp && !next.fbp) next.fbp = fbp

  try {
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(next))
  } catch {}
  return next
}

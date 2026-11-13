import { isEuContext, readConsent } from '@/components/consent/consent'
import { captureAttribution } from './track'
import type { Etapa } from '@/app/lib/funil'

// Grava no banco as etapas do diagnóstico de quem veio do blog (utm_source=blog),
// para medir quais artigos geram clientes. NÃO envia dado pessoal: só o artigo
// (utm_campaign), a posição do botão (utm_medium), a etapa e um código aleatório
// da visita. Na Europa/UK só grava depois do aceite dos cookies.

const SID_KEY = 'mx_fb_sid'

function sessionId(): string {
  try {
    let id = sessionStorage.getItem(SID_KEY)
    if (!id || !/^[a-z0-9]{10,32}$/.test(id)) {
      const bytes = new Uint8Array(10)
      crypto.getRandomValues(bytes)
      id = Array.from(bytes, (b) => (b % 36).toString(36)).join('')
      sessionStorage.setItem(SID_KEY, id)
    }
    return id
  } catch {
    return ''
  }
}

export function saveFunnel(etapa: Etapa, mercado: string) {
  try {
    if (isEuContext(window.location.pathname, window.location.search) && readConsent() !== 'granted') return
    const a = captureAttribution()
    if (a.utm_source !== 'blog' || !a.utm_campaign) return
    const sessao = sessionId()
    if (!sessao) return

    fetch('/api/funil-blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessao,
        etapa,
        artigo: a.utm_campaign,
        posicao: a.utm_medium || '',
        mercado,
      }),
      keepalive: true,
    }).catch(() => {})
  } catch {}
}

import { waUrl } from '@/components/lp/wa'
import type { Copy } from './copy'
import type { MarketCode, Market, Verba } from './config'
import { money } from './config'
import type { Locale } from '@/components/lp/i18n'
import type { Attribution } from './track'

const MAX_LEN = 500

export interface LeadData {
  nome: string
  empresa: string
  cidade: string
  segmento: string
  jaAnuncia: string
  urgencia: string
  verba: Verba
}

/** Código curto, sem estado, para o Daniel cruzar a conversa com o anúncio. */
export function makeRef(market: MarketCode): string {
  return `DG-${market}-${Date.now().toString(36).slice(-5).toUpperCase()}`
}

export function verbaLabel(copy: Copy, market: Market, locale: Locale, band: Verba): string {
  if (band === 'unknown') return copy.verba.unknown
  if (band === 'below') return copy.verba.below(money(market, market.min, locale))
  const i = Number(band.slice(1))
  const lo = money(market, market.bands[i], locale)
  const next = market.bands[i + 1]
  return next === undefined
    ? copy.verba.over(lo)
    : copy.verba.range(lo, money(market, next, locale))
}

/** Mensagem de até ~500 caracteres, com campos rotulados (a IA do WhatsApp lê). */
export function buildMessage(
  copy: Copy,
  market: Market,
  locale: Locale,
  lead: LeadData,
  ref: string,
  attr: Attribution
): string {
  const w = copy.wa
  const origem = [attr.utm_campaign, attr.utm_content]
    .filter(Boolean)
    .map((s) => (s as string).slice(0, 28))
    .join(' / ')

  const lines = [
    w.greeting,
    `${w.nome}: ${lead.nome}`,
    `${w.empresa}: ${lead.empresa}`,
    `${w.cidade}: ${lead.cidade}`,
    `${w.segmento}: ${lead.segmento}`,
    `${w.jaAnuncia}: ${lead.jaAnuncia}`,
    `${w.verba}: ${verbaLabel(copy, market, locale, lead.verba)}`,
    `${w.inicio}: ${lead.urgencia}`,
    `${w.mercado}: ${market.code} | Ref: ${ref}`,
  ]
  if (origem) lines.push(`${w.origem}: ${origem}`)

  let text = lines.join('\n')
  if (text.length > MAX_LEN) text = text.slice(0, MAX_LEN - 1) + '…'
  return text
}

export function buildWaUrl(
  copy: Copy,
  market: Market,
  locale: Locale,
  lead: LeadData,
  ref: string,
  attr: Attribution
): string {
  return waUrl(buildMessage(copy, market, locale, lead, ref, attr))
}

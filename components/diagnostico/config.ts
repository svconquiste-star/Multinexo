import type { Locale } from '@/components/lp/i18n'

// Regra de negócio do formulário /diagnostico: mercados, faixas de verba,
// opções e a função de qualificação. Sem React — fácil de testar.

export type MarketCode = 'BR' | 'PT' | 'UK' | 'IE' | 'ES' | 'US'
export type Currency = 'BRL' | 'EUR' | 'GBP' | 'USD'
/**
 * Faixa de verba escolhida: 'below' (abaixo do mínimo), 'b0', 'b1'… (a partir do
 * piso `bands[i]` do mercado) ou 'unknown'. Os pisos ficam em Market.bands.
 */
export type Verba = 'below' | 'unknown' | `b${number}`
export type Urgencia = 'agora' | '30d' | 'pesquisando'
export type JaAnuncia = 'nao' | 'impulsiono' | 'meta_google' | 'agencia'
export type Segmento =
  | 'limpeza'
  | 'reforma'
  | 'pintura'
  | 'estetica'
  | 'saude'
  | 'advocacia'
  | 'loja'
  | 'expert'
  | 'outro'

export interface Market {
  code: MarketCode
  currency: Currency
  symbol: string
  /** Verba mínima mensal em anúncios (sem contar a gestão) = bands[0]. */
  min: number
  /**
   * Pisos crescentes das faixas qualificadas. A última faixa é "mais de" o
   * último piso. O piso vira o value do evento Lead.
   */
  bands: number[]
  /** Idioma em que a página abre quando não há ?lang=. */
  defaultLocale: Locale
  /** Mercado sujeito a consentimento prévio (GDPR/ePrivacy). */
  eu: boolean
}

function market(
  code: MarketCode,
  currency: Currency,
  symbol: string,
  bands: number[],
  defaultLocale: Locale,
  eu: boolean
): Market {
  return { code, currency, symbol, min: bands[0], bands, defaultLocale, eu }
}

export const MARKETS: Record<MarketCode, Market> = {
  BR: market('BR', 'BRL', 'R$', [500, 1000, 2000], 'pt-BR', false),
  PT: market('PT', 'EUR', '€', [500, 1500], 'pt-PT', true),
  IE: market('IE', 'EUR', '€', [500, 1500], 'pt-BR', true),
  ES: market('ES', 'EUR', '€', [500, 1500], 'pt-BR', true),
  UK: market('UK', 'GBP', '£', [400, 1200], 'pt-BR', true),
  US: market('US', 'USD', 'US$', [500, 1500], 'pt-BR', false),
}

export const DEFAULT_MARKET: MarketCode = 'BR'

export const SEGMENT_IDS: Segmento[] = [
  'limpeza',
  'reforma',
  'pintura',
  'estetica',
  'saude',
  'advocacia',
  'loja',
  'expert',
  'outro',
]
export const JA_ANUNCIA_IDS: JaAnuncia[] = ['nao', 'impulsiono', 'meta_google', 'agencia']
export const URGENCIA_IDS: Urgencia[] = ['agora', '30d', 'pesquisando']
/** Faixas que o lead escolhe de fato (em ordem); "unknown" é uma opção à parte. */
export function verbaBandIds(m: Market): Exclude<Verba, 'unknown'>[] {
  return ['below', ...m.bands.map((_, i) => `b${i}` as const)]
}

export function parseMarket(raw: unknown): MarketCode {
  const v = (Array.isArray(raw) ? raw[0] : raw)
  const code = typeof v === 'string' ? (v.toUpperCase() as MarketCode) : undefined
  return code && code in MARKETS ? code : DEFAULT_MARKET
}

export function parseLocale(raw: unknown): Locale | undefined {
  const v = Array.isArray(raw) ? raw[0] : raw
  if (v === 'pt-BR' || v === 'pt-PT' || v === 'en') return v
  if (v === 'pt') return 'pt-PT'
  if (v === 'br') return 'pt-BR'
  return undefined
}

function bandIndex(band: Verba): number {
  return band.startsWith('b') ? Number(band.slice(1)) : -1
}

/** Piso numérico de cada faixa — vira o `value` do evento Lead. */
export function bandFloor(m: Market, band: Verba): number {
  const i = bandIndex(band)
  return i >= 0 ? m.bands[i] ?? 0 : 0
}

/**
 * Código legível da faixa para o parâmetro `faixa_verba` do Pixel/GA4
 * (ex.: under_500, 500_1000, over_2000). Estável se a lista de faixas mudar.
 */
export function bandCode(m: Market, band: Verba): string {
  if (band === 'unknown') return 'unknown'
  if (band === 'below') return `under_${m.min}`
  const i = bandIndex(band)
  const lo = m.bands[i]
  const hi = m.bands[i + 1]
  return hi === undefined ? `over_${lo}` : `${lo}_${hi}`
}

export interface Answers {
  verba: Verba
  urgencia: Urgencia
}

export type Motivo = 'verba' | 'urgencia'
export type QualResult =
  | { status: 'qualified' }
  | { status: 'review' }
  | { status: 'unqualified'; motivo: Motivo }

/**
 * Qualificado = verba ≥ mínimo E urgência diferente de "só pesquisando".
 * O segmento nunca desqualifica: o site promete atender qualquer segmento.
 * "Não sei" na verba pede uma faixa uma vez (`review`); na segunda
 * tentativa (`retried`) sem faixa, desqualifica. Se verba e urgência falham
 * juntas, o motivo registrado é a verba.
 */
export function qualify(a: Answers, retried: boolean): QualResult {
  if (a.verba === 'below' || (a.verba === 'unknown' && retried)) {
    return { status: 'unqualified', motivo: 'verba' }
  }
  if (a.urgencia === 'pesquisando') {
    return { status: 'unqualified', motivo: 'urgencia' }
  }
  if (a.verba === 'unknown') return { status: 'review' }
  return { status: 'qualified' }
}

/** Formata número com separador de milhar do idioma (sem Intl: evita divergência servidor/cliente). */
export function formatNumber(n: number, locale: Locale): string {
  const sep = locale === 'en' ? ',' : '.'
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep)
}

export function money(market: Market, n: number, locale: Locale): string {
  return `${market.symbol} ${formatNumber(n, locale)}`
}

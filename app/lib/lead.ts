// Validação e normalização do lead do formulário. Roda no servidor e no
// cliente (a lista de serviços e as regras de telefone são as mesmas).

export const SERVICOS = [
  { id: 'trafego_pago', label: 'Tráfego pago' },
  { id: 'estrategia', label: 'Estratégia de marketing' },
  { id: 'automacao_ia', label: 'Automação e IA no WhatsApp' },
  { id: 'landing_page', label: 'Criação de landing page' },
  { id: 'dashboard', label: 'Criação de dashboard' },
  { id: 'consultoria', label: 'Consultoria de marketing' },
  { id: 'outros', label: 'Outros' },
] as const

export type ServicoId = (typeof SERVICOS)[number]['id']
const SERVICO_IDS = new Set<string>(SERVICOS.map((s) => s.id))

export const LIMITS = {
  nome: 80,
  empresa: 100,
  area: 80,
  outro: 100,
  texto: 800,
}

export interface LeadData {
  nome: string
  telefone: string // só dígitos, com 55
  empresa: string
  area_empresa: string
  servicos: ServicoId[]
  servico_outro: string | null
  problema: string
  solucao: string | null
  ref_code: string
  origem_botao: string | null
  page_path: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
  utm_term: string | null
  gclid: string | null
  gbraid: string | null
  wbraid: string | null
  fbclid: string | null
  referrer: string | null
}

/** Remove caracteres de controle, junta espaços e corta no limite. */
export function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001F\u007F]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max)
}

/** Mantém quebras de linha (campos longos), sem outros controles. */
export function cleanLong(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\r\n?/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max)
}

/**
 * Telefone do Brasil: aceita com ou sem 55, com máscara. Devolve só dígitos
 * com DDI (ex.: 5531987654321) ou null se for inválido.
 */
export function normalizePhone(raw: unknown): string | null {
  const digits = String(raw ?? '').replace(/\D/g, '')
  let n = digits
  if (n.startsWith('55') && (n.length === 12 || n.length === 13)) n = n.slice(2)
  if (n.length !== 10 && n.length !== 11) return null
  const ddd = Number(n.slice(0, 2))
  if (ddd < 11 || ddd > 99) return null
  if (n.length === 11 && n[2] !== '9') return null // celular tem 9 depois do DDD
  if (n.length === 10 && !/[2-5]/.test(n[2])) return null // fixo começa com 2 a 5
  if (/^(\d)\1+$/.test(n.slice(2))) return null // 99999999 etc.
  return `55${n}`
}

const REF_RE = /^LD-[A-Z0-9]{6}$/
const BTN_RE = /^[a-zA-Z0-9_-]{1,60}$/

function optional(value: unknown, max: number): string | null {
  const v = clean(value, max)
  return v ? v : null
}

export type ParseResult =
  | { ok: true; data: LeadData }
  | { ok: false; field: string }

export function parseLead(body: unknown): ParseResult {
  if (!body || typeof body !== 'object') return { ok: false, field: 'body' }
  const b = body as Record<string, unknown>

  const nome = clean(b.nome, LIMITS.nome)
  if (nome.length < 2) return { ok: false, field: 'nome' }

  const telefone = normalizePhone(b.telefone)
  if (!telefone) return { ok: false, field: 'telefone' }

  const empresa = clean(b.empresa, LIMITS.empresa)
  if (empresa.length < 2) return { ok: false, field: 'empresa' }

  const area = clean(b.area_empresa, LIMITS.area)
  if (area.length < 2) return { ok: false, field: 'area_empresa' }

  const rawServicos = Array.isArray(b.servicos) ? b.servicos : []
  const servicos = Array.from(
    new Set(rawServicos.filter((s): s is string => typeof s === 'string' && SERVICO_IDS.has(s)))
  ) as ServicoId[]
  if (servicos.length === 0) return { ok: false, field: 'servicos' }

  let servico_outro: string | null = null
  if (servicos.includes('outros')) {
    servico_outro = clean(b.servico_outro, LIMITS.outro)
    if (servico_outro.length < 2) return { ok: false, field: 'servico_outro' }
  }

  const problema = cleanLong(b.problema, LIMITS.texto)
  if (problema.length < 10) return { ok: false, field: 'problema' }
  const solucao = cleanLong(b.solucao, LIMITS.texto) || null

  if (b.consentimento !== true) return { ok: false, field: 'consentimento' }

  const ref_code = typeof b.ref_code === 'string' ? b.ref_code : ''
  if (!REF_RE.test(ref_code)) return { ok: false, field: 'ref_code' }

  const origem = typeof b.origem_botao === 'string' && BTN_RE.test(b.origem_botao) ? b.origem_botao : null

  return {
    ok: true,
    data: {
      nome,
      telefone,
      empresa,
      area_empresa: area,
      servicos,
      servico_outro,
      problema,
      solucao,
      ref_code,
      origem_botao: origem,
      page_path: optional(b.page_path, 200),
      utm_source: optional(b.utm_source, 120),
      utm_medium: optional(b.utm_medium, 120),
      utm_campaign: optional(b.utm_campaign, 120),
      utm_content: optional(b.utm_content, 120),
      utm_term: optional(b.utm_term, 120),
      gclid: optional(b.gclid, 200),
      gbraid: optional(b.gbraid, 200),
      wbraid: optional(b.wbraid, 200),
      fbclid: optional(b.fbclid, 200),
      referrer: optional(b.referrer, 300),
    },
  }
}

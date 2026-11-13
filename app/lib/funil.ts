// Validação do funil por artigo do blog (POST /api/funil-blog). Pura, sem I/O,
// para o servidor e para testes. Nenhum dado pessoal passa por aqui.

export const ETAPAS = ['aberto', 'iniciado', 'concluido', 'qualificado', 'whatsapp'] as const
export type Etapa = (typeof ETAPAS)[number]

const POSICOES = new Set(['meio', 'fim', 'sidebar', 'home'])
const MERCADOS = new Set(['BR', 'PT', 'UK', 'IE', 'ES', 'US'])

const SESSAO_RE = /^[a-z0-9]{10,32}$/
const ARTIGO_RE = /^[a-z0-9][a-z0-9-]{0,119}$/ // slug do blog (utm_campaign)

export interface FunilEvento {
  sessao: string
  etapa: Etapa
  artigo: string
  posicao: string | null
  mercado: string | null
}

export function parseFunil(body: unknown): FunilEvento | null {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>

  const etapa = typeof b.etapa === 'string' ? b.etapa : ''
  if (!(ETAPAS as readonly string[]).includes(etapa)) return null

  const sessao = typeof b.sessao === 'string' ? b.sessao : ''
  if (!SESSAO_RE.test(sessao)) return null

  // O slug vem na URL (utm_campaign): normaliza e valida o formato.
  const artigo = typeof b.artigo === 'string' ? b.artigo.trim().toLowerCase() : ''
  if (!ARTIGO_RE.test(artigo)) return null

  const posicao = typeof b.posicao === 'string' && POSICOES.has(b.posicao) ? b.posicao : null
  const mercado = typeof b.mercado === 'string' && MERCADOS.has(b.mercado.toUpperCase()) ? b.mercado.toUpperCase() : null

  return { sessao, etapa: etapa as Etapa, artigo, posicao, mercado }
}

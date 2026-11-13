import { getPool, hasDatabase } from '@/app/lib/db'
import { parseFunil } from '@/app/lib/funil'

// Registra as etapas do /diagnostico de quem veio do blog, por artigo. Só GRAVA
// (nenhuma rota lê o banco) e não recebe dado pessoal. Respostas genéricas.

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_BODY = 1024
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 40 // ~8 etapas por visita: 40 por IP em 10 min é folgado
const GLOBAL_MAX = 600

const hits = new Map<string, number[]>()

function limited(key: string, max: number): boolean {
  const now = Date.now()
  const recent = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= max) {
    hits.set(key, recent)
    return true
  }
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) {
    for (const [k, v] of Array.from(hits)) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k)
    }
  }
  return false
}

// O proxy (Traefik/Coolify) acrescenta o IP de quem conectou no FIM do X-Forwarded-For.
function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) {
    const parts = xff.split(',').map((p) => p.trim()).filter(Boolean)
    if (parts.length) return parts[parts.length - 1]
  }
  return (req.headers.get('x-real-ip') || 'unknown').trim()
}

function sameSite(req: Request): boolean {
  const origin = req.headers.get('origin')
  if (!origin) return false
  try {
    const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || ''
    return new URL(origin).host === host
  } catch {
    return false
  }
}

const fail = (status: number, error: string) => Response.json({ error }, { status })

export async function POST(req: Request) {
  if (!sameSite(req)) return fail(403, 'Não autorizado.')

  const declared = Number(req.headers.get('content-length') || 0)
  if (declared > MAX_BODY) return fail(413, 'Envio grande demais.')

  let raw = ''
  try {
    raw = await req.text()
  } catch {
    return fail(400, 'Envio inválido.')
  }
  if (raw.length > MAX_BODY) return fail(413, 'Envio grande demais.')

  let body: unknown
  try {
    body = JSON.parse(raw)
  } catch {
    return fail(400, 'Envio inválido.')
  }

  if (limited(clientIp(req), MAX_PER_WINDOW) || limited('__global__', GLOBAL_MAX)) {
    return fail(429, 'Muitos envios.')
  }

  const e = parseFunil(body)
  if (!e) return fail(400, 'Envio inválido.')

  if (!hasDatabase()) {
    console.error('[funil-blog] DATABASE_URL ausente')
    return fail(503, 'Indisponível.')
  }

  try {
    // Mesma etapa na mesma visita: já está registrada (UNIQUE sessao+etapa).
    await getPool().query(
      `INSERT INTO "SITE_MULTINEXO_CLIENTES".funil_blog (sessao, etapa, artigo, posicao, mercado)
       VALUES ($1,$2,$3,$4,$5)
       ON CONFLICT (sessao, etapa) DO NOTHING`,
      [e.sessao, e.etapa, e.artigo, e.posicao, e.mercado]
    )
  } catch (err) {
    console.error('[funil-blog] falha ao gravar', (err as { code?: string })?.code || 'sem-codigo')
    return fail(503, 'Indisponível.')
  }

  return Response.json({ ok: true }, { status: 201 })
}

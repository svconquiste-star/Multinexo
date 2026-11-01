import crypto from 'node:crypto'
import { getPool, hasDatabase } from '@/app/lib/db'
import { parseLead } from '@/app/lib/lead'

// Recebe o lead do formulário e só GRAVA. Não existe nenhuma rota que leia o
// banco. Respostas genéricas: detalhes de erro ficam só no log do servidor.

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_BODY = 8 * 1024
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

// Limite por IP em memória (por instância). Chave = hash do IP.
const hits = new Map<string, number[]>()

function limited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
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

function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  return (xff ? xff.split(',')[0] : req.headers.get('x-real-ip') || 'unknown').trim()
}

function hashIp(ip: string): string {
  const salt = process.env.LEAD_HASH_SALT || 'multinexo'
  return crypto.createHash('sha256').update(`${salt}|${ip}`).digest('hex')
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

  // Campo isca: preenchido só por robô. Responde como sucesso e não grava nada.
  if (body && typeof body === 'object' && String((body as Record<string, unknown>).website || '').trim()) {
    return Response.json({ ok: true }, { status: 201 })
  }

  const ipHash = hashIp(clientIp(req))
  if (limited(ipHash)) return fail(429, 'Muitos envios. Tente novamente em alguns minutos.')

  const parsed = parseLead(body)
  if (!parsed.ok) return fail(400, 'Confira os dados informados.')

  if (!hasDatabase()) {
    console.error('[lead] DATABASE_URL ausente')
    return fail(503, 'Não foi possível salvar agora.')
  }

  const d = parsed.data
  try {
    await getPool().query(
      `INSERT INTO "SITE_MULTINEXO_CLIENTES".leads
        (ref_code, nome, telefone, empresa, area_empresa, servicos, servico_outro, problema, solucao,
         origem_botao, page_path, utm_source, utm_medium, utm_campaign, utm_content, utm_term,
         gclid, fbclid, referrer, user_agent, ip_hash, consentimento, consentimento_em)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,true,now())`,
      [
        d.ref_code, d.nome, d.telefone, d.empresa, d.area_empresa, d.servicos, d.servico_outro,
        d.problema, d.solucao, d.origem_botao, d.page_path, d.utm_source, d.utm_medium,
        d.utm_campaign, d.utm_content, d.utm_term, d.gclid, d.fbclid, d.referrer,
        (req.headers.get('user-agent') || '').slice(0, 300) || null,
        ipHash,
      ]
    )
  } catch (e) {
    const code = (e as { code?: string })?.code
    // Reenvio do mesmo ref_code: já está salvo.
    if (code === '23505') return Response.json({ ok: true }, { status: 201 })
    console.error('[lead] falha ao gravar', code || 'sem-codigo')
    return fail(503, 'Não foi possível salvar agora.')
  }

  return Response.json({ ok: true }, { status: 201 })
}

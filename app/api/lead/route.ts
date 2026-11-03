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
const GLOBAL_MAX = 60 // envios totais por janela, de qualquer IP

// Limite por IP em memória (por instância). Chave = hash do IP.
const hits = new Map<string, number[]>()

function limited(key: string, max = MAX_PER_WINDOW): boolean {
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

// X-Forwarded-For: o primeiro valor é escrito pelo próprio visitante (dá para
// falsificar). O proxy (Traefik/Coolify) acrescenta o IP de quem conectou no
// FIM da lista, então usamos o último valor.
function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) {
    const parts = xff.split(',').map((p) => p.trim()).filter(Boolean)
    if (parts.length) return parts[parts.length - 1]
  }
  return (req.headers.get('x-real-ip') || 'unknown').trim()
}

// Sal do hash do IP guardado no banco. Sem LEAD_HASH_SALT não guardamos o IP
// (nada de sal padrão público); o limitador usa um sal aleatório do processo.
const SALT = process.env.LEAD_HASH_SALT || ''
const PROCESS_SALT = crypto.randomBytes(16).toString('hex')

function hashWith(salt: string, ip: string): string {
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

  const ip = clientIp(req)
  // Limite por IP e um teto geral (contra quem troca de IP a cada envio).
  if (limited(hashWith(PROCESS_SALT, ip)) || limited('__global__', GLOBAL_MAX)) {
    return fail(429, 'Muitos envios. Tente novamente em alguns minutos.')
  }
  const ipHash = SALT ? hashWith(SALT, ip) : null

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
         gclid, gbraid, wbraid, fbclid, referrer, user_agent, ip_hash, formulario, consentimento, consentimento_em)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,true,now())`,
      [
        d.ref_code, d.nome, d.telefone, d.empresa, d.area_empresa, d.servicos, d.servico_outro,
        d.problema, d.solucao, d.origem_botao, d.page_path, d.utm_source, d.utm_medium,
        d.utm_campaign, d.utm_content, d.utm_term, d.gclid, d.gbraid, d.wbraid, d.fbclid, d.referrer,
        (req.headers.get('user-agent') || '').slice(0, 300) || null,
        ipHash,
        d.formulario,
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

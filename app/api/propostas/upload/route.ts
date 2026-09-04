import { put } from '@vercel/blob'
import {
  BASE_URL,
  blobPath,
  slugify,
  randomToken,
} from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

function authorized(req: Request): boolean {
  const token = process.env.PROPOSTAS_TOKEN
  if (!token) return false
  const header = req.headers.get('authorization') || ''
  return header === `Bearer ${token}`
}

export async function POST(req: Request) {
  if (!authorized(req)) {
    return Response.json({ error: 'Não autorizado.' }, { status: 401 })
  }

  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return Response.json({ error: 'Envio inválido.' }, { status: 400 })
  }

  const file = form.get('file')
  const cliente = String(form.get('cliente') || '').trim()
  const slugInput = String(form.get('slug') || '').trim()
  const diasRaw = String(form.get('dias') || '15').trim()
  const dias = Number(diasRaw)

  if (!(file instanceof File) || file.size === 0) {
    return Response.json({ error: 'Arquivo não enviado.' }, { status: 400 })
  }
  if (!Number.isFinite(dias)) {
    return Response.json({ error: 'Validade (dias) inválida.' }, { status: 400 })
  }

  const nameLower = (file.name || '').toLowerCase()
  const isPdf = nameLower.endsWith('.pdf') || file.type === 'application/pdf'
  const isHtml =
    nameLower.endsWith('.html') ||
    nameLower.endsWith('.htm') ||
    file.type === 'text/html'
  if (!isPdf && !isHtml) {
    return Response.json(
      { error: 'Formato não suportado. Envie um arquivo .html ou .pdf.' },
      { status: 400 }
    )
  }
  const ext = isPdf ? 'pdf' : 'html'

  const base =
    slugInput || cliente || file.name.replace(/\.(html?|pdf)$/i, '') || 'proposta'
  const slug = `${slugify(base) || 'proposta'}-${randomToken()}`

  const expiresAtMs = Date.now() + dias * 24 * 60 * 60 * 1000
  const path = blobPath(slug, expiresAtMs, ext)

  const buffer = Buffer.from(await file.arrayBuffer())

  try {
    await put(path, buffer, {
      access: 'public',
      addRandomSuffix: false,
      contentType: isPdf ? 'application/pdf' : 'text/html; charset=utf-8',
    })
  } catch (e: any) {
    return Response.json(
      { error: 'Falha ao salvar. Verifique o Blob store na Vercel. ' + (e?.message || '') },
      { status: 500 }
    )
  }

  return Response.json({
    url: `${BASE_URL}/proposta/${slug}`,
    slug,
    cliente: cliente || null,
    expiresAt: new Date(expiresAtMs).toISOString(),
  })
}

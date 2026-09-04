import { BASE_URL, slugify, randomToken, saveFile } from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

function authorized(req: Request): boolean {
  const token = process.env.PROPOSTAS_TOKEN
  if (!token) return false
  return (req.headers.get('authorization') || '') === `Bearer ${token}`
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
  const dias = Number(String(form.get('dias') || '15').trim())

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

  try {
    const buffer = Buffer.from(await file.arrayBuffer())
    await saveFile(slug, expiresAtMs, ext, buffer)
  } catch (e: any) {
    return Response.json(
      {
        error:
          'Falha ao salvar. Verifique o volume/permissão de PROPOSTAS_DIR. ' +
          (e?.message || ''),
      },
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

import { list, del } from '@vercel/blob'
import { PREFIX, parseBlobPath } from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'

function authorized(req: Request): boolean {
  const token = process.env.PROPOSTAS_TOKEN
  if (!token) return false
  return (req.headers.get('authorization') || '') === `Bearer ${token}`
}

export async function POST(req: Request) {
  if (!authorized(req)) {
    return Response.json({ error: 'Não autorizado.' }, { status: 401 })
  }

  let slug = ''
  try {
    slug = String((await req.json())?.slug || '').trim()
  } catch {
    return Response.json({ error: 'Requisição inválida.' }, { status: 400 })
  }
  if (!slug) return Response.json({ error: 'Slug ausente.' }, { status: 400 })

  try {
    const { blobs } = await list({ prefix: `${PREFIX}${slug}__` })
    const alvos = blobs.filter((b) => parseBlobPath(b.pathname)?.slug === slug)
    for (const b of alvos) await del(b.url)
    return Response.json({ removidas: alvos.length })
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Falha ao excluir.' }, { status: 500 })
  }
}

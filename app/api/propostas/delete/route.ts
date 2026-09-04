import { slugify, findBySlug, deleteFile } from '@/app/lib/propostas'

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

  let slug = ''
  try {
    slug = slugify(String((await req.json())?.slug || ''))
  } catch {
    return Response.json({ error: 'Requisição inválida.' }, { status: 400 })
  }
  if (!slug) return Response.json({ error: 'Slug ausente.' }, { status: 400 })

  try {
    const item = await findBySlug(slug)
    if (item) await deleteFile(item.fullPath)
    return Response.json({ removidas: item ? 1 : 0 })
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Falha ao excluir.' }, { status: 500 })
  }
}

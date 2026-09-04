import { list } from '@vercel/blob'
import { BASE_URL, PREFIX, parseBlobPath } from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'

function authorized(req: Request): boolean {
  const token = process.env.PROPOSTAS_TOKEN
  if (!token) return false
  return (req.headers.get('authorization') || '') === `Bearer ${token}`
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return Response.json({ error: 'Não autorizado.' }, { status: 401 })
  }

  try {
    const { blobs } = await list({ prefix: PREFIX })
    const now = Date.now()
    const propostas = blobs
      .map((b) => {
        const info = parseBlobPath(b.pathname)
        if (!info) return null
        return {
          slug: info.slug,
          url: `${BASE_URL}/proposta/${info.slug}`,
          ext: info.ext,
          expiresAt: new Date(info.expiresAtMs).toISOString(),
          expired: now > info.expiresAtMs,
          uploadedAt: b.uploadedAt,
        }
      })
      .filter(Boolean)
      // mais recentes primeiro
      .sort((a: any, b: any) => (a.uploadedAt < b.uploadedAt ? 1 : -1))

    return Response.json({ propostas })
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Falha ao listar.' }, { status: 500 })
  }
}

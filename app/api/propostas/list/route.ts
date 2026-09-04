import { BASE_URL, listFiles, deleteFile } from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

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
    const files = await listFiles()
    const now = Date.now()
    const propostas = []
    for (const f of files) {
      if (now > f.expiresAtMs) {
        // limpeza preguiçosa dos vencidos ao listar
        await deleteFile(f.fullPath)
        continue
      }
      propostas.push({
        slug: f.slug,
        url: `${BASE_URL}/proposta/${f.slug}`,
        ext: f.ext,
        expiresAt: new Date(f.expiresAtMs).toISOString(),
      })
    }
    propostas.sort((a, b) => (a.expiresAt < b.expiresAt ? 1 : -1))
    return Response.json({ propostas })
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Falha ao listar.' }, { status: 500 })
  }
}

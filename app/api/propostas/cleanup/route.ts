import { list, del } from '@vercel/blob'
import { PREFIX, parseBlobPath } from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'

// Endpoint chamado pelo cron da Vercel (diário). Remove propostas vencidas.
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET
  const header = req.headers.get('authorization') || ''
  // A Vercel injeta "Authorization: Bearer <CRON_SECRET>" nas chamadas de cron.
  if (secret && header !== `Bearer ${secret}`) {
    return Response.json({ error: 'Não autorizado.' }, { status: 401 })
  }

  try {
    const { blobs } = await list({ prefix: PREFIX })
    const now = Date.now()
    const expirados = blobs.filter((b) => {
      const info = parseBlobPath(b.pathname)
      return info && now > info.expiresAtMs
    })

    for (const b of expirados) {
      await del(b.url)
    }

    return Response.json({ removidas: expirados.length })
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Falha na limpeza.' }, { status: 500 })
  }
}

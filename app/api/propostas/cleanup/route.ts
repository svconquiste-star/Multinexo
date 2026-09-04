import { listFiles, deleteFile } from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Remove propostas vencidas. Pode ser chamado por uma Scheduled Task do Coolify
// (com Authorization: Bearer <CRON_SECRET>). A limpeza também acontece de forma
// preguiçosa ao servir/listar, então este endpoint é um reforço opcional.
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET
  const header = req.headers.get('authorization') || ''
  if (secret && header !== `Bearer ${secret}`) {
    return Response.json({ error: 'Não autorizado.' }, { status: 401 })
  }

  try {
    const files = await listFiles()
    const now = Date.now()
    let removidas = 0
    for (const f of files) {
      if (now > f.expiresAtMs) {
        await deleteFile(f.fullPath)
        removidas++
      }
    }
    return Response.json({ removidas })
  } catch (e: any) {
    return Response.json({ error: e?.message || 'Falha na limpeza.' }, { status: 500 })
  }
}

import {
  slugify,
  findBySlug,
  readFile,
  deleteFile,
  expiredPage,
  notFoundPage,
} from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Serve a proposta pelo link limpo /proposta/<slug>.
// Expiração server-side (vale para HTML e PDF); apaga na hora se vencida.
export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const headersBase = { 'X-Robots-Tag': 'noindex, nofollow' }
  const slug = slugify(params.slug)

  try {
    const item = await findBySlug(slug)

    if (!item) {
      return new Response(notFoundPage(), {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8', ...headersBase },
      })
    }

    if (Date.now() > item.expiresAtMs) {
      // limpeza preguiçosa: remove o arquivo vencido ao ser acessado
      await deleteFile(item.fullPath)
      return new Response(expiredPage(), {
        status: 410,
        headers: { 'Content-Type': 'text/html; charset=utf-8', ...headersBase },
      })
    }

    const buffer = await readFile(item.fullPath)
    const contentType =
      item.ext === 'pdf' ? 'application/pdf' : 'text/html; charset=utf-8'

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'inline',
        'Cache-Control': 'no-store',
        ...headersBase,
      },
    })
  } catch {
    return new Response(notFoundPage(), {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...headersBase },
    })
  }
}

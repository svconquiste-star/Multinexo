import { list } from '@vercel/blob'
import { PREFIX, parseBlobPath, expiredPage, notFoundPage } from '@/app/lib/propostas'

export const dynamic = 'force-dynamic'

// Serve a proposta pelo link limpo /proposta/<slug>.
// Expiração é server-side (vale para HTML e PDF).
export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug

  const headersBase = { 'X-Robots-Tag': 'noindex, nofollow' }

  try {
    const { blobs } = await list({ prefix: `${PREFIX}${slug}__` })
    const item = blobs.find((b) => parseBlobPath(b.pathname)?.slug === slug)

    if (!item) {
      return new Response(notFoundPage(), {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8', ...headersBase },
      })
    }

    const info = parseBlobPath(item.pathname)!
    if (Date.now() > info.expiresAtMs) {
      return new Response(expiredPage(), {
        status: 410,
        headers: { 'Content-Type': 'text/html; charset=utf-8', ...headersBase },
      })
    }

    const res = await fetch(item.url)
    const buffer = await res.arrayBuffer()
    const contentType =
      info.ext === 'pdf' ? 'application/pdf' : 'text/html; charset=utf-8'

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'inline',
        'Cache-Control': 'no-store',
        ...headersBase,
      },
    })
  } catch (e) {
    return new Response(notFoundPage(), {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8', ...headersBase },
    })
  }
}

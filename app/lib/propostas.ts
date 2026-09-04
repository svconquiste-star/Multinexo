// Helpers do sistema de propostas: slug, caminho no Blob (com expiração
// codificada no nome) e a página de "proposta expirada".

import crypto from 'node:crypto'

export const WHATSAPP =
  'https://wa.me/5531993121211?text=Ol%C3%A1!%20A%20proposta%20que%20recebi%20expirou%2C%20gostaria%20de%20conversar.'

export const BASE_URL = 'https://multinexo.com.br'
export const PREFIX = 'propostas/'

export function slugify(texto: string): string {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50)
}

export function randomToken(): string {
  return crypto.randomBytes(3).toString('hex')
}

// Caminho no Blob: propostas/<slug>__<expiraEpochMs>.<ext>
export function blobPath(slug: string, expiresAtMs: number, ext: string): string {
  return `${PREFIX}${slug}__${expiresAtMs}.${ext}`
}

// Extrai { slug, expiresAtMs, ext } de um caminho do Blob.
export function parseBlobPath(pathname: string):
  | { slug: string; expiresAtMs: number; ext: string }
  | null {
  const name = pathname.replace(PREFIX, '')
  const m = name.match(/^(.+)__(\d+)\.(html|pdf)$/i)
  if (!m) return null
  return { slug: m[1], expiresAtMs: Number(m[2]), ext: m[3].toLowerCase() }
}

// HTML da página de proposta expirada (com redirecionamento ao WhatsApp).
export function expiredPage(): string {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Proposta expirada</title></head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#070A12;color:#fff">
<div><div style="font-size:44px;margin-bottom:16px">&#9203;</div>
<h1 style="font-size:24px;margin:0 0 12px">Esta proposta expirou</h1>
<p style="color:#9AA3B8;max-width:440px;margin:0 auto 24px;line-height:1.6">O prazo de validade desta proposta chegou ao fim. Vou te redirecionar para o WhatsApp da Multinexo para conversarmos.</p>
<a href="${WHATSAPP}" style="display:inline-block;background:linear-gradient(90deg,#7C3AED,#2563EB);color:#fff;text-decoration:none;font-weight:700;padding:14px 26px;border-radius:999px">Falar agora no WhatsApp</a></div>
<script>setTimeout(function(){location.href="${WHATSAPP}"},6000)</script>
</body></html>`
}

// HTML simples de "não encontrada".
export function notFoundPage(): string {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Proposta não encontrada</title></head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#070A12;color:#fff">
<div><div style="font-size:44px;margin-bottom:16px">&#128269;</div>
<h1 style="font-size:24px;margin:0 0 12px">Proposta não encontrada</h1>
<p style="color:#9AA3B8;max-width:440px;margin:0 auto 24px;line-height:1.6">O link pode estar incorreto ou a proposta já não está mais disponível.</p>
<a href="${WHATSAPP}" style="display:inline-block;background:linear-gradient(90deg,#7C3AED,#2563EB);color:#fff;text-decoration:none;font-weight:700;padding:14px 26px;border-radius:999px">Falar no WhatsApp</a></div>
</body></html>`
}

// Helpers do sistema de propostas (armazenamento em disco / volume persistente).
// Cada proposta é um arquivo: <slug>__<expiraEpochMs>.<ext> (ext: html|pdf).

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'

export const WHATSAPP =
  'https://wa.me/5531993121211?text=Ol%C3%A1!%20A%20proposta%20que%20recebi%20expirou%2C%20gostaria%20de%20conversar.'

export const BASE_URL = 'https://multinexo.com.br'

// Diretório de armazenamento. Em produção, aponte para um VOLUME PERSISTENTE
// (env PROPOSTAS_DIR, ex.: /app/propostas). Em dev, usa uma pasta local.
export function getDir(): string {
  return process.env.PROPOSTAS_DIR || path.join(process.cwd(), '.propostas-data')
}

async function ensureDir(): Promise<string> {
  const dir = getDir()
  await fs.mkdir(dir, { recursive: true })
  return dir
}

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

export function fileName(slug: string, expiresAtMs: number, ext: string): string {
  return `${slug}__${expiresAtMs}.${ext}`
}

export function parseFileName(name: string):
  | { slug: string; expiresAtMs: number; ext: string }
  | null {
  const m = name.match(/^(.+)__(\d+)\.(html|pdf)$/i)
  if (!m) return null
  return { slug: m[1], expiresAtMs: Number(m[2]), ext: m[3].toLowerCase() }
}

export type PropostaFile = {
  slug: string
  expiresAtMs: number
  ext: string
  name: string
  fullPath: string
}

export async function listFiles(): Promise<PropostaFile[]> {
  const dir = await ensureDir()
  const names = await fs.readdir(dir)
  const out: PropostaFile[] = []
  for (const name of names) {
    const info = parseFileName(name)
    if (info) {
      out.push({ ...info, name, fullPath: path.join(dir, name) })
    }
  }
  return out
}

// Encontra pelo slug exato (sem construir caminho a partir da entrada do usuário).
export async function findBySlug(slug: string): Promise<PropostaFile | null> {
  const files = await listFiles()
  return files.find((f) => f.slug === slug) || null
}

export async function saveFile(
  slug: string,
  expiresAtMs: number,
  ext: string,
  buffer: Buffer
): Promise<string> {
  const dir = await ensureDir()
  const full = path.join(dir, fileName(slug, expiresAtMs, ext))
  await fs.writeFile(full, buffer)
  return full
}

export async function deleteFile(fullPath: string): Promise<void> {
  try {
    await fs.unlink(fullPath)
  } catch {}
}

export async function readFile(fullPath: string): Promise<Buffer> {
  return fs.readFile(fullPath)
}

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

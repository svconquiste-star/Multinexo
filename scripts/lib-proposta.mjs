// Lógica reutilizável para publicar propostas: gera slug, injeta o bloco de
// expiração (client-side) e monta o registro. Sem dependências externas.

import crypto from 'node:crypto'

const WHATSAPP =
  'https://wa.me/5531993121211?text=Ol%C3%A1!%20A%20proposta%20que%20recebi%20expirou%2C%20gostaria%20de%20conversar.'

const MARKER = '<!-- multinexo-exp -->'

// Normaliza um texto em slug (sem acentos, minúsculo, hifens).
export function slugify(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

// Token curto aleatório para o link não ser adivinhável.
export function randomToken() {
  return crypto.randomBytes(3).toString('hex') // 6 hex chars
}

// Monta um slug final a partir de um slug/nome base + token.
export function buildSlug(base) {
  const s = slugify(base) || 'proposta'
  return `${s}-${randomToken()}`
}

// Bloco de expiração injetado no <head>. Roda durante o parse: se expirada,
// reescreve o documento inteiro (sem flash) e redireciona ao WhatsApp.
function expiryBlock(expiresAtISO) {
  return `${MARKER}
<meta name="robots" content="noindex, nofollow">
<script>
(function(){
  var EXP = Date.parse("${expiresAtISO}");
  var WA = "${WHATSAPP}";
  if (isNaN(EXP) || Date.now() < EXP) return;
  document.open();
  document.write('<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">'
   +'<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">'
   +'<title>Proposta expirada</title></head>'
   +'<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:#070A12;color:#fff">'
   +'<div><div style="font-size:44px;margin-bottom:16px">&#9203;</div>'
   +'<h1 style="font-size:24px;margin:0 0 12px">Esta proposta expirou</h1>'
   +'<p style="color:#9AA3B8;max-width:440px;margin:0 auto 24px;line-height:1.6">O prazo de validade desta proposta chegou ao fim. Vou te redirecionar para o WhatsApp da Multinexo para conversarmos.</p>'
   +'<a href="'+WA+'" style="display:inline-block;background:linear-gradient(90deg,#7C3AED,#2563EB);color:#fff;text-decoration:none;font-weight:700;padding:14px 26px;border-radius:999px">Falar agora no WhatsApp</a></div></body></html>');
  document.close();
  setTimeout(function(){ location.href = WA; }, 6000);
})();
</script>`
}

// Injeta o bloco de expiração antes de </head>. Idempotente: se já houver o
// marcador, remove o bloco antigo antes de inserir o novo.
export function injectExpiry(html, expiresAtISO) {
  let out = String(html)

  // Remove um bloco previamente injetado (marcador até o </script> seguinte).
  if (out.includes(MARKER)) {
    out = out.replace(
      new RegExp(`${MARKER}[\\s\\S]*?<\\/script>`, 'i'),
      ''
    )
  }

  const block = expiryBlock(expiresAtISO)

  if (/<\/head>/i.test(out)) {
    return out.replace(/<\/head>/i, `${block}\n</head>`)
  }
  // Fallback: sem </head>, injeta no começo do documento.
  return `${block}\n${out}`
}

// Calcula a data de expiração (ISO) a partir de "dias" a contar de agora.
export function expiresAtFromDays(dias) {
  const d = new Date()
  d.setDate(d.getDate() + Number(dias))
  return d.toISOString()
}

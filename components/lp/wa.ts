// Monta o link do WhatsApp (DDI 55 funciona internacionalmente).
// As mensagens por idioma/segmento vêm do dicionário (i18n.ts).
const PHONE = '5531993121211'

export function waUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}

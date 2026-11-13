import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CASES } from '@/lib/cases'

// Faixa compacta de prova social no topo da landing, logo abaixo do botão do
// Hero. Os números vêm do próprio case (lib/cases.ts), a mesma fonte da página
// do case, então nada é inventado nem fica desatualizado.
const SLUG = 'contatos-em-17-dias'

export default function AdsProofCompact() {
  const c = CASES[SLUG]
  if (!c) return null
  const contatos = c.stats[0]
  const custo = c.stats[1]

  return (
    <Link
      href={`/cases/${SLUG}`}
      className="block max-w-xl rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white transition hover:bg-white/20"
    >
      <p className="text-[11px] font-semibold uppercase tracking-widest text-pink-100">Case real</p>
      <p className="mt-1 text-sm sm:text-base leading-snug">
        <strong>{contatos.value} contatos</strong> {contatos.note}, a <strong>{custo.value}</strong> por contato.{' '}
        <span className="inline-flex items-center gap-1 font-semibold underline">
          Ver o case <ArrowRight size={14} />
        </span>
      </p>
    </Link>
  )
}

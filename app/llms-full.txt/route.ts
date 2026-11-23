import { CASES, type CaseStudy } from '@/lib/cases'
import { SERVICOS, PAISES, type Servico } from '@/lib/servicos'
import { PRECO_TEXTO } from '@/lib/preco'

// /llms-full.txt: o texto completo dos cases e das páginas de serviço, em Markdown, para
// assistentes de IA. É montado a partir dos MESMOS dados das páginas (lib/cases.ts e
// lib/servicos.ts), então nunca fica diferente do site. Gerado no build (estático).
// Rascunhos e campos ainda não confirmados (`pending`) ficam de fora, como nas páginas.

export const dynamic = 'force-static'

const SITE = 'https://multinexo.com.br'
const AVISO_CASE =
  'Resultado deste cliente, neste período. Os números variam conforme o negócio, a oferta e o investimento; não há garantia de resultado.'

function caseMd(c: CaseStudy): string {
  const linhas: string[] = []
  linhas.push(`### ${c.headline.before} ${c.headline.highlight} ${c.headline.after}`.replace(/\s+/g, ' '))
  linhas.push('', `Página: ${SITE}/cases/${c.slug}`, '', c.subhead)
  if (c.period) linhas.push('', `Período: ${c.period}.`)
  linhas.push('', '#### Sobre o cliente', '', c.client.intro, '')
  for (const f of c.client.facts.filter((f) => !f.pending)) linhas.push(`- ${f.label}: ${f.value}`)
  linhas.push('', '#### O desafio', '', c.challenge.intro, '')
  for (const it of c.challenge.items) linhas.push(`- ${it}`)
  linhas.push('', '#### A estratégia', '', c.strategy.intro)
  c.strategy.steps.forEach((s, i) => {
    linhas.push('', `${i + 1}. **${s.title}**: ${s.text}`)
    for (const d of s.details ?? []) linhas.push(`   - ${d}`)
  })
  linhas.push('', '#### Resultados', '')
  for (const s of c.stats) linhas.push(`- ${s.value}: ${s.label}${s.note ? ` (${s.note})` : ''}`)
  if (c.funnel) {
    linhas.push('', `${c.funnel.title}:`, '')
    for (const f of c.funnel.steps) linhas.push(`- ${f.value} ${f.label}${f.note ? ` (${f.note})` : ''}`)
  }
  linhas.push('', `${c.extended.value}. ${c.extended.text}`, '', `_${c.ui?.disclaimer ?? AVISO_CASE}_`)
  return linhas.join('\n')
}

function servicoMd(s: Servico): string {
  const linhas: string[] = []
  linhas.push(`### ${s.h1}`, '', `Página: ${SITE}/${s.slug}`, '', s.heroFrase)
  linhas.push('', `#### ${s.oQueE.pergunta}`, '', s.oQueE.resposta)
  linhas.push('', `#### ${s.entregasTitulo ?? `O que eu faço na sua conta de ${s.plataforma}`}`, '')
  for (const e of s.entregas) linhas.push(`- **${e.titulo}**: ${e.texto}`)
  linhas.push('', `#### ${s.campanhasTitulo}`, '')
  for (const c of s.campanhas) linhas.push(`- **${c.nome}**: ${c.texto}`)
  linhas.push('', `#### ${s.mensuracaoTitulo ?? 'Mensuração e tracking'}`, '')
  for (const m of s.mensuracao) linhas.push(`- ${m}`)
  if (s.mensuracaoNota) linhas.push('', s.mensuracaoNota)
  linhas.push('', `#### ${s.exteriorTitulo ?? `Gestor de ${s.plataforma} para empresas no Brasil e no exterior`}`, '')
  linhas.push(
    s.exteriorTexto ??
      'Atendo 100% online. As campanhas são segmentadas para o país, a cidade e o idioma do seu público, e a verba é cobrada pela plataforma na moeda da sua conta de anúncios.'
  )
  linhas.push(`Países: ${(s.paises ?? PAISES).join(', ')}.`)
  if (s.honorarioGestao !== false) {
    linhas.push('', '#### Quanto custa', '', `Honorário de gestão: ${PRECO_TEXTO}. A verba de anúncios é paga direto às plataformas.`)
  }
  linhas.push('', `#### ${s.comparacao.pergunta}`, '', s.comparacao.resposta)
  linhas.push('', '#### Perguntas frequentes', '')
  for (const f of s.faq) linhas.push(`**${f.q}**`, '', f.a, '')
  return linhas.join('\n').trimEnd()
}

export function GET() {
  const cases = Object.values(CASES).filter((c) => !c.draft)
  const partes = [
    '# Daniel Aguiar · Multinexo: conteúdo completo',
    '',
    `> Texto integral dos cases e das páginas de serviço de ${SITE}. Resumo e links em ${SITE}/llms.txt.`,
    '',
    '## Gestão de tráfego pago',
    '',
    `Página: ${SITE}/gestor-de-trafego-pago`,
    '',
    `Gestão de campanhas no Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Kwai Ads, com GA4 e tracking para medir cada lead. Honorário de gestão: ${PRECO_TEXTO}; a verba de anúncios é paga direto às plataformas. Atendimento 100% online, no Brasil e no exterior. Análise gratuita, com retorno em até 1 dia útil.`,
    '',
    '## Páginas de serviço',
    '',
    Object.values(SERVICOS).map(servicoMd).join('\n\n'),
    '',
    '## Cases',
    '',
    cases.map(caseMd).join('\n\n'),
    '',
    '## Contato',
    '',
    '- WhatsApp: +55 31 99312-1211',
    '- E-mail: contato@multinexo.com',
    `- Site: ${SITE}`,
    '',
  ]
  return new Response(partes.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}

import Link from 'next/link'
import { Megaphone, Search, LineChart, Target } from 'lucide-react'

// Canais e especialidades (home e landing). Texto sem promessa de resultado e sem
// número que não dá para comprovar. Na landing do Google Ads o bloco de SEO/GEO
// fica de fora (showSeo={false}) para a página continuar focada em tráfego pago.

const canais: { nome: string; detalhe: string; href?: string }[] = [
  { nome: 'Meta Ads', detalhe: 'Facebook e Instagram', href: '/gestor-de-trafego-meta-ads' },
  { nome: 'Google Ads', detalhe: 'Pesquisa, YouTube e Display', href: '/gestor-de-google-ads' },
  { nome: 'TikTok Ads', detalhe: 'Vídeo curto e alcance' },
  { nome: 'LinkedIn Ads', detalhe: 'Empresas e decisores (B2B)' },
  { nome: 'Kwai Ads', detalhe: 'Vídeo curto, público amplo' },
]

const mensuracao = [
  'Google Analytics 4 (GA4): eventos, conversões e funis',
  'Google Tag Manager (GTM) e ferramentas de tracking',
  'Pixel e conversões configurados em cada plataforma',
  'Qualificação de leads: MQL (lead de marketing) e SQL (lead pronto para venda)',
]

const seo = [
  'SEO: o seu site encontrado no Google sem pagar por clique',
  'GEO: o seu negócio citado nas respostas de IAs como ChatGPT, Gemini e Google AI Overviews',
]

const competencias = [
  { titulo: 'Métricas que importam', texto: 'CAC, ROAS, LTV, CTR e CPL acompanhados de perto, para saber o que dá retorno.' },
  { titulo: 'Decisão baseada em dados', texto: 'Cada ajuste nasce da análise dos números, não de achismo.' },
  { titulo: 'Budgets de médio e alto volume', texto: 'Experiência na gestão de verbas maiores, com controle de ritmo e de custo.' },
  { titulo: 'Funis e conversão', texto: 'Funis de aquisição, geração de leads e otimização de conversão da página ao atendimento.' },
  { titulo: 'Testes A/B', texto: 'Criativos, públicos e páginas testados com método, um de cada vez.' },
  { titulo: 'Organização e autonomia', texto: 'Rotina de otimização, prioridades claras e você sabendo o que está sendo feito.' },
]

export default function ServiceCatalog({
  showSeo = true,
  title = 'Tráfego pago em todos os canais que o seu cliente usa',
}: {
  showSeo?: boolean
  title?: string
}) {
  return (
    <section id="canais" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">
            Gestão de mídia paga no Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Kwai Ads, com a mensuração
            configurada para você saber de onde vem cada cliente.
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-6 ${showSeo ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7">
            <div className="mb-4 flex items-center gap-3">
              <Megaphone className="text-purple-600" size={26} />
              <h3 className="text-xl font-bold text-gray-900">Tráfego pago (mídia paga)</h3>
            </div>
            <ul className="space-y-3">
              {canais.map((c) => (
                <li key={c.nome} className="flex flex-col">
                  {/* Links para as páginas de serviço só na home (a landing do Google Ads fica isolada). */}
                  {c.href && showSeo ? (
                    <Link href={c.href} className="font-semibold text-purple-700 underline-offset-2 hover:underline">
                      {c.nome}
                    </Link>
                  ) : (
                    <span className="font-semibold text-gray-900">{c.nome}</span>
                  )}
                  <span className="text-sm text-gray-600">{c.detalhe}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7">
            <div className="mb-4 flex items-center gap-3">
              <LineChart className="text-purple-600" size={26} />
              <h3 className="text-xl font-bold text-gray-900">Mensuração e tracking</h3>
            </div>
            <ul className="space-y-3">
              {mensuracao.map((m) => (
                <li key={m} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {showSeo && (
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7">
              <div className="mb-4 flex items-center gap-3">
                <Search className="text-purple-600" size={26} />
                <h3 className="text-xl font-bold text-gray-900">SEO e GEO</h3>
              </div>
              <ul className="space-y-3">
                {seo.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Tráfego pago traz resultado agora; SEO e GEO constroem uma fonte de clientes que não depende só de anúncio.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center justify-center gap-3">
            <Target className="text-purple-600" size={26} />
            <h3 className="text-2xl font-bold text-gray-900">Como eu conduzo a sua conta</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {competencias.map((c) => (
              <div key={c.titulo} className="rounded-xl border border-gray-100 p-6 shadow-sm">
                <p className="mb-2 font-bold text-gray-900">{c.titulo}</p>
                <p className="text-sm leading-relaxed text-gray-600">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

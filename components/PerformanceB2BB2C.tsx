import Link from 'next/link'
import { Building2, Store } from 'lucide-react'

// Home: marketing de performance para os dois públicos, em linguagem simples.
// Quem vende para pessoas (B2C: loja, Instagram de vendas, loja online) vem primeiro;
// quem vende para empresas (B2B) vem depois. As siglas ficam só como apoio, entre
// parênteses, para reforçar os termos do <title> da home sem confundir o pequeno negócio.

const blocos = [
  {
    icon: Store,
    titulo: 'Você vende para pessoas',
    sigla: 'B2C',
    exemplos: 'Loja de bairro, Instagram que vende roupa, salão, restaurante, clínica ou loja online.',
    texto:
      'Crio anúncios no Instagram, Facebook, Google, TikTok e Kwai para levar gente da sua cidade, ou de todo o Brasil, até o seu WhatsApp, o seu perfil ou a sua loja. E mostro quanto custou cada cliente.',
    canais: [
      { nome: 'Instagram e Facebook', href: '/gestor-de-trafego-meta-ads' },
      { nome: 'Google', href: '/gestor-de-google-ads' },
      { nome: 'TikTok', href: '/gestor-de-tiktok-ads' },
      { nome: 'Kwai', href: '/gestor-de-kwai-ads' },
    ],
  },
  {
    icon: Building2,
    titulo: 'Você vende para outras empresas',
    sigla: 'B2B',
    exemplos: 'Indústria, distribuidora, software, consultoria ou serviço para empresas.',
    texto:
      'Aqui a venda demora mais e passa por mais de uma pessoa. Uso LinkedIn e Google para chegar a quem decide, e separo quem só demonstrou interesse de quem está pronto para comprar (MQL e SQL).',
    canais: [
      { nome: 'LinkedIn', href: '/gestor-de-linkedin-ads' },
      { nome: 'Google', href: '/gestor-de-google-ads' },
      { nome: 'Medição com GA4', href: '/ga4-e-google-tag-manager' },
    ],
  },
]

export default function PerformanceB2BB2C() {
  return (
    <section id="performance" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Para pequenos negócios e para empresas</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Marketing de performance</strong> é anunciar e medir: cada real
            investido é acompanhado até virar mensagem, cliente ou venda. Você vê num painel quanto custou cada
            cliente e onde vale investir mais. Funciona para os dois tipos de negócio:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocos.map((b) => {
            const Icon = b.icon
            return (
              <div key={b.sigla} className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 text-white">
                    <Icon size={24} />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {b.titulo} <span className="text-sm font-semibold text-purple-600">({b.sigla})</span>
                  </h3>
                </div>
                <p className="text-gray-900 font-medium leading-relaxed">{b.exemplos}</p>
                <p className="mt-3 text-gray-600 leading-relaxed">{b.texto}</p>
                <p className="mt-5 text-sm font-semibold text-gray-900">Onde eu anuncio</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {b.canais.map((c) => (
                    <li key={c.nome}>
                      <Link
                        href={c.href}
                        className="inline-block rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700 hover:bg-purple-100"
                      >
                        {c.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-gray-600">
          Não sabe em qual dos dois você se encaixa? Tudo bem: na análise gratuita eu te ajudo a ver.
        </p>
      </div>
    </section>
  )
}

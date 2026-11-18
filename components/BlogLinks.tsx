// Liga o site ao blog (SEO e GEO): 3 artigos sobre dúvidas comuns de quem vai anunciar.
const BLOG = 'https://blog.multinexo.com.br/post'

const ARTICLES = [
  {
    href: `${BLOG}/quanto-investir-em-anuncio-no-comeco-sem-risco`,
    title: 'Quanto investir em anúncio no começo sem arriscar',
    text: 'Como definir a verba inicial sem comprometer o caixa.',
  },
  {
    href: `${BLOG}/onde-anunciar-minha-empresa-qual-plataforma-escolher`,
    title: 'Onde anunciar minha empresa: qual plataforma escolher?',
    text: 'Meta, Google e outras: como decidir pelo seu tipo de cliente.',
  },
  {
    href: `${BLOG}/anuncio-nao-da-resultado-8-causas-ocultas`,
    title: 'Anúncio não dá resultado: 8 causas ocultas',
    text: 'O que revisar antes de aumentar o investimento.',
  },
]

export default function BlogLinks() {
  return (
    <section id="artigos" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title">Artigos que podem ajudar</h2>
          <p className="section-subtitle">Respostas diretas para as dúvidas mais comuns de quem vai anunciar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:border-purple-300 hover:shadow-md transition"
            >
              <p className="text-lg font-bold text-gray-900">{a.title}</p>
              <p className="mt-2 text-gray-600">{a.text}</p>
              <p className="mt-4 text-sm font-semibold text-purple-600">Ler no blog</p>
            </a>
          ))}
        </div>
        <p className="mt-6 text-center">
          <a href="https://blog.multinexo.com.br" className="text-purple-600 font-semibold hover:text-purple-700">
            Ver todos os artigos do blog
          </a>
        </p>
      </div>
    </section>
  )
}

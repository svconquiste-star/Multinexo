// "O que acontece depois do seu contato": 3 passos curtos, para tirar o medo do
// próximo passo. O único prazo citado é "em até 1 dia útil".
const passos = [
  {
    title: 'Você entra em contato',
    text: 'Chame no WhatsApp ou preencha o formulário curto. Leva menos de um minuto.',
  },
  {
    title: 'Eu faço a análise gratuita',
    text: 'Olho o seu negócio, o seu público e o que você já faz hoje. Retorno em até 1 dia útil.',
  },
  {
    title: 'Você recebe a proposta',
    text: 'Com os próximos passos. Se fizer sentido, seguimos. Se não, tudo bem: sem compromisso.',
  },
]

export default function AdsProximosPassos() {
  return (
    <section id="proximos-passos" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">O que acontece depois do seu contato</h2>
          <p className="section-subtitle">Três passos simples, sem enrolação.</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passos.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

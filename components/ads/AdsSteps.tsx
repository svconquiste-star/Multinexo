const steps = [
  {
    title: 'Análise gratuita',
    text: 'Você me conta sobre o negócio, o público e o que já tentou. Eu analiso o cenário e mostro onde estão as oportunidades.',
  },
  {
    title: 'Plano e campanhas',
    text: 'Defino a oferta, o público e a verba, e monto as campanhas no Google Ads e no Meta Ads com os anúncios certos.',
  },
  {
    title: 'Página e atendimento',
    text: 'Uma página de captação clara leva o interessado ao seu WhatsApp, e a IA ajuda a responder rápido e qualificar os contatos.',
  },
  {
    title: 'Dashboard e otimização',
    text: 'Você acompanha investimento, contatos e custo por contato em um painel, e eu ajusto as campanhas com base nos números.',
  },
]

// "Como funciona" da página para o Google Ads.
export default function AdsSteps() {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title">Como funciona a gestão de tráfego pago</h2>
          <p className="section-subtitle">Do primeiro contato ao resultado medido, em quatro etapas.</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const steps = [
  {
    title: 'Análise gratuita',
    text: 'Você chama no WhatsApp ou preenche o formulário curto. Eu analiso o negócio, o público e o que você já faz, e retorno em até 1 dia útil.',
  },
  {
    title: 'Plano e campanhas',
    text: 'Você recebe a proposta. Se fizer sentido, defino a oferta, o público, a verba e os canais certos (Meta, Google, TikTok, LinkedIn ou Kwai) e monto as campanhas.',
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

// "Como funciona" (landing e home). A home passa um título próprio.
export default function AdsSteps({
  steps: passos = steps,
  title = 'Consultoria de tráfego pago: como funciona',
  subtitle = 'Procurando uma agência de tráfego pago ou uma empresa de tráfego pago? Aqui você fala direto com quem cuida das campanhas, do primeiro contato ao resultado medido, em quatro etapas.',
}: {
  steps?: { title: string; text: string }[]
  title?: string
  subtitle?: string
}) {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {passos.map((s, i) => (
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

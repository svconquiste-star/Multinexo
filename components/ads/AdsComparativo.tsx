import { PRECO_TEXTO } from '@/lib/preco'

// Resposta direta para "gestor de tráfego, agência ou fazer sozinho?" (AEO/GEO).
// Só afirma o que é do serviço; a coluna de agência e a de "sozinho" são comparações gerais.
const ROWS: { label: string; gestor: string; agencia: string; sozinho: string }[] = [
  {
    label: 'Quem cuida das campanhas',
    gestor: 'Eu, direto, do primeiro contato ao resultado medido',
    agencia: 'Uma equipe, em geral com atendimento intermediado por um gerente de conta',
    sozinho: 'Você',
  },
  {
    label: 'Custo',
    gestor: `${PRECO_TEXTO} de honorário, mais a verba de anúncios paga direto às plataformas`,
    agencia: 'Honorário mais verba; os valores variam de agência para agência',
    sozinho: 'Só a verba de anúncios, mas exige tempo e aprendizado',
  },
  {
    label: 'Como você acompanha',
    gestor: 'Dashboard com investimento, contatos e custo por contato',
    agencia: 'Varia: relatório periódico ou painel, conforme a agência',
    sozinho: 'Pelos painéis de cada plataforma',
  },
  {
    label: 'Indicado quando',
    gestor: 'Você quer atendimento próximo e decisões com base em dados',
    agencia: 'A operação é grande, com vários canais e equipes envolvidas',
    sozinho: 'O orçamento é muito pequeno e você tem tempo para aprender',
  },
]

export default function AdsComparativo() {
  return (
    <section id="gestor-agencia" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Gestor de tráfego, agência ou fazer sozinho: qual escolher?</h2>
          <p className="section-subtitle">
            <strong className="text-gray-900">Gestor de tráfego pago</strong> é o profissional que cria e otimiza
            anúncios no Meta, Google e outras plataformas para gerar contatos e vendas, e acompanha o resultado em
            números. Veja como isso se compara a uma agência e a fazer por conta própria.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-900">
                <th scope="col" className="p-4 font-semibold"><span className="sr-only">Critério</span></th>
                <th scope="col" className="p-4 font-bold text-purple-700">Gestor (eu)</th>
                <th scope="col" className="p-4 font-semibold">Agência</th>
                <th scope="col" className="p-4 font-semibold">Fazer sozinho</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label} className="border-t border-gray-100 align-top">
                  <th scope="row" className="p-4 font-semibold text-gray-900">{r.label}</th>
                  <td className="p-4 text-gray-800 bg-purple-50/60">{r.gestor}</td>
                  <td className="p-4 text-gray-600">{r.agencia}</td>
                  <td className="p-4 text-gray-600">{r.sozinho}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Comparação geral: cada agência e cada negócio é diferente. Na análise gratuita, eu digo qual caminho faz mais
          sentido para o seu caso.
        </p>
      </div>
    </section>
  )
}

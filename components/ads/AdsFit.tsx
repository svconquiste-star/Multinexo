import { Check, X } from 'lucide-react'

const forYou = [
  'Empresas e negócios locais que querem atrair mais clientes pela internet.',
  'Quem tem um serviço ou produto claro e atende os contatos pelo WhatsApp.',
  'Quem quer acompanhar investimento, contatos e custo por contato em um painel.',
  'Quem aceita investir em anúncios e decidir com base em dados.',
]

const notForYou = [
  'Quem procura curso, aula ou mentoria de tráfego pago.',
  'Quem busca vaga de emprego ou estágio na área.',
  'Quem espera resultado garantido ou quer divulgar sem investir em anúncios.',
  'Quem quer o serviço de graça: a análise é gratuita, a gestão das campanhas é um serviço pago.',
]

// Filtra o público logo na landing: os termos de busca estavam trazendo gente
// de curso e de vaga.
export default function AdsFit() {
  return (
    <section id="para-quem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Para quem é este serviço</h2>
          <p className="section-subtitle">Antes de falar comigo, confira se faz sentido para o seu momento.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Para quem é</h3>
            <ul className="space-y-4">
              {forYou.map((t) => (
                <li key={t} className="flex gap-3 text-gray-700">
                  <Check size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Para quem não é</h3>
            <ul className="space-y-4">
              {notForYou.map((t) => (
                <li key={t} className="flex gap-3 text-gray-700">
                  <X size={20} className="mt-0.5 flex-shrink-0 text-red-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

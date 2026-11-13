import { ArrowRight } from 'lucide-react'
import WhatsAppLink from '@/components/WhatsAppLink'

// Seção "Investimento" da landing: responde "quanto custa" sem inventar valor.
// O texto do honorário vem de PRECO_TEXTO (topo de app/gestor-de-trafego-pago/page.tsx).
// O botão usa o WhatsAppLink de sempre: dentro do provider ele abre o formulário
// curto e dispara lead_form_open com este location.
export default function AdsInvestimento({ preco }: { preco: string }) {
  return (
    <section id="investimento" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Quanto custa a gestão de tráfego pago?</h2>
          <p className="section-subtitle">
            O investimento tem duas partes: o honorário da gestão e a verba de anúncios. Você entende cada uma antes
            de decidir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">1. Honorário de gestão</p>
            <p className="mt-3 text-xl font-bold text-gray-900">{preco}</p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              É o meu trabalho: planejar, criar e acompanhar as campanhas e o dashboard.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">2. Verba de anúncios</p>
            <p className="mt-3 text-xl font-bold text-gray-900">Paga direto ao Google e à Meta</p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Você define o valor junto comigo, de acordo com o seu objetivo. Esse dinheiro não passa por mim.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <WhatsAppLink
            href="https://wa.me/5531993121211?text=Olá!%20Quero%20saber%20o%20investimento%20do%20serviço%20de%20tráfego%20pago."
            location="ads-investimento"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Quero minha análise gratuita</span>
            <ArrowRight size={20} />
          </WhatsAppLink>
          <p className="mt-3 text-sm text-gray-500">A análise é gratuita e sem compromisso.</p>
        </div>
      </div>
    </section>
  )
}

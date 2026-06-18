'use client'

import { Bot, Sparkles, UserPlus, Workflow } from 'lucide-react'

const flows = [
  {
    id: 1,
    image: '/images/automacoes/atendente.png',
    icon: Bot,
    title: 'Atendente de IA no WhatsApp',
    description: 'Um agente de IA que responde, consulta dados e atende seus clientes 24/7 — com memória de conversa e envio automático de mensagens.',
  },
  {
    id: 2,
    image: '/images/automacoes/conteudo.png',
    icon: Sparkles,
    title: 'Fábrica de conteúdo automática',
    description: 'A IA gera o conceito do post, a legenda e a imagem e publica direto no Instagram. Conteúdo no piloto automático.',
  },
  {
    id: 3,
    image: '/images/automacoes/leads.png',
    icon: UserPlus,
    title: 'Captação e qualificação de leads',
    description: 'Captura as mensagens do WhatsApp, organiza e salva os dados no banco automaticamente, prontos para o time de vendas.',
  },
  {
    id: 4,
    image: '/images/automacoes/fluxo-completo.png',
    icon: Workflow,
    title: 'Operações completas integradas',
    description: 'Fluxos robustos que conectam várias etapas do seu negócio em uma só automação — sem trabalho manual repetitivo.',
  },
]

export default function AutomacoesIA() {
  return (
    <section id="automacoes" className="py-20 px-4 sm:px-6 lg:px-8 gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-pink-300 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            <Bot size={16} />
            <span>Automações com IA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Automações com IA que eu construo
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Atendimento, captação e conteúdo rodando sozinhos. Coloco a Inteligência Artificial para trabalhar pela sua operação — de verdade, não na teoria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {flows.map((flow) => {
            const Icon = flow.icon
            return (
              <div
                key={flow.id}
                className="bg-gray-800/60 rounded-2xl shadow-xl border border-white/10 overflow-hidden flex flex-col h-full hover:border-pink-500/50 transition-colors duration-300"
              >
                <div className="bg-black/40 p-3 border-b border-white/10 flex items-center justify-center h-60">
                  <img
                    src={flow.image}
                    alt={flow.title}
                    className="max-h-full max-w-full w-auto object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{flow.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{flow.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Automações reais desenvolvidas por mim em n8n, rodando para clientes.
        </p>
      </div>
    </section>
  )
}

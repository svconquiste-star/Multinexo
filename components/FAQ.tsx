'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

type Faq = {
  question: string
  intro: string
  items?: { title: string; text: string }[]
  bullets?: string[]
  outro?: string
}

const faqs: Faq[] = [
  {
    question: 'Quais serviços vocês oferecem?',
    intro:
      'Oferecemos soluções para empresas que querem atrair mais oportunidades, melhorar seus processos comerciais e tomar decisões com base em dados.',
    items: [
      {
        title: 'Tráfego & Estratégia',
        text: 'Gestão de campanhas no Google Ads e Meta Ads, sempre orientada por estratégia, análise de dados e objetivos reais do negócio.',
      },
      {
        title: 'IA como Vantagem Competitiva',
        text: 'Soluções de inteligência artificial para atendimento, captação e qualificação de leads, funcionando 24 horas por dia para reduzir tarefas manuais e tornar a operação mais eficiente.',
      },
      {
        title: 'Criação de Dashboards',
        text: 'Painéis personalizados que reúnem os principais indicadores do negócio em um só lugar, facilitando o acompanhamento de tráfego, vendas, atendimento e performance.',
      },
      {
        title: 'Consultoria Estratégica',
        text: 'Análise de funil, posicionamento, canais e oportunidades de crescimento, com direcionamento claro e um plano de ação personalizado para o negócio.',
      },
    ],
  },
  {
    question: 'Como funciona a análise gratuita?',
    intro:
      'O primeiro passo é agendar uma conversa pelo WhatsApp. Durante a call, um estrategista analisa o cenário atual do seu negócio, identifica oportunidades e apresenta possíveis caminhos para melhorar a estratégia e aumentar as conversões. A consulta é gratuita, sem compromisso e sem obrigação de contratação.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    intro:
      'Atendemos clientes de forma online ou presencial. Para empresas de fora de Betim, o atendimento é realizado por videochamada, proporcionando praticidade e agilidade independentemente da localização. Para clientes de Betim, o atendimento também pode ser presencial quando houver necessidade.',
  },
  {
    question: 'Como funciona o investimento?',
    intro:
      'Cada empresa possui necessidades, objetivos e desafios diferentes. Por isso, não trabalhamos com um investimento padrão para todos os projetos. Durante a call inicial, analisamos o seu cenário, entendemos o que precisa ser feito e apresentamos uma solução compatível com a necessidade do seu negócio. Assim, você recebe uma proposta baseada no escopo real do projeto, e não em um pacote genérico.',
  },
  {
    question: 'O que é a criação de dashboard?',
    intro:
      'É a criação de um painel personalizado de acompanhamento de resultados, reunindo as principais métricas do seu negócio de forma clara e organizada. Você pode acompanhar informações como:',
    bullets: [
      'Funil de conversão',
      'Tendência diária de resultados',
      'Distribuição de leads ou vendas por estado',
      'CPM',
      'CTR',
      'CPC',
      'Custo por contato',
      'ROAS',
      'Relatórios de performance',
    ],
    outro:
      'Tudo isso com dados atualizados para facilitar o acompanhamento da operação e tornar a tomada de decisão mais rápida. Decisões com dados, sem planilhas confusas.',
  },
  {
    question: 'Como funciona o atendente de IA no WhatsApp?',
    intro:
      'O atendente de IA funciona como um agente inteligente conectado ao WhatsApp, preparado para atender clientes e leads de forma automatizada. Ele pode responder perguntas, consultar informações, manter o contexto das conversas e enviar mensagens automaticamente, dependendo da configuração criada para o negócio. O atendimento pode funcionar 24 horas por dia, 7 dias por semana, ajudando a reduzir tarefas repetitivas e evitando que oportunidades fiquem sem resposta.',
  },
  {
    question: 'Em quanto tempo começo a ver resultados?',
    intro:
      'O prazo varia de acordo com cada projeto, mercado, objetivo, investimento, estrutura atual e estratégia utilizada. Algumas ações podem gerar sinais de evolução mais rapidamente, enquanto outras exigem mais tempo de otimização, testes e coleta de dados. Por isso, antes de estabelecer qualquer expectativa, analisamos o cenário da empresa e definimos uma estratégia compatível com os objetivos do negócio. Mais do que prometer resultados rápidos, nosso foco é construir uma estratégia que possa ser medida, analisada e constantemente otimizada.',
  },
]

// Monta o texto plano da resposta para o JSON-LD (fonte única com o conteúdo visível).
function answerToText(faq: Faq): string {
  const parts: string[] = [faq.intro]
  if (faq.items) parts.push(faq.items.map((i) => `${i.title}: ${i.text}`).join(' '))
  if (faq.bullets) parts.push(faq.bullets.join('; ') + '.')
  if (faq.outro) parts.push(faq.outro)
  return parts.join(' ')
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerToText(faq),
      },
    })),
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Dados estruturados de perguntas frequentes (Schema.org FAQPage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            <HelpCircle size={16} />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="section-title">Ainda com dúvidas?</h2>
          <p className="section-subtitle">
            As respostas para o que os clientes mais nos perguntam antes de começar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    size={22}
                    className={`text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed space-y-4">
                      <p>{faq.intro}</p>

                      {faq.items && (
                        <ul className="space-y-3">
                          {faq.items.map((item) => (
                            <li key={item.title}>
                              <span className="font-semibold text-gray-900">{item.title}:</span>{' '}
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      )}

                      {faq.bullets && (
                        <ul className="list-disc pl-5 space-y-1 marker:text-purple-500">
                          {faq.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {faq.outro && <p>{faq.outro}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

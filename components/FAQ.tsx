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
    question: 'Quais serviços você oferece?',
    intro:
      'Trabalho com empresas que querem atrair mais clientes, melhorar o processo comercial e decidir com base em dados.',
    items: [
      {
        title: 'Tráfego pago',
        text: 'Gestão de campanhas no Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Kwai Ads, sempre orientada por estratégia, análise de dados e objetivos reais do negócio.',
      },
      {
        title: 'SEO e GEO',
        text: 'Otimização para o seu site aparecer no Google (SEO) e para o seu negócio ser citado nas respostas de IAs como ChatGPT, Gemini e Google AI Overviews (GEO).',
      },
      {
        title: 'Mensuração e tracking',
        text: 'Configuração de Google Analytics 4 (GA4), Google Tag Manager e rastreamento de conversões, com qualificação de leads em MQL e SQL.',
      },
      {
        title: 'IA como Vantagem Competitiva',
        text: 'Soluções de inteligência artificial para atendimento, captação e qualificação de leads, para reduzir tarefas manuais e tornar a operação mais eficiente.',
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
    question: 'Em quais plataformas de anúncio você trabalha?',
    intro:
      'Trabalho com Meta Ads (Facebook e Instagram), Google Ads (Pesquisa, YouTube e Display), TikTok Ads, LinkedIn Ads e Kwai Ads. A escolha dos canais depende de onde está o seu cliente e do objetivo da campanha. Em todos, a mensuração é feita com GA4, Google Tag Manager e as conversões de cada plataforma, acompanhando CAC, ROAS, LTV, CTR e CPL.',
  },
  {
    question: 'Como funciona a análise gratuita?',
    intro:
      'O primeiro passo é falar comigo pelo WhatsApp ou pelo formulário. Eu analiso o cenário atual do seu negócio, identifico oportunidades e apresento caminhos para melhorar a estratégia e as conversões, com retorno em até 1 dia útil. A análise é gratuita, sem compromisso e sem obrigação de contratação.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    intro:
      'Atendo de forma online ou presencial. Para empresas de fora de Betim, o atendimento é por videochamada, com a mesma agilidade em qualquer cidade. Para clientes de Betim, também posso atender presencialmente quando houver necessidade.',
  },
  {
    question: 'Quanto custa um gestor de tráfego pago?',
    intro:
      'O honorário da gestão começa em R$ 1.000 por mês e varia conforme o número de plataformas e o volume de campanhas. A verba de anúncios é separada e paga direto às plataformas (Meta, Google, TikTok, LinkedIn ou Kwai). Na análise gratuita, eu entendo o seu cenário e monto a proposta para o seu caso.',
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
      'O dashboard não se limita a anúncios: eu crio painéis para qualquer nicho e com as informações que o seu negócio precisa, como vendas e faturamento, estoque, atendimento e WhatsApp, agendamentos, metas da equipe comercial, financeiro ou indicadores da operação, juntando dados de planilhas, sistemas, CRM e plataformas de anúncio. Tudo com dados atualizados para tornar a decisão mais rápida. Decisões com dados, sem planilhas confusas.',
  },
  {
    question: 'Como funciona o atendente de IA no WhatsApp?',
    intro:
      'O atendente de IA funciona como um agente inteligente conectado ao WhatsApp, preparado para atender clientes e leads de forma automatizada. Ele pode responder perguntas, consultar informações, manter o contexto das conversas e enviar mensagens automaticamente, dependendo da configuração criada para o negócio. O atendimento automatizado ajuda a reduzir tarefas repetitivas e a evitar que oportunidades fiquem sem resposta.',
  },
  {
    question: 'Em quanto tempo começo a ver resultados?',
    intro:
      'O prazo varia de acordo com cada projeto, mercado, objetivo, investimento, estrutura atual e estratégia utilizada. Algumas ações podem gerar sinais de evolução mais rapidamente, enquanto outras exigem mais tempo de otimização, testes e coleta de dados. Por isso, antes de criar qualquer expectativa, eu analiso o cenário da empresa e defino uma estratégia compatível com os objetivos do negócio. Mais do que prometer resultados rápidos, o meu foco é construir uma estratégia que possa ser medida, analisada e otimizada sempre.',
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
            As respostas para o que os clientes mais me perguntam antes de começar.
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
                  aria-controls={`faq-resposta-${index}`}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    size={22}
                    className={`text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {/* A resposta fica sempre no HTML (Google e IAs leem); fechada, só fica oculta. */}
                <div
                  id={`faq-resposta-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-gray-600 leading-relaxed space-y-4 animate-faqOpen"
                >
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

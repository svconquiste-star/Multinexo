'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Quais serviços você oferece?',
    answer:
      'Trabalho com quatro frentes que se conectam: gestão de tráfego pago (Google e Meta Ads) com estratégia, automações com Inteligência Artificial (como atendente de IA no WhatsApp), criação de dashboards sob medida e consultoria estratégica de marketing.',
  },
  {
    question: 'Como funciona a análise gratuita?',
    answer:
      'Você fala comigo pelo WhatsApp e eu analiso o seu negócio — funil, canais e objetivos — para apresentar uma estratégia personalizada de crescimento. É sem compromisso e sem obrigação de fechar.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    answer:
      'O atendimento é online, então trabalho com clientes de todo o Brasil. A base fica em Betim, Minas Gerais, mas toda a gestão, as reuniões e os relatórios acontecem de forma remota.',
  },
  {
    question: 'Como funciona o investimento?',
    answer:
      'O investimento é definido de acordo com o seu objetivo e o escopo do projeto. Por isso começamos pela análise gratuita: entendendo a sua necessidade, apresento uma proposta personalizada. Importante: a verba de anúncios (tráfego pago) é separada do valor do serviço.',
  },
  {
    question: 'O que é a criação de dashboard?',
    answer:
      'É um painel sob medida que reúne, em um só lugar, as métricas de tráfego, vendas e atendimento do seu negócio em tempo real. Você acompanha quanto investe, quantos leads e vendas gera e o custo de cada resultado — tomando decisões com dados, sem depender de planilhas confusas.',
  },
  {
    question: 'Como funciona o atendente de IA no WhatsApp?',
    answer:
      'É um agente de Inteligência Artificial que responde seus clientes 24 horas por dia, com memória de conversa, qualifica os contatos e envia mensagens automaticamente. Ele reduz a operação manual e garante que nenhum lead fique sem resposta.',
  },
  {
    question: 'Em quanto tempo vejo resultado?',
    answer:
      'Campanhas de tráfego pago começam a gerar contatos já nos primeiros dias, mas o crescimento previsível é construído ao longo das semanas, ajustando a estratégia com base nos dados. O foco não é um pico de sorte, e sim uma máquina que gera clientes de forma consistente.',
  },
]

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
        text: faq.answer,
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
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
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

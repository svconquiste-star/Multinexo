'use client'

import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  const whatsappLink = 'https://wa.me/5531993121211?text=Olá%20Multinexo!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20conhecer%20seus%20serviços.'

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Agende uma consulta gratuita e descubra como podemos aumentar suas conversões com gestão de tráfego, automações com IA e atendimento inteligente.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Calendar size={48} className="text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Agende sua Análise Gratuita</h3>
              <p className="text-gray-600 text-lg">
                Nossos especialistas vão analisar seu negócio e apresentar uma estratégia personalizada para aumentar suas conversões.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Análise Completa</p>
                  <p className="text-gray-600">Avaliação detalhada do seu negócio e oportunidades</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Estratégia Personalizada</p>
                  <p className="text-gray-600">Plano customizado para seus objetivos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sem Compromisso</p>
                  <p className="text-gray-600">Totalmente gratuito, sem obrigação</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-primary text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Agendar Consulta via WhatsApp</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-center text-gray-600 text-sm mt-6">
              Responderemos em até 2 horas durante o horário comercial
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-opacity-80">
            Transforme seu negócio com as melhores soluções de marketing digital
          </p>
        </div>
      </div>
    </section>
  )
}

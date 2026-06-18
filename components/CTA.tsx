'use client'

import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  const whatsappLink = 'https://wa.me/5531984125407?text=Olá!%20Gostaria%20de%20agendar%20uma%20análise%20gratuita%20para%20escalar%20meu%20negócio.'

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para escalar o seu negócio?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Fale comigo e descubra como transformar tráfego em crescimento previsível. Automatizo atendimento, captação e vendas para gerar clientes todos os dias — com tudo medido em dashboard.
          </p>
        </div>

        <div id="agendar" className="max-w-2xl mx-auto mb-12 scroll-mt-28">
          <div className="bg-white rounded-xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Calendar size={48} className="text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Agende sua Análise Gratuita</h3>
              <p className="text-gray-600 text-lg">
                Eu analiso o seu negócio e apresento uma estratégia personalizada para aumentar suas conversões — sem compromisso.
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
                  <p className="font-semibold text-gray-900">Tráfego & Estratégia</p>
                  <p className="text-gray-600">Campanhas guiadas por estratégia para gerar clientes todos os dias</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">IA + Dashboard</p>
                  <p className="text-gray-600">Atendimento automatizado 24/7 e resultados medidos em tempo real</p>
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
                  <p className="text-gray-600">Consulta gratuita, sem obrigação</p>
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
              Responderemos em poucos minutos! ⚡
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-opacity-80">
            Transformo empresas locais e experts em máquinas previsíveis de crescimento com tráfego, IA e estratégia
          </p>
        </div>
      </div>
    </section>
  )
}

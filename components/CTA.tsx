'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CTA() {
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
            Comece agora e veja resultados em até 30 dias. Sem compromisso, sem cartão de crédito necessário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-6">Plano Starter</h3>
            <p className="text-4xl font-bold mb-2">R$ 1.990<span className="text-lg text-opacity-70">/mês</span></p>
            <p className="text-white text-opacity-80 mb-8">Ideal para pequenas empresas</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle size={20} />
                <span>Gestão de 1 campanha</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={20} />
                <span>Automação básica</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={20} />
                <span>Suporte por email</span>
              </li>
            </ul>

            <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
              Começar Agora
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl transform scale-105">
            <div className="bg-gradient-primary text-white px-4 py-2 rounded-full inline-block mb-6 text-sm font-bold">
              MAIS POPULAR
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Plano Professional</h3>
            <p className="text-4xl font-bold text-gray-900 mb-2">R$ 4.990<span className="text-lg text-gray-600">/mês</span></p>
            <p className="text-gray-600 mb-8">Para empresas em crescimento</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3 text-gray-900">
                <CheckCircle size={20} className="text-purple-600" />
                <span>Gestão de até 5 campanhas</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-900">
                <CheckCircle size={20} className="text-purple-600" />
                <span>Automação avançada com IA</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-900">
                <CheckCircle size={20} className="text-purple-600" />
                <span>Agente IA 24/7</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-900">
                <CheckCircle size={20} className="text-purple-600" />
                <span>Suporte prioritário</span>
              </li>
            </ul>

            <button className="w-full py-3 bg-gradient-primary text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Começar Agora</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-opacity-80">
            Todos os planos incluem análise gratuita e consultoria inicial
          </p>
        </div>
      </div>
    </section>
  )
}

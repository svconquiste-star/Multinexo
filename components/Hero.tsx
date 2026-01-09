'use client'

import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <Zap size={18} />
              <span className="text-sm font-semibold">Transforme seu negócio com IA</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Gestão de Tráfego, Automações e Atendimento com IA
            </h1>

            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              Aumente suas conversões com soluções inteligentes de marketing digital. Automação, gestão de tráfego e atendimento 24/7 com agentes de IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span>Começar Agora</span>
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                Agendar Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white border-opacity-20">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-white text-opacity-80">Clientes Ativos</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10M+</p>
                <p className="text-white text-opacity-80">Leads Gerados</p>
              </div>
              <div>
                <p className="text-3xl font-bold">300%</p>
                <p className="text-white text-opacity-80">ROI Médio</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-200 opacity-10 rounded-2xl"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-300 opacity-10 rounded-full blur-3xl"></div>
            
            {/* Placeholder for image or animation */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white text-opacity-50">
                <p className="text-lg">Espaço para imagem/animação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

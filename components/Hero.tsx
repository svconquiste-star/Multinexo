'use client'

import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-white">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Zap size={18} />
            <span className="text-sm font-semibold">Estrategista de Marketing Digital</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Escalo seu negócio com tráfego, estratégia e IA 🚀
          </h1>

          <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed max-w-2xl">
            Unindo gestão de tráfego, consultoria estratégica e IA como vantagem competitiva, transformo o seu negócio em uma máquina previsível de crescimento — com dashboards que mostram cada resultado em tempo real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="https://wa.me/5531984125407?text=Olá!%20Gostaria%20de%20agendar%20uma%20análise%20para%20escalar%20meu%20negócio." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Quero Escalar Meu Negócio</span>
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white border-opacity-20">
            <div>
              <p className="text-3xl font-bold">+40</p>
              <p className="text-white text-opacity-80">Negócios escalados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3x</p>
              <p className="text-white text-opacity-80">ROI médio em tráfego</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-white text-opacity-80">Atendimento com IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

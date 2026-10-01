'use client'

import { Target, Filter, BarChart3, PenLine, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react'
import WhatsAppLink from './WhatsAppLink'

const whatsappLink =
  'https://wa.me/5531993121211?text=Ol%C3%A1!%20Sou%20expert%2Fafiliado%20de%20Forex%2FOB%20e%20quero%20estruturar%20estrat%C3%A9gia%2C%20funil%20e%20tr%C3%A1fego.%20Podemos%20agendar%20uma%20reuni%C3%A3o%3F'

const entregaveis = [
  {
    icon: Target,
    title: 'Estratégia',
    desc: 'Defino o posicionamento, a oferta e o plano de aquisição certos para o seu público — com foco em dados, não em achismo.',
  },
  {
    icon: Filter,
    title: 'Funil',
    desc: 'Estruturo a jornada do seguidor ao lead qualificado: do primeiro contato até a entrada na sua lista, grupo ou mentoria.',
  },
  {
    icon: BarChart3,
    title: 'Tráfego',
    desc: 'Gestão de campanhas (Meta e Google) para atrair a audiência certa e transformar investimento em captação previsível.',
  },
  {
    icon: PenLine,
    title: 'Copy',
    desc: 'Textos e criativos que comunicam sua autoridade e fazem o público agir — prontos para o mercado digital.',
  },
]

export default function ExpertAffiliate() {
  return (
    <section id="experts" className="py-20 px-4 sm:px-6 lg:px-8 gradient-dark relative overflow-hidden">
      {/* Decoração */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 opacity-10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/15 text-emerald-300 px-4 py-2 rounded-full mb-5 text-sm font-semibold">
            <TrendingUp size={16} />
            <span>Para Experts & Afiliados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl mx-auto">
            É expert ou afiliado de Forex e Opções Binárias? Pare de depender de sorte no alcance.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Eu sou o <strong className="text-white">estrategista por trás de experts e afiliados</strong>: crio a estratégia, o funil, o tráfego e a copy que transformam a sua autoridade em um fluxo <strong className="text-white">previsível</strong> de novos seguidores, alunos e indicações no mercado digital.
          </p>
        </div>

        {/* Entregáveis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {entregaveis.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-emerald-500/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Autoridade + Para quem é */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-3">Experiência com performance de verdade</h3>
            <p className="text-gray-300 leading-relaxed">
              Hoje acompanho a performance de portfólios com <strong className="text-white">dezenas de experts</strong>, medindo cada real investido até o retorno — payback, ROI e qualidade de captação. É essa mentalidade de dados que aplico no seu projeto.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-4">Para quem é</h3>
            <div className="flex flex-wrap gap-2.5">
              {['Experts de Forex', 'Experts de Opções Binárias', 'Afiliados de corretoras', 'Mentores e donos de grupo', 'Criadores de conteúdo do nicho'].map((t) => (
                <span
                  key={t}
                  className="text-sm bg-white/5 border border-white/10 text-gray-200 px-4 py-2 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppLink
            href={whatsappLink}
            location="experts"
            className="inline-flex items-center justify-center gap-3 px-9 py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={22} />
            <span>Agendar reunião no WhatsApp</span>
            <ArrowRight size={20} />
          </WhatsAppLink>
          <p className="text-gray-400 text-sm mt-4">
            Resposta rápida • Diagnóstico sem compromisso
          </p>
        </div>
      </div>
    </section>
  )
}

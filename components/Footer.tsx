'use client'

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">Multinexo</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando negócios com soluções inteligentes de marketing digital e IA.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Gestão de Tráfego</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Automações com IA</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Atendimento IA</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Cases</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Empresa</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/normas" className="hover:text-white transition-colors">
                  Normas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:contato@multinexo.com" className="hover:text-white transition-colors">contato@multinexo.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <a href="https://wa.me/5531993121211" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 31 9312-1211</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} />
                <span>Betim, MG</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-6 md:mb-0">
              © 2024 Multinexo. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

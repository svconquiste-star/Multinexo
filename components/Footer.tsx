'use client'

import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Multinexo Logo"
                width={280}
                height={93}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Estrategista de Marketing Digital. Escalo negócios com tráfego, estratégia e IA como vantagem competitiva.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Tráfego & Estratégia</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">IA como Vantagem Competitiva</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Criação de Dashboard</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Empresa</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="https://blog.multinexo.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#agendar" className="hover:text-white transition-colors">Contato</a></li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
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
                <a href="https://wa.me/5531984125407" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 31 98412-5407</a>
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
              © 2026 Multinexo. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/daguiar.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-aguiar-871628268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

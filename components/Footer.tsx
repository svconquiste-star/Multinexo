'use client'

import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppLink from './WhatsAppLink'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tight text-white">Daniel Aguiar</span>
              <span className="block text-sm font-medium text-gray-400">Estrategista de Marketing Digital</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Escalo negócios com tráfego, estratégia e IA como vantagem competitiva — no Brasil e no exterior.
            </p>
            <Image
              src="/images/logo.png"
              alt="Multinexo"
              width={200}
              height={67}
              className="h-12 w-auto opacity-80"
            />
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
                <WhatsAppLink href="https://wa.me/5531993121211?text=Olá!%20Gostaria%20de%20agendar%20uma%20análise%20gratuita." location="footer" className="hover:text-white transition-colors">+55 31 99312-1211</WhatsAppLink>
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
              © 2026 Daniel Aguiar · Multinexo. Todos os direitos reservados.
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

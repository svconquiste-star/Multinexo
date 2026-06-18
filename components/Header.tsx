'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const whatsappLink = 'https://wa.me/5531984125407?text=Olá!%20Gostaria%20de%20agendar%20uma%20análise%20gratuita%20para%20escalar%20meu%20negócio.'

  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'Cases', href: '#cases' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Contato', href: whatsappLink, external: true },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Multinexo Logo"
              width={360}
              height={120}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="#contact" className="btn-primary">
              Começar Agora
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="#contact" className="block w-full btn-primary text-center" onClick={() => setIsOpen(false)}>
              Começar Agora
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

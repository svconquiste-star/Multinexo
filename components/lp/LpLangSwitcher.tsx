'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { LOCALES, type Locale, localeMeta } from './i18n'

export default function LpLangSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const current = localeMeta(locale)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.label}
      >
        <Globe size={16} className="text-gray-500" />
        <span className="hidden sm:inline">{current.flag} {current.short}</span>
        <span className="sm:hidden">{current.flag}</span>
        <ChevronDown size={14} className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <ul
            role="listbox"
            className="absolute right-0 mt-2 z-50 w-56 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1"
          >
            {LOCALES.map((l) => {
              const active = l.code === locale
              return (
                <li key={l.code}>
                  <Link
                    href={l.path}
                    hrefLang={l.hreflang}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between gap-2 px-4 py-2.5 text-sm transition-colors ${
                      active ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>
                      <span className="mr-2">{l.flag}</span>
                      {l.label}
                    </span>
                    {active && <Check size={16} className="text-purple-600" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}

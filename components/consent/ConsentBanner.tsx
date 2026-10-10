'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { applyConsent, isEuContext, readConsent, saveConsent } from './consent'

type Loc = 'pt-BR' | 'pt-PT' | 'en'

const TEXT: Record<Loc, { msg: string; accept: string; reject: string; link: string }> = {
  'pt-BR': {
    msg: 'Usamos cookies de medição e anúncios (Meta e Google) para entender o que funciona. Você pode aceitar ou recusar.',
    accept: 'Aceitar',
    reject: 'Recusar',
    link: 'Política de Privacidade',
  },
  'pt-PT': {
    msg: 'Utilizamos cookies de medição e publicidade (Meta e Google) para perceber o que funciona. Pode aceitar ou recusar.',
    accept: 'Aceitar',
    reject: 'Recusar',
    link: 'Política de Privacidade',
  },
  en: {
    msg: 'We use measurement and advertising cookies (Meta and Google) to understand what works. You can accept or decline.',
    accept: 'Accept',
    reject: 'Decline',
    link: 'Privacy Policy (in Portuguese)',
  },
}

function detectLocale(pathname: string, search: string): Loc {
  if (pathname.startsWith('/europa/en')) return 'en'
  if (pathname.startsWith('/europa/pt')) return 'pt-PT'
  const q = new URLSearchParams(search)
  const lang = q.get('lang')
  if (lang === 'en') return 'en'
  if (lang === 'pt' || lang === 'pt-PT') return 'pt-PT'
  if (lang === 'pt-BR' || lang === 'br') return 'pt-BR'
  if (q.get('mercado')?.toUpperCase() === 'PT') return 'pt-PT'
  return 'pt-BR'
}

export default function ConsentBanner() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)
  const [loc, setLoc] = useState<Loc>('pt-BR')

  useEffect(() => {
    const { pathname: path, search } = window.location
    if (!isEuContext(path, search) || readConsent() !== null) {
      setShow(false)
      return
    }
    // Entrou num contexto Europa/UK por navegação interna: o layout não
    // chegou a negar o consentimento no carregamento, então nega agora.
    if (window.__mxDeny !== true) applyConsent(false)
    setLoc(detectLocale(path, search))
    setShow(true)
  }, [pathname])

  if (!show) return null
  const t = TEXT[loc]

  function choose(granted: boolean) {
    saveConsent(granted ? 'granted' : 'denied')
    applyConsent(granted)
    setShow(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed bottom-0 inset-x-0 z-[70] p-3 sm:p-4"
    >
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-gray-700 leading-relaxed flex-1">
          {t.msg}{' '}
          <Link
            href="/politica-de-privacidade"
            target="_blank"
            className="text-purple-600 underline font-medium"
          >
            {t.link}
          </Link>
        </p>
        <div className="flex gap-2 sm:flex-shrink-0">
          <button
            onClick={() => choose(false)}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50"
          >
            {t.reject}
          </button>
          <button
            onClick={() => choose(true)}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}

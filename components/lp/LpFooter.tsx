import Link from 'next/link'
import type { Dict } from './i18n'

// Footer minimalista da LP: so direitos + Politica de Privacidade
// (link exigido para aprovacao de anuncios Meta/Google).
export default function LpFooter({ t }: { t: Dict }) {
  const f = t.footer
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8 pb-24 md:pb-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <img
          src="/images/logo.png"
          alt="Multinexo"
          className="h-10 w-auto object-contain mx-auto opacity-90"
        />
        <p className="text-white font-semibold">{f.signature}</p>
        <p className="text-sm max-w-xl mx-auto">{f.tagline}</p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
            {f.privacy}
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            {f.mainSite}
          </Link>
        </div>
        <p className="text-xs text-gray-500">© {year} Multinexo. {f.rights}</p>
      </div>
    </footer>
  )
}

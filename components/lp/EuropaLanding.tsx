import LpHeader from './LpHeader'
import LpHero from './LpHero'
import LpAudiences from './LpAudiences'
import LpPains from './LpPains'
import LpServices from './LpServices'
import LpAuthority from './LpAuthority'
import LpHowItWorks from './LpHowItWorks'
import LpProof from './LpProof'
import LpFaq from './LpFaq'
import LpCta from './LpCta'
import LpStickyCta from './LpStickyCta'
import LpFooter from './LpFooter'
import { DICT, type Locale } from './i18n'

// Renderiza a landing /europa num idioma. As 3 rotas só diferem no `locale`.
export default function EuropaLanding({ locale }: { locale: Locale }) {
  const t = DICT[locale]
  return (
    <main className="min-h-screen">
      <LpHeader t={t} locale={locale} />
      <LpHero t={t} />
      <LpAudiences t={t} />
      <LpPains t={t} />
      <LpServices t={t} />
      <LpAuthority t={t} />
      <LpHowItWorks t={t} />
      <LpProof t={t} />
      <LpFaq t={t} />
      <LpCta t={t} />
      <LpFooter t={t} />
      <LpStickyCta t={t} />
    </main>
  )
}

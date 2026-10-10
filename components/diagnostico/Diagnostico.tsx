'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Instagram, MessageCircle } from 'lucide-react'
import WhatsAppLink from '@/components/WhatsAppLink'
import { LOCALES, type Locale } from '@/components/lp/i18n'
import { COPY } from './copy'
import {
  JA_ANUNCIA_IDS,
  MARKETS,
  SEGMENT_IDS,
  URGENCIA_IDS,
  bandCode,
  bandFloor,
  money,
  qualify,
  verbaBandIds,
  type JaAnuncia,
  type MarketCode,
  type QualResult,
  type Segmento,
  type Urgencia,
  type Verba,
} from './config'
import { captureAttribution, track, type Attribution } from './track'
import { buildWaUrl, makeRef, verbaLabel } from './whatsapp'

type Step = 1 | 2 | 'result'

// Remove caracteres de controle e espaços repetidos; limita o tamanho.
function clean(s: string, max: number): string {
  return s.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max)
}

const INPUT =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'

function RadioGroup<T extends string>({
  legend,
  hint,
  name,
  value,
  options,
  onChange,
}: {
  legend: string
  hint?: string
  name: string
  value: T | ''
  options: { id: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-gray-900 mb-1">{legend}</legend>
      {hint && <p className="text-xs text-gray-500 mb-2">{hint}</p>}
      <div className="space-y-2 mt-2">
        {options.map((o) => {
          const selected = value === o.id
          return (
            <label
              key={o.id}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer text-[15px] transition-colors focus-within:ring-2 focus-within:ring-purple-500 ${
                selected
                  ? 'border-purple-500 bg-purple-50 text-purple-900 font-medium'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name={name}
                value={o.id}
                checked={selected}
                onChange={() => onChange(o.id)}
                className="sr-only"
              />
              <span
                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${
                  selected ? 'border-purple-600 bg-purple-600' : 'border-gray-400'
                }`}
                aria-hidden
              >
                {selected && <Check size={12} className="text-white" />}
              </span>
              {o.label}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

export default function Diagnostico({
  initialMarket,
  initialLocale,
}: {
  initialMarket: MarketCode
  initialLocale: Locale
}) {
  const market = MARKETS[initialMarket]
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const copy = COPY[locale]

  const [step, setStep] = useState<Step>(1)
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [cidade, setCidade] = useState('')
  const [segmento, setSegmento] = useState<Segmento | ''>('')
  // Texto livre quando escolhe "Outro": vai só na mensagem do WhatsApp, nunca ao Pixel/GA4.
  const [segmentoOutro, setSegmentoOutro] = useState('')
  const [jaAnuncia, setJaAnuncia] = useState<JaAnuncia | ''>('')
  const [verba, setVerba] = useState<Verba | ''>('')
  const [urgencia, setUrgencia] = useState<Urgencia | ''>('')
  const [consent, setConsent] = useState(false)
  const [reviewBand, setReviewBand] = useState<Exclude<Verba, 'unknown'> | ''>('')
  const [error, setError] = useState('')
  const [result, setResult] = useState<QualResult | null>(null)

  // Cada evento sai uma única vez por visita.
  const viewedRef = useRef(false)
  const startedRef = useRef(false)
  const completedRef = useRef(false)
  const finalRef = useRef(false)
  const attrRef = useRef<Attribution>({})
  const refCode = useRef('')
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    attrRef.current = captureAttribution()
    if (!viewedRef.current) {
      viewedRef.current = true
      track({ fb: 'ViewContent', params: { content_name: 'diagnostico', mercado: market.code } })
    }
  }, [market.code])

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang
  }, [copy.htmlLang])

  useEffect(() => {
    // Leva o início do cartão para a tela a cada mudança de etapa (mobile).
    if (cardRef.current) cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step, result?.status])

  function touch() {
    if (startedRef.current) return
    startedRef.current = true
    track({ fb: 'FormStart', fbCustom: true, ga: 'form_start', params: { mercado: market.code } })
  }

  function submitStep1(e: React.FormEvent) {
    e.preventDefault()
    if (clean(nome, 30).length < 2) return setError(copy.errors.nome)
    if (clean(empresa, 60).length < 2) return setError(copy.errors.empresa)
    if (clean(cidade, 40).length < 2) return setError(copy.errors.cidade)
    if (!segmento) return setError(copy.errors.segmento)
    if (segmento === 'outro' && clean(segmentoOutro, 40).length < 2) {
      return setError(copy.errors.segmentoOutro)
    }
    setError('')
    track({ fb: 'FormStep1', fbCustom: true, ga: 'form_step', params: { mercado: market.code, step: 1 } })
    setStep(2)
  }

  // Dispara Lead / LeadDesqualificado uma única vez, só quando o resultado é final.
  function finalize(res: QualResult, band: Verba) {
    if (res.status !== 'review' && !finalRef.current) {
      finalRef.current = true
      if (res.status === 'qualified') {
        track({
          fb: 'Lead',
          ga: 'qualified_lead',
          params: {
            value: bandFloor(market, band),
            currency: market.currency,
            mercado: market.code,
            faixa_verba: bandCode(market, band),
          },
        })
        refCode.current = makeRef(market.code)
      } else {
        track({
          fb: 'LeadDesqualificado',
          fbCustom: true,
          ga: 'form_unqualified',
          params: { mercado: market.code, motivo: res.motivo },
        })
      }
    }
    setResult(res)
    setStep('result')
  }

  function submitStep2(e: React.FormEvent) {
    e.preventDefault()
    if (!jaAnuncia || !verba || !urgencia) return setError(copy.errors.step2)
    if (!consent) return setError(copy.errors.consent)
    setError('')

    if (!completedRef.current) {
      completedRef.current = true
      track({
        fb: 'FormComplete',
        fbCustom: true,
        ga: 'form_submit',
        params: {
          mercado: market.code,
          faixa_verba: bandCode(market, verba),
          urgencia,
          segmento: segmento || 'outro',
        },
      })
    }
    finalize(qualify({ verba, urgencia }, false), verba)
  }

  function resolveReview(chosen: Verba) {
    if (!urgencia) return
    setVerba(chosen)
    finalize(qualify({ verba: chosen, urgencia }, true), chosen)
  }

  const min = money(market, market.min, locale)
  const bandOptions = verbaBandIds(market).map((b) => ({
    id: b,
    label: verbaLabel(copy, market, locale, b),
  }))
  const verbaOptions = [
    ...bandOptions,
    { id: 'unknown' as const, label: copy.verba.unknown },
  ]
  const firstName = clean(nome, 30).split(' ')[0]

  const waHref =
    result?.status === 'qualified' && segmento && jaAnuncia && urgencia && verba
      ? buildWaUrl(
          copy,
          market,
          locale,
          {
            nome: clean(nome, 30),
            empresa: clean(empresa, 60),
            cidade: clean(cidade, 40),
            segmento:
              segmento === 'outro' && clean(segmentoOutro, 40)
                ? `${copy.segmentos.outro}: ${clean(segmentoOutro, 40)}`
                : copy.segmentos[segmento],
            jaAnuncia: copy.jaAnuncia[jaAnuncia],
            urgencia: copy.urgencia[urgencia],
            verba,
          },
          refCode.current,
          attrRef.current
        )
      : ''

  const progress = step === 1 ? 50 : 100

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Daniel Aguiar
            </span>
            <span className="block text-[11px] text-gray-500 mt-0.5">{copy.role}</span>
          </div>
          <div className="flex gap-1" role="group" aria-label="Language">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-pressed={locale === l.code}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold border transition-colors ${
                  locale === l.code
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {l.flag} {l.short}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-8 sm:py-12">
        <div ref={cardRef} className="scroll-mt-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{copy.title}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{copy.subtitle}</p>

          {step !== 'result' && (
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">
                {copy.step(step)}
              </p>
              <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-7">
            {/* ETAPA 1 */}
            {step === 1 && (
              <form onSubmit={submitStep1} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="dg-nome" className="block text-sm font-semibold text-gray-900 mb-2">
                    {copy.fields.nome}
                  </label>
                  <input
                    id="dg-nome"
                    className={INPUT}
                    value={nome}
                    maxLength={30}
                    autoComplete="given-name"
                    onChange={(e) => {
                      touch()
                      setNome(e.target.value)
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="dg-empresa" className="block text-sm font-semibold text-gray-900 mb-2">
                    {copy.fields.empresa}
                  </label>
                  <input
                    id="dg-empresa"
                    className={INPUT}
                    value={empresa}
                    maxLength={60}
                    placeholder={copy.fields.empresaPh}
                    autoComplete="organization"
                    onChange={(e) => {
                      touch()
                      setEmpresa(e.target.value)
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="dg-cidade" className="block text-sm font-semibold text-gray-900 mb-2">
                    {copy.fields.cidade}
                  </label>
                  <input
                    id="dg-cidade"
                    className={INPUT}
                    value={cidade}
                    maxLength={40}
                    placeholder={copy.fields.cidadePh}
                    autoComplete="address-level2"
                    onChange={(e) => {
                      touch()
                      setCidade(e.target.value)
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="dg-segmento" className="block text-sm font-semibold text-gray-900 mb-2">
                    {copy.fields.segmento}
                  </label>
                  <select
                    id="dg-segmento"
                    className={INPUT}
                    value={segmento}
                    onChange={(e) => {
                      touch()
                      setSegmento(e.target.value as Segmento)
                    }}
                  >
                    <option value="">{copy.fields.segmentoPh}</option>
                    {SEGMENT_IDS.map((id) => (
                      <option key={id} value={id}>
                        {copy.segmentos[id]}
                      </option>
                    ))}
                  </select>
                </div>
                {segmento === 'outro' && (
                  <div>
                    <label htmlFor="dg-segmento-outro" className="block text-sm font-semibold text-gray-900 mb-2">
                      {copy.fields.segmentoOutro}
                    </label>
                    <input
                      id="dg-segmento-outro"
                      className={INPUT}
                      value={segmentoOutro}
                      maxLength={40}
                      placeholder={copy.fields.segmentoOutroPh}
                      autoFocus
                      onChange={(e) => setSegmentoOutro(e.target.value)}
                    />
                  </div>
                )}

                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}
                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                  {copy.buttons.next}
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            {/* ETAPA 2 */}
            {step === 2 && (
              <form onSubmit={submitStep2} className="space-y-6" noValidate>
                <RadioGroup
                  legend={copy.fields.jaAnuncia}
                  name="dg-ja-anuncia"
                  value={jaAnuncia}
                  options={JA_ANUNCIA_IDS.map((id) => ({ id, label: copy.jaAnuncia[id] }))}
                  onChange={setJaAnuncia}
                />
                <RadioGroup
                  legend={copy.fields.verba}
                  hint={copy.fields.verbaHint}
                  name="dg-verba"
                  value={verba}
                  options={verbaOptions}
                  onChange={setVerba}
                />
                <RadioGroup
                  legend={copy.fields.urgencia}
                  name="dg-urgencia"
                  value={urgencia}
                  options={URGENCIA_IDS.map((id) => ({ id, label: copy.urgencia[id] }))}
                  onChange={setUrgencia}
                />

                <label className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span>
                    {copy.consent.before}
                    <Link
                      href="/politica-de-privacidade"
                      target="_blank"
                      className="text-purple-600 underline font-medium"
                    >
                      {copy.consent.link}
                    </Link>
                    {copy.consent.after}
                  </span>
                </label>

                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setError('')
                      setStep(1)
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
                  >
                    <ArrowLeft size={16} />
                    {copy.buttons.back}
                  </button>
                  <button type="submit" className="btn-primary flex-1">
                    {copy.buttons.submit}
                  </button>
                </div>
              </form>
            )}

            {/* RESULTADO A — qualificado */}
            {step === 'result' && result?.status === 'qualified' && (
              <div className="text-center space-y-5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Check size={28} className="text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {copy.qualified.title(firstName)}
                </h2>
                <p className="text-gray-600 leading-relaxed">{copy.qualified.text}</p>
                <WhatsAppLink
                  href={waHref}
                  location="diagnostico"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors"
                >
                  <MessageCircle size={20} />
                  {copy.buttons.whatsapp}
                </WhatsAppLink>
              </div>
            )}

            {/* RESULTADO B — revisar a verba */}
            {step === 'result' && result?.status === 'review' && (
              <div className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{copy.review.title}</h2>
                <p className="text-gray-600 leading-relaxed">{copy.review.text(min)}</p>
                <RadioGroup
                  legend={copy.fields.verba}
                  name="dg-review-verba"
                  value={reviewBand}
                  options={bandOptions}
                  onChange={setReviewBand}
                />
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    disabled={!reviewBand}
                    onClick={() => reviewBand && resolveReview(reviewBand)}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {copy.buttons.confirm}
                  </button>
                  <button
                    type="button"
                    onClick={() => resolveReview('unknown')}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-700 py-2"
                  >
                    {copy.buttons.continueUnknown}
                  </button>
                </div>
              </div>
            )}

            {/* RESULTADO C — não qualificado (sem botão de WhatsApp) */}
            {step === 'result' && result?.status === 'unqualified' && (
              <div className="text-center space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{copy.unqualified.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {result.motivo === 'verba'
                    ? copy.unqualified.textVerba(min)
                    : copy.unqualified.textUrgencia(min)}
                </p>
                <p className="text-sm text-gray-500">{copy.unqualified.follow}</p>
                <a
                  href="https://www.instagram.com/daguiar.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
                >
                  <Instagram size={18} />
                  {copy.unqualified.followCta}
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="max-w-xl mx-auto px-4 pb-10 text-center text-xs text-gray-500 space-y-1">
        <Link href="/politica-de-privacidade" target="_blank" className="underline hover:text-gray-700">
          {copy.footer.privacy}
        </Link>
        <p>
          © {new Date().getFullYear()} Daniel Aguiar · Multinexo. {copy.footer.rights}
        </p>
      </footer>
    </div>
  )
}

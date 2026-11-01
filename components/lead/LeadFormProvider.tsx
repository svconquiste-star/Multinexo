'use client'

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LeadFormCtx, type LeadFormContext } from './context'
import { X, ArrowLeft, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react'
import { waUrl } from '@/components/lp/wa'
import { trackWhatsAppClick } from '@/lib/whatsapp-track'
import { LIMITS, SERVICOS, normalizePhone, type ServicoId } from '@/app/lib/lead'

// Formulário de captação que abre antes do WhatsApp. Ao enviar, grava o lead
// no banco (POST /api/lead) e, no mesmo toque, abre o WhatsApp com a mensagem
// pronta. Sem esperar o servidor: se o banco falhar, o cliente chega ao
// WhatsApp do mesmo jeito.

const ATTR_KEY = 'mx_lead_attr'
const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'] as const
type Attr = Partial<Record<(typeof ATTR_KEYS)[number], string>>

function captureAttr(): Attr {
  let stored: Attr = {}
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}')
  } catch {}
  const q = new URLSearchParams(window.location.search)
  const next: Attr = { ...stored }
  for (const k of ATTR_KEYS) {
    const v = q.get(k)
    if (v) next[k] = v.slice(0, 200)
  }
  try {
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(next))
  } catch {}
  return next
}

// Código curto, sem caracteres ambíguos, que vai na mensagem e na linha do banco.
function newRef(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const bytes = new Uint8Array(6)
  try {
    crypto.getRandomValues(bytes)
  } catch {
    for (let i = 0; i < 6; i++) bytes[i] = Math.floor(Math.random() * 256)
  }
  return 'LD-' + Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('')
}

function formatPhone(raw: string): string {
  let d = raw.replace(/\D/g, '')
  if (d.startsWith('55') && d.length > 11) d = d.slice(2)
  d = d.slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const cut = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s)

function buildMessage(f: {
  nome: string
  empresa: string
  area: string
  servicos: ServicoId[]
  outro: string
  problema: string
  solucao: string
  ref: string
}): string {
  const nomes = f.servicos.map((id) =>
    id === 'outros' ? `Outros (${f.outro})` : SERVICOS.find((s) => s.id === id)?.label || id
  )
  const linhas = [
    'Olá, Daniel! Vim pelo site e quero uma análise gratuita.',
    `Nome: ${f.nome}`,
    `Empresa: ${f.empresa} (${f.area})`,
    `Busco: ${nomes.join(', ')}`,
    `Problema: ${cut(f.problema.replace(/\s+/g, ' '), 300)}`,
  ]
  if (f.solucao) linhas.push(`Solução que busco: ${cut(f.solucao.replace(/\s+/g, ' '), 300)}`)
  linhas.push(`Ref: ${f.ref}`)
  return linhas.join('\n')
}

const FIELD =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200'
const LABEL = 'block text-sm font-semibold text-gray-700 mb-1.5'

export default function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [done, setDone] = useState<{ href: string } | null>(null)
  // Resultado do registro no banco; a tela de sucesso só afirma "registrado" quando for 'ok'.
  const [saved, setSaved] = useState<'pending' | 'ok' | 'fail'>('pending')
  const [error, setError] = useState('')

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [area, setArea] = useState('')
  const [servicos, setServicos] = useState<ServicoId[]>([])
  const [outro, setOutro] = useState('')
  const [problema, setProblema] = useState('')
  const [solucao, setSolucao] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('') // isca para robôs

  const locationRef = useRef('site')
  const startedRef = useRef(false)
  const submittedRef = useRef(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)

  const open = useCallback((location: string) => {
    locationRef.current = location
    lastFocus.current = document.activeElement as HTMLElement | null
    if (submittedRef.current) {
      // Novo atendimento depois de um envio: começa limpo.
      submittedRef.current = false
      startedRef.current = false
      setDone(null)
      setStep(1)
      setProblema('')
      setSolucao('')
      setConsent(false)
    }
    setError('')
    setIsOpen(true)
    try {
      window.gtag?.('event', 'lead_form_open', { location })
    } catch {}
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    lastFocus.current?.focus?.()
  }, [])

  // Esc fecha; Tab fica dentro do modal; a página de trás não rola.
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') return close()
      if (e.key !== 'Tab' || !dialogRef.current) return
      const items = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), textarea, select'
      )
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close])

  // Leva o foco ao primeiro campo da etapa.
  useEffect(() => {
    if (!isOpen || done) return
    const t = setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus()
    }, 50)
    return () => clearTimeout(t)
  }, [isOpen, step, done])

  function touch() {
    if (startedRef.current) return
    startedRef.current = true
    try {
      window.gtag?.('event', 'lead_form_start', { location: locationRef.current })
    } catch {}
  }

  function toggleServico(id: ServicoId) {
    touch()
    setServicos((cur) => (cur.includes(id) ? cur.filter((s) => s !== id) : [...cur, id]))
  }

  function validateStep(s: 1 | 2 | 3): string {
    if (s === 1) {
      if (nome.trim().length < 2) return 'Informe o seu nome.'
      if (!normalizePhone(telefone)) return 'Informe um telefone com DDD, por exemplo (31) 98765-4321.'
      if (empresa.trim().length < 2) return 'Informe o nome da empresa.'
      if (area.trim().length < 2) return 'Informe a área da empresa.'
    }
    if (s === 2) {
      if (servicos.length === 0) return 'Escolha ao menos um serviço.'
      if (servicos.includes('outros') && outro.trim().length < 2) return 'Descreva o que você procura em "Outros".'
    }
    if (s === 3) {
      if (problema.trim().length < 10) return 'Conte, em poucas palavras, o problema que quer resolver.'
      if (!consent) return 'Marque a autorização de contato para continuar.'
    }
    return ''
  }

  function next() {
    const msg = validateStep(step)
    if (msg) return setError(msg)
    setError('')
    setStep((step + 1) as 2 | 3)
  }

  function back() {
    setError('')
    setStep((step - 1) as 1 | 2)
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (step !== 3) return next()
    for (const s of [1, 2, 3] as const) {
      const msg = validateStep(s)
      if (msg) {
        setStep(s)
        return setError(msg)
      }
    }
    if (submittedRef.current) return
    submittedRef.current = true
    setError('')

    const ref = newRef()
    const attr = captureAttr()
    const payload = {
      nome,
      telefone,
      empresa,
      area_empresa: area,
      servicos,
      servico_outro: servicos.includes('outros') ? outro : '',
      problema,
      solucao,
      consentimento: true,
      ref_code: ref,
      origem_botao: locationRef.current,
      page_path: window.location.pathname,
      referrer: document.referrer || '',
      website,
      ...attr,
    }

    // 1) Grava sem esperar. Reenvia uma vez se a rede ou o servidor falhar
    //    (o ref_code único evita linha duplicada).
    const send = (attempt: number) => {
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      })
        .then((r) => {
          if (r.ok) return setSaved('ok')
          if (r.status >= 500 && attempt === 0) return void setTimeout(() => send(1), 1500)
          console.warn('[lead] não foi possível registrar o contato (', r.status, ')')
          setSaved('fail')
        })
        .catch(() => {
          if (attempt === 0) return void setTimeout(() => send(1), 1500)
          console.warn('[lead] não foi possível registrar o contato (sem conexão)')
          setSaved('fail')
        })
    }
    setSaved('pending')
    send(0)

    // 2) Mede o lead e abre o WhatsApp no mesmo toque (o celular não bloqueia).
    const eventId = `${ref}-${Date.now().toString(36)}`
    try {
      window.fbq?.('track', 'Lead', { content_name: 'formulario-site' }, { eventID: eventId })
    } catch {}
    try {
      window.gtag?.('event', 'lead_form_submit', {
        location: locationRef.current,
        servicos: servicos.join(','),
        event_id: eventId,
      })
    } catch {}
    trackWhatsAppClick(locationRef.current)

    const href = waUrl(buildMessage({ nome, empresa, area, servicos, outro, problema, solucao, ref }))
    // Clique programático num link real: abre o WhatsApp e o ouvinte de
    // conversão do Google Ads (app/layout.tsx) conta uma vez.
    const a = document.createElement('a')
    a.href = href
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    a.remove()

    setDone({ href })
  }

  const ctx = useMemo<LeadFormContext>(() => ({ open }), [open])

  return (
    <LeadFormCtx.Provider value={ctx}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            className="relative w-full max-w-lg max-h-[94vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-3 top-3 rounded-full p-2 text-gray-500 hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            {done ? (
              <div className="p-8 text-center">
                <CheckCircle2 className="mx-auto text-green-500" size={48} />
                <h2 id="lead-form-title" className="mt-4 text-2xl font-bold text-gray-900">
                  {saved === 'ok' ? 'Pronto, recebemos seus dados!' : 'Pronto, é só enviar a mensagem!'}
                </h2>
                <p className="mt-3 text-gray-600">
                  Abrimos o WhatsApp com a sua mensagem. Toque em <strong>Enviar</strong> lá para começar a conversa.
                </p>
                <a
                  href={done.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Já foi medido no envio: impede que o ouvinte de conversão do
                  // Google Ads (no mesmo `document`) conte este clique de novo.
                  onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                >
                  <MessageCircle size={18} /> O WhatsApp não abriu? Toque aqui
                </a>
                <button type="button" onClick={close} className="mt-4 block w-full text-sm text-gray-500 underline">
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="p-6 sm:p-8" noValidate>
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-600">Etapa {step} de 3</p>
                <div className="mt-2 flex gap-1.5" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= step ? 'bg-purple-600' : 'bg-gray-200'}`} />
                  ))}
                </div>

                <h2 id="lead-form-title" className="mt-4 text-2xl font-bold text-gray-900">
                  {step === 1 && 'Quem é você?'}
                  {step === 2 && 'O que você busca?'}
                  {step === 3 && 'Conte o seu cenário'}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {step === 1 && 'Seus dados já vão na mensagem do WhatsApp, e você só toca em enviar.'}
                  {step === 2 && 'Marque tudo o que faz sentido para o seu negócio.'}
                  {step === 3 && 'Quanto mais detalhe, mais certeira é a análise gratuita.'}
                </p>

                <div className="mt-6 space-y-4">
                  {step === 1 && (
                    <>
                      <div>
                        <label className={LABEL} htmlFor="lf-nome">Nome *</label>
                        <input
                          id="lf-nome"
                          data-autofocus
                          className={FIELD}
                          value={nome}
                          maxLength={LIMITS.nome}
                          autoComplete="name"
                          placeholder="Seu nome"
                          onChange={(e) => { touch(); setNome(e.target.value) }}
                        />
                      </div>
                      <div>
                        <label className={LABEL} htmlFor="lf-tel">Telefone (WhatsApp) *</label>
                        <input
                          id="lf-tel"
                          className={FIELD}
                          value={telefone}
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="(31) 98765-4321"
                          onChange={(e) => { touch(); setTelefone(formatPhone(e.target.value)) }}
                        />
                      </div>
                      <div>
                        <label className={LABEL} htmlFor="lf-empresa">Empresa *</label>
                        <input
                          id="lf-empresa"
                          className={FIELD}
                          value={empresa}
                          maxLength={LIMITS.empresa}
                          autoComplete="organization"
                          placeholder="Nome da empresa"
                          onChange={(e) => { touch(); setEmpresa(e.target.value) }}
                        />
                      </div>
                      <div>
                        <label className={LABEL} htmlFor="lf-area">Qual é a área da empresa? *</label>
                        <input
                          id="lf-area"
                          className={FIELD}
                          value={area}
                          maxLength={LIMITS.area}
                          placeholder="Ex.: clínica de estética, loja, advocacia"
                          onChange={(e) => { touch(); setArea(e.target.value) }}
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <fieldset>
                        <legend className="sr-only">Serviços</legend>
                        <div className="grid gap-2">
                          {SERVICOS.map((s) => {
                            const on = servicos.includes(s.id)
                            return (
                              <label
                                key={s.id}
                                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-base ${
                                  on ? 'border-purple-500 bg-purple-50 text-purple-900' : 'border-gray-300 text-gray-800'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  data-autofocus={s.id === SERVICOS[0].id ? true : undefined}
                                  checked={on}
                                  onChange={() => toggleServico(s.id)}
                                  className="h-5 w-5 accent-purple-600"
                                />
                                {s.label}
                              </label>
                            )
                          })}
                        </div>
                      </fieldset>
                      {servicos.includes('outros') && (
                        <div>
                          <label className={LABEL} htmlFor="lf-outro">Descreva o que você procura *</label>
                          <input
                            id="lf-outro"
                            className={FIELD}
                            value={outro}
                            maxLength={LIMITS.outro}
                            placeholder="Escreva aqui"
                            onChange={(e) => setOutro(e.target.value)}
                          />
                        </div>
                      )}
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <label className={LABEL} htmlFor="lf-problema">Qual problema você quer resolver? *</label>
                        <textarea
                          id="lf-problema"
                          data-autofocus
                          className={FIELD}
                          rows={4}
                          value={problema}
                          maxLength={LIMITS.texto}
                          placeholder="Ex.: recebo poucos clientes novos e dependo de indicação."
                          onChange={(e) => setProblema(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={LABEL} htmlFor="lf-solucao">Que solução você está buscando? (opcional)</label>
                        <textarea
                          id="lf-solucao"
                          className={FIELD}
                          rows={3}
                          value={solucao}
                          maxLength={LIMITS.texto}
                          placeholder="Ex.: anúncios que tragam contatos todos os dias."
                          onChange={(e) => setSolucao(e.target.value)}
                        />
                      </div>
                      {/* Isca: invisível para pessoas, preenchida só por robôs. */}
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
                        <label>
                          Site
                          <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                        </label>
                      </div>
                      <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-0.5 h-5 w-5 flex-shrink-0 accent-purple-600"
                        />
                        <span>
                          Autorizo o contato por WhatsApp ou telefone e concordo com a{' '}
                          <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="underline text-purple-700">
                            Política de Privacidade
                          </a>
                          .
                        </span>
                      </label>
                    </>
                  )}
                </div>

                {error && (
                  <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {error}
                  </p>
                )}

                <div className="mt-6 flex items-center gap-3">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      <ArrowLeft size={18} /> Voltar
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-base font-bold text-white shadow-lg"
                    >
                      Continuar <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-green-700"
                    >
                      <MessageCircle size={20} /> Enviar e abrir o WhatsApp
                    </button>
                  )}
                </div>
                <p className="mt-4 text-center text-xs text-gray-500">Seus dados são usados só para o nosso contato.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </LeadFormCtx.Provider>
  )
}

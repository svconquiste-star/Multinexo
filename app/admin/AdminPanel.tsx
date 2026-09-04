'use client'

import { useState, useEffect, useCallback } from 'react'

type Proposta = {
  slug: string
  url: string
  ext: string
  expiresAt: string
  expired: boolean
}

export default function AdminPanel() {
  const [token, setToken] = useState('')
  const [authed, setAuthed] = useState(false)
  const [erroLogin, setErroLogin] = useState('')

  const [file, setFile] = useState<File | null>(null)
  const [cliente, setCliente] = useState('')
  const [dias, setDias] = useState('15')
  const [drag, setDrag] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [resultado, setResultado] = useState<{ url: string; expiresAt: string } | null>(null)
  const [erro, setErro] = useState('')

  const [propostas, setPropostas] = useState<Proposta[]>([])

  // Recupera token da sessão.
  useEffect(() => {
    try {
      const t = sessionStorage.getItem('propostas_token')
      if (t) {
        setToken(t)
        setAuthed(true)
      }
    } catch {}
  }, [])

  const carregarLista = useCallback(
    async (t: string) => {
      try {
        const res = await fetch('/api/propostas/list', {
          headers: { Authorization: `Bearer ${t}` },
        })
        if (res.ok) {
          const data = await res.json()
          setPropostas(data.propostas || [])
        }
      } catch {}
    },
    []
  )

  useEffect(() => {
    if (authed && token) carregarLista(token)
  }, [authed, token, carregarLista])

  async function entrar(e: React.FormEvent) {
    e.preventDefault()
    setErroLogin('')
    // Valida a senha tentando listar.
    const res = await fetch('/api/propostas/list', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) {
      try {
        sessionStorage.setItem('propostas_token', token)
      } catch {}
      setAuthed(true)
    } else {
      setErroLogin('Senha incorreta.')
    }
  }

  function sair() {
    try {
      sessionStorage.removeItem('propostas_token')
    } catch {}
    setAuthed(false)
    setToken('')
  }

  function pegarArquivo(f?: File | null) {
    if (!f) return
    setFile(f)
    setResultado(null)
    setErro('')
  }

  async function publicar() {
    if (!file) return
    setEnviando(true)
    setErro('')
    setResultado(null)
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('cliente', cliente)
      fd.append('dias', dias)
      const res = await fetch('/api/propostas/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Falha no envio.')
      setResultado({ url: data.url, expiresAt: data.expiresAt })
      setFile(null)
      setCliente('')
      carregarLista(token)
    } catch (e: any) {
      setErro(e.message)
    } finally {
      setEnviando(false)
    }
  }

  async function excluir(slug: string) {
    if (!confirm('Excluir esta proposta?')) return
    await fetch('/api/propostas/delete', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    carregarLista(token)
  }

  function copiar(url: string) {
    try {
      navigator.clipboard.writeText(url)
    } catch {}
  }

  const fmt = (iso: string) => new Date(iso).toLocaleDateString('pt-BR')

  // ===== Tela de login =====
  if (!authed) {
    return (
      <div style={styles.wrap}>
        <form onSubmit={entrar} style={styles.card}>
          <h1 style={styles.h1}>Área de Propostas</h1>
          <p style={styles.sub}>Acesso restrito. Informe a senha.</p>
          <label style={styles.label}>Senha</label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={styles.input}
            autoFocus
          />
          {erroLogin && <p style={styles.err}>{erroLogin}</p>}
          <button type="submit" style={styles.btn}>
            Entrar
          </button>
        </form>
      </div>
    )
  }

  // ===== Painel =====
  return (
    <div style={styles.wrap}>
      <div style={{ ...styles.card, maxWidth: 640 }}>
        <div style={styles.headerRow}>
          <h1 style={styles.h1}>Publicar proposta</h1>
          <button onClick={sair} style={styles.linkBtn}>
            Sair
          </button>
        </div>
        <p style={styles.sub}>
          Arraste o arquivo <b>.html</b> ou <b>.pdf</b>. O link é gerado na hora, sem
          deploy.
        </p>

        <div
          onClick={() => document.getElementById('file-input')?.click()}
          onDragOver={(e) => {
            e.preventDefault()
            setDrag(true)
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDrag(false)
            pegarArquivo(e.dataTransfer.files?.[0])
          }}
          style={{ ...styles.drop, ...(drag ? styles.dropActive : {}) }}
        >
          {file ? (
            <span>
              ✅ <b>{file.name}</b>
            </span>
          ) : (
            <span>Clique ou arraste o arquivo aqui</span>
          )}
        </div>
        <input
          id="file-input"
          type="file"
          accept=".html,.htm,.pdf,text/html,application/pdf"
          hidden
          onChange={(e) => pegarArquivo(e.target.files?.[0])}
        />

        <label style={styles.label}>Cliente</label>
        <input
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          placeholder="Ex: Ketlyn Gomes Estética"
          style={styles.input}
        />

        <label style={styles.label}>Validade (dias)</label>
        <input
          type="number"
          value={dias}
          min={1}
          onChange={(e) => setDias(e.target.value)}
          style={{ ...styles.input, maxWidth: 140 }}
        />

        <button onClick={publicar} disabled={!file || enviando} style={styles.btn}>
          {enviando ? 'Publicando...' : 'Publicar e gerar link'}
        </button>

        {erro && <p style={styles.err}>{erro}</p>}

        {resultado && (
          <div style={styles.result}>
            <b>Publicado!</b> Válida até {fmt(resultado.expiresAt)}
            <div style={styles.linkRow}>
              <input readOnly value={resultado.url} style={{ ...styles.input, margin: 0 }} />
              <button onClick={() => copiar(resultado.url)} style={styles.copyBtn}>
                Copiar
              </button>
            </div>
          </div>
        )}

        <div style={{ marginTop: 34 }}>
          <div style={styles.listHeader}>
            <h2 style={styles.h2}>
              Propostas no sistema{' '}
              <span style={styles.count}>{propostas.length}</span>
            </h2>
            <button onClick={() => carregarLista(token)} style={styles.linkBtn}>
              Atualizar
            </button>
          </div>

          {propostas.length === 0 ? (
            <p style={styles.empty}>Nenhuma proposta publicada ainda.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {propostas.map((p) => (
                <div key={p.slug} style={styles.item}>
                  <div style={{ minWidth: 0 }}>
                    <div style={styles.itemSlug}>
                      {p.slug} <span style={styles.ext}>{p.ext.toUpperCase()}</span>
                    </div>
                    <div style={styles.itemMeta}>
                      {p.expired ? (
                        <span style={{ color: '#ff9d9d' }}>Expirada</span>
                      ) : (
                        <>Válida até {fmt(p.expiresAt)}</>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ ...styles.smallBtn, textDecoration: 'none' }}
                    >
                      Abrir
                    </a>
                    <button onClick={() => copiar(p.url)} style={styles.smallBtn}>
                      Copiar
                    </button>
                    <button
                      onClick={() => excluir(p.slug)}
                      style={{ ...styles.smallBtn, color: '#ff9d9d' }}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    background: '#070A12',
    color: '#fff',
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
  },
  card: {
    width: '100%',
    maxWidth: 440,
    background: '#0F1424',
    border: '1px solid rgba(255,255,255,.08)',
    borderRadius: 18,
    padding: 32,
  },
  headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  h1: { fontSize: 20, margin: '0 0 4px' },
  h2: { fontSize: 15, margin: 0, color: '#9AA3B8' },
  listHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  count: {
    fontSize: 12,
    fontWeight: 700,
    color: '#fff',
    background: 'rgba(124,58,237,.25)',
    borderRadius: 999,
    padding: '2px 9px',
    marginLeft: 4,
  },
  empty: { color: '#6B7488', fontSize: 13.5, margin: 0 },
  sub: { color: '#9AA3B8', fontSize: 13.5, margin: '0 0 22px' },
  label: {
    display: 'block',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '.5px',
    color: '#6B7488',
    margin: '16px 0 6px',
    fontWeight: 700,
  },
  input: {
    width: '100%',
    background: '#070A12',
    border: '1px solid rgba(255,255,255,.12)',
    borderRadius: 10,
    color: '#fff',
    padding: '12px 14px',
    fontSize: 14,
    marginBottom: 4,
  },
  drop: {
    border: '2px dashed rgba(255,255,255,.18)',
    borderRadius: 14,
    padding: 26,
    textAlign: 'center',
    color: '#9AA3B8',
    fontSize: 14,
    cursor: 'pointer',
    marginBottom: 8,
  },
  dropActive: { borderColor: '#7C3AED', background: 'rgba(124,58,237,.08)' },
  btn: {
    width: '100%',
    marginTop: 22,
    background: 'linear-gradient(90deg,#7C3AED,#2563EB)',
    color: '#fff',
    border: 0,
    borderRadius: 999,
    padding: 15,
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
  },
  linkBtn: {
    background: 'none',
    border: 0,
    color: '#6B7488',
    cursor: 'pointer',
    fontSize: 13,
  },
  err: { color: '#ff9d9d', fontSize: 13.5, marginTop: 12 },
  result: { marginTop: 22, fontSize: 14 },
  linkRow: { display: 'flex', gap: 8, marginTop: 8 },
  copyBtn: {
    background: '#1b2236',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.12)',
    borderRadius: 10,
    padding: '0 16px',
    fontSize: 13,
    cursor: 'pointer',
    flexShrink: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    background: '#070A12',
    border: '1px solid rgba(255,255,255,.08)',
    borderRadius: 12,
    padding: '12px 14px',
  },
  itemSlug: {
    fontSize: 13.5,
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  ext: { fontSize: 10, color: '#6B7488', fontWeight: 700 },
  itemMeta: { fontSize: 12, color: '#6B7488', marginTop: 2 },
  smallBtn: {
    background: '#1b2236',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.12)',
    borderRadius: 8,
    padding: '7px 12px',
    fontSize: 12.5,
    cursor: 'pointer',
  },
}

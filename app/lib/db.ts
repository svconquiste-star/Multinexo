// Conexão com o Postgres. Só roda no servidor (rotas em app/api). A URL vem
// exclusivamente de DATABASE_URL (variável do Coolify); nunca vai para o
// navegador nem para o repositório.

import { Pool } from 'pg'

declare global {
  // eslint-disable-next-line no-var
  var __mxPool: Pool | undefined
}

export function hasDatabase(): boolean {
  return Boolean(process.env.DATABASE_URL)
}

export function getPool(): Pool {
  if (!globalThis.__mxPool) {
    globalThis.__mxPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 3,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      statement_timeout: 8000,
    })
    // Erro em conexão ociosa não pode derrubar o processo.
    globalThis.__mxPool.on('error', (e: Error) => {
      console.error('[db] erro no pool', (e as { code?: string }).code || '')
    })
  }
  return globalThis.__mxPool
}

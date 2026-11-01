// Cria o schema e a tabela de leads (db/leads.sql). Idempotente.
// Uso:  DATABASE_URL='postgres://…' node scripts/db-setup.mjs
// A URL vem só do ambiente e nunca é impressa.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const url = process.env.DATABASE_URL
if (!url) {
  console.error('Defina DATABASE_URL no ambiente.')
  process.exit(1)
}

const sqlPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'db', 'leads.sql')
const sql = fs.readFileSync(sqlPath, 'utf8')

// Tenta primeiro sem SSL; se o servidor exigir, tenta com SSL (sem validar o certificado).
async function connect() {
  const tries = [{ label: 'sem SSL', ssl: false }, { label: 'SSL', ssl: { rejectUnauthorized: false } }]
  let lastErr
  for (const t of tries) {
    const client = new pg.Client({ connectionString: url, ssl: t.ssl, connectionTimeoutMillis: 8000 })
    try {
      await client.connect()
      console.log(`Conectado (${t.label}).`)
      return client
    } catch (e) {
      lastErr = e
      try { await client.end() } catch {}
    }
  }
  throw lastErr
}

const client = await connect()
try {
  await client.query(sql)
  const cols = await client.query(
    `SELECT column_name, data_type FROM information_schema.columns
     WHERE table_schema = 'SITE_MULTINEXO_CLIENTES' AND table_name = 'leads'
     ORDER BY ordinal_position`
  )
  console.log(`Tabela "SITE_MULTINEXO_CLIENTES".leads pronta com ${cols.rowCount} colunas:`)
  for (const c of cols.rows) console.log(`  - ${c.column_name} (${c.data_type})`)
} finally {
  await client.end()
}

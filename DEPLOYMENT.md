# Guia de Deploy — Multinexo

O site roda em **Coolify** (VPS), com build por Nixpacks. O deploy acontece sozinho a cada push na branch `main`.

> **Não use `output: 'export'`** (site estático) no `next.config.js`. O site tem rotas de API (`/api/lead`, `/api/propostas/*`) e páginas dinâmicas (`/diagnostico`, `/proposta/[slug]`) que precisam do servidor Node. Por isso Vercel estático e GitHub Pages **não servem** para este projeto.

## Coolify

- **Build:** `npm run build`
- **Start:** `npm start` (porta 3000)
- **Node:** variável `NIXPACKS_NODE_VERSION=22`

### Variáveis de ambiente

| Variável | Para que serve | Observações |
|---|---|---|
| `NIXPACKS_NODE_VERSION` | Versão do Node no build | Só no build |
| `DATABASE_URL` | Conexão com o Postgres (formulário de captação) | `postgres://USUARIO:SENHA@HOST:PORTA/BANCO`, uma linha, sem aspas, sem `<>`. Em tempo de execução |
| `LEAD_HASH_SALT` | Sal do hash do IP guardado com cada lead | Texto longo e aleatório. Sem ele, o IP não é guardado |
| `PROPOSTAS_TOKEN` | Senha do painel `/admin` (propostas) | Obrigatória para o painel |
| `PROPOSTAS_DIR` | Pasta das propostas | Aponte para um **volume persistente** (ex.: `/app/propostas`); sem isso as propostas somem a cada deploy |
| `CRON_SECRET` | Segredo da limpeza `GET /api/propostas/cleanup` | Sem ele a rota responde 401 a todos |

Nunca coloque valores reais no repositório: o `.env.example` só tem os nomes. Para rodar local, copie para `.env.local` (ignorado pelo git).

### Banco de dados (formulário de captação)

O formulário grava em `"SITE_MULTINEXO_CLIENTES".leads`. Para criar o schema e a tabela (idempotente), uma vez, a partir de uma máquina com acesso ao banco:

```bash
DATABASE_URL='postgres://USUARIO:SENHA@HOST:PORTA/BANCO' node scripts/db-setup.mjs
```

O SQL está em `db/leads.sql`. O site só grava (`INSERT`); a consulta e o acompanhamento (`status`, `contatado_em`, `observacoes`) são feitos por um programa de SQL. Se `DATABASE_URL` estiver ausente ou errada, o formulário ainda abre o WhatsApp, mas **o lead não é salvo** (veja os avisos `[lead]` no log do container; `28P01` = senha incorreta).

### Limpeza de propostas (opcional)

Uma *Scheduled Task* do Coolify pode chamar `GET /api/propostas/cleanup` com `Authorization: Bearer <CRON_SECRET>`. A limpeza também acontece ao servir e listar propostas.

### Domínio

Em *Domains* da aplicação no Coolify, aponte `multinexo.com.br` (e `www`). O HTTPS é emitido pelo proxy do Coolify.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

Antes de subir, valide:

```bash
npx tsc --noEmit
npm run build
```

Depois de `npm run build`, apague a pasta `.next` antes de voltar para `npm run dev` (senão os arquivos estáticos dão 404).

No localhost, o GA4 e o Pixel **não carregam** (para os testes não irem para a produção). Use `?mx_debug=1` na URL para carregá-los e ver os eventos no DebugView do GA4.

## Estrutura

```
app/
  layout.tsx            # layout, metadados, GA4/Pixel e consentimento
  page.tsx              # home
  cases/[slug]/         # páginas de case (dados em lib/cases.ts)
  europa/               # landing da Europa (pt-BR, pt-PT, en)
  diagnostico/          # formulário de qualificação (tráfego pago)
  admin/, proposta/     # propostas
  api/lead/             # recebe o lead (só grava)
  api/propostas/        # API das propostas
components/
  lead/                 # formulário de captação antes do WhatsApp
  case/, lp/, consent/, diagnostico/
db/leads.sql            # schema e tabela do formulário
scripts/db-setup.mjs    # cria o schema e a tabela
```

## Suporte

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Coolify](https://coolify.io/docs)

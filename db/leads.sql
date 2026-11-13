-- Leads do formulário do site (captados antes de abrir o WhatsApp).
-- Idempotente: pode rodar mais de uma vez. O nome do schema tem maiúsculas,
-- por isso fica sempre entre aspas.
-- Quem grava é o site (somente INSERT, em app/api/lead/route.ts). As colunas
-- status, contatado_em e observacoes são para a consulta/edição pelo programa
-- de SQL; o site nunca altera nem lê linhas.

CREATE SCHEMA IF NOT EXISTS "SITE_MULTINEXO_CLIENTES";

CREATE TABLE IF NOT EXISTS "SITE_MULTINEXO_CLIENTES".leads (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  ref_code        text        NOT NULL UNIQUE,          -- LD-XXXXXX (não vai na mensagem do WhatsApp)
  created_at      timestamptz NOT NULL DEFAULT now(),

  nome            text        NOT NULL,
  telefone        text        NOT NULL,                  -- só dígitos, com DDI 55
  empresa         text,                                  -- vazio no formulário curto
  area_empresa    text,                                  -- vazio no formulário curto
  servicos        text[]      NOT NULL,                  -- {} no formulário curto
  servico_outro   text,
  problema        text        NOT NULL,
  solucao         text,

  origem_botao    text,                                  -- location do botão clicado
  page_path       text,
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  utm_content     text,
  utm_term        text,
  gclid           text,
  gbraid          text,                                  -- Google Ads, iPhone
  wbraid          text,                                  -- Google Ads, iPhone
  fbclid          text,
  referrer        text,
  user_agent      text,
  ip_hash         text,

  consentimento    boolean     NOT NULL,
  consentimento_em timestamptz,

  status          text        NOT NULL DEFAULT 'novo',   -- novo | contatado | convertido | descartado
  contatado_em    timestamptz,
  observacoes     text
);

-- Para quem criou a tabela antes destas mudanças (idempotente).
ALTER TABLE "SITE_MULTINEXO_CLIENTES".leads ADD COLUMN IF NOT EXISTS gbraid text;
ALTER TABLE "SITE_MULTINEXO_CLIENTES".leads ADD COLUMN IF NOT EXISTS wbraid text;
-- Qual formulário gerou o lead: 'completo' (home) ou 'curto' (landing do Google Ads).
ALTER TABLE "SITE_MULTINEXO_CLIENTES".leads ADD COLUMN IF NOT EXISTS formulario text NOT NULL DEFAULT 'completo';
-- O formulário curto não pergunta empresa nem área.
ALTER TABLE "SITE_MULTINEXO_CLIENTES".leads ALTER COLUMN empresa DROP NOT NULL;
ALTER TABLE "SITE_MULTINEXO_CLIENTES".leads ALTER COLUMN area_empresa DROP NOT NULL;

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON "SITE_MULTINEXO_CLIENTES".leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_telefone_idx   ON "SITE_MULTINEXO_CLIENTES".leads (telefone);
CREATE INDEX IF NOT EXISTS leads_status_idx     ON "SITE_MULTINEXO_CLIENTES".leads (status);

-- ---------------------------------------------------------------------------
-- Funil por artigo do blog (blog.multinexo.com.br -> /diagnostico).
-- Só registra quem chegou com utm_source=blog. NÃO guarda dado pessoal: apenas o
-- artigo (utm_campaign), a posição do botão (utm_medium), a etapa e um código
-- aleatório de sessão. UNIQUE (sessao, etapa): cada etapa conta uma vez por visita.
-- Etapas: aberto | iniciado | concluido | qualificado | whatsapp
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS "SITE_MULTINEXO_CLIENTES".funil_blog (
  id          bigserial   PRIMARY KEY,
  created_at  timestamptz NOT NULL DEFAULT now(),
  sessao      text        NOT NULL,
  etapa       text        NOT NULL,
  artigo      text        NOT NULL,   -- slug do artigo (utm_campaign)
  posicao     text,                   -- meio | fim | sidebar | home (utm_medium)
  mercado     text,
  CONSTRAINT funil_blog_etapa_chk CHECK (etapa IN ('aberto','iniciado','concluido','qualificado','whatsapp')),
  CONSTRAINT funil_blog_sessao_etapa_uq UNIQUE (sessao, etapa)
);

CREATE INDEX IF NOT EXISTS funil_blog_artigo_idx ON "SITE_MULTINEXO_CLIENTES".funil_blog (artigo, etapa);
CREATE INDEX IF NOT EXISTS funil_blog_created_at_idx ON "SITE_MULTINEXO_CLIENTES".funil_blog (created_at DESC);

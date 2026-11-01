-- Leads do formulário do site (captados antes de abrir o WhatsApp).
-- Idempotente: pode rodar mais de uma vez. O nome do schema tem maiúsculas,
-- por isso fica sempre entre aspas.
-- Quem grava é o site (somente INSERT, em app/api/lead/route.ts). As colunas
-- status, contatado_em e observacoes são para a consulta/edição pelo programa
-- de SQL; o site nunca altera nem lê linhas.

CREATE SCHEMA IF NOT EXISTS "SITE_MULTINEXO_CLIENTES";

CREATE TABLE IF NOT EXISTS "SITE_MULTINEXO_CLIENTES".leads (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  ref_code        text        NOT NULL UNIQUE,          -- LD-XXXXXX, vai na mensagem do WhatsApp
  created_at      timestamptz NOT NULL DEFAULT now(),

  nome            text        NOT NULL,
  telefone        text        NOT NULL,                  -- só dígitos, com DDI 55
  empresa         text        NOT NULL,
  area_empresa    text        NOT NULL,
  servicos        text[]      NOT NULL,
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

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON "SITE_MULTINEXO_CLIENTES".leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_telefone_idx   ON "SITE_MULTINEXO_CLIENTES".leads (telefone);
CREATE INDEX IF NOT EXISTS leads_status_idx     ON "SITE_MULTINEXO_CLIENTES".leads (status);

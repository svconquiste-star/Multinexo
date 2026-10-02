# Multinexo - Site Moderno com Next.js

Site pessoal de Daniel Aguiar (marca Multinexo) — serviços de tráfego pago, IA e dashboards para Brasil e Europa.

## Serviços

- **Tráfego & Estratégia**: Google Ads e Meta Ads orientados a dado
- **IA como Vantagem Competitiva**: atendimento automatizado 24/7
- **Criação de Dashboard**: painel único de tráfego, vendas e atendimento
- **Consultoria**: plano de crescimento sob medida

## Páginas e recursos

- `/` — home em PT-BR
- `/europa`, `/europa/pt`, `/europa/en` — landing multi-idioma pra público europeu (hreflang configurado)
- `/admin` + `/proposta/[slug]` — sistema interno de upload/envio de propostas com link expirável (requer `PROPOSTAS_TOKEN` e `PROPOSTAS_DIR`, ver `.env.example`)

## Tecnologias

- Next.js 14
- React 18
- TailwindCSS
- TypeScript
- Lucide Icons

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build

```bash
npm run build
npm start
```

## Deploy

Este projeto está pronto para deploy no Vercel, GitHub Pages ou qualquer plataforma que suporte Next.js.

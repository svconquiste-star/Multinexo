# Guia de Deployment - Multinexo

## Deploy no Vercel (Recomendado)

### Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- Repositório no GitHub

### Passos

1. **Conectar repositório ao Vercel**
   - Acesse https://vercel.com/new
   - Selecione seu repositório GitHub
   - Vercel detectará automaticamente que é um projeto Next.js

2. **Configurar variáveis de ambiente**
   - Na aba "Environment Variables", adicione:
     - `NEXT_PUBLIC_SITE_URL`: URL do seu site

3. **Deploy**
   - Clique em "Deploy"
   - Vercel fará o build e deploy automaticamente

### Deploy automático
- Qualquer push para a branch `main` fará deploy automático

## Deploy no GitHub Pages

### Pré-requisitos
- Repositório público no GitHub

### Passos

1. **Configurar next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Criar GitHub Action**
   - Crie `.github/workflows/deploy.yml`
   - Configure para fazer build e push para `gh-pages`

3. **Ativar GitHub Pages**
   - Vá para Settings > Pages
   - Selecione `gh-pages` como source

## Deploy Local

### Desenvolvimento
```bash
npm run dev
```

### Build para produção
```bash
npm run build
npm start
```

## Estrutura do Projeto

```
multinexo-site/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/
│   ├── Header.tsx       # Navegação
│   ├── Hero.tsx         # Seção hero
│   ├── Services.tsx     # Serviços
│   ├── Cases.tsx        # Cases de sucesso
│   ├── Clients.tsx      # Clientes e testimonials
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Rodapé
├── package.json         # Dependências
└── tailwind.config.js   # Configuração TailwindCSS
```

## Customizações

### Cores
Edite `tailwind.config.js` para mudar as cores principais:
```javascript
colors: {
  primary: '#8B5CF6',    // Roxo
  secondary: '#EC4899',  // Rosa
}
```

### Conteúdo
Edite os componentes em `components/` para atualizar:
- Textos
- Imagens
- Links
- Preços

### Domínio customizado
No Vercel ou GitHub Pages, adicione seu domínio nas configurações do projeto.

## Suporte

Para dúvidas sobre deployment, consulte:
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação GitHub Pages](https://docs.github.com/en/pages)

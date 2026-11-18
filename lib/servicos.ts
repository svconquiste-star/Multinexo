// Páginas de serviço por plataforma (SEO, AEO e GEO). Cada página responde logo no
// topo à pergunta principal, em 2 a 3 frases, porque é esse trecho que Google e IAs
// citam. Regra de texto: sem promessa de resultado e sem número que não dá para comprovar.

export type ServicoFaq = { q: string; a: string }

export type Servico = {
  slug: string
  plataforma: string
  title: string // <title>, até ~60 caracteres
  description: string // meta description, até ~160 caracteres
  h1: string
  heroFrase: string
  oQueE: { pergunta: string; resposta: string }
  entregas: { titulo: string; texto: string }[]
  campanhasTitulo: string
  campanhas: { nome: string; texto: string }[]
  mensuracao: string[]
  comparacao: { pergunta: string; resposta: string; outroSlug: string; outroNome: string }
  faq: ServicoFaq[]
  serviceType: string
  whatsMsg: string
}

export const PAISES = ['Brasil', 'Portugal', 'Espanha', 'Irlanda', 'Reino Unido', 'Estados Unidos']

const META: Servico = {
  slug: 'gestor-de-trafego-meta-ads',
  plataforma: 'Meta Ads',
  title: 'Gestor de Tráfego Meta Ads (Facebook e Instagram)',
  description:
    'Gestor de tráfego no Meta Ads: campanhas no Facebook e Instagram para gerar contatos, leads e vendas, com Pixel e dashboard. Brasil e exterior.',
  h1: 'Gestor de Tráfego Meta Ads: anúncios no Facebook e no Instagram',
  heroFrase:
    'Crio e gerencio as suas campanhas no Facebook e no Instagram para gerar contatos no WhatsApp, leads e vendas, com o Pixel configurado e um dashboard para você saber quanto custa cada cliente.',
  oQueE: {
    pergunta: 'O que faz um gestor de tráfego no Meta Ads?',
    resposta:
      'O gestor de tráfego no Meta Ads planeja, cria e otimiza os anúncios da empresa no Facebook, no Instagram e no WhatsApp. Ele define o objetivo, o público, os criativos e a verba, configura o Pixel e as conversões, e ajusta as campanhas pelos números (custo por lead, CTR, CPL e ROAS) para o investimento virar clientes.',
  },
  entregas: [
    { titulo: 'Estratégia e público', texto: 'Objetivo, oferta e públicos definidos antes de anunciar: interesses, semelhantes (lookalike) e remarketing.' },
    { titulo: 'Criativos e copy', texto: 'Direção de imagens, vídeos e textos para o feed, os Stories e os Reels, com variações para teste A/B.' },
    { titulo: 'Campanhas e verba', texto: 'Estrutura de campanhas, distribuição da verba e controle de ritmo, de médio a alto volume.' },
    { titulo: 'Pixel e conversões', texto: 'Pixel da Meta e eventos de conversão configurados, para a plataforma otimizar para quem realmente vira cliente.' },
    { titulo: 'Página e WhatsApp', texto: 'Página de captação e mensagens no WhatsApp ligadas à campanha, com qualificação dos contatos.' },
    { titulo: 'Dashboard e otimização', texto: 'Investimento, contatos e custo por contato num painel, com ajustes semanais baseados nos números.' },
  ],
  campanhasTitulo: 'Tipos de campanha no Meta Ads',
  campanhas: [
    { nome: 'Mensagens no WhatsApp', texto: 'O anúncio abre uma conversa direto no WhatsApp da empresa.' },
    { nome: 'Geração de leads', texto: 'Formulário no próprio Facebook/Instagram ou na sua página de captação.' },
    { nome: 'Vendas e conversões', texto: 'Para e-commerce e serviços com compra ou cadastro no site.' },
    { nome: 'Remarketing', texto: 'Anúncios para quem já visitou o site, viu um vídeo ou interagiu com o perfil.' },
    { nome: 'Reconhecimento e alcance', texto: 'Para lançar uma marca ou uma oferta numa região.' },
  ],
  mensuracao: [
    'Pixel da Meta e eventos de conversão',
    'Google Analytics 4 e Google Tag Manager',
    'UTMs para separar cada campanha e anúncio',
    'Qualificação dos contatos (MQL e SQL)',
  ],
  comparacao: {
    pergunta: 'Meta Ads ou Google Ads: qual é melhor para o meu negócio?',
    resposta:
      'O Meta Ads funciona melhor para gerar demanda: mostra a sua oferta para quem ainda não está procurando, com base em interesses e comportamento. O Google Ads captura quem já está buscando o seu serviço. Muitos negócios usam os dois: o Meta para atrair e o Google para converter a procura que já existe. Na análise gratuita eu indico por onde começar.',
    outroSlug: 'gestor-de-google-ads',
    outroNome: 'Google Ads',
  },
  faq: [
    {
      q: 'Quanto custa anunciar no Meta Ads?',
      a: 'O investimento tem duas partes: a verba de anúncios, paga direto à Meta e definida por você, e o honorário da gestão, que começa em R$ 1.000 por mês. Não existe um valor fixo de verba: ele depende do objetivo, da região e da concorrência. Na análise gratuita eu indico uma verba inicial compatível com o seu objetivo.',
    },
    {
      q: 'Você atende empresas fora do Brasil?',
      a: 'Sim. Atendo de forma 100% online empresas no Brasil e no exterior, como Portugal, Espanha, Irlanda, Reino Unido e Estados Unidos. As campanhas são segmentadas para o país, a cidade e o idioma do seu público, e a verba é cobrada pela Meta na moeda da sua conta de anúncios.',
    },
    {
      q: 'Preciso ter Pixel instalado no site?',
      a: 'Para campanhas de leads e vendas no site, sim: é o Pixel que mostra à Meta quem virou cliente. Se você ainda não tiver, eu configuro o Pixel e os eventos de conversão antes de subir as campanhas.',
    },
    {
      q: 'Em quanto tempo aparecem os primeiros resultados?',
      a: 'Os primeiros contatos costumam vir nos primeiros dias de campanha, mas a fase de aprendizado da Meta e os testes de público e criativo levam algumas semanas. Não prometo prazo nem resultado: acompanho os números e ajusto a cada semana.',
    },
  ],
  serviceType: 'Gestão de tráfego pago no Meta Ads (Facebook e Instagram)',
  whatsMsg: 'Olá! Quero uma análise gratuita das minhas campanhas no Meta Ads.',
}

const GOOGLE: Servico = {
  slug: 'gestor-de-google-ads',
  plataforma: 'Google Ads',
  title: 'Gestor de Google Ads: Pesquisa, YouTube e Performance Max',
  description:
    'Gestor de Google Ads: campanhas na Pesquisa, YouTube, Display e Performance Max para quem já procura o seu serviço, com GA4 e dashboard. Brasil e exterior.',
  h1: 'Gestor de Google Ads: apareça para quem já procura o seu serviço',
  heroFrase:
    'Crio e gerencio as suas campanhas na Pesquisa do Google, no YouTube e na Performance Max, com as conversões configuradas no GA4 e um dashboard para você saber quanto custa cada cliente.',
  oQueE: {
    pergunta: 'O que faz um gestor de Google Ads?',
    resposta:
      'O gestor de Google Ads cria e otimiza os anúncios da empresa na Pesquisa do Google, no YouTube, no Display e na Performance Max. Ele escolhe as palavras-chave e as palavras negativas, escreve os anúncios, configura as conversões no Google Ads e no GA4 e ajusta lances e verba pelos números (CPC, taxa de conversão, CPL e ROAS).',
  },
  entregas: [
    { titulo: 'Palavras-chave', texto: 'Pesquisa das buscas com intenção de compra e lista de palavras negativas para não pagar por clique errado.' },
    { titulo: 'Anúncios e extensões', texto: 'Anúncios responsivos, sitelinks, frases de destaque e chamada, com variações para teste A/B.' },
    { titulo: 'Lances e verba', texto: 'Estratégia de lances e distribuição da verba por campanha, de médio a alto volume.' },
    { titulo: 'Conversões no GA4', texto: 'Conversões do Google Ads, GA4 e Google Tag Manager configurados, inclusive clique no WhatsApp e formulário.' },
    { titulo: 'Página de destino', texto: 'Página alinhada à busca e ao anúncio, que melhora o Índice de Qualidade e a conversão.' },
    { titulo: 'Dashboard e otimização', texto: 'Investimento, conversões e custo por conversão num painel, com análise dos termos de pesquisa toda semana.' },
  ],
  campanhasTitulo: 'Tipos de campanha no Google Ads',
  campanhas: [
    { nome: 'Rede de Pesquisa', texto: 'Anúncios no topo do Google para quem busca o seu serviço agora.' },
    { nome: 'Performance Max', texto: 'Uma campanha em Pesquisa, YouTube, Display, Gmail e Maps, guiada pelas conversões.' },
    { nome: 'YouTube', texto: 'Vídeos para apresentar a marca e alcançar o público certo.' },
    { nome: 'Display e Demand Gen', texto: 'Banners e anúncios visuais em sites, apps e no Discover.' },
    { nome: 'Remarketing', texto: 'Anúncios para quem já visitou o seu site e ainda não converteu.' },
  ],
  mensuracao: [
    'Conversões do Google Ads',
    'Google Analytics 4 (GA4) e Google Tag Manager (GTM)',
    'Conversões de WhatsApp, formulário e ligação',
    'Qualificação dos contatos (MQL e SQL)',
  ],
  comparacao: {
    pergunta: 'Google Ads ou Meta Ads: qual é melhor para o meu negócio?',
    resposta:
      'O Google Ads captura quem já está procurando o seu serviço, por isso costuma trazer contatos com mais intenção de compra. O Meta Ads gera demanda: mostra a sua oferta para quem ainda não está buscando. Muitos negócios usam os dois. Na análise gratuita eu indico por onde começar.',
    outroSlug: 'gestor-de-trafego-meta-ads',
    outroNome: 'Meta Ads',
  },
  faq: [
    {
      q: 'Quanto custa anunciar no Google Ads?',
      a: 'No Google Ads você paga por clique, e o custo por clique varia conforme a palavra-chave, a região e a concorrência. A verba é paga direto ao Google e definida por você; o honorário da gestão é separado e começa em R$ 1.000 por mês. Na análise gratuita eu estimo as buscas e o custo das palavras-chave do seu negócio.',
    },
    {
      q: 'Você atende empresas fora do Brasil?',
      a: 'Sim. Atendo de forma 100% online empresas no Brasil e no exterior, como Portugal, Espanha, Irlanda, Reino Unido e Estados Unidos. As campanhas são segmentadas por país, cidade e idioma, e a verba é cobrada pelo Google na moeda da sua conta.',
    },
    {
      q: 'Vale a pena usar Performance Max?',
      a: 'A Performance Max funciona bem quando as conversões estão bem configuradas e há verba para a plataforma aprender. Para quem está começando, a Rede de Pesquisa costuma dar mais controle. Eu defino a combinação pelo seu objetivo e pela verba.',
    },
    {
      q: 'Em quanto tempo aparecem os primeiros resultados?',
      a: 'Na Rede de Pesquisa os primeiros cliques vêm logo após a aprovação dos anúncios, mas a otimização de palavras-chave e lances leva algumas semanas. Não prometo prazo nem resultado: acompanho os termos de pesquisa e os números e ajusto a cada semana.',
    },
  ],
  serviceType: 'Gestão de tráfego pago no Google Ads',
  whatsMsg: 'Olá! Quero uma análise gratuita das minhas campanhas no Google Ads.',
}

export const SERVICOS: Record<string, Servico> = { [META.slug]: META, [GOOGLE.slug]: GOOGLE }
export const SERVICO_SLUGS = Object.keys(SERVICOS)

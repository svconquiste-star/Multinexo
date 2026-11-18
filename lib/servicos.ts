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
  // Opcionais (padrões pensados para plataformas de anúncio; SEO/GEO e GA4/GTM trocam):
  breadcrumb?: string // padrão: `Gestor de ${plataforma}`
  entregasTitulo?: string // padrão: `O que eu faço na sua conta de ${plataforma}`
  mensuracaoTitulo?: string // padrão: 'Mensuração e tracking'
  mensuracaoNota?: string // padrão: frase das métricas de mídia paga
  exteriorTitulo?: string // padrão: `Gestor de ${plataforma} para empresas no Brasil e no exterior`
  exteriorTexto?: string
  paises?: string[] // padrão: PAISES
  honorarioGestao?: boolean // padrão true: mostra a seção "Quanto custa" (a partir de R$ 1.000)
  passos?: { title: string; text: string }[] // padrão: passos da gestão de campanhas
  caseNoHero?: boolean // padrão true: faixa "443 contatos" (case de tráfego pago) no Hero
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

const TIKTOK: Servico = {
  slug: 'gestor-de-tiktok-ads',
  plataforma: 'TikTok Ads',
  title: 'Gestor de TikTok Ads: anúncios em vídeo curto',
  description:
    'Gestor de TikTok Ads: campanhas em vídeo curto para gerar contatos, leads e vendas, com Pixel do TikTok, GA4 e dashboard. Brasil e exterior.',
  h1: 'Gestor de TikTok Ads: anúncios em vídeo curto que geram clientes',
  heroFrase:
    'Crio e gerencio as suas campanhas no TikTok, do criativo ao Pixel, com um dashboard para você saber quanto custa cada contato, lead ou venda.',
  oQueE: {
    pergunta: 'O que faz um gestor de TikTok Ads?',
    resposta:
      'O gestor de TikTok Ads planeja, cria e otimiza os anúncios da empresa no TikTok. Ele define o objetivo e o público, orienta os vídeos curtos no formato da plataforma, configura o Pixel do TikTok e as conversões, e ajusta as campanhas pelos números (CTR, custo por resultado, CPL e ROAS).',
  },
  entregas: [
    { titulo: 'Estratégia e público', texto: 'Objetivo, oferta e públicos por interesse, comportamento e semelhantes, além de remarketing.' },
    { titulo: 'Roteiro dos criativos', texto: 'Direção de vídeos curtos com gancho nos primeiros segundos, no formato nativo do TikTok, com variações para teste A/B.' },
    { titulo: 'Campanhas e verba', texto: 'Estrutura de campanhas, distribuição da verba e controle de ritmo, de médio a alto volume.' },
    { titulo: 'Pixel e conversões', texto: 'Pixel do TikTok e eventos de conversão configurados, para a plataforma otimizar para quem vira cliente.' },
    { titulo: 'Página e WhatsApp', texto: 'Página de captação ou WhatsApp ligados à campanha, com qualificação dos contatos.' },
    { titulo: 'Dashboard e otimização', texto: 'Investimento, resultados e custo por resultado num painel, com troca de criativos antes do cansaço do público.' },
  ],
  campanhasTitulo: 'Tipos de campanha no TikTok Ads',
  campanhas: [
    { nome: 'Anúncios no feed (In-Feed)', texto: 'Vídeos que aparecem no "Para Você", entre os vídeos dos criadores.' },
    { nome: 'Spark Ads', texto: 'Impulsiona um vídeo orgânico do seu perfil ou de um criador parceiro.' },
    { nome: 'Geração de leads', texto: 'Formulário instantâneo dentro do TikTok ou envio para a sua página.' },
    { nome: 'Conversões no site', texto: 'Para cadastro, compra ou contato no seu site.' },
    { nome: 'Alcance e visualizações', texto: 'Para apresentar a marca ou uma oferta a um público novo.' },
  ],
  mensuracao: [
    'Pixel do TikTok e eventos de conversão',
    'Google Analytics 4 e Google Tag Manager',
    'UTMs para separar cada campanha e criativo',
    'Qualificação dos contatos (MQL e SQL)',
  ],
  comparacao: {
    pergunta: 'TikTok Ads ou Meta Ads: qual escolher?',
    resposta:
      'O TikTok Ads funciona bem quando o produto se explica em vídeo curto e o público está na plataforma; costuma alcançar muita gente nova. O Meta Ads tem mais opções de segmentação e de formatos, como mensagens no WhatsApp. Muitos negócios testam os dois. Na análise gratuita eu indico por onde começar.',
    outroSlug: 'gestor-de-trafego-meta-ads',
    outroNome: 'Meta Ads',
  },
  faq: [
    {
      q: 'Quanto custa anunciar no TikTok Ads?',
      a: 'A verba de anúncios é paga direto ao TikTok e definida por você, de acordo com o objetivo e a região. O honorário da gestão é separado e começa em R$ 1.000 por mês. Na análise gratuita eu indico uma verba inicial para testar.',
    },
    {
      q: 'Preciso gravar vídeos para anunciar no TikTok?',
      a: 'Sim: no TikTok o anúncio é vídeo. Eu oriento o roteiro e o formato, e os vídeos podem ser gravados no celular por você, pela sua equipe ou por criadores parceiros.',
    },
    {
      q: 'Você atende empresas fora do Brasil?',
      a: 'Sim. Atendo de forma 100% online empresas no Brasil e no exterior, como Portugal, Espanha, Irlanda, Reino Unido e Estados Unidos, com campanhas segmentadas por país, cidade e idioma.',
    },
    {
      q: 'Em quanto tempo aparecem os primeiros resultados?',
      a: 'O TikTok precisa de alguns dias de aprendizado e de testes de criativo. Não prometo prazo nem resultado: acompanho os números e troco os criativos que cansam.',
    },
  ],
  serviceType: 'Gestão de tráfego pago no TikTok Ads',
  whatsMsg: 'Olá! Quero uma análise gratuita para anunciar no TikTok Ads.',
}

const LINKEDIN: Servico = {
  slug: 'gestor-de-linkedin-ads',
  plataforma: 'LinkedIn Ads',
  title: 'Gestor de LinkedIn Ads: anúncios B2B para empresas',
  description:
    'Gestor de LinkedIn Ads: campanhas B2B por cargo, setor e tamanho de empresa, com Lead Gen Forms, Insight Tag e qualificação MQL/SQL. Brasil e exterior.',
  h1: 'Gestor de LinkedIn Ads: anúncios B2B para falar com quem decide',
  heroFrase:
    'Crio e gerencio campanhas no LinkedIn para alcançar decisores por cargo, setor e tamanho de empresa, com leads qualificados em MQL e SQL e um dashboard do custo de cada oportunidade.',
  oQueE: {
    pergunta: 'O que faz um gestor de LinkedIn Ads?',
    resposta:
      'O gestor de LinkedIn Ads cria e otimiza os anúncios de empresas que vendem para outras empresas (B2B). Ele segmenta o público por cargo, senioridade, setor e tamanho da empresa, escolhe os formatos, configura a Insight Tag e os formulários de lead, e acompanha o custo por lead e por oportunidade de venda.',
  },
  entregas: [
    { titulo: 'Público B2B', texto: 'Segmentação por cargo, senioridade, setor, tamanho da empresa e listas de contas (ABM).' },
    { titulo: 'Oferta e conteúdo', texto: 'Oferta pensada para decisores: diagnóstico, material, demonstração ou reunião.' },
    { titulo: 'Campanhas e verba', texto: 'Estrutura de campanhas e controle de verba, de médio a alto volume, num canal de clique mais caro.' },
    { titulo: 'Insight Tag e conversões', texto: 'Insight Tag do LinkedIn e conversões configuradas, junto com GA4 e Google Tag Manager.' },
    { titulo: 'Lead Gen Forms', texto: 'Formulários com dados do perfil já preenchidos, enviados para a sua planilha ou CRM.' },
    { titulo: 'MQL, SQL e dashboard', texto: 'Separação entre lead de marketing (MQL) e lead pronto para venda (SQL), com custo de cada um num painel.' },
  ],
  campanhasTitulo: 'Formatos de anúncio no LinkedIn',
  campanhas: [
    { nome: 'Conteúdo patrocinado', texto: 'Imagem, vídeo, carrossel ou documento no feed de quem você quer alcançar.' },
    { nome: 'Lead Gen Forms', texto: 'Formulário dentro do LinkedIn, com nome, cargo e empresa já preenchidos.' },
    { nome: 'Mensagens patrocinadas', texto: 'Mensagem direta na caixa de entrada do LinkedIn, para convites e ofertas.' },
    { nome: 'Anúncios de texto', texto: 'Formato simples na lateral, para testar com verba menor.' },
    { nome: 'Remarketing e ABM', texto: 'Anúncios para quem visitou o site ou para uma lista de empresas-alvo.' },
  ],
  mensuracao: [
    'Insight Tag do LinkedIn e conversões',
    'Google Analytics 4 e Google Tag Manager',
    'Integração dos leads com planilha ou CRM',
    'Qualificação dos contatos (MQL e SQL)',
  ],
  mensuracaoNota:
    'Em B2B, o custo por lead sozinho engana: acompanho também o custo por oportunidade (SQL), o CAC e o LTV, para saber se a campanha se paga.',
  comparacao: {
    pergunta: 'LinkedIn Ads ou Google Ads para B2B?',
    resposta:
      'O LinkedIn Ads alcança decisores por cargo e empresa, mesmo quando eles ainda não estão procurando. O Google Ads captura quem já busca a solução. O clique no LinkedIn costuma ser mais caro, por isso ele faz mais sentido quando o valor de cada cliente é alto. Muitos negócios B2B usam os dois.',
    outroSlug: 'gestor-de-google-ads',
    outroNome: 'Google Ads',
  },
  faq: [
    {
      q: 'Quanto custa anunciar no LinkedIn Ads?',
      a: 'O LinkedIn costuma ter um custo por clique maior que Meta e Google, porque o público é profissional e segmentado. A verba é paga direto ao LinkedIn e definida por você; o honorário da gestão é separado e começa em R$ 1.000 por mês.',
    },
    {
      q: 'LinkedIn Ads serve para negócio local?',
      a: 'Em geral, não é a primeira escolha. O LinkedIn Ads faz mais sentido para empresas que vendem para outras empresas e para serviços de valor alto. Para negócio local, Meta Ads e Google Ads costumam ser mais indicados.',
    },
    {
      q: 'Você atende empresas fora do Brasil?',
      a: 'Sim. Atendo de forma 100% online empresas no Brasil e no exterior, como Portugal, Espanha, Irlanda, Reino Unido e Estados Unidos, com campanhas segmentadas por país e idioma.',
    },
    {
      q: 'O que é MQL e SQL?',
      a: 'MQL é o lead de marketing: demonstrou interesse, mas ainda não está pronto para comprar. SQL é o lead que o comercial já validou como oportunidade de venda. Separar os dois mostra quanto custa cada oportunidade real.',
    },
  ],
  serviceType: 'Gestão de tráfego pago no LinkedIn Ads (B2B)',
  whatsMsg: 'Olá! Quero uma análise gratuita para anunciar no LinkedIn Ads.',
}

const KWAI: Servico = {
  slug: 'gestor-de-kwai-ads',
  plataforma: 'Kwai Ads',
  title: 'Gestor de Kwai Ads: anúncios em vídeo para o Brasil',
  description:
    'Gestor de Kwai Ads: campanhas em vídeo curto para alcançar um público amplo no Brasil, com pixel, GA4 e dashboard do custo de cada resultado.',
  h1: 'Gestor de Kwai Ads: anúncios em vídeo para um público amplo',
  heroFrase:
    'Crio e gerencio as suas campanhas no Kwai, com vídeos curtos, pixel configurado e um dashboard para você saber quanto custa cada contato, lead ou venda.',
  oQueE: {
    pergunta: 'O que faz um gestor de Kwai Ads?',
    resposta:
      'O gestor de Kwai Ads planeja, cria e otimiza os anúncios da empresa no Kwai, o app de vídeos curtos. Ele define o objetivo e o público, orienta os vídeos, configura o pixel e as conversões, e ajusta as campanhas pelos números (custo por resultado, CTR, CPL e ROAS).',
  },
  entregas: [
    { titulo: 'Estratégia e público', texto: 'Objetivo, oferta e públicos definidos para o perfil de quem usa o Kwai.' },
    { titulo: 'Roteiro dos criativos', texto: 'Direção de vídeos curtos e diretos, no formato da plataforma, com variações para teste A/B.' },
    { titulo: 'Campanhas e verba', texto: 'Estrutura de campanhas, distribuição da verba e controle de ritmo.' },
    { titulo: 'Pixel e conversões', texto: 'Pixel do Kwai e eventos de conversão configurados, junto com GA4 e UTMs.' },
    { titulo: 'Página e WhatsApp', texto: 'Página de captação ou WhatsApp ligados à campanha, com qualificação dos contatos.' },
    { titulo: 'Dashboard e otimização', texto: 'Investimento, resultados e custo por resultado num painel, com ajustes pelos números.' },
  ],
  campanhasTitulo: 'Como anunciar no Kwai',
  campanhas: [
    { nome: 'Vídeos no feed', texto: 'Anúncios em vídeo curto entre os conteúdos que o público assiste.' },
    { nome: 'Conversões no site', texto: 'Para cadastro, compra ou contato na sua página.' },
    { nome: 'Instalação de app', texto: 'Para quem tem aplicativo e quer novos usuários.' },
    { nome: 'Alcance', texto: 'Para apresentar a marca ou uma oferta a muita gente, com custo baixo por visualização.' },
  ],
  mensuracao: [
    'Pixel do Kwai e eventos de conversão',
    'Google Analytics 4 e Google Tag Manager',
    'UTMs para separar cada campanha e criativo',
    'Qualificação dos contatos (MQL e SQL)',
  ],
  exteriorTitulo: 'Gestor de Kwai Ads para empresas que vendem no Brasil',
  exteriorTexto:
    'O Kwai tem mais força no Brasil e na América Latina. Atendo 100% online; se o seu público estiver na Europa ou nos Estados Unidos, eu indico canais com mais alcance por lá, como Meta, Google e TikTok.',
  paises: ['Brasil', 'América Latina'],
  comparacao: {
    pergunta: 'Kwai Ads ou TikTok Ads: qual escolher?',
    resposta:
      'Os dois são de vídeo curto. O Kwai costuma alcançar um público amplo no Brasil, inclusive fora das capitais, e pode ter custo menor por visualização. O TikTok tem mais alcance fora do Brasil e mais formatos. A escolha depende de onde está o seu cliente; posso testar os dois.',
    outroSlug: 'gestor-de-tiktok-ads',
    outroNome: 'TikTok Ads',
  },
  faq: [
    {
      q: 'Quanto custa anunciar no Kwai Ads?',
      a: 'A verba é paga direto ao Kwai e definida por você, de acordo com o objetivo e a região. O honorário da gestão é separado e começa em R$ 1.000 por mês. Na análise gratuita eu indico uma verba inicial para testar.',
    },
    {
      q: 'O Kwai Ads funciona para o meu negócio?',
      a: 'Costuma funcionar para produtos e serviços de público amplo, que se explicam em vídeo curto, e para quem vende para todo o Brasil. Para nichos muito específicos ou B2B, outros canais costumam ser melhores. Eu avalio isso na análise gratuita.',
    },
    {
      q: 'Preciso gravar vídeos?',
      a: 'Sim: no Kwai o anúncio é vídeo. Eu oriento o roteiro e o formato, e os vídeos podem ser gravados no celular.',
    },
  ],
  serviceType: 'Gestão de tráfego pago no Kwai Ads',
  whatsMsg: 'Olá! Quero uma análise gratuita para anunciar no Kwai Ads.',
}

const SEO_GEO: Servico = {
  slug: 'seo-e-geo',
  plataforma: 'SEO e GEO',
  title: 'SEO e GEO: apareça no Google e nas respostas de IA',
  description:
    'Consultoria de SEO e GEO: o seu site no Google e o seu negócio citado no ChatGPT, Gemini e Google AI Overviews. SEO técnico, conteúdo e dados estruturados.',
  h1: 'SEO e GEO: o seu negócio encontrado no Google e citado pelas IAs',
  heroFrase:
    'Otimizo o seu site para aparecer no Google sem pagar por clique e para ser citado em respostas do ChatGPT, do Gemini e do Google AI Overviews, com tudo medido no Search Console e no GA4.',
  breadcrumb: 'SEO e GEO',
  oQueE: {
    pergunta: 'O que é SEO e o que é GEO?',
    resposta:
      'SEO (otimização para mecanismos de busca) é o trabalho para o seu site aparecer nos resultados do Google sem pagar por clique. GEO (otimização para motores generativos) é o trabalho para o seu negócio ser citado nas respostas de IAs como ChatGPT, Gemini, Perplexity e Google AI Overviews. Os dois usam a mesma base: um site técnico sem erros, conteúdo que responde às perguntas do cliente e uma marca reconhecida.',
  },
  entregasTitulo: 'O que eu faço no SEO e no GEO do seu site',
  entregas: [
    { titulo: 'Auditoria técnica', texto: 'Indexação, velocidade, versão para celular, títulos, links e erros que impedem o Google de ler o site.' },
    { titulo: 'Palavras-chave e páginas', texto: 'Pesquisa do que o seu cliente busca e páginas de serviço para cada tema importante.' },
    { titulo: 'Conteúdo que responde', texto: 'Textos com a resposta logo no início, perguntas frequentes e comparações, no formato que as IAs citam.' },
    { titulo: 'Dados estruturados', texto: 'Schema.org de empresa, pessoa, serviço e perguntas, para o Google e as IAs entenderem quem você é.' },
    { titulo: 'SEO local', texto: 'Perfil da Empresa no Google, avaliações e consistência de nome, endereço e telefone.' },
    { titulo: 'Search Console e GA4', texto: 'Buscas, cliques, páginas indexadas e conversões vindas da busca orgânica, acompanhados todo mês.' },
  ],
  campanhasTitulo: 'Onde o seu negócio pode aparecer',
  campanhas: [
    { nome: 'Resultados do Google', texto: 'Os links orgânicos da pesquisa, sem custo por clique.' },
    { nome: 'Google AI Overviews', texto: 'O resumo feito por IA no topo de algumas pesquisas do Google.' },
    { nome: 'ChatGPT, Gemini e Perplexity', texto: 'Respostas que citam sites e marcas como fonte.' },
    { nome: 'Google Maps', texto: 'O Perfil da Empresa para buscas locais, como "perto de mim".' },
  ],
  mensuracaoTitulo: 'Como eu meço o SEO e o GEO',
  mensuracao: [
    'Google Search Console: buscas, cliques e páginas indexadas',
    'Google Analytics 4: visitas e conversões da busca orgânica',
    'Acompanhamento de citações da marca nas respostas de IA',
    'Arquivos para IAs (llms.txt) e robots.txt configurados',
  ],
  mensuracaoNota:
    'SEO e GEO são trabalho de médio prazo: os resultados crescem com o tempo e somam com o tráfego pago, que traz clientes desde o começo.',
  exteriorTitulo: 'SEO e GEO para empresas no Brasil e no exterior',
  exteriorTexto:
    'Atendo 100% online. O conteúdo pode ser em português do Brasil, em português de Portugal ou em inglês, conforme o país do seu público.',
  honorarioGestao: false,
  caseNoHero: false,
  passos: [
    { title: 'Análise gratuita', text: 'Você chama no WhatsApp ou preenche o formulário. Eu olho o site, o Search Console (se houver) e as buscas do seu nicho, e retorno em até 1 dia útil.' },
    { title: 'Diagnóstico e plano', text: 'Você recebe os problemas técnicos encontrados e as páginas e conteúdos que mais podem trazer clientes, em ordem de prioridade.' },
    { title: 'Correções e conteúdo', text: 'Corrijo a parte técnica, crio ou ajusto as páginas e os dados estruturados, e organizo o Perfil da Empresa no Google.' },
    { title: 'Acompanhamento', text: 'Todo mês, acompanho buscas, posições, cliques, citações em IAs e conversões, e ajusto o plano.' },
  ],
  comparacao: {
    pergunta: 'SEO ou tráfego pago: qual escolher?',
    resposta:
      'O tráfego pago traz clientes desde os primeiros dias, mas para quando a verba para. O SEO e o GEO levam meses para crescer, mas constroem uma fonte de clientes que não depende de anúncio. O melhor costuma ser usar os dois: o tráfego pago para vender agora e o SEO para reduzir a dependência de anúncios com o tempo.',
    outroSlug: 'gestor-de-trafego-pago',
    outroNome: 'tráfego pago',
  },
  faq: [
    {
      q: 'Quanto custa uma consultoria de SEO e GEO?',
      a: 'Depende do tamanho do site, da concorrência e de quanto conteúdo precisa ser criado. Na análise gratuita eu vejo o seu caso e monto uma proposta com o escopo e o valor.',
    },
    {
      q: 'Em quanto tempo o SEO dá resultado?',
      a: 'Correções técnicas podem ter efeito em semanas, mas posições fortes no Google e citações em IAs costumam levar meses. Não prometo posição nem prazo: acompanho os números todo mês.',
    },
    {
      q: 'Como fazer o meu negócio aparecer no ChatGPT?',
      a: 'As IAs citam fontes que respondem a pergunta de forma clara e que outros sites também mencionam. O caminho é ter páginas que respondem às dúvidas do cliente, dados estruturados, um site sem erros técnicos e a marca citada em outros lugares, como o Perfil da Empresa no Google e o LinkedIn.',
    },
    {
      q: 'Preciso ter um site para fazer SEO?',
      a: 'Para o SEO do Google, sim. Se você ainda não tiver, posso orientar a criação de um site rápido e pensado para busca. Para SEO local, o Perfil da Empresa no Google já ajuda bastante.',
    },
  ],
  serviceType: 'Consultoria de SEO e GEO (Generative Engine Optimization)',
  whatsMsg: 'Olá! Quero uma análise gratuita de SEO e GEO para o meu site.',
}

const GA4_GTM: Servico = {
  slug: 'ga4-e-google-tag-manager',
  plataforma: 'GA4 e Google Tag Manager',
  title: 'Configuração de GA4 e Google Tag Manager (tracking)',
  description:
    'Configuração de GA4, Google Tag Manager e tracking: eventos, conversões, Pixel, Consent Mode e qualificação MQL/SQL para saber de onde vem cada cliente.',
  h1: 'Configuração de GA4 e Google Tag Manager para medir cada cliente',
  heroFrase:
    'Configuro o Google Analytics 4, o Google Tag Manager e as conversões das plataformas de anúncio para você saber, com dados confiáveis, de onde vem cada contato, lead e venda.',
  breadcrumb: 'GA4 e Google Tag Manager',
  oQueE: {
    pergunta: 'O que é GA4 e para que serve o Google Tag Manager?',
    resposta:
      'O Google Analytics 4 (GA4) é a ferramenta do Google que mede as visitas e as ações no seu site, como cliques no WhatsApp, formulários e compras. O Google Tag Manager (GTM) é onde ficam instalados, num lugar só, o GA4, o Pixel da Meta, as conversões do Google Ads e outras tags, sem precisar mexer no código do site a cada mudança.',
  },
  entregasTitulo: 'O que eu configuro na sua mensuração',
  entregas: [
    { titulo: 'GA4 do zero ou revisão', texto: 'Propriedade, fluxo de dados, filtros de tráfego interno e retenção de dados configurados.' },
    { titulo: 'Google Tag Manager', texto: 'Contêiner organizado com GA4, Pixel da Meta, Google Ads, TikTok, LinkedIn e outras tags.' },
    { titulo: 'Eventos e conversões', texto: 'Clique no WhatsApp, envio de formulário, compra e etapas do funil, marcados como eventos-chave.' },
    { titulo: 'Conversões dos anúncios', texto: 'Conversões do Google Ads e eventos do Pixel conferidos, sem contar o mesmo lead duas vezes.' },
    { titulo: 'Consentimento (LGPD e GDPR)', texto: 'Banner de cookies e Consent Mode para atender clientes no Brasil e na Europa.' },
    { titulo: 'Dashboard e MQL/SQL', texto: 'Painel com origem de cada lead e separação entre lead de marketing (MQL) e lead pronto para venda (SQL).' },
  ],
  campanhasTitulo: 'O que passa a ser medido',
  campanhas: [
    { nome: 'Origem de cada visita', texto: 'Anúncio, busca orgânica, rede social, e-mail ou indicação, com UTMs padronizadas.' },
    { nome: 'Ações que importam', texto: 'WhatsApp, formulário, ligação, cadastro e compra.' },
    { nome: 'Funil de conversão', texto: 'Onde as pessoas desistem entre a primeira visita e a venda.' },
    { nome: 'Retorno dos anúncios', texto: 'CAC, ROAS, CPL e custo por venda de cada canal.' },
  ],
  mensuracaoTitulo: 'Ferramentas que eu uso',
  mensuracao: [
    'Google Analytics 4 (GA4) e Google Tag Manager (GTM)',
    'Pixel da Meta, tag do Google Ads, Pixel do TikTok e Insight Tag do LinkedIn',
    'Google Search Console',
    'Dashboard com os dados de anúncios, site e atendimento',
  ],
  mensuracaoNota:
    'Sem mensuração confiável, as plataformas otimizam para o lead errado e você decide no escuro. É por isso que eu configuro o tracking antes de escalar a verba.',
  exteriorTitulo: 'Tracking para empresas no Brasil e no exterior',
  exteriorTexto:
    'Atendo 100% online. Para clientes na Europa e no Reino Unido, a configuração já considera o consentimento de cookies exigido pelo GDPR.',
  honorarioGestao: false,
  caseNoHero: false,
  passos: [
    { title: 'Análise gratuita', text: 'Você chama no WhatsApp ou preenche o formulário. Eu olho o que já está instalado no seu site e retorno em até 1 dia útil.' },
    { title: 'Plano de medição', text: 'Defino quais ações medir, quais são as conversões principais e como separar cada canal.' },
    { title: 'Configuração e testes', text: 'Configuro GA4, GTM e as tags das plataformas, e testo cada evento antes de publicar.' },
    { title: 'Dashboard e entrega', text: 'Você recebe o painel e a explicação de cada número, para decidir com dados.' },
  ],
  comparacao: {
    pergunta: 'Preciso de GA4 se já vejo os resultados no painel da Meta e do Google Ads?',
    resposta:
      'Sim. Cada plataforma mede do seu jeito e tende a contar a conversão para si. O GA4 junta todos os canais no mesmo critério e mostra o caminho completo do cliente no seu site. É a base para comparar canais e decidir onde investir.',
    outroSlug: 'gestor-de-google-ads',
    outroNome: 'Google Ads',
  },
  faq: [
    {
      q: 'Quanto custa configurar GA4 e Google Tag Manager?',
      a: 'Depende de quantas ações, plataformas e páginas precisam ser medidas. Na análise gratuita eu vejo o que já existe no seu site e monto uma proposta com o escopo e o valor.',
    },
    {
      q: 'O Universal Analytics ainda funciona?',
      a: 'Não. O Google desligou o Universal Analytics e hoje a ferramenta é o Google Analytics 4. Se o seu site ainda usa o código antigo, ele não está medindo nada.',
    },
    {
      q: 'Você faz só a configuração, sem gerenciar anúncios?',
      a: 'Sim. A configuração de GA4, GTM e tracking pode ser contratada sozinha, inclusive para empresas que já têm agência ou equipe cuidando dos anúncios.',
    },
    {
      q: 'O que é MQL e SQL?',
      a: 'MQL é o lead de marketing: demonstrou interesse, mas ainda não está pronto para comprar. SQL é o lead que o comercial já validou como oportunidade de venda. Medir os dois mostra quais campanhas trazem vendas, e não só contatos.',
    },
  ],
  serviceType: 'Configuração de Google Analytics 4, Google Tag Manager e rastreamento de conversões',
  whatsMsg: 'Olá! Quero uma análise gratuita da mensuração (GA4 e Google Tag Manager) do meu site.',
}

export const SERVICOS: Record<string, Servico> = Object.fromEntries(
  [META, GOOGLE, TIKTOK, LINKEDIN, KWAI, SEO_GEO, GA4_GTM].map((s) => [s.slug, s])
)
export const SERVICO_SLUGS = Object.keys(SERVICOS)

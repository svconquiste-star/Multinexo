// Dados dos cases de sucesso (/cases/[slug]). Só entram números que aparecem
// em prints reais (components/case/CaseView.tsx mostra os prints ao lado).
// Itens com `pending: true` ainda precisam da confirmação do Daniel: aparecem
// só no ambiente de desenvolvimento, nunca na página publicada.

export interface CaseFact {
  label: string
  value: string
  pending?: boolean
}

export interface CaseStat {
  value: string
  label: string
  note?: string
}

export interface CaseStep {
  title: string
  text: string
  /** Detalhes em tópicos; só fatos que os prints ou o código comprovam. */
  details?: string[]
}

export interface CaseFunnelStep {
  value: string
  label: string
  note?: string
}

export interface CaseProofImage {
  src: string
  alt: string
  caption: string
  /** Print estreito (ex.: menu lateral): mostrado menor, para não ficar borrado. */
  narrow?: boolean
}

/** Textos que mudam quando o case é de um produto próprio, e não de um cliente. */
export interface CaseUi {
  badge?: string
  clientTitle?: string
  clientNote?: string
  resultsTitle?: string
  resultsSubtitle?: string
  proofsTitle?: string
  proofsSubtitle?: string
  disclaimer?: string
  /** Aviso só do localhost, lembrando o que falta para publicar. */
  proofsPendingNote?: string
  /**
   * Layout dos prints. `true`: 2 colunas (telas de app). `'phones'`: 2 colunas no
   * celular e 3 a 4 no desktop (prints de tela de celular). Padrão: uma imagem larga por linha.
   */
  proofsGrid?: boolean | 'phones'
  /** Textos dos 3 pilares (Estratégia, Inteligência de dados, Crescimento), na ordem. */
  pillarTexts?: [string, string, string]
}

export interface CaseStudy {
  slug: string
  /** Rascunho: só existe no localhost, nunca na versão publicada. */
  draft?: boolean
  ui?: CaseUi
  /** Frase do título de impacto, dividida para destacar o número. */
  headline: { before: string; highlight: string; after: string }
  subhead: string
  /** Período dos números; `null` quando o print não mostra a data (a confirmar). */
  period: string | null
  metaTitle: string
  metaDescription: string
  client: { intro: string; facts: CaseFact[] }
  challenge: { intro: string; items: string[] }
  strategy: { intro: string; steps: CaseStep[] }
  stats: CaseStat[]
  /** Funil do período, da impressão ao resultado (opcional). */
  funnel?: { title: string; steps: CaseFunnelStep[]; hideIndex?: boolean }
  extended: { value: string; text: string }
  proofs: CaseProofImage[]
  whatsappMessage: string
}

export const CASES: Record<string, CaseStudy> = {
  'contatos-em-17-dias': {
    slug: 'contatos-em-17-dias',
    ui: { badge: 'Case de contato' },
    headline: {
      before: 'Como geramos',
      highlight: 'mais de 440 contatos',
      after: 'em apenas 17 dias com tráfego pago.',
    },
    subhead:
      'Campanhas no Meta Ads, página de captação e acompanhamento diário no dashboard: 443 contatos com R$ 442,68 investidos, de 1 a 17 de junho de 2026.',
    period: '1 a 17 de junho de 2026',
    metaTitle: 'Case: mais de 440 contatos em 17 dias com tráfego pago | Daniel Aguiar',
    metaDescription:
      '443 contatos em 17 dias, a R$ 1,00 por contato, com campanhas no Meta Ads, página de captação e dashboard. Veja a estratégia por trás do resultado.',
    client: {
      intro: 'Um negócio de serviços que dependia de indicações e queria um fluxo constante de novos contatos.',
      facts: [
        { label: 'Quem usa', value: 'Cliente Contratante' },
        { label: 'Segmento', value: 'Prestação de serviços', pending: true },
        { label: 'Região atendida', value: 'Brasil' },
        { label: 'Produto ou serviço', value: 'Dashboard + Tráfego Pago' },
        { label: 'Público-alvo', value: 'Cliente que precisa de tráfego pago e de um dashboard de acompanhamento' },
      ],
    },
    challenge: {
      intro: 'Antes do projeto, o cenário era comum a muitos negócios locais:',
      items: [
        'Poucos clientes novos chegando por mês.',
        'Dependência de indicações para manter a agenda.',
        'Baixa procura pelos serviços na internet.',
        'Dificuldade para transformar interesse em oportunidades comerciais.',
      ],
    },
    strategy: {
      intro: 'Uma estratégia em quatro etapas, medida todos os dias:',
      steps: [
        {
          title: 'Diagnóstico e planejamento',
          text: 'Definição do público certo, da oferta e da meta de contatos antes de investir o primeiro real.',
          details: [
            'Objetivo da campanha: contatos no site, para a Meta otimizar pelo resultado que importa.',
            'Duas campanhas no período, comparadas entre si pelo custo por contato.',
            'Investimento diário acompanhado de perto: de R$ 16,94 a R$ 32,73 por dia ao longo dos 17 dias.',
          ],
        },
        {
          title: 'Campanhas e criativos',
          text: 'Segmentação do público e criativos testados nas campanhas do Meta Ads, otimizados com base nos dados.',
          details: [
            'Anúncios comparados lado a lado: nos 30 dias do Gerenciador, os 3 principais ficaram entre R$ 1,15 e R$ 1,30 por contato.',
            'O item de pior desempenho (5 contatos) custou R$ 2,19: o dado mostra onde não vale insistir.',
            'CTR de 12,2% no período, com 890 cliques no link para 7.309 impressões.',
          ],
        },
        {
          title: 'Página de captação',
          text: 'Landing page enxuta, com formulário e rastreamento de conversão, para o clique virar contato.',
          details: [
            'Pouca perda entre o clique e a página: 841 visitas para 890 cliques (94,5%).',
            'Conversão alta na página: 443 contatos em 841 visitas (52,7%).',
            'Cada contato é registrado como evento de conversão, o que permite medir o custo por contato.',
          ],
        },
        {
          title: 'Dados e otimização',
          text: 'Dashboard próprio com funil, custo por contato e resultado por dia, para ajustar a verba onde rende mais.',
          details: [
            'Funil de conversão: impressões, cliques, página de destino e contatos, com a taxa de contato.',
            'Tabela por dia com investimento, CPM, CTR, CPC, custo por contato e ROAS.',
            'Resultado mostra a oscilação real: de R$ 0,46 a R$ 3,37 por contato entre os dias.',
            'Alerta de saldo da conta, para a campanha não parar sem aviso.',
          ],
        },
      ],
    },
    stats: [
      { value: '443', label: 'contatos gerados', note: 'em 17 dias' },
      { value: 'R$ 1,00', label: 'custo por contato', note: 'média do período' },
      { value: '12,2%', label: 'CTR', note: '890 cliques no link' },
      { value: 'R$ 442,68', label: 'investimento', note: 'no período' },
    ],
    funnel: {
      title: 'O funil do período',
      steps: [
        { value: '7.309', label: 'impressões' },
        { value: '890', label: 'cliques no link', note: 'CTR de 12,2%' },
        { value: '841', label: 'visitas na página', note: '94,5% dos cliques' },
        { value: '443', label: 'contatos', note: '52,7% das visitas' },
      ],
    },
    extended: {
      value: '562 contatos a R$ 1,23',
      text: 'Em outra janela, os últimos 30 dias (19/05 a 17/06/2026), o Gerenciador de Anúncios da Meta registrou 562 contatos no site, com CTR de 10,12%.',
    },
    proofs: [
      {
        src: '/images/cases/contatos-em-17-dias/relatorio.png',
        alt: 'Relatório do dashboard com os resultados por dia de 1 a 17 de junho de 2026',
        caption: 'Dashboard: resultados dia a dia, de 1 a 17/06/2026, com total de 443 contatos.',
      },
      {
        src: '/images/cases/contatos-em-17-dias/funil.png',
        alt: 'Funil de conversão do dashboard: impressões, cliques, página de destino e contatos',
        caption: 'Dashboard: funil de conversão de um dos dias, da impressão ao contato.',
      },
      {
        src: '/images/cases/contatos-em-17-dias/gerenciador.png',
        alt: 'Gerenciador de Anúncios da Meta com 562 contatos no site nos últimos 30 dias',
        caption: 'Gerenciador de Anúncios (Meta): 562 contatos, últimos 30 dias.',
      },
    ],
    whatsappMessage:
      'Olá, Daniel! Vi o case dos 440 contatos em 17 dias e quero entender como aplicar a mesma estratégia no meu negócio.',
  },
}

CASES['40-vendas-ecommerce'] = {
  slug: '40-vendas-ecommerce',
  draft: true,
  headline: {
    before: 'Como geramos',
    highlight: '40 vendas online',
    after: 'a R$ 38,43 cada com tráfego pago.',
  },
  subhead:
    'Campanhas de vendas no Meta Ads para uma loja virtual: 40 compras no site com R$ 1.537,07 investidos e acompanhamento do custo por compra em cada campanha.',
  period: null,
  metaTitle: 'Case: 40 vendas online a R$ 38,43 cada com tráfego pago | Daniel Aguiar',
  metaDescription:
    '40 compras no site com R$ 1.537,07 investidos em campanhas de vendas no Meta Ads. Veja a estratégia por trás do resultado.',
  client: {
    intro: 'Uma loja virtual que queria transformar visitas em vendas, com custo por compra sob controle.',
    facts: [
      { label: 'Quem usa', value: 'Cliente Contratante' },
      { label: 'Segmento', value: 'E-commerce' },
      { label: 'Região atendida', value: 'A confirmar', pending: true },
      { label: 'Produto ou serviço', value: 'A confirmar', pending: true },
      { label: 'Público-alvo', value: 'A confirmar', pending: true },
    ],
  },
  challenge: {
    intro: 'O ponto de partida era o de muitas lojas virtuais:',
    items: [
      'Tráfego que chegava à loja, mas pouco virava compra.',
      'Não saber quanto custava, de fato, cada venda.',
      'Campanhas sem comparação entre si para decidir onde investir.',
      'Dificuldade para escalar sem perder a margem.',
    ],
  },
  strategy: {
    intro: 'Uma estratégia em quatro etapas, medida por compra:',
    steps: [
      {
        title: 'Planejamento da oferta',
        text: 'Escolha dos produtos, do público e da meta de custo por compra antes de investir.',
      },
      {
        title: 'Campanhas de vendas',
        text: 'Campanhas no Meta Ads otimizadas para compra no site, com criativos testados entre si.',
      },
      {
        title: 'Rastreamento de compra',
        text: 'Pixel configurado para registrar cada compra, a base para otimizar pelo que realmente vende.',
      },
      {
        title: 'Dados e otimização',
        text: 'Comparação do custo por compra entre campanhas e ajuste da verba para as que rendem mais.',
      },
    ],
  },
  stats: [
    { value: '40', label: 'compras no site', note: 'vendas geradas' },
    { value: 'R$ 38,43', label: 'custo por compra', note: 'média das campanhas' },
    { value: 'R$ 1.537,07', label: 'investimento', note: 'valor usado' },
    { value: '50 mil', label: 'impressões', note: '37.497 pessoas alcançadas' },
  ],
  extended: {
    value: 'R$ 19,83 por compra na melhor campanha',
    text: 'Comparar as campanhas mostrou onde investir: a de melhor desempenho chegou a R$ 19,83 por compra, metade da média.',
  },
  proofs: [
    {
      src: '/images/cases/40-vendas-ecommerce/gerenciador.png',
      alt: 'Gerenciador de Anúncios da Meta com 40 compras no site a R$ 38,43 por compra',
      caption: 'Gerenciador de Anúncios (Meta): 40 compras no site, R$ 38,43 por compra, R$ 1.537,07 investidos.',
    },
  ],
  whatsappMessage:
    'Olá, Daniel! Vi o case das 40 vendas online e quero entender como aplicar a mesma estratégia na minha loja.',
}

CASES['midia-social-ia'] = {
  slug: 'midia-social-ia',
  ui: {
    badge: 'Case de produto • uso próprio',
    clientTitle: 'Sobre o projeto',
    clientNote: 'Cliente contratante mantido em sigilo: nenhum nome aparece nesta página.',
    resultsTitle: 'O que o sistema entrega',
    resultsSubtitle: 'Do primeiro commit (06/06/2026) ao uso atual, em outubro de 2026.',
    proofsTitle: 'O sistema em uso',
    proofsSubtitle: 'Prints reais do painel: acesso, menu, criação de conteúdo e calendário com a fila de publicação.',
    proofsGrid: true,
    disclaimer:
      'Ferramenta de uso próprio, em evolução. Alcance, engajamento e vendas dependem do conteúdo, do perfil e do investimento; não há garantia de resultado.',
    pillarTexts: [
      'Calendário planejado com tendências pesquisadas e observações, para publicar o que importa ao público certo.',
      'Aprendizado com o desempenho das publicações anteriores e histórico de logs de tudo o que foi feito.',
      'Presença constante nas redes, que sustenta a geração de oportunidades comerciais.',
    ],
    proofsPendingNote: '',
  },
  headline: {
    before: 'Como criamos uma',
    highlight: 'máquina de conteúdo com IA',
    after: 'que planeja, cria e publica no Instagram e no LinkedIn.',
  },
  subhead:
    'Um sistema próprio, no ar: a IA gera posts, carrosséis, stories e reels, você aprova e o servidor publica na data agendada, mesmo com o computador desligado.',
  period: null,
  metaTitle: 'Case: máquina de conteúdo com IA para Instagram e LinkedIn | Daniel Aguiar',
  metaDescription:
    'Sistema próprio que planeja, cria e publica conteúdo no Instagram e no LinkedIn com IA, com calendário, fila de aprovação e publicação agendada no servidor.',
  client: {
    intro: 'Um projeto interno para manter as redes ativas sem gastar horas toda semana em criação e publicação.',
    facts: [
      { label: 'Quem usa', value: 'Cliente Contratante' },
      { label: 'Redes conectadas', value: 'Instagram e LinkedIn' },
      { label: 'Formatos', value: 'Post, carrossel, story e reel' },
      { label: 'Também gera', value: 'Artigos para o blog' },
    ],
  },
  challenge: {
    intro: 'A rotina de conteúdo costuma travar nos mesmos pontos:',
    items: [
      'Criar ideias, textos e artes toda semana toma horas.',
      'Falta consistência: o perfil fica dias sem publicar.',
      'Cada formato (post, carrossel, story, reel) pede um trabalho diferente.',
      'Publicar em mais de uma rede e manter os acessos funcionando dá trabalho.',
    ],
  },
  strategy: {
    intro: 'O sistema cobre o caminho inteiro, da ideia à publicação:',
    steps: [
      {
        title: 'Planejamento em calendário',
        text: 'Calendário dos próximos 30 dias, com tendências pesquisadas na internet e campo de observações para guiar a IA.',
        details: [
          'Calendário de 30 dias com o dia de hoje destacado e clique para ir direto ao dia.',
          'A data atual entra no pedido à IA e as tendências são pesquisadas na internet, para o texto sair sempre no ano atual.',
          'Campo de observações para orientar a IA em cada semana.',
          'Gerar uma nova semana não apaga o que já está agendado.',
        ],
      },
      {
        title: 'Criação com IA',
        text: 'Copy, ganchos e artes em estilo padrão, com capas em motion que não se repetem e aprendizado com o desempenho anterior.',
        details: [
          'Post único, carrossel (8 a 10 slides), story (3 a 5 telas 9:16 com gancho) e reel (roteiro de 15 a 30 s).',
          'Semana completa em um clique: 2 reels, 3 carrosséis e 1 post único, com 1 sequência de story por dia.',
          '7 estilos de copy: tutorial, jornalística, estratégica, storytelling, dor e solução, autoridade e conversacional.',
          'Campos de tema, nicho, CTA e referências para orientar a IA.',
          'Estilo padrão Dark Tech sóbrio, igual no Instagram e no LinkedIn.',
          'Capas animadas com o motor Motion, com gancho, e sem repetir o visual entre as peças.',
          'O motor aprende regras de retenção e de gancho a partir do desempenho das publicações.',
          'Artes no formato 4:5 do feed, com margem de segurança e prévia sem recorte.',
        ],
      },
      {
        title: 'Aprovação e fila',
        text: 'Cada peça passa por aprovação e entra na fila. O servidor publica na data agendada, sem depender do computador ligado.',
        details: [
          'A fila mostra só o que ainda vai ser publicado; o que já saiu vai para o arquivo de publicados.',
          'Post aprovado é publicado pelo servidor, mesmo com o computador desligado.',
          'Dá para agendar mídia feita fora do sistema, inclusive vídeos de até 200 MB, enviados em partes.',
          'As telas atualizam o status sozinhas a cada 30 segundos.',
        ],
      },
      {
        title: 'Publicação e controle',
        text: 'Instagram, LinkedIn e blog, com histórico de logs e avisos de token vencendo e de créditos da IA acabando.',
        details: [
          'Publica no Instagram e no LinkedIn, com botão para publicar no LinkedIn na hora.',
          'Tenta de novo sozinho quando a rede devolve um erro passageiro.',
          'Avisa quando o acesso ao Instagram ou ao LinkedIn está para vencer; o do LinkedIn renova sozinho quando há refresh token.',
          'Avisa quando os créditos da IA acabam, com link para recarregar.',
          'Histórico de logs de tudo o que foi feito.',
          'Blog: gera artigos por categoria (Negócios, Tecnologia, Marketing), com imagens em motion.',
        ],
      },
    ],
  },
  stats: [
    { value: '4', label: 'formatos de conteúdo', note: 'post, carrossel, story e reel' },
    { value: '2', label: 'redes conectadas', note: 'Instagram e LinkedIn' },
    { value: '30 dias', label: 'de calendário', note: 'planejados de uma vez' },
    { value: 'Agendada', label: 'publicação no servidor', note: 'com o PC desligado' },
  ],
  extended: {
    value: '8 publicações no arquivo atual',
    text: 'Entre 22 e 30/10/2026 o sistema publicou 5 posts, 2 stories e 1 reel. É o arquivo atual de publicados, em uso próprio, sem número de alcance.',
  },
  proofs: [
    {
      src: '/images/cases/midia-social-ia/login.png',
      alt: 'Tela de acesso do painel MIDIA SOCIAL, com os ícones do Instagram e do LinkedIn',
      caption: 'Acesso ao painel, com as duas redes conectadas: Instagram e LinkedIn.',
    },
    {
      src: '/images/cases/midia-social-ia/menu.png',
      alt: 'Menu lateral do painel: Overview, Ver Perfil, Análise do Perfil, Criar Conteúdo, Reels, Blog, Publicar, Calendário, Histórico de Logs e Configurações',
      caption: 'Menu do painel: análise do perfil, criação, reels, blog, publicação, calendário e histórico de logs.',
      narrow: true,
    },
    {
      src: '/images/cases/midia-social-ia/criar-conteudo.png',
      alt: 'Tela Criar Conteúdo, com tipos de conteúdo, tema da semana, nicho, CTA, observações e sete estilos de copy',
      caption:
        'Criar conteúdo: semana completa (2 reels, 3 carrosséis, 1 post único e stories) ou um formato só, com 7 estilos de copy.',
    },
    {
      src: '/images/cases/midia-social-ia/calendario.png',
      alt: 'Calendário dos próximos 30 dias com a fila de publicação e os reels agendados no servidor de produção',
      caption:
        'Calendário de 30 dias e fila de publicação: 4 peças na fila, 0 com erro, cada uma marcada "No servidor de produção, publica sozinho".',
    },
  ],
  whatsappMessage:
    'Olá, Daniel! Vi o case da máquina de conteúdo com IA e quero uma solução parecida para o meu negócio.',
}

CASES['lp-filtro-de-leads'] = {
  slug: 'lp-filtro-de-leads',
  ui: {
    badge: 'Case de projeto',
    resultsTitle: 'O que a landing page entrega',
    resultsSubtitle: 'Do primeiro commit (09/01/2026) à versão atual (27/10/2026).',
    proofsTitle: 'A landing page na prática',
    proofsSubtitle: 'Prints reais do formulário, com dados fictícios de teste.',
    proofsGrid: 'phones',
    disclaimer:
      'Projeto de captação com regra de qualificação. Esta página não traz volume de leads nem taxa de conversão; os resultados dependem da campanha, da oferta e do investimento, e não há garantia.',
    proofsPendingNote: '',
    pillarTexts: [
      'Qualificar antes do atendimento: o time conversa primeiro com quem tem o perfil certo.',
      'Todo envio fica no banco de dados e os eventos de conversão seguem o padrão exigido pelos anúncios.',
      'Menos tempo com contato fora do perfil e mais foco em oportunidades comerciais.',
    ],
  },
  headline: {
    before: 'Como filtramos',
    highlight: 'os leads antes do WhatsApp',
    after: 'com uma landing page de 2 etapas e banco de dados.',
  },
  subhead:
    'Formulário curto, qualificação automática e uma regra simples: quem tem o perfil segue para o atendimento; quem não tem é registrado e recebe um aviso. Tudo salvo no banco de dados.',
  period: null,
  metaTitle: 'Case: landing page com filtro de leads e banco de dados | Daniel Aguiar',
  metaDescription:
    'Landing page de 2 etapas que qualifica o lead antes do WhatsApp, rastreia a conversão com o Pixel e salva cada envio em banco de dados.',
  client: {
    intro: 'Um negócio que recebia anúncios com muitos contatos e queria atender primeiro quem tem o perfil certo.',
    facts: [
      { label: 'Quem usa', value: 'Cliente Contratante' },
      { label: 'Segmento', value: 'Seguros e empréstimos' },
      { label: 'Região atendida', value: 'Brasil' },
      { label: 'Produto ou serviço', value: 'Landing page de captação com qualificação de leads' },
      { label: 'Público-alvo', value: 'Autônomos e empresas (PJ)' },
    ],
  },
  challenge: {
    intro: 'Sem filtro, a campanha traz volume, mas o atendimento paga o preço:',
    items: [
      'O time perde tempo com contatos fora do perfil atendido.',
      'O lead chega ao WhatsApp sem contexto e as perguntas se repetem.',
      'Quem não se encaixa some, sem nenhum registro.',
      'O rastreamento precisa respeitar as regras dos anúncios, usando só eventos padrão.',
    ],
  },
  strategy: {
    intro: 'Do anúncio ao banco de dados, em 5 camadas: tráfego pago, formulário, filtro, rastreamento e banco de dados.',
    steps: [
      {
        title: 'Tráfego pago no Meta Ads',
        text: 'Os clientes chegam por anúncios que levam direto à landing page, que já nasce pronta para medir e qualificar cada contato.',
        details: [
          'O clique do anúncio chega à página com o identificador do anúncio (fbclid), guardado em cookie para a Meta ligar o contato à campanha.',
          'O evento Contact, disparado só para o lead que passa no filtro, serve de sinal de conversão para as campanhas.',
          'Dois Pixels da Meta instalados na página, com eventos padrão e sem parâmetros personalizados.',
          'Texto da página sem termos financeiros sensíveis, para respeitar a política de anúncios da Meta.',
          'O Pixel aprende com quem tem o perfil certo, e não com o volume de cliques.',
        ],
      },
      {
        title: 'Formulário em 2 etapas',
        text: 'Perguntas curtas, divididas em dois passos, para reduzir o abandono e já levar o contexto ao atendimento.',
        details: [
          'Etapa 1: nome, telefone, e-mail (opcional) e cidade. O botão só habilita com dados válidos.',
          'O telefone é validado e mostrado formatado, por exemplo +55 (31) 98765-4321.',
          'Etapa 2: ocupação, forma de trabalho (CLT ou PJ/Autônomo), renda mensal e valor desejado, com máscara de moeda.',
          'Para PJ, nome da empresa e motivo também são obrigatórios.',
        ],
      },
      {
        title: 'Filtro de leads',
        text: 'A resposta sobre a forma de trabalho decide o caminho do lead, sem ninguém precisar triar na mão.',
        details: [
          'PJ ou autônomo: o WhatsApp abre com a mensagem já preenchida com os dados do lead.',
          'CLT: o WhatsApp não abre e o Pixel não dispara. O lead vê um aviso de que, no momento, o atendimento é só para autônomos e empresas.',
          'O lead fora do perfil não é descartado: fica registrado no banco de dados para controle.',
          'A regra foi endurecida em 23/09/2026, quando o fluxo e o banco de dados entraram juntos.',
        ],
      },
      {
        title: 'Rastreamento de conversão',
        text: 'Só quem passa no filtro vira conversão, então o Pixel aprende com o público certo.',
        details: [
          'Eventos padrão do Pixel: PageView, ViewContent e Contact. Sem eventos nem parâmetros personalizados.',
          'O Contact dispara apenas para o lead PJ, com identificador do evento para evitar duplicidade.',
          'Dados de correspondência (e-mail, telefone, nome e cidade) são enviados em hash SHA-256, nunca em texto aberto.',
          'O ViewContent dispara uma vez por visitante.',
        ],
      },
      {
        title: 'Banco de dados',
        text: 'Cada envio é validado no servidor e salvo, para o cliente consultar e filtrar depois.',
        details: [
          'Banco Postgres, acessado com Prisma.',
          'Validação no servidor: dados inválidos voltam com o campo e a mensagem do erro.',
          'Salvos: dados do lead, link do WhatsApp gerado, data do envio, IP e navegador.',
          'Consulta rápida por telefone, e-mail, forma de trabalho (CLT ou PJ) e data.',
        ],
      },
    ],
  },
  stats: [
    { value: '2', label: 'etapas no formulário', note: 'curto, em dois passos' },
    { value: '2', label: 'caminhos para o lead', note: 'PJ segue, CLT é registrado' },
    { value: '3', label: 'eventos padrão do Pixel', note: 'PageView, ViewContent e Contact' },
    { value: 'Postgres', label: 'banco de dados', note: 'todo envio validado e salvo' },
  ],
  funnel: {
    title: 'O funil de filtro',
    hideIndex: true,
    steps: [
      { value: 'Etapa 1', label: 'Contato', note: 'nome, telefone, e-mail e cidade' },
      { value: 'Etapa 2', label: 'Qualificação', note: 'ocupação, forma de trabalho, renda e valor' },
      { value: 'PJ / Autônomo', label: 'Segue para o WhatsApp', note: 'Pixel Contact + salvo no banco' },
      { value: 'CLT', label: 'Só é registrado', note: 'sem WhatsApp, sem Pixel, com aviso' },
    ],
  },
  extended: {
    value: '26 versões em 2026',
    text: 'Do primeiro commit (09/01/2026) à versão atual (27/10/2026): formulário em 2 etapas e filtro em 22/09, banco de dados em 23/09 e campo de motivo para PJ em 27/10.',
  },
  proofs: [
    {
      src: '/images/cases/lp-filtro-de-leads/etapa-1.jpg',
      alt: 'Etapa 1 do formulário com nome, telefone validado, e-mail opcional e cidade preenchidos',
      caption: 'Etapa 1: contato, com telefone validado e formatado.',
    },
    {
      src: '/images/cases/lp-filtro-de-leads/etapa-2-pj.jpg',
      alt: 'Etapa 2 do formulário com PJ selecionado, exibindo os campos de empresa, renda, valor desejado e motivo',
      caption: 'Etapa 2, caminho PJ: pede empresa e motivo e segue para o WhatsApp.',
    },
    {
      src: '/images/cases/lp-filtro-de-leads/etapa-2-clt.jpg',
      alt: 'Aviso mostrado ao lead CLT: no momento, o atendimento é apenas para autônomos e empresas',
      caption: 'Etapa 2, caminho CLT: não abre o WhatsApp, mostra um aviso e o lead fica registrado.',
    },
  ],
  whatsappMessage:
    'Olá, Daniel! Vi o case da landing page com filtro de leads e quero uma assim para o meu negócio.',
}

export const CASE_SLUGS = Object.keys(CASES).filter(
  (slug) => !CASES[slug].draft || process.env.NODE_ENV !== 'production'
)

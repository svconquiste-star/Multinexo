// Internacionalização da landing /europa — 3 idiomas, cada um na sua URL.
// Campos com sufixo "Html" permitem <strong> (conteúdo nosso, sem input de usuário).

export type Locale = 'pt-BR' | 'pt-PT' | 'en'

export const LOCALES: {
  code: Locale
  path: string
  label: string
  short: string
  flag: string
  ogLocale: string
  htmlLang: string
  hreflang: string
}[] = [
  { code: 'pt-BR', path: '/europa', label: 'Português (Brasil)', short: 'BR', flag: '🇧🇷', ogLocale: 'pt_BR', htmlLang: 'pt-BR', hreflang: 'pt-BR' },
  { code: 'pt-PT', path: '/europa/pt', label: 'Português (Portugal)', short: 'PT', flag: '🇵🇹', ogLocale: 'pt_PT', htmlLang: 'pt-PT', hreflang: 'pt-PT' },
  { code: 'en', path: '/europa/en', label: 'English (Ireland)', short: 'EN', flag: '🇮🇪', ogLocale: 'en_IE', htmlLang: 'en', hreflang: 'en-IE' },
]

export function localeMeta(locale: Locale) {
  return LOCALES.find((l) => l.code === locale) ?? LOCALES[0]
}

// hreflang recíproco para os metadados de cada página.
export const HREFLANG_ALTERNATES: Record<string, string> = {
  'pt-BR': '/europa',
  'pt-PT': '/europa/pt',
  'en-IE': '/europa/en',
}

type Faq = { question: string; answer: string }

export interface Dict {
  meta: { title: string; description: string }
  nav: { whatsapp: string; whatsappShort: string; langLabel: string }
  hero: {
    eyebrow: string
    h1: string
    subheadHtml: string
    publicsHtml: string
    cta: string
    microcopy: string
    countries: string[]
  }
  audiences: {
    title: string
    subtitle: string
    cta: string
    items: { key: string; title: string; text: string }[]
    other: { title: string; text: string; cta: string }
  }
  pains: { title: string; subtitle: string; list: string[]; closing: string }
  services: {
    title: string
    subtitle: string
    footerHtml: string
    items: { title: string; description: string }[]
  }
  authority: {
    title: string
    subtitle: string
    items: { title: string; text: string }[]
  }
  how: { title: string; subtitle: string; steps: { title: string; text: string }[] }
  proof: {
    title: string
    metrics: { value: string; label: string }[]
    testimonials: { quote: string; segment: string }[]
    logosCaption: string
  }
  faq: { badge: string; title: string; items: Faq[] }
  cta: { title: string; subtext: string; button: string; microcopy: string }
  footer: { tagline: string; privacy: string; mainSite: string; rights: string }
  // Mensagens pré-preenchidas do WhatsApp por chave de público (+ default).
  wa: Record<string, string>
}

// ————————————————————————————————————————————————————————————————
// PT-BR (padrão)
// ————————————————————————————————————————————————————————————————
const ptBR: Dict = {
  meta: {
    title: 'Marketing para brasileiros na Europa | Multinexo',
    description:
      'Brasileiro empreendendo em Portugal, Irlanda, Espanha ou Reino Unido? Atraia mais clientes com tráfego, estratégia e IA — em português e 100% remoto. Análise gratuita.',
  },
  nav: { whatsapp: 'Falar no WhatsApp', whatsappShort: 'WhatsApp', langLabel: 'Idioma' },
  hero: {
    eyebrow: 'Para brasileiros que empreendem na Europa 🇧🇷',
    h1: 'Empreende na Europa e o marketing não acompanha?',
    subheadHtml:
      'Eu trago <strong>mais clientes</strong> para o seu negócio — com tráfego, estratégia e IA. Tudo <strong>em português</strong> e <strong>100% remoto</strong>, onde quer que você esteja.',
    publicsHtml:
      'Para <strong>empresas, lojas locais, afiliados, experts e influencers</strong> brasileiros na Europa.',
    cta: 'Quero minha análise gratuita',
    microcopy: '⚡ Atendimento em português • Resposta em minutos • Sem compromisso',
    countries: ['🇵🇹 Portugal', '🇮🇪 Irlanda', '🇪🇸 Espanha', '🇬🇧 Reino Unido'],
  },
  audiences: {
    title: 'Para quem eu faço isso',
    subtitle:
      'Seja qual for o seu perfil, eu monto a estratégia certa para você atrair mais clientes na Europa.',
    cta: 'Falar sobre o meu caso',
    items: [
      { key: 'empresa', title: 'Empresas', text: 'Escale com tráfego, IA e decisões baseadas em dados — não em achismo.' },
      { key: 'loja-local', title: 'Lojas e negócios locais', text: 'Atraia clientes da sua cidade ou bairro com anúncios geolocalizados.' },
      { key: 'afiliado', title: 'Afiliados', text: 'Funil e tráfego para vender mais e crescer as suas comissões.' },
      { key: 'expert', title: 'Experts e mentores', text: 'Transforme a sua autoridade em mais alunos e clientes.' },
      { key: 'influencer', title: 'Influencers e criadores', text: 'Vire a sua audiência em venda real, com estratégia e funil.' },
    ],
    other: {
      title: 'É outro segmento?',
      text: 'Restaurante, estética, serviços, loja online, infoproduto… atendo o que o seu negócio precisar.',
      cta: 'Me conta o seu caso',
    },
  },
  pains: {
    title: 'Você se reconhece?',
    subtitle:
      'Começar um negócio em outro país já é desafio demais. O marketing não precisa ser mais um.',
    list: [
      'Você impulsiona post, gasta com anúncio, mas o cliente não aparece.',
      'Tem audiência ou movimento, mas isso não vira venda de verdade.',
      'A concorrência local está na frente e você não sabe como se destacar num país novo.',
      'Depende só do orgânico e sente que travou o crescimento.',
      'Ninguém te explicou como rodar Meta e Google Ads direito no seu país.',
      'Você quer alguém que fale a sua língua e entenda a realidade de quem empreende fora.',
    ],
    closing: 'Se marcou pelo menos uma, eu posso te ajudar. 👇',
  },
  services: {
    title: 'Como eu trago mais clientes pra você',
    subtitle:
      'O sistema completo para atrair, converter e medir — adaptado para quem empreende fora do Brasil.',
    footerHtml:
      'Atendo <strong>qualquer segmento</strong> — restaurante, estética, serviços, loja online, infoproduto — e o que o seu negócio precisar.',
    items: [
      { title: 'Tráfego & Estratégia', description: 'Anúncios geolocalizados para loja local e campanhas de captação para afiliados, experts e influencers. Cada euro guiado por estratégia e dados.' },
      { title: 'IA no WhatsApp', description: 'Atendimento que responde em segundos, 24/7, mesmo com a diferença de fuso. A IA qualifica o lead do seu anúncio ou da sua audiência e não deixa oportunidade sem resposta.' },
      { title: 'Criação de Dashboard', description: 'Enxergue em tempo real o que traz cliente e pare de decidir no escuro. Tráfego, contatos e vendas num painel só — sem planilha confusa.' },
      { title: 'Consultoria', description: 'Um plano claro para crescer no mercado europeu. Analiso seu posicionamento, funil e canais e entrego o caminho focado em resultado.' },
    ],
  },
  authority: {
    title: 'Por que comigo',
    subtitle: 'Mais de 40 negócios escalados. O que me diferencia é como eu trabalho.',
    items: [
      { title: 'Em português', text: 'Você fala com alguém que entende a sua realidade de brasileiro empreendendo fora.' },
      { title: '100% remoto', text: 'Trabalho com você em qualquer país, respeitando o seu fuso. Sem deslocamento.' },
      { title: 'Orientado a dados', text: 'Cada euro investido é medido no dashboard. Nada de achismo, tudo em números.' },
      { title: 'IA no atendimento', text: 'Automação que responde e qualifica os seus leads 24/7, mesmo offline.' },
    ],
  },
  how: {
    title: 'Como funciona',
    subtitle: 'Simples, direto e sem compromisso. Você começa hoje mesmo.',
    steps: [
      { title: 'Fale no WhatsApp', text: 'Você me chama e conta rapidinho sobre o seu negócio e onde você está.' },
      { title: 'Análise gratuita', text: 'Eu analiso o seu cenário e aponto as melhores oportunidades para atrair mais clientes.' },
      { title: 'Plano e execução', text: 'Montamos a estratégia e eu coloco tráfego, funil e IA para rodar — tudo remoto.' },
      { title: 'Resultados medidos', text: 'Você acompanha cada contato e venda no dashboard, em tempo real.' },
    ],
  },
  proof: {
    title: 'Resultados reais de quem confiou no meu trabalho',
    metrics: [
      { value: '+40', label: 'Negócios escalados' },
      { value: '3x', label: 'ROI médio em tráfego' },
      { value: '4.9★', label: 'Avaliação média' },
    ],
    testimonials: [
      { quote: 'Transformou completamente nossos resultados. Aumentamos as vendas de forma consistente com a gestão de tráfego.', segment: 'Loja de smartphones' },
      { quote: 'O atendimento por IA 24/7 não deixa cliente sem resposta, mesmo com a diferença de horário. Fez toda a diferença.', segment: 'Serviços' },
    ],
    logosCaption: 'Marcas e negócios que já confiaram',
  },
  faq: {
    badge: 'Perguntas Frequentes',
    title: 'Ainda com dúvidas?',
    items: [
      { question: 'Você atende brasileiros em quais países?', answer: 'Atendo brasileiros que empreendem em Portugal (Lisboa, Porto), Irlanda (Dublin), Espanha (Barcelona, Madri), Reino Unido (Londres) e em qualquer outro país. Como o trabalho é 100% remoto, a sua localização não é limitação.' },
      { question: 'O atendimento é remoto mesmo? Como funciona com o fuso horário?', answer: 'Sim, tudo é feito de forma remota, por WhatsApp e videochamada. Combinamos os horários de conversa respeitando o seu fuso, e a execução das campanhas e automações roda de forma contínua, independentemente do horário.' },
      { question: 'Você atende influenciadores, experts e afiliados?', answer: 'Sim. Trabalho com influenciadores, criadores de conteúdo, experts, mentores e afiliados de qualquer nicho, montando a estratégia, o funil, o tráfego e a copy para transformar audiência e autoridade em clientes e vendas reais.' },
      { question: 'Atende loja física e negócio local também?', answer: 'Com certeza. Para lojas e negócios locais eu uso anúncios geolocalizados, que mostram o seu negócio para quem está na sua cidade ou bairro — tanto a comunidade brasileira quanto o público local do seu país.' },
      { question: 'Preciso estar no Brasil ou ter CNPJ brasileiro?', answer: 'Não. Trabalho com o seu negócio onde ele estiver. O que importa é entender o seu público e o mercado em que você atua para montar a estratégia certa.' },
      { question: 'Em qual idioma é o atendimento?', answer: 'Todo o atendimento e a estratégia são em português. Você conversa com alguém que entende a realidade de quem empreende fora do Brasil, sem barreira de idioma.' },
      { question: 'Como funciona o investimento e o pagamento?', answer: 'Cada negócio tem necessidades diferentes, então não trabalho com pacote genérico. Na análise gratuita eu entendo o seu cenário e apresento uma proposta compatível com o escopo real do projeto. As formas de pagamento combinamos conforme o seu país.' },
      { question: 'A análise gratuita tem compromisso?', answer: 'Nenhum. A primeira conversa serve para eu entender o seu negócio e mostrar os caminhos possíveis. Você decide se faz sentido seguir, sem obrigação de contratar.' },
    ],
  },
  cta: {
    title: 'Pronto para atrair mais clientes na Europa?',
    subtext: 'Chame agora no WhatsApp e receba a sua análise gratuita. Em português, 100% remoto e sem compromisso.',
    button: 'Quero minha análise gratuita',
    microcopy: '⚡ Resposta em minutos, direto no seu WhatsApp',
  },
  footer: {
    tagline: 'Marketing digital para brasileiros que empreendem na Europa — tráfego, estratégia, IA e dashboards, em português e 100% remoto.',
    privacy: 'Política de Privacidade',
    mainSite: 'Site principal',
    rights: 'Todos os direitos reservados.',
  },
  wa: {
    default: 'Olá! Tenho um negócio na Europa e quero uma análise gratuita de marketing para atrair mais clientes.',
    empresa: 'Olá! Tenho uma empresa na Europa e quero escalar com tráfego, estratégia e IA. Pode fazer minha análise gratuita?',
    'loja-local': 'Olá! Tenho uma loja/negócio local na Europa e quero atrair mais clientes da minha cidade. Pode me ajudar?',
    afiliado: 'Olá! Sou afiliado e quero estruturar funil e tráfego para vender mais. Pode fazer minha análise gratuita?',
    expert: 'Olá! Sou expert/mentor e quero transformar minha autoridade em mais alunos e clientes. Podemos conversar?',
    influencer: 'Olá! Sou influenciador(a)/criador(a) de conteúdo e quero transformar minha audiência em vendas. Pode me ajudar?',
  },
}

// ————————————————————————————————————————————————————————————————
// PT-PT (Português de Portugal)
// ————————————————————————————————————————————————————————————————
const ptPT: Dict = {
  meta: {
    title: 'Marketing para o seu negócio na Europa | Multinexo',
    description:
      'Tem um negócio em Portugal, Irlanda, Espanha ou Reino Unido? Atraia mais clientes com tráfego, estratégia e IA — em português e 100% remoto. Análise gratuita.',
  },
  nav: { whatsapp: 'Falar no WhatsApp', whatsappShort: 'WhatsApp', langLabel: 'Idioma' },
  hero: {
    eyebrow: 'Para quem tem negócio na Europa 🇵🇹',
    h1: 'Tem um negócio na Europa e o marketing não acompanha?',
    subheadHtml:
      'Eu trago <strong>mais clientes</strong> para o seu negócio — com tráfego, estratégia e IA. Tudo <strong>em português</strong> e <strong>100% remoto</strong>, onde quer que esteja.',
    publicsHtml:
      'Para <strong>empresas, lojas locais, afiliados, experts e influencers</strong> na Europa.',
    cta: 'Quero a minha análise gratuita',
    microcopy: '⚡ Atendimento em português • Resposta em minutos • Sem compromisso',
    countries: ['🇵🇹 Portugal', '🇮🇪 Irlanda', '🇪🇸 Espanha', '🇬🇧 Reino Unido'],
  },
  audiences: {
    title: 'Para quem eu faço isto',
    subtitle:
      'Seja qual for o seu perfil, eu construo a estratégia certa para atrair mais clientes na Europa.',
    cta: 'Falar sobre o meu caso',
    items: [
      { key: 'empresa', title: 'Empresas', text: 'Cresça com tráfego, IA e decisões baseadas em dados — não em palpites.' },
      { key: 'loja-local', title: 'Lojas e negócios locais', text: 'Atraia clientes da sua cidade ou zona com anúncios geolocalizados.' },
      { key: 'afiliado', title: 'Afiliados', text: 'Funil e tráfego para vender mais e aumentar as suas comissões.' },
      { key: 'expert', title: 'Experts e mentores', text: 'Transforme a sua autoridade em mais alunos e clientes.' },
      { key: 'influencer', title: 'Influencers e criadores', text: 'Transforme a sua audiência em vendas reais, com estratégia e funil.' },
    ],
    other: {
      title: 'É outro segmento?',
      text: 'Restaurante, estética, serviços, loja online, infoproduto… faço o que o seu negócio precisar.',
      cta: 'Conte-me o seu caso',
    },
  },
  pains: {
    title: 'Revê-se nisto?',
    subtitle:
      'Começar um negócio noutro país já é desafio suficiente. O marketing não precisa de ser mais um.',
    list: [
      'Faz publicações, gasta em anúncios, mas o cliente não aparece.',
      'Tem audiência ou movimento, mas isso não se transforma em vendas.',
      'A concorrência local está à frente e não sabe como se destacar num país novo.',
      'Depende só do orgânico e sente que o crescimento estagnou.',
      'Ninguém lhe explicou como gerir o Meta e o Google Ads como deve ser no seu país.',
      'Quer alguém que fale a sua língua e perceba a realidade de quem empreende fora.',
    ],
    closing: 'Se marcou pelo menos uma, eu posso ajudar. 👇',
  },
  services: {
    title: 'Como eu trago mais clientes para si',
    subtitle:
      'O sistema completo para atrair, converter e medir — adaptado a quem empreende na Europa.',
    footerHtml:
      'Trabalho com <strong>qualquer segmento</strong> — restaurante, estética, serviços, loja online, infoproduto — e o que o seu negócio precisar.',
    items: [
      { title: 'Tráfego & Estratégia', description: 'Anúncios geolocalizados para lojas locais e campanhas de captação para afiliados, experts e influencers. Cada euro guiado por estratégia e dados.' },
      { title: 'IA no WhatsApp', description: 'Atendimento que responde em segundos, 24/7, mesmo com a diferença de fuso. A IA qualifica o lead do seu anúncio ou da sua audiência e não deixa nenhuma oportunidade sem resposta.' },
      { title: 'Criação de Dashboard', description: 'Veja em tempo real o que traz clientes e deixe de decidir às escuras. Tráfego, contactos e vendas num só painel — sem folhas de cálculo confusas.' },
      { title: 'Consultoria', description: 'Um plano claro para crescer no mercado europeu. Analiso o seu posicionamento, funil e canais e entrego o caminho focado em resultados.' },
    ],
  },
  authority: {
    title: 'Porquê comigo',
    subtitle: 'Mais de 40 negócios escalados. O que me distingue é a forma como trabalho.',
    items: [
      { title: 'Em português', text: 'Fala com alguém que percebe a sua realidade de quem empreende fora.' },
      { title: '100% remoto', text: 'Trabalho consigo em qualquer país, respeitando o seu fuso. Sem deslocações.' },
      { title: 'Orientado a dados', text: 'Cada euro investido é medido no dashboard. Nada de palpites, tudo em números.' },
      { title: 'IA no atendimento', text: 'Automação que responde e qualifica os seus leads 24/7, mesmo offline.' },
    ],
  },
  how: {
    title: 'Como funciona',
    subtitle: 'Simples, direto e sem compromisso. Começa hoje mesmo.',
    steps: [
      { title: 'Fale no WhatsApp', text: 'Envie-me uma mensagem e conte-me um pouco sobre o seu negócio e onde está.' },
      { title: 'Análise gratuita', text: 'Analiso o seu cenário e aponto as melhores oportunidades para atrair mais clientes.' },
      { title: 'Plano e execução', text: 'Definimos a estratégia e eu ponho tráfego, funil e IA a funcionar — tudo remoto.' },
      { title: 'Resultados medidos', text: 'Acompanha cada contacto e venda no dashboard, em tempo real.' },
    ],
  },
  proof: {
    title: 'Resultados reais de quem confiou no meu trabalho',
    metrics: [
      { value: '+40', label: 'Negócios escalados' },
      { value: '3x', label: 'ROI médio em tráfego' },
      { value: '4.9★', label: 'Avaliação média' },
    ],
    testimonials: [
      { quote: 'Transformou completamente os nossos resultados. Aumentámos as vendas de forma consistente com a gestão de tráfego.', segment: 'Loja de smartphones' },
      { quote: 'O atendimento com IA 24/7 não deixa nenhum cliente sem resposta, mesmo com a diferença de horário. Fez toda a diferença.', segment: 'Serviços' },
    ],
    logosCaption: 'Marcas e negócios que já confiaram',
  },
  faq: {
    badge: 'Perguntas Frequentes',
    title: 'Ainda com dúvidas?',
    items: [
      { question: 'Atende clientes em que países?', answer: 'Trabalho com negócios em Portugal (Lisboa, Porto), Irlanda (Dublin), Espanha (Barcelona, Madrid), Reino Unido (Londres) e em qualquer outro país. Como o trabalho é 100% remoto, a sua localização não é limitação.' },
      { question: 'O atendimento é mesmo remoto? Como funciona com o fuso horário?', answer: 'Sim, tudo é feito de forma remota, por WhatsApp e videochamada. Combinamos os horários respeitando o seu fuso, e a execução das campanhas e automações funciona de forma contínua, independentemente da hora.' },
      { question: 'Atende influencers, experts e afiliados?', answer: 'Sim. Trabalho com influencers, criadores de conteúdo, experts, mentores e afiliados de qualquer nicho, construindo a estratégia, o funil, o tráfego e a copy para transformar audiência e autoridade em clientes e vendas reais.' },
      { question: 'Também atende loja física e negócio local?', answer: 'Sem dúvida. Para lojas e negócios locais uso anúncios geolocalizados, que mostram o seu negócio a quem está na sua cidade ou zona — tanto a comunidade portuguesa como o público local.' },
      { question: 'Preciso de ter sede ou empresa registada em Portugal?', answer: 'Não. Trabalho com o seu negócio onde ele estiver. O que importa é perceber o seu público e o mercado em que atua para construir a estratégia certa.' },
      { question: 'Em que idioma é o atendimento?', answer: 'Todo o atendimento e a estratégia são em português. Fala com alguém que percebe a realidade de quem empreende na Europa, sem barreira de idioma.' },
      { question: 'Como funciona o investimento e o pagamento?', answer: 'Cada negócio tem necessidades diferentes, por isso não trabalho com pacotes genéricos. Na análise gratuita percebo o seu cenário e apresento uma proposta adequada ao âmbito real do projeto. As formas de pagamento combinamos conforme o seu país.' },
      { question: 'A análise gratuita tem compromisso?', answer: 'Nenhum. A primeira conversa serve para eu perceber o seu negócio e mostrar os caminhos possíveis. Decide se faz sentido avançar, sem obrigação de contratar.' },
    ],
  },
  cta: {
    title: 'Pronto para atrair mais clientes na Europa?',
    subtext: 'Fale agora no WhatsApp e receba a sua análise gratuita. Em português, 100% remoto e sem compromisso.',
    button: 'Quero a minha análise gratuita',
    microcopy: '⚡ Resposta em minutos, diretamente no seu WhatsApp',
  },
  footer: {
    tagline: 'Marketing digital para quem empreende na Europa — tráfego, estratégia, IA e dashboards, em português e 100% remoto.',
    privacy: 'Política de Privacidade',
    mainSite: 'Site principal',
    rights: 'Todos os direitos reservados.',
  },
  wa: {
    default: 'Olá! Tenho um negócio na Europa e gostaria de uma análise gratuita de marketing para atrair mais clientes.',
    empresa: 'Olá! Tenho uma empresa na Europa e quero crescer com tráfego, estratégia e IA. Pode fazer a minha análise gratuita?',
    'loja-local': 'Olá! Tenho uma loja/negócio local na Europa e quero atrair mais clientes da minha zona. Pode ajudar?',
    afiliado: 'Olá! Sou afiliado e quero estruturar funil e tráfego para vender mais. Pode fazer a minha análise gratuita?',
    expert: 'Olá! Sou expert/mentor e quero transformar a minha autoridade em mais alunos e clientes. Podemos falar?',
    influencer: 'Olá! Sou influencer/criador(a) de conteúdo e quero transformar a minha audiência em vendas. Pode ajudar?',
  },
}

// ————————————————————————————————————————————————————————————————
// EN (Inglês — Irlanda)
// ————————————————————————————————————————————————————————————————
const en: Dict = {
  meta: {
    title: 'Marketing for businesses in Europe | Multinexo',
    description:
      'Running a business in Ireland, Portugal, Spain or the UK? Win more clients with paid traffic, strategy and AI — fully remote. Free analysis.',
  },
  nav: { whatsapp: 'Chat on WhatsApp', whatsappShort: 'WhatsApp', langLabel: 'Language' },
  hero: {
    eyebrow: 'For business owners in Europe 🇮🇪',
    h1: 'Running a business in Europe and your marketing can’t keep up?',
    subheadHtml:
      'I bring <strong>more clients</strong> to your business — with paid traffic, strategy and AI. <strong>100% remote</strong>, wherever you are.',
    publicsHtml:
      'For <strong>companies, local stores, affiliates, experts and influencers</strong> across Europe.',
    cta: 'Get my free analysis',
    microcopy: '⚡ Fast replies • Free analysis • No commitment',
    countries: ['🇮🇪 Ireland', '🇵🇹 Portugal', '🇪🇸 Spain', '🇬🇧 United Kingdom'],
  },
  audiences: {
    title: 'Who I do this for',
    subtitle: 'Whatever your profile, I build the right strategy to win you more clients in Europe.',
    cta: 'Tell me about my case',
    items: [
      { key: 'empresa', title: 'Companies', text: 'Scale with paid traffic, AI and data-driven decisions — not guesswork.' },
      { key: 'loja-local', title: 'Local stores & businesses', text: 'Attract customers in your city or area with geo-targeted ads.' },
      { key: 'afiliado', title: 'Affiliates', text: 'Funnel and traffic to sell more and grow your commissions.' },
      { key: 'expert', title: 'Experts & mentors', text: 'Turn your authority into more students and clients.' },
      { key: 'influencer', title: 'Influencers & creators', text: 'Turn your audience into real sales, with strategy and a funnel.' },
    ],
    other: {
      title: 'A different niche?',
      text: 'Restaurant, beauty, services, online store, info-products… I handle whatever your business needs.',
      cta: 'Tell me your case',
    },
  },
  pains: {
    title: 'Does this sound like you?',
    subtitle: 'Starting a business in another country is hard enough. Marketing shouldn’t be one more problem.',
    list: [
      'You boost posts and spend on ads, but the clients don’t show up.',
      'You have an audience or foot traffic, but it doesn’t turn into real sales.',
      'Local competitors are ahead and you don’t know how to stand out in a new country.',
      'You rely only on organic reach and feel your growth has stalled.',
      'No one has shown you how to run Meta and Google Ads properly in your country.',
      'You want someone who speaks your language and gets the reality of running a business abroad.',
    ],
    closing: 'If at least one of these fits, I can help. 👇',
  },
  services: {
    title: 'How I bring you more clients',
    subtitle: 'The complete system to attract, convert and measure — built for business owners in Europe.',
    footerHtml:
      'I work with <strong>any niche</strong> — restaurant, beauty, services, online store, info-products — and whatever your business needs.',
    items: [
      { title: 'Traffic & Strategy', description: 'Geo-targeted ads for local stores and lead-generation campaigns for affiliates, experts and influencers. Every euro guided by strategy and data.' },
      { title: 'AI on WhatsApp', description: 'Support that replies in seconds, 24/7, even across time zones. The AI qualifies leads from your ads or audience and never leaves an opportunity unanswered.' },
      { title: 'Dashboard Creation', description: 'See in real time what brings clients and stop deciding in the dark. Traffic, contacts and sales in a single panel — no messy spreadsheets.' },
      { title: 'Consulting', description: 'A clear plan to grow in the European market. I analyse your positioning, funnel and channels and deliver a results-focused path.' },
    ],
  },
  authority: {
    title: 'Why me',
    subtitle: 'Over 40 businesses scaled. What sets me apart is how I work.',
    items: [
      { title: 'Your language', text: 'You talk to someone who understands the reality of running a business abroad.' },
      { title: '100% remote', text: 'I work with you in any country, respecting your time zone. No travel needed.' },
      { title: 'Data-driven', text: 'Every euro invested is measured in the dashboard. No guesswork, just numbers.' },
      { title: 'AI support', text: 'Automation that answers and qualifies your leads 24/7, even when you’re offline.' },
    ],
  },
  how: {
    title: 'How it works',
    subtitle: 'Simple, direct and no commitment. You can start today.',
    steps: [
      { title: 'Message on WhatsApp', text: 'Send me a message and tell me quickly about your business and where you are.' },
      { title: 'Free analysis', text: 'I analyse your situation and point out the best opportunities to win more clients.' },
      { title: 'Plan & execution', text: 'We set the strategy and I put traffic, funnel and AI to work — all remote.' },
      { title: 'Measured results', text: 'You track every contact and sale in the dashboard, in real time.' },
    ],
  },
  proof: {
    title: 'Real results from people who trusted my work',
    metrics: [
      { value: '+40', label: 'Businesses scaled' },
      { value: '3x', label: 'Average traffic ROI' },
      { value: '4.9★', label: 'Average rating' },
    ],
    testimonials: [
      { quote: 'It completely transformed our results. We grew sales consistently with the traffic management.', segment: 'Smartphone store' },
      { quote: 'The 24/7 AI support leaves no client without an answer, even across time zones. It made all the difference.', segment: 'Services' },
    ],
    logosCaption: 'Brands and businesses that already trusted me',
  },
  faq: {
    badge: 'FAQ',
    title: 'Still have questions?',
    items: [
      { question: 'Which countries do you work with?', answer: 'I work with businesses in Ireland (Dublin), Portugal (Lisbon, Porto), Spain (Barcelona, Madrid), the UK (London) and any other country. Since the work is 100% remote, your location is not a limitation.' },
      { question: 'Is it really remote? How does it work with time zones?', answer: 'Yes, everything is done remotely, via WhatsApp and video calls. We agree on call times that respect your time zone, and the campaigns and automations run continuously, regardless of the hour.' },
      { question: 'Do you work with influencers, experts and affiliates?', answer: 'Yes. I work with influencers, content creators, experts, mentors and affiliates in any niche, building the strategy, funnel, traffic and copy to turn audience and authority into real clients and sales.' },
      { question: 'Do you also work with physical and local stores?', answer: 'Absolutely. For local stores and businesses I use geo-targeted ads that show your business to people in your city or area — both the local market and any community you serve.' },
      { question: 'Do I need to be based in a specific country or have a local company?', answer: 'No. I work with your business wherever it is. What matters is understanding your audience and your market to build the right strategy.' },
      { question: 'What language is the service in?', answer: 'I serve clients in English and Portuguese. You talk to someone who understands the reality of running a business abroad, with no language barrier.' },
      { question: 'How do pricing and payment work?', answer: 'Every business has different needs, so I don’t work with generic packages. In the free analysis I understand your situation and present a proposal that matches the real scope of the project. Payment methods are arranged according to your country.' },
      { question: 'Is the free analysis any commitment?', answer: 'None. The first conversation is for me to understand your business and show the possible paths. You decide whether it makes sense to move forward, with no obligation to hire.' },
    ],
  },
  cta: {
    title: 'Ready to win more clients in Europe?',
    subtext: 'Message me on WhatsApp now and get your free analysis. Fully remote and no commitment.',
    button: 'Get my free analysis',
    microcopy: '⚡ Fast replies, straight to your WhatsApp',
  },
  footer: {
    tagline: 'Digital marketing for business owners in Europe — traffic, strategy, AI and dashboards, fully remote.',
    privacy: 'Privacy Policy',
    mainSite: 'Main site',
    rights: 'All rights reserved.',
  },
  wa: {
    default: 'Hi! I run a business in Europe and I’d like a free marketing analysis to win more clients.',
    empresa: 'Hi! I run a company in Europe and want to scale with traffic, strategy and AI. Can you do my free analysis?',
    'loja-local': 'Hi! I have a local store/business in Europe and want to attract more customers in my area. Can you help?',
    afiliado: 'Hi! I’m an affiliate and want to set up a funnel and traffic to sell more. Can you do my free analysis?',
    expert: 'Hi! I’m an expert/mentor and want to turn my authority into more students and clients. Can we talk?',
    influencer: 'Hi! I’m an influencer/content creator and want to turn my audience into sales. Can you help?',
  },
}

export const DICT: Record<Locale, Dict> = { 'pt-BR': ptBR, 'pt-PT': ptPT, en }

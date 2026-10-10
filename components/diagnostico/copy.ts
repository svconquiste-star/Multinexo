import type { Locale } from '@/components/lp/i18n'
import type { JaAnuncia, Segmento, Urgencia } from './config'

export interface Copy {
  htmlLang: string
  role: string
  title: string
  subtitle: string
  step: (n: number) => string
  fields: {
    nome: string
    empresa: string
    empresaPh: string
    cidade: string
    cidadePh: string
    segmento: string
    segmentoPh: string
    segmentoOutro: string
    segmentoOutroPh: string
    jaAnuncia: string
    verba: string
    verbaHint: string
    urgencia: string
  }
  segmentos: Record<Segmento, string>
  jaAnuncia: Record<JaAnuncia, string>
  urgencia: Record<Urgencia, string>
  verba: {
    below: (max: string) => string
    range: (lo: string, hi: string) => string
    over: (lo: string) => string
    unknown: string
  }
  buttons: {
    next: string
    back: string
    submit: string
    confirm: string
    continueUnknown: string
    whatsapp: string
  }
  consent: { before: string; link: string; after: string }
  errors: {
    nome: string
    empresa: string
    cidade: string
    segmento: string
    segmentoOutro: string
    step2: string
    consent: string
  }
  qualified: { title: (nome: string) => string; text: string }
  review: { title: string; text: (min: string) => string }
  unqualified: {
    title: string
    textVerba: (min: string) => string
    textUrgencia: (min: string) => string
    follow: string
    followCta: string
  }
  wa: {
    greeting: string
    nome: string
    empresa: string
    cidade: string
    segmento: string
    jaAnuncia: string
    verba: string
    inicio: string
    mercado: string
    origem: string
  }
  footer: { privacy: string; rights: string }
}

const ptBR: Copy = {
  htmlLang: 'pt-BR',
  role: 'Estrategista de Marketing Digital',
  title: 'Diagnóstico gratuito do seu tráfego',
  subtitle:
    'Responda 2 etapas rápidas (cerca de 1 minuto). Se fizer sentido, você fala direto comigo no WhatsApp.',
  step: (n) => `Etapa ${n} de 2`,
  fields: {
    nome: 'Primeiro nome',
    empresa: 'Empresa',
    empresaPh: 'Ex.: Studio Bella',
    cidade: 'Cidade',
    cidadePh: 'Ex.: Lisboa',
    segmento: 'Segmento',
    segmentoPh: 'Selecione',
    segmentoOutro: 'Qual é o seu segmento?',
    segmentoOutroPh: 'Ex.: Fotografia, mecânica, eventos…',
    jaAnuncia: 'Você já anuncia?',
    verba: 'Quanto pretende investir por mês em anúncios?',
    verbaHint: 'Só o valor dos anúncios, sem contar a gestão.',
    urgencia: 'Quando quer começar?',
  },
  segmentos: {
    limpeza: 'Limpeza',
    reforma: 'Reforma e construção',
    pintura: 'Pintura',
    estetica: 'Estética e beleza',
    saude: 'Saúde e clínica',
    advocacia: 'Advocacia e contabilidade',
    loja: 'Loja ou e-commerce',
    expert: 'Expert, afiliado ou influencer',
    outro: 'Outro',
  },
  jaAnuncia: {
    nao: 'Não',
    impulsiono: 'Só impulsiono posts',
    meta_google: 'Uso Meta ou Google Ads',
    agencia: 'Já tive agência',
  },
  urgencia: { agora: 'Agora', '30d': 'Em até 30 dias', pesquisando: 'Só estou pesquisando' },
  verba: {
    below: (max) => `Menos de ${max}`,
    range: (lo, hi) => `De ${lo} a ${hi}`,
    over: (lo) => `Mais de ${lo}`,
    unknown: 'Ainda não sei',
  },
  buttons: {
    next: 'Continuar',
    back: 'Voltar',
    submit: 'Ver meu resultado',
    confirm: 'Continuar',
    continueUnknown: 'Continuar sem saber',
    whatsapp: 'Falar com o Daniel no WhatsApp',
  },
  consent: {
    before: 'Concordo em ser contatado por WhatsApp e com a ',
    link: 'Política de Privacidade',
    after: '.',
  },
  errors: {
    nome: 'Informe o seu primeiro nome.',
    empresa: 'Informe o nome da empresa.',
    cidade: 'Informe a cidade.',
    segmento: 'Escolha o segmento.',
    segmentoOutro: 'Escreva qual é o seu segmento.',
    step2: 'Responda todas as perguntas para continuar.',
    consent: 'Para continuar, é preciso concordar com o contato e a política.',
  },
  qualified: {
    title: (nome) => `Perfil compatível, ${nome}! Vamos conversar.`,
    text: 'Suas respostas já vão junto na mensagem, então você não precisa repetir nada. É só tocar no botão abaixo.',
  },
  review: {
    title: 'Uma última dúvida sobre o investimento',
    text: (min) =>
      `Para o meu trabalho fazer sentido, o investimento mínimo em anúncios é de ${min} por mês (sem contar a gestão). Escolha a faixa mais próxima do que você pode investir.`,
  },
  unqualified: {
    title: 'Obrigado pelas respostas!',
    textVerba: (min) =>
      `No momento, o meu trabalho funciona melhor a partir de ${min} por mês em anúncios (sem contar a gestão), e esse ainda não é o seu cenário. Quando fizer sentido, vai ser um prazer ajudar.`,
    textUrgencia: (min) =>
      `Como você está só pesquisando por enquanto, ainda não é a hora de conversarmos. Para referência, o investimento mínimo em anúncios é de ${min} por mês (sem contar a gestão). Quando decidir começar, é só voltar aqui.`,
    follow: 'Enquanto isso, acompanhe dicas de tráfego e marketing no Instagram.',
    followCta: 'Seguir @daguiar.ai',
  },
  wa: {
    greeting: 'Olá, Daniel! Fiz o diagnóstico no site.',
    nome: 'Nome',
    empresa: 'Empresa',
    cidade: 'Cidade',
    segmento: 'Segmento',
    jaAnuncia: 'Já anuncia',
    verba: 'Verba mensal',
    inicio: 'Início',
    mercado: 'Mercado',
    origem: 'Origem',
  },
  footer: { privacy: 'Política de Privacidade', rights: 'Todos os direitos reservados.' },
}

const ptPT: Copy = {
  ...ptBR,
  htmlLang: 'pt-PT',
  subtitle:
    'Responda a 2 etapas rápidas (cerca de 1 minuto). Se fizer sentido, fala diretamente comigo no WhatsApp.',
  fields: {
    ...ptBR.fields,
    jaAnuncia: 'Já anuncia?',
    verba: 'Quanto pretende investir por mês em anúncios?',
    verbaHint: 'Apenas o valor dos anúncios, sem contar a gestão.',
    urgencia: 'Quando quer começar?',
  },
  segmentos: {
    ...ptBR.segmentos,
    limpeza: 'Limpezas',
    reforma: 'Remodelações e construção',
  },
  jaAnuncia: {
    nao: 'Não',
    impulsiono: 'Só promovo publicações',
    meta_google: 'Utilizo Meta ou Google Ads',
    agencia: 'Já tive agência',
  },
  urgencia: { agora: 'Agora', '30d': 'Nos próximos 30 dias', pesquisando: 'Estou apenas a pesquisar' },
  buttons: { ...ptBR.buttons, submit: 'Ver o meu resultado' },
  consent: {
    before: 'Concordo em ser contactado por WhatsApp e com a ',
    link: 'Política de Privacidade',
    after: '.',
  },
  errors: {
    nome: 'Indique o seu primeiro nome.',
    empresa: 'Indique o nome da empresa.',
    cidade: 'Indique a cidade.',
    segmento: 'Escolha o segmento.',
    segmentoOutro: 'Escreva qual é o seu segmento.',
    step2: 'Responda a todas as perguntas para continuar.',
    consent: 'Para continuar, é necessário concordar com o contacto e a política.',
  },
  qualified: {
    title: (nome) => `Perfil compatível, ${nome}! Vamos falar.`,
    text: 'As suas respostas seguem na mensagem, por isso não precisa de repetir nada. Basta tocar no botão abaixo.',
  },
  review: {
    title: 'Uma última dúvida sobre o investimento',
    text: (min) =>
      `Para o meu trabalho fazer sentido, o investimento mínimo em anúncios é de ${min} por mês (sem contar a gestão). Escolha a faixa mais próxima do que pode investir.`,
  },
  unqualified: {
    title: 'Obrigado pelas respostas!',
    textVerba: (min) =>
      `De momento, o meu trabalho funciona melhor a partir de ${min} por mês em anúncios (sem contar a gestão), e esse ainda não é o seu cenário. Quando fizer sentido, terei todo o gosto em ajudar.`,
    textUrgencia: (min) =>
      `Como está apenas a pesquisar por agora, ainda não é altura de falarmos. Para referência, o investimento mínimo em anúncios é de ${min} por mês (sem contar a gestão). Quando decidir começar, volte aqui.`,
    follow: 'Entretanto, acompanhe dicas de tráfego e marketing no Instagram.',
    followCta: 'Seguir @daguiar.ai',
  },
  wa: { ...ptBR.wa, jaAnuncia: 'Já anuncia', inicio: 'Início' },
}

const en: Copy = {
  htmlLang: 'en',
  role: 'Digital Marketing Strategist',
  title: 'Free diagnostic of your ad traffic',
  subtitle:
    'Answer 2 quick steps (about 1 minute). If it’s a fit, you’ll talk to me directly on WhatsApp.',
  step: (n) => `Step ${n} of 2`,
  fields: {
    nome: 'First name',
    empresa: 'Company',
    empresaPh: 'e.g. Studio Bella',
    cidade: 'City',
    cidadePh: 'e.g. Dublin',
    segmento: 'Industry',
    segmentoPh: 'Select',
    segmentoOutro: 'What is your industry?',
    segmentoOutroPh: 'e.g. Photography, auto repair, events…',
    jaAnuncia: 'Do you already advertise?',
    verba: 'How much do you plan to spend on ads per month?',
    verbaHint: 'Ad spend only, not including management.',
    urgencia: 'When do you want to start?',
  },
  segmentos: {
    limpeza: 'Cleaning',
    reforma: 'Renovation & construction',
    pintura: 'Painting',
    estetica: 'Beauty & aesthetics',
    saude: 'Health & clinic',
    advocacia: 'Law & accounting',
    loja: 'Store or e-commerce',
    expert: 'Expert, affiliate or influencer',
    outro: 'Other',
  },
  jaAnuncia: {
    nao: 'No',
    impulsiono: 'I only boost posts',
    meta_google: 'I use Meta or Google Ads',
    agencia: 'I’ve used an agency',
  },
  urgencia: { agora: 'Now', '30d': 'Within 30 days', pesquisando: 'Just researching' },
  verba: {
    below: (max) => `Under ${max}`,
    range: (lo, hi) => `${lo} to ${hi}`,
    over: (lo) => `Over ${lo}`,
    unknown: 'Not sure yet',
  },
  buttons: {
    next: 'Continue',
    back: 'Back',
    submit: 'See my result',
    confirm: 'Continue',
    continueUnknown: 'Continue without choosing',
    whatsapp: 'Chat with Daniel on WhatsApp',
  },
  consent: {
    before: 'I agree to be contacted via WhatsApp and to the ',
    link: 'Privacy Policy',
    after: ' (available in Portuguese).',
  },
  errors: {
    nome: 'Please enter your first name.',
    empresa: 'Please enter your company name.',
    cidade: 'Please enter your city.',
    segmento: 'Please choose an industry.',
    segmentoOutro: 'Please write your industry.',
    step2: 'Please answer every question to continue.',
    consent: 'To continue, you need to agree to be contacted and to the policy.',
  },
  qualified: {
    title: (nome) => `Good fit, ${nome}! Let’s talk.`,
    text: 'Your answers are included in the message, so you don’t need to repeat anything. Just tap the button below.',
  },
  review: {
    title: 'One last question about budget',
    text: (min) =>
      `For my work to make sense, the minimum ad spend is ${min} per month (not including management). Pick the range closest to what you can invest.`,
  },
  unqualified: {
    title: 'Thanks for your answers!',
    textVerba: (min) =>
      `Right now my work fits best from ${min} per month in ads (not including management), and that isn’t your situation yet. When it makes sense, I’ll be glad to help.`,
    textUrgencia: (min) =>
      `Since you’re only researching for now, it’s not the right time to talk yet. For reference, the minimum ad spend is ${min} per month (not including management). When you decide to start, come back anytime.`,
    follow: 'In the meantime, follow tips on ad traffic and marketing on Instagram.',
    followCta: 'Follow @daguiar.ai',
  },
  wa: {
    greeting: 'Hi Daniel! I just completed the diagnostic on your site.',
    nome: 'Name',
    empresa: 'Company',
    cidade: 'City',
    segmento: 'Industry',
    jaAnuncia: 'Already advertising',
    verba: 'Monthly ad budget',
    inicio: 'Start',
    mercado: 'Market',
    origem: 'Source',
  },
  footer: { privacy: 'Privacy Policy', rights: 'All rights reserved.' },
}

export const COPY: Record<Locale, Copy> = { 'pt-BR': ptBR, 'pt-PT': ptPT, en }

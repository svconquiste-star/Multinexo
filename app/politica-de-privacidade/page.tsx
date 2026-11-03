import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Multinexo',
  description: 'Política de Privacidade e proteção de dados pessoais (LGPD e GDPR).',
  alternates: {
    canonical: '/politica-de-privacidade',
  },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Política de Privacidade</h1>
          <p className="text-sm text-gray-500 mb-6">Última atualização: 3 de novembro de 2026.</p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Esta Política de Privacidade descreve como a Multinexo ("nós") coleta, utiliza, armazena e
            compartilha dados pessoais quando você utiliza este site, inclusive o formulário de diagnóstico.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Quem somos</h2>
              <p className="text-gray-700 leading-relaxed">
                Controlador: Multinexo, marca sob a qual Daniel Aguiar presta serviços de marketing digital e
                tráfego pago, com atuação em Betim, Minas Gerais, Brasil. Contato: contato@multinexo.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Dados que podemos coletar</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Podemos coletar, conforme aplicável:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dados que você nos envia ao entrar em contato (ex.: nome, e-mail, telefone).</li>
                <li>
                  Respostas do formulário de diagnóstico: primeiro nome, empresa e cidade, segmento, se já
                  anuncia, faixa de investimento mensal em anúncios e prazo para começar.
                </li>
                <li>
                  Dados do formulário de contato do site: nome, telefone, empresa, área da empresa, serviços de
                  interesse e a descrição do problema e da solução que você busca.
                </li>
                <li>Dados de navegação e uso (ex.: páginas visitadas, data e hora, cliques).</li>
                <li>
                  Dados técnicos (ex.: endereço IP, dispositivo, navegador, cookies) e a origem do clique no
                  anúncio (parâmetros de campanha, como utm_campaign).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Formulário de diagnóstico (página /diagnostico)</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Você só preenche o necessário para avaliarmos se o serviço faz sentido para o seu negócio. Não
                  pedimos telefone, e-mail, CPF nem documentos.
                </li>
                <li>
                  As respostas ficam no seu navegador durante o preenchimento. O site não as guarda em servidor
                  próprio.
                </li>
                <li>
                  Se o seu perfil for compatível, você pode abrir uma conversa por WhatsApp com as respostas já
                  escritas na mensagem. Esse envio é iniciado por você, a partir do seu número, e a conversa
                  também segue os termos e a política do próprio WhatsApp.
                </li>
                <li>
                  Para medir o desempenho dos anúncios, enviamos à Meta (Pixel) e ao Google (Analytics) apenas
                  eventos com categorias e faixas (por exemplo: mercado, segmento, faixa de investimento e
                  prazo). Nome, empresa e textos livres não são enviados a essas ferramentas.
                </li>
                <li>
                  Ao marcar a caixa do formulário, você consente em ser contatado por WhatsApp e com esta
                  política. Você pode retirar o consentimento a qualquer momento pelos contatos abaixo.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Formulário de contato do site</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Ao clicar nos botões de WhatsApp da página inicial e dos cases, você preenche um formulário
                  com nome, telefone, empresa, área da empresa, serviços de interesse e uma descrição do seu
                  cenário. Esses dados são gravados em um banco de dados do nosso servidor.
                </li>
                <li>
                  Usamos esses dados para entrar em contato com você, por WhatsApp ou telefone, e dar andamento ao
                  atendimento, caso você não inicie a conversa. Em seguida, o site abre o WhatsApp com os mesmos
                  dados já escritos na mensagem, e o envio dela é iniciado por você.
                </li>
                <li>
                  Guardamos também a origem do clique (página, botão e parâmetros de campanha), o navegador e uma
                  versão codificada (hash) do endereço IP, para segurança e para medir os anúncios.
                </li>
                <li>
                  Mantemos esses dados pelo tempo necessário para o contato comercial e, em regra, por até 12
                  meses, salvo se você pedir antes a eliminação pelos contatos abaixo.
                </li>
                <li>
                  Ao marcar a caixa de autorização do formulário, você consente em ser contatado e com esta
                  política. Você pode retirar o consentimento a qualquer momento.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Como usamos seus dados</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Responder solicitações e contatos.</li>
                <li>Avaliar se o seu perfil é compatível com o serviço e iniciar o atendimento.</li>
                <li>Medir e melhorar o desempenho do site e das campanhas de anúncios.</li>
                <li>Prestar e melhorar nossos serviços.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Bases legais (LGPD e GDPR)</h2>
              <p className="text-gray-700 leading-relaxed">
                No Brasil, tratamos dados pessoais com base na LGPD. Para visitantes da União Europeia e do Reino
                Unido, aplicamos também o GDPR e o UK GDPR. Conforme o caso, as bases são o consentimento (por
                exemplo, no formulário e nos cookies de medição e publicidade), a execução de procedimentos
                preliminares a um contrato, o cumprimento de obrigação legal ou regulatória, o exercício regular
                de direitos e o legítimo interesse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Compartilhamento de dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Podemos compartilhar dados com fornecedores necessários para operar o site e medir campanhas,
                como hospedagem, Meta (Pixel e WhatsApp) e Google (Analytics). Esses provedores tratam os dados
                conforme as próprias políticas e podem armazená-los fora do seu país, o que pode implicar
                transferência internacional de dados.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Também poderemos compartilhar dados para cumprimento de obrigação legal, ordem judicial ou
                requisição de autoridade competente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Cookies e consentimento</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos cookies e tecnologias semelhantes para entender o uso do site e apoiar ações de
                marketing (Meta Pixel e Google Analytics).
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Para visitantes de Portugal, Irlanda, Espanha e Reino Unido, e nas páginas /europa, esses
                  recursos só são ativados depois que você aceita no banner de cookies. Você pode recusar, e a
                  escolha fica salva no seu navegador.
                </li>
                <li>
                  Nas demais regiões, esses recursos podem ser carregados ao acessar o site. Você pode gerenciar
                  ou bloquear cookies nas configurações do seu navegador.
                </li>
                <li>
                  Também podemos usar o Microsoft Clarity, ferramenta que registra como os visitantes navegam
                  (cliques, rolagem e movimentos do mouse) em gravações anônimas e mapas de calor, para melhorar a
                  página. Os campos dos formulários são ocultados e o que você digita não é gravado. Na Europa e no
                  Reino Unido, só é ativado depois que você aceita no banner de cookies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">9. Armazenamento, retenção e segurança</h2>
              <p className="text-gray-700 leading-relaxed">
                Adotamos medidas de segurança para proteger dados pessoais. Mantemos dados somente pelo tempo
                necessário para cumprir as finalidades descritas nesta política, obrigações legais e para
                resguardar direitos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">10. Seus direitos como titular</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Você pode solicitar:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Confirmação de tratamento e acesso.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação (apagamento) de dados desnecessários.</li>
                <li>Limitação do tratamento e oposição a ele, quando aplicável.</li>
                <li>Portabilidade, quando aplicável.</li>
                <li>Informação sobre compartilhamentos.</li>
                <li>Retirada do consentimento a qualquer momento, quando aplicável.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Você também pode apresentar reclamação à autoridade de proteção de dados do seu país (no Brasil,
                a ANPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">11. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Para exercer seus direitos ou tirar dúvidas, entre em contato:
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                E-mail: contato@multinexo.com
                <br />
                WhatsApp: +55 31 99312-1211
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">12. Atualizações desta política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização está
                no topo desta página.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

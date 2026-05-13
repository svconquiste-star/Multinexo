import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Multinexo',
  description: 'Política de Privacidade e proteção de dados pessoais (LGPD).',
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            Esta Política de Privacidade descreve como a Multinexo ("nós") coleta, utiliza, armazena e
            compartilha dados pessoais quando você utiliza este site. Este texto é um modelo e deve ser revisado
            para refletir a realidade do seu negócio.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Quem somos</h2>
              <p className="text-gray-700 leading-relaxed">
                Controlador: Multinexo. Para informações oficiais (razão social, CNPJ e endereço), inclua os
                dados da empresa aqui.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Dados que podemos coletar</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Podemos coletar, conforme aplicável:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dados de contato informados por você (ex.: nome, e-mail, telefone).</li>
                <li>Dados de navegação e uso (ex.: páginas visitadas, data e hora, cliques).</li>
                <li>Dados técnicos (ex.: endereço IP, dispositivo, navegador, cookies).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Como usamos seus dados</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Responder solicitações e contatos.</li>
                <li>Prestar e melhorar nossos serviços.</li>
                <li>Personalizar conteúdos e comunicações, quando aplicável.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Bases legais (LGPD)</h2>
              <p className="text-gray-700 leading-relaxed">
                Tratamos dados pessoais com base, conforme o caso, no consentimento, execução de contrato,
                cumprimento de obrigação legal/regulatória, exercício regular de direitos e/ou legítimo interesse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Compartilhamento de dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Podemos compartilhar dados com fornecedores e parceiros necessários para operação do site e
                prestação do serviço (ex.: hospedagem, analytics, ferramentas de marketing), sempre que aplicável.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Também poderemos compartilhar dados para cumprimento de obrigação legal, ordem judicial ou
                requisição de autoridade competente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Cookies e tecnologias semelhantes</h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies para melhorar a experiência, entender o uso do site e apoiar ações de marketing.
                Você pode gerenciar cookies no seu navegador. Se houver banner/gerenciador de consentimento,
                descreva aqui.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Armazenamento, retenção e segurança</h2>
              <p className="text-gray-700 leading-relaxed">
                Adotamos medidas de segurança para proteger dados pessoais. Mantemos dados somente pelo tempo
                necessário para cumprir as finalidades descritas nesta política, obrigações legais e para resguardar
                direitos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Seus direitos como titular</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Você pode solicitar:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Confirmação de tratamento e acesso.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Portabilidade, quando aplicável.</li>
                <li>Informação sobre compartilhamentos.</li>
                <li>Revogação do consentimento, quando aplicável.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">9. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Para exercer seus direitos ou tirar dúvidas, entre em contato:
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                E-mail: contato@multinexo.com
                <br />
                WhatsApp: +55 31 9312-1211
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">10. Atualizações desta política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta
                página para acompanhar eventuais alterações.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Aviso</h2>
              <p className="text-gray-700 leading-relaxed">
                Este texto é um modelo informativo e não substitui aconselhamento jurídico.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

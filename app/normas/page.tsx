import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Normas de Uso | Multinexo',
  description: 'Normas e condições de uso do site Multinexo.',
}

export default function NormasPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Normas de Uso</h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            Estas normas definem regras básicas de uso deste site. Este texto é um modelo e deve ser revisado
            para refletir as condições do seu negócio.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Aceitação</h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e utilizar este site, você declara que leu e concorda com estas Normas de Uso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Uso permitido</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Utilizar o site para obter informações e entrar em contato com a Multinexo.</li>
                <li>Fornecer informações verdadeiras em formulários e canais de contato.</li>
                <li>Respeitar a legislação vigente e os direitos de terceiros.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Uso proibido</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Praticar atos ilícitos, fraudes ou qualquer conduta que viole a lei.</li>
                <li>Tentar obter acesso não autorizado a sistemas, áreas restritas ou dados.</li>
                <li>Enviar spam, malware, ou realizar varreduras/ataques (ex.: DDoS).</li>
                <li>Copiar, reproduzir ou distribuir conteúdos sem autorização quando aplicável.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Propriedade intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Textos, marcas, logotipos, layouts e demais conteúdos podem ser protegidos por direitos de
                propriedade intelectual. O uso não autorizado pode violar a legislação aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Conteúdos e links de terceiros</h2>
              <p className="text-gray-700 leading-relaxed">
                Este site pode conter links para sites de terceiros. Não nos responsabilizamos por conteúdos,
                políticas ou práticas de privacidade de terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Limitação de responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Na extensão permitida pela lei, não garantimos que o site estará sempre disponível, livre de erros
                ou interrupções. Não nos responsabilizamos por danos decorrentes do uso ou impossibilidade de uso
                do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Alterações</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar estas normas a qualquer momento. Recomendamos revisar esta página
                periodicamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Para dúvidas, entre em contato:
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                E-mail: contato@multinexo.com
                <br />
                WhatsApp: +55 31 9312-1211
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

/** @jsxImportSource @emotion/react */
import { Layout } from 'src/components/organisms/layout'
import { MultipleChoice } from '../molecules/mutipleChoice'

export const Home = () => {
  return (
    <Layout>
      <section>
        <p>A guilda do Open Finance se encontra aqui.</p>
        <h2>Compilado de Informes</h2>
        <MultipleChoice
          items={[
            { label: 'Open Banking (WIP=Work In Progress)', link: '#' },
            { label: 'Open Insurance (WIP)', link: '#' },
          ]}
        />
        <h2>Timeline e eventos</h2>
        <MultipleChoice
          items={[
            { label: 'Open Banking (WIP)', link: '#' },
            { label: 'Open Insurance (WIP)', link: '#' },
          ]}
        />
        <h2>Automação de certificações</h2>
        <MultipleChoice
          items={[
            { label: 'OpenID', link: '/open-finance/openid/certification' },
            { label: 'Open Banking', link: '/open-finance/open-banking/certification' },
            { label: 'Open Insurance (WIP)', link: '#' },
          ]}
        />
        <h2>Sponsors:</h2>
        <p>
          Ajude a manter o site e as ferramentas sendo um patrocinador dos repositórios Open Source.
          Seja um patrocinador clicando <a href="https://github.com/sponsors/adrielcodeco">aqui</a>.
        </p>
      </section>
    </Layout>
  )
}

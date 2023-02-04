/** @jsxImportSource @emotion/react */
import { Layout } from 'src/components/organisms/layout'
import { Highlight, Languages } from '../atoms/highlight'

export const OpenidCert = () => {
  let tag = 1
  return (
    <Layout repo="https://github.com/adrielcodeco/openid-certification-automation">
      <h1>
        <a id="top" href="#top">
          #
        </a>{' '}
        OpenID Certification Automation
      </h1>
      <p>
        Os testes de certificação OpenID são manuais e um pouco cansativo as vezes, pra ajudar a
        reduzir o tempo de teste e para ajudar a eliminar a necessidade de ter alguém rodando os
        testes manualmente, foi criada essa automação.
      </p>
      <p>
        Com essa automação é possível rodar os teste na plataforma de certificação da OpenID{' '}
        <a href="https://certification.openid.net">https://certification.openid.net</a>, rodar os
        testes totalmente local ou em um pipeline como uma etapa de validação de código ou um stage
        ante de subir nos ambientes etc.
      </p>
      <p>
        A automação precisa ser configurada previavemente e pode ser rodada a partir de um container
        docker ou a partir de um script em nodejs.
      </p>
      <p>
        Visite o nosso Github para conhecer melhor o projeto ou interagir com os desenvolvedores
        e/ou outros usuários:{' '}
        <a href="https://github.com/adrielcodeco/openid-certification-automation">
          https://github.com/adrielcodeco/openid-certification-automation
        </a>
      </p>
      <header>
        <h2 id="NavigationList">Atalhos de navegação</h2>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#t1">1. Getting started</a>
          </li>
          <li>
            <a href="#t2">2. Configurando os testes</a>
            <ul>
              <li>
                <a href="#t2_1">2.1 HappyPath Script</a>
              </li>
              <li>
                <a href="#t2_2">2.2 UserReject Script</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#t3">3. Rodando com docker</a>
          </li>
          <li>
            <a href="#t4">4. Rodando com executável</a>
          </li>
          <li>
            <a href="#t5">5. Rodando localmente</a>
          </li>
        </ul>
      </nav>
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Getting started
      </h2>
      <p>Você vai precisar de:</p>
      <ul>
        <li>
          O package nodejs que ira usar para configurar os testes assim como executa-los
          <br />
          <br />
          <div className="pad-left">
            <p>Instale o package:</p>
            <blockquote>
              <code>npm i -g openid-certification-automation</code>
            </blockquote>
            <blockquote>
              <code>yarn global add openid-certification-automation</code>
            </blockquote>
            <blockquote>
              <code>pnpm add -g openid-certification-automation</code>
            </blockquote>
          </div>
        </li>
        <br />
        <li>
          O container docker com a plataforma de certificação OpenID (Apensa caso queira rodar os
          teste localmente)
          <br />
          <br />
          <p className="pad-left">
            O container docker será usado para executar os testes localmente. Se você conhece os
            testes OpenID você sabe que os testes são executados na plataforma de certificação da
            OpenID <a href="https://certification.openid.net">https://certification.openid.net</a>{' '}
            que por sua vez vai chamar os endpoints do seu authorization server, uma vez que você
            queira rodar os testes localmente, a menos que você exponha uma porta em seu IP para a
            internet, você precisara rodar a plataforma de certificação localmente também.
          </p>
          <p className="pad-left">
            Disponibilizamos uma imagem de docker no Docker Hub{' '}
            <a href="https://hub.docker.com/r/adrielcodeco/conformance-suite">
              adrielcodeco/conformance-suite
            </a>{' '}
            que deve ser rodada localmente para permitir que você execute os testes localmente, mais
            detalhes nos tópicos <a href="#t3">3. Rodando com docker</a> e{' '}
            <a href="#t5">5. Rodando localmente</a>.
          </p>
        </li>
      </ul>
      <div className="terminal-alert">
        Antes de começar a configurar os testes e utilizar essa automação, aconselho que
        familiarize-se com a plataforma de certificação OpenID, seu funcionamento e suas
        configurações, uma vez que você ja tenha rodado testes na plataforma de certificação OpenID
        ficara fácil entender e utilizar essa automação, sem esse conhecimento prévio ficará difícil
        entender o funcionamento dessa automação.
      </div>
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Configurando os testes
      </h2>
      <p>
        Para configurar os testes, uma vez que você tenha o package openid-certification-automation
        instalado, basta rodar o comando config.
        <blockquote>
          <code>openidtest config</code>
        </blockquote>
        <p>
          Apos rodar o comando faremos algumas perguntas:
          <blockquote>What is your purpose ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa escolher entre adicionar uma nova configuração ou editar uma
            existente:
            <ul className="margin-0_5">
              <li>add</li>
              <li>edit</li>
            </ul>
          </div>
          <blockquote>What is the conformance-suite url ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa digitar a url da plataforma de certificação seja online ou
            local.
            <br />
            ex:
            <ul className="margin-0_5">
              <li>https://certification.openid.net</li>
              <li>https://localhost.emobix.co.uk:8443</li>
            </ul>
          </div>
          <blockquote>What is the test plan ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa escolher qual teste você deseja configurar para testar dentre
            os disponíveis:
            <ul className="margin-0_5">
              <li>FAPI1-Advanced-Final: Authorization server test</li>
              <li>
                API1-Advanced-Final: Brazil Dynamic Client Registration Authorization server test
              </li>
            </ul>
          </div>
          <blockquote>What is the Client Authentication Type ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa escolher qual será o tipo de autenticação do cliente usado no
            teste:
            <ul className="margin-0_5">
              <li>private_key_jwt</li>
              <li>mtls</li>
            </ul>
          </div>
          <blockquote>What is the Request Object Method ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa escolher qual sera o método do Request Object usado no teste:
            <ul className="margin-0_5">
              <li>by_value</li>
              <li>pushed</li>
            </ul>
          </div>
          <blockquote>What is the FAPI Profile ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa escolher qual sera o FAPI profile usado no teste:
            <ul className="margin-0_5">
              <li>plain_fapi</li>
              <li>openbanking_uk</li>
              <li>consumerdataright_au</li>
              <li>openbanking_brazil</li>
              <li>openinsurance_brazil</li>
            </ul>
          </div>
          <blockquote>What is the FAPI Response Mode ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa escolher qual sera o FAPI profile usado no teste:
            <ul className="margin-0_5">
              <li>plain_response</li>
              <li>jarm</li>
            </ul>
          </div>
          <blockquote>What is the JSON Test Configuration ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa escolher qual editor você deseja usar para editar o JSON da
            configuração usada no teste:
            <ul className="margin-0_5">
              <li>vscode</li>
              <li>vi</li>
              <li>vim</li>
              <li>nano</li>
              <li>ed</li>
            </ul>
          </div>
          <blockquote>What is the path of the HappyPath script ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa digitar o caminho relativo do arquivo de script HappyPath, para
            saber mais sobre o script HappyPath leia o <a href="#t2_1">tópico 2.1</a>
            <br />
            <br />
            ex: <code>test/authorizer/happyPath.js</code>
          </div>
          <blockquote>What is the path of the UserReject script ?</blockquote>
          <div className="pad-left">
            Nesse ponto você precisa digitar o caminho relativo do arquivo de script UserReject,
            para saber mais sobre o script UserReject leia o <a href="#t2_2">tópico 2.2</a>
            <br />
            <br />
            ex: <code>test/authorizer/userReject.js</code>
          </div>
        </p>
      </p>
      <h2>
        <a id={'t' + (tag - 1) + '_1'} href={'#t' + (tag - 1) + '_1'}>
          {tag - 1 + '.1'}.
        </a>{' '}
        HappyPath Script
      </h2>
      <h2>
        <a id={'t' + (tag - 1) + '_2'} href={'#t' + (tag - 1) + '_2'}>
          {tag - 1 + '.2'}.
        </a>{' '}
        UserReject Script
      </h2>
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Rodando com docker
      </h2>
      <p>
        Para rodar com o docker foi criada uma imagem com o executável do test para ser usada em um{' '}
        <code>docker-compose.yml</code>, a imagem docker do test foi hospedada no docker hub:{' '}
        <a href="https://hub.docker.com/r/adrielcodeco/openidtest">adrielcodeco/openidtest</a>.
      </p>
      <p>Exemplo:</p>
      <div className="terminal-card">
        <header>docker-compose.yml</header>
        <Highlight
          lang={Languages.yaml}
          text={[
            "version: '3.9'",
            'services:',
            '',
            '  my-authorization-server:',
            '    build:',
            '      context: .',
            '    image: my-authorization-server:latest',
            '    container_name: my-authorization-server',
            '    hostname: my-authorization-server',
            '    environment:',
            '      PORT: 443',
            '    ports:',
            "      - '443:443'",
            '',
            '  openidtest:',
            '    image: adrielcodeco/openidtest:latest',
            '    container_name: openidtest',
            '    hostname: openidtest',
            '    volumes:',
            '      - .out:/usr/src/openidtest/.out',
            '      - ./openidtest.config.json:/usr/src/openidtest/openidtest.config.json',
            '      # É imperativo que o caminho relativo seja o mesmo, local e no container',
            '      # pois a configuração procurará o caminho relativo dos arquivos de script',
            '      - ./test/happyPath.js:/usr/src/openidtest/test/happyPath.js',
            '      - ./test/userReject.js:/usr/src/openidtest/test/userReject.js',
            '    links:',
            '      - my-authorization-server:api.my-authorization-server.com',
            '      - my-authorization-server:mtls-api.my-authorization-server.com',
            '    depends_on:',
            '      - conformance-suite',
            '',
            '  mongodb:',
            '    image: mongo:5.0.14',
            '    container_name: mongodb',
            '    ports:',
            "      - '27017:27017'",
            '    volumes:',
            '      - ./.tmp/mongo/data:/data/db',
            '',
            '  conformance-suite:',
            '    image: adrielcodeco/conformance-suite:latest',
            '    container_name: conformance-suite',
            '    hostname: localhost.emobix.co.uk',
            '    ports:',
            "      - '8443:8443'",
            '    environment:',
            '      BASE_URL: https://localhost.emobix.co.uk:8443',
            '    links:',
            '      - my-authorization-server:api.my-authorization-server.com',
            '      - my-authorization-server:mtls-api.my-authorization-server.com',
            '    depends_on:',
            '      - mongodb',
          ].join('\n')}
        />
      </div>
      <br />
      <p>
        Sendo <code>my-authorization-server</code> a imagem do seu authorization server que será
        testado, <code>openidtest</code> a imagem do script de testes,{' '}
        <code>conformance-suite</code> a imagem da plataforma de testes do OpenID e{' '}
        <code>mongodb</code> a imagem do mongo que servirá de base para a imagem da plataforma de
        testes do OpenID.
      </p>
      <br />
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Rodando com executável
      </h2>
      <p>
        Uma vez que o script de teste ja foi instalado globalmente como descrito no{' '}
        <a href="#t1">tópico 1</a> e você ja tenha configurado os testes que deseja executar, você
        pode chamar o comando <code>openidtest use</code> para escolher um plano de teste especifico
        ja configurado e também escolher quais testes do plano de teste deseja executar ou ir direto
        para o comando <code>openidtest run</code> para executar todos os testes configurados caso
        não tenha um selecionado.
      </p>
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Rodando localmente
      </h2>
      <p>
        Você pode executar os testes localmente usando o script de teste nodejs apontando para a
        plataforma de testes OpenID na internet ou apontando para um endereço local dependendo de
        como foi configurado o teste que deseja rodar. Caso tenha configurado para apontar para a
        plataforma de testes OpenID local você precisa ter a imagem docker preparada para isso
        rodando na mesma maquina onde seu authorization server esta rodando ou na mesma rede para
        que um acesse o outro.
      </p>
      <p>
        Você pode rodar a imagem docker <code>adrielcodeco/conformance-suite</code> em um
        docker-compose.yml como no exemplo do <a href="#t3">tópico 3</a> pois ela depende do
        mongodb.
      </p>
    </Layout>
  )
}

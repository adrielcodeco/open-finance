/** @jsxImportSource @emotion/react */
import { Layout } from 'src/components/organisms/layout'
import { Highlight, Languages } from '../atoms/highlight'

export const OBBCert = () => {
  let tag = 1
  return (
    <Layout repo="https://github.com/adrielcodeco/openbanking-br-certification-automation">
      <h1>
        <a id="top" href="#top">
          #
        </a>{' '}
        Open Banking Brazil Certification Automation
      </h1>
      <p>
        Os testes de certificação OBB (Open Banking Brasil) são manuais e um pouco cansativo as
        vezes, pra ajudar a reduzir o tempo de teste e para ajudar a eliminar a necessidade de ter
        alguém rodando os testes manualmente, foi criada essa automação.
      </p>
      <p>
        Com essa automação é possível rodar os teste na plataforma de certificação do OBB{' '}
        <a href="https://web.conformance.directory.openbankingbrasil.org.br">
          https://web.conformance.directory.openbankingbrasil.org.br
        </a>
        , rodar os testes totalmente local ou em um pipeline como uma etapa de validação de código
        ou um stage ante de subir nos ambientes etc.
      </p>
      <p>
        A automação precisa ser configurada previavemente e pode ser rodada a partir de um container
        docker ou a partir de um script em nodejs.
      </p>
      <p>
        Visite o nosso Github para conhecer melhor o projeto ou interagir com os desenvolvedores
        e/ou outros usuários:{' '}
        <a href="https://github.com/adrielcodeco/openbanking-br-certification-automation">
          https://github.com/adrielcodeco/openbanking-br-certification-automation
        </a>
      </p>
      <header>
        <h2 id="NavigationList">Atalhos de navegação</h2>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#t1">1. Conceitos</a>
            <ul>
              <li>
                <a href="#t1_1">1.1 Configuração do plano de testes</a>
              </li>
              <li>
                <a href="#t1_2">1.2 Escolha do teste e execução</a>
              </li>
              <li>
                <a href="#t1_3">1.3 Interação (quando exigida pelo teste)</a>
              </li>
              <li>
                <a href="#t1_4">1.4 Finalização (quando exigida pelo teste)</a>
              </li>
              <li>
                <a href="#t1_5">1.5 Verificação</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#t2">2. Getting started</a>
          </li>
          <li>
            <a href="#t3">3. Configurando os testes</a>
            <ul>
              <li>
                <a href="#t3_1">3.1 HappyPath Script</a>
              </li>
              <li>
                <a href="#t3_2">3.2 UserReject Script</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#t4">4. Rodando com docker</a>
          </li>
          <li>
            <a href="#t5">5. Rodando com executável</a>
          </li>
          <li>
            <a href="#t6">6. Rodando localmente</a>
          </li>
        </ul>
      </nav>
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Conceitos
      </h2>
      <p>
        A automação foi criada com base no framework de testes{' '}
        <a href="https://codecept.io/">CodeceptJS</a> e usando a biblioteca{' '}
        <a href="https://codecept.io/helpers/Puppeteer">Puppeteer</a> para interagir com o browser
        tanto em modo visual quando no modo sem exibição (headless).
      </p>
      <p>A automação é dividia em algumas etapas:</p>
      <ol>
        <li>
          <a href="#1_1">Configuração do plano de testes</a>
        </li>
        <li>
          <a href="#1_2">Escolha do teste e execução</a>
        </li>
        <li>
          <a href="#1_3">Interação (quando exigida pelo teste)</a>
        </li>
        <li>
          <a href="#1_4">Finalização (quando exigida pelo teste)</a>
        </li>
        <li>
          <a href="#1_5">Verificação</a>
        </li>
      </ol>
      <h2>
        <a id={'t' + (tag - 1) + '_1'} href={'#t' + (tag - 1) + '_1'}>
          {tag - 1 + '.1'}.
        </a>{' '}
        Configuração do plano de testes
      </h2>
      <p>
        Na etapa de configuração do plano de testes a automação cria um plano de testes caso não
        exista um criado e registrado no arquivo de configuração, caso exista um plano registrado no
        arquivo de configuração a automação continua a execução do teste, pulando os testes que ja
        foram executados com sucesso e refaz os que estão com falha.
      </p>
      <p>
        Você também pode forçar que toda execução gere um novo plano de teste passando o argumento{' '}
        <code>--np</code> no comando <code>obbtest run</code>
      </p>
      <h2>
        <a id={'t' + (tag - 1) + '_2'} href={'#t' + (tag - 1) + '_2'}>
          {tag - 1 + '.2'}.
        </a>{' '}
        Escolha do teste e execução
      </h2>
      <p>
        Na etapa de Escolha do teste e execução a automação navega de teste em teste do plano de
        testes executando cada teste. É possível escolher os testes a serem executados em um plano
        de testes através do comando <code> obbtest use</code>.
      </p>
      <h2>
        <a id={'t' + (tag - 1) + '_3'} href={'#t' + (tag - 1) + '_3'}>
          {tag - 1 + '.3'}.
        </a>{' '}
        Interação (quando exigida pelo teste)
      </h2>
      <p>
        Na etapa de Interação a automação, quando exigida pelo teste, executa scripts pre-definidos.
      </p>
      <p>
        Nessa etapa a automação clicará no botão para abrir o link de autorização do consentimento
        em uma nova aba e executará o script fornecido para o cenário de teste em questão.
      </p>
      <p>Existem 3 cenários possíveis:</p>
      <ol>
        <li>Cenário de sucesso</li>
        <li>Cenário com o rejeite do usuário</li>
        <li>Cenário com erro no redirecionamento para a autorização do consentimento</li>
      </ol>
      <p>
        Nos dois primeiros cenários a automação precisará de um script com os passos a serem
        seguidos para concluir o processo pois como cada authorization server pode ter um site com
        estruturas e fluxos diferentes para autorizar o consentimento é necessário que você forneça
        um script com os passos a serem seguidos para o seu site de autorização do consentimento.
        Esses scripts devem ser confeccionados como descrito nos <a href="#t3_1">tópico 3.1</a> para
        o cenário de sucesso (HappyPath script) e <a href="#t3_2">tópico 3.2</a> para o cenário com
        o rejeite do usuário (UserReject script).
      </p>
      <p>
        No terceiro cenário a tela de autorização do consentimento não chega a ser exibida, o
        authorization server retorna direto para o motor de testes com o erro, logo a automação não
        precisará de um script.
      </p>
      <h2>
        <a id={'t' + (tag - 1) + '_4'} href={'#t' + (tag - 1) + '_4'}>
          {tag - 1 + '.4'}.
        </a>{' '}
        Finalização (quando exigida pelo teste)
      </h2>
      <p>
        Na etapa de Finalização a automação, quando exigida pelo teste, faz o upload do print que é
        exigido em certos testes, prints que a propia automação captura quando necessário.
      </p>
      <h2>
        <a id={'t' + (tag - 1) + '_5'} href={'#t' + (tag - 1) + '_5'}>
          {tag - 1 + '.5'}.
        </a>{' '}
        Verificação
      </h2>
      <p>
        Na etapa de Verificação a automação verifica se o teste encerrou e não houveram falhas
        guardando o status do teste e seguindo para o próximo.
      </p>
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
              <code>npm i -g openbanking-br-certification-automation</code>
            </blockquote>
            <blockquote>
              <code>yarn global add openbanking-br-certification-automation</code>
            </blockquote>
            <blockquote>
              <code>pnpm add -g openbanking-br-certification-automation</code>
            </blockquote>
          </div>
        </li>
        <br />
        <li>
          O container docker com a plataforma de certificação funcional do Open Banking Brasil
          (Apensa caso queira rodar os teste localmente)
          <br />
          <br />
          <p className="pad-left">
            O container docker será usado para executar os testes localmente. Se você conhece os
            testes funcionais você sabe que os testes são executados na plataforma de certificação
            do Open Banking Brasil{' '}
            <a href="https://web.conformance.directory.openbankingbrasil.org.br">
              https://web.conformance.directory.openbankingbrasil.org.br
            </a>{' '}
            que por sua vez vai chamar os endpoints do seu authorization server, uma vez que você
            queira rodar os testes localmente, a menos que você exponha uma porta em seu IP para a
            internet, você precisara rodar a plataforma de certificação localmente também.
          </p>
          <p className="pad-left">
            Disponibilizamos uma imagem de docker no Docker Hub{' '}
            <a href="https://hub.docker.com/r/adrielcodeco/obb-certification">
              adrielcodeco/obb-certification
            </a>{' '}
            que deve ser rodada localmente para permitir que você execute os testes localmente, mais
            detalhes nos tópicos <a href="#t4">4. Rodando com docker</a> e{' '}
            <a href="#t6">6. Rodando localmente</a>.
          </p>
        </li>
      </ul>
      <div className="terminal-alert">
        Antes de começar a configurar os testes e utilizar essa automação, aconselho que
        familiarize-se com a plataforma de certificação do Open Banking Brasil, seu funcionamento e
        suas configurações, uma vez que você ja tenha rodado testes na plataforma de certificação
        funcional ficara fácil entender e utilizar essa automação, sem esse conhecimento prévio
        ficará difícil entender o funcionamento dessa automação.
      </div>
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Configurando os testes
      </h2>
      <p>
        Para configurar os testes, uma vez que você tenha o package
        openbanking-br-certification-automation instalado, basta rodar o comando config.
      </p>
      <blockquote>
        <code>obbtest config</code>
      </blockquote>
      <p>Apos rodar o comando faremos algumas perguntas:</p>
      <blockquote>What is your purpose ?</blockquote>
      <div className="pad-left">
        Nesse ponto você precisa escolher entre adicionar uma nova configuração ou editar uma
        existente:
        <ul className="margin-0_5">
          <li>add</li>
          <li>edit</li>
        </ul>
      </div>
      <blockquote>What is the obb-certification url ?</blockquote>
      <div className="pad-left">
        Nesse ponto você precisa digitar a url da plataforma de certificação seja online ou local.
        <br />
        ex:
        <ul className="margin-0_5">
          <li>https://web.conformance.directory.openbankingbrasil.org.br</li>
          <li>https://localhost.emobix.co.uk:8443</li>
        </ul>
      </div>
      <blockquote>What is the test plan ?</blockquote>
      <div className="pad-left">
        Nesse ponto você precisa escolher qual teste você deseja configurar para testar dentre os
        disponíveis:
        <ul className="margin-0_5">
          <li>Brazil DCR Test without Browser Interaction</li>
          <li>
            Functional tests for payments API INIC, DICT, MANU, QRES and QRDN (T0/T1/T2) - Based on
            Swagger version: 1.2.0
          </li>
          <li>
            Functional tests for payments API INIC, DICT, MANU, QRES and QRDN (T0/T1/T2) - Based on
            Swagger version: 2.0.0
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
        saber mais sobre o script HappyPath leia o <a href="#t3_1">tópico 3.1</a>
        <br />
        <br />
        ex: <code>test/authorizer/happyPath.js</code>
      </div>
      <blockquote>What is the path of the UserReject script ?</blockquote>
      <div className="pad-left">
        Nesse ponto você precisa digitar o caminho relativo do arquivo de script UserReject, para
        saber mais sobre o script UserReject leia o <a href="#t3_2">tópico 3.2</a>
        <br />
        <br />
        ex: <code>test/authorizer/userReject.js</code>
      </div>
      <br />
      <h2>
        <a id={'t' + (tag - 1) + '_1'} href={'#t' + (tag - 1) + '_1'}>
          {tag - 1 + '.1'}.
        </a>{' '}
        HappyPath Script
      </h2>
      <p>
        O script HappyPath é um script com o passo a passo do site de autorização do consentimento
        para autorizar com sucesso.
      </p>
      <p>
        Para desenvolver o script você precisará conhecer as possíveis funções que podem ser usadas
        para interagir com o browser. Poderá estuda-las no link{' '}
        <a href="https://codecept.io/helpers/Puppeteer">https://codecept.io/helpers/Puppeteer/</a>.
      </p>
      <p>A seguir um exemplo do script HappyPath</p>
      <div className="terminal-card">
        <header>happyPath.js</header>
        <Highlight
          lang={Languages.javascript}
          text={[
            'module.exports = async function ({ I, timer }) {',
            '  try {',
            '    // Verificando se esta na url /login do autorizador de consentimento',
            '    await I.checkUrl(//login/)',
            "    await I.waitForElement('#user')",
            '    // Digitando o username',
            "    await I.fillField('#user', 'my-username')",
            "    await I.waitForElement('#password')",
            '    // Digitando a senha',
            "    await I.fillField('#password', 'my-password')",
            '    // Clicando no botão para realizar o login',
            "    await I.click('#buttonLogin')",
            '    // Aguardando para logar e redirecionar para a tela de consentimento',
            '    await I.waitForNavigation()',
            '    // Verificando se esta na url /consent do autorizador de consentimento',
            '    await I.checkUrl(//consent/)',
            '    // Aguardando o botão de confirmação do consentimento ficar visível pra ser clicado',
            "    await I.retry(3).waitForVisible('#buttonConfirmConsent', timer.s('2s'))",
            '    // Clicando no botão de confirmação do consentimento',
            "    await I.click('#buttonConfirmConsent')",
            '    // Aguardando ser redirecionado para o motor de teste',
            "    await I.waitForNavigation({ timeout: timer.m('20s') })",
            '  } catch (err) {',
            '    const isAuthorizer = await tryTo(() =>',
            '      // Verificando se esta na tab do autorizador de consentimento para fechar-la em caso de erro',
            '      I.checkUrl(//(login|consent)(\\/|?|#|$)/),',
            '    )',
            '    if (isAuthorizer) {',
            '      await I.closeCurrentTab()',
            '    }',
            '    throw err',
            '  }',
            '}',
          ].join('\n')}
        />
      </div>
      <br />
      <p>
        Modifique a função de exemplo de modo que inclua todos os passos que precisam ser realizados
        para concluir o consentimento com sucesso.
      </p>
      <h2>
        <a id={'t' + (tag - 1) + '_2'} href={'#t' + (tag - 1) + '_2'}>
          {tag - 1 + '.2'}.
        </a>{' '}
        UserReject Script
      </h2>
      <p>
        O script UserReject é um script com o passo a passo do site de autorização do consentimento
        para rejeitar o consentimento.
      </p>
      <p>
        Para desenvolver o script você precisará conhecer as possíveis funções que podem ser usadas
        para interagir com o browser. Poderá estuda-las no link{' '}
        <a href="https://codecept.io/helpers/Puppeteer">https://codecept.io/helpers/Puppeteer/</a>.
      </p>
      <p>A seguir um exemplo do script UserReject</p>
      <div className="terminal-card">
        <header>userReject.js</header>
        <Highlight
          lang={Languages.javascript}
          text={[
            'module.exports = async function ({ I, timer }) {',
            '  try {',
            '    // Verificando se esta na url /login do autorizador de consentimento',
            '    await I.checkUrl(//login/)',
            '    // Aguardando o botão de rejeição do consentimento ficar visível pra ser clicado',
            "    await I.retry(3).waitForVisible('#buttonCancelConsent', timer.s('2s'))",
            '    // Clicando no botão de rejeição do consentimento',
            "    await I.forceClick('#buttonCancelConsent')",
            '    // Aguardando ser redirecionado para o motor de teste',
            "    await I.waitForNavigation({ timeout: timer.m('20s') })",
            '  } catch (err) {',
            '    // Verificando se esta na tab do autorizador de consentimento para fechar-la em caso de erro',
            '    const isAuthorizer = await tryTo(() =>',
            '      I.checkUrl(//(login|consent)(/|?|#|$)/),',
            '    )',
            '    if (isAuthorizer) {',
            '      await I.closeCurrentTab()',
            '    }',
            '    throw err',
            '  }',
            '}',
          ].join('\n')}
        />
      </div>
      <br />
      <p>
        Modifique a função de exemplo de modo que inclua todos os passos que precisam ser realizados
        para rejeitar o consentimento.
      </p>
      <h2>
        <a id={'t' + tag} href={'#t' + tag}>
          {tag++}.
        </a>{' '}
        Rodando com docker
      </h2>
      <p>
        Para rodar com o docker foi criada uma imagem com o executável do test para ser usada em um{' '}
        <code>docker-compose.yml</code>, a imagem docker do test foi hospedada no docker hub:{' '}
        <a href="https://hub.docker.com/r/adrielcodeco/obbtest">adrielcodeco/obbtest</a>.
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
            '  obbtest:',
            '    image: adrielcodeco/obbtest:latest',
            '    container_name: obbtest',
            '    hostname: obbtest',
            '    volumes:',
            '      - .out:/usr/src/obbtest/.out',
            '      - ./obbtest.config.json:/usr/src/obbtest/obbtest.config.json',
            '      # É imperativo que o caminho relativo seja o mesmo, local e no container',
            '      # pois a configuração procurará o caminho relativo dos arquivos de script',
            '      - ./test/happyPath.js:/usr/src/obbtest/test/happyPath.js',
            '      - ./test/userReject.js:/usr/src/obbtest/test/userReject.js',
            '    links:',
            '      - my-authorization-server:api.my-authorization-server.com',
            '      - my-authorization-server:mtls-api.my-authorization-server.com',
            '    depends_on:',
            '      - obb-certification',
            '',
            '  mongodb:',
            '    image: mongo:5.0.14',
            '    container_name: mongodb',
            '    ports:',
            "      - '27017:27017'",
            '    volumes:',
            '      - ./.tmp/mongo/data:/data/db',
            '',
            '  obb-certification:',
            '    image: adrielcodeco/obb-certification:latest',
            '    container_name: obb-certification',
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
        testado, <code>obbtest</code> a imagem do script de testes, <code>obb-certification</code> a
        imagem da plataforma de testes do OpenID e <code>mongodb</code> a imagem do mongo que
        servirá de base para a imagem da plataforma de testes do OpenID.
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
        <a href="#t2">tópico 2</a> e você ja tenha configurado os testes que deseja executar, você
        pode chamar o comando <code>obbtest use</code> para escolher um plano de teste especifico ja
        configurado e também escolher quais testes do plano de teste deseja executar ou ir direto
        para o comando <code>obbtest run</code> para executar todos os testes configurados caso não
        tenha um selecionado.
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
        Você pode rodar a imagem docker <code>adrielcodeco/obb-certification</code> em um
        docker-compose.yml como no exemplo do <a href="#t4">tópico 4</a> pois ela depende do
        mongodb.
      </p>
    </Layout>
  )
}

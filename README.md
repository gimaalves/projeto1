# projeto1
Primeiro teste curso Impacta

--material curso
https://drive.google.com/drive/folders/1QYptq9Yd2padJv8YzJsjOYzzWKcNdba1?usp=drive_link

--mapas mentais
•LucidChart: https://lucid.app/documents#/templates
•Miro: https://miro.com/app/
•Mind Master: https://www.mindmeister.com/
•Canvas: https://www.canva.com/graphs/mind-maps/

https://miro.com/welcome/N2FDc3JMS1pWcm5VYnFxa2lIcERwcDJjajBYOE10YnlqU2llMU5VUHQwVEFQTGJScGlkS0lSMGJEdUJsTWFwSXwzNDU4NzY0NTg4NzkzMDkyNjIwfDQ=?share_link_id=953066356448

---aula 01
exercício mapa mental - plano de teste: https://miro.com/app/board/uXjVKIwxAiE=/

--linkedin Fabio
https://www.linkedin.com/in/fabio10/

--java script no browser
var idade = prompt("Digite sua idade");
if(idade > 16) {
  alert('Parabéns. Cadastro realizado com sucesso');
}
else alert("Não tem idade suficiente. Procure seus pais");
has context menu

--documentação cypress
https://www.docs.cypress.io/

--documentação npm
https://docs.npmjs.com/cli/v10/commands/npm-install

--instalar postman
https://www.postman.com/downloads/

--instalar node.js
https://nodejs.org/en/download

--instalar git
https://git-scm.com/downloads

--instalar vscode
https://code.visualstudio.com/download

--instalar newman (funcionou pelo prompt do node)
npm install -g newman
npm install -g newman-reporter-html
npm install -g newman-reporter-htmlextra

--criar conta no git
https://github.com/

--api pra estudo
https://serverest.dev/

--aplicações pra estudo
https://front.serverest.dev/
https://www.saucedemo.com/

--orientação do prof aula sobre ambiente localhost da api serverest
npm cache clean --force
npm config set registry http://registry.npmjs.org/
npm install -g npm


--relatório newman apenas no cmd (através do prompt do node, na vpn, após algumas execuções, parou de exibir o erro de certificado)
newman run Serverest_tests.postman_collection.json -e prod.postman_environment.json

--relatório newman completo no diretório dos arquivos salvos (C:\Users\gialves\Postman\files)
newman run Serverest_tests.postman_collection.json -e prod.postman_environment.json -r htmlextra --reporter-htmlextra-export report.html

*********************

13-05-2024

Prof se apresentou

Passou conteúdo conceitual de Introdução ao Teste de Software (O que é, Objetivos, Porque testar ...)
Fundamentos: 3 D
-O que testar (Tipos de teste)
-Como testar (Técnicas de teste)
-Quando testar (Níveis de teste)
Plano de teste
O 7 princípios de testes
Tipos de Teste (Técnica x Nível x Tipo de Testes)
Ex: Caixa Preta x Teste de Sistema x Teste Funcional
Funcional x Não Funcional

Criou um plano de teste com mapa mental miro
--mapas mentais
•LucidChart: https://lucid.app/documents#/templates
•Miro: https://miro.com/app/
•Mind Master: https://www.mindmeister.com/
•Canvas: https://www.canva.com/graphs/mind-maps/

https://miro.com/welcome/N2FDc3JMS1pWcm5VYnFxa2lIcERwcDJjajBYOE10YnlqU2llMU5VUHQwVEFQTGJScGlkS0lSMGJEdUJsTWFwSXwzNDU4NzY0NTg4NzkzMDkyNjIwfDQ=?share_link_id=953066356448

---aula 01
exercício mapa mental - plano de teste: https://miro.com/app/board/uXjVKIwxAiE=/

Falou sobre shift left testing, ou seja, trazer os testes pra fases mais iniciais do projeto e o custo do defeito nas fases finais do projeto custando muitas vezes mais (1000x)

Falou sobre pirâmide de teste (unidade, serviços, ui, manual)

Falou sobre técnica de teste caixa preta, particionamento de equivalência e montamos casos de testes com base em regras de negócio (RN0X) com partições válidas e inválidas

Falou sobre técnica de teste caixa preta, análise de valor limite e montamos casos de testes com base em regras de negócio (RN0X)


14-05-2024

Mostrou como executar código javascript
No navegador, na opção de menu Mais Ferramentas\Ferramentas do desenvolvedor
Na aba Console, para colar conteúdo, alguns navegadores precisam do comando "permitir colagem" ou "allow pasting" 
Colou o código:
var idade = prompt("Digite sua idade");
if(idade > 16) {
	alert('Parabéns. Cadastro realizado com sucesso');
}
else alert("Não tem idade suficiente. Procure seus pais");

Mostrou que ao declarar var a =10 e teclar a, ele retorna 10 pois associou na memória o valor à variável
var b = 5
a + b, ele retorna 15

Falou sobre a técnica de teste caixa preta, tabela de decisão e montamos tabela com base em regras de negócio (RN0X)

Escrevemos casos de testes em planilha excel com o template fornecido para a história US-002 Login

Falou sobre API (Application Programming Interface) e mostrou a arquitetura 
base ou servidor -> API (middleware) -> interface (client)

Mostrou as requisições no Inspecionar do navegador, aba Network

Mostrou os status code:
1xx - Informacional
2xx - Sucesso
3xx - Redirecionamento
4xx - Erro de cliente
5xx - Erro de servidor

Falou sobre os principais métodos HTTP: GET, POST, PUT, DELETE

Falou sobre o contrato (payload), informações enviadas e recebidas nas requisições

Falou sobre o fluxo de testes de API:
1- Health Check: garantir que o endpoint está respondendo
2- Contrato: Garantir que o endpoint não teve seus atributos alterados
3- Aceitação: Garantir que o endpoint funciona ou apresenta os resultados de falha esperados
4- Funcional: Garantir que um conjunto de endpoints funcionam como na UI

Mostrou o que testes em APIs:
1- Status: o código de resposta está adequado
2- Performance: a resposta retornou dentro do tempo adequado
3- Syntaxe: o tipo de conteúdo retornado está adequado (Content-Type)/o servidor aceita requisições no formato adequado
4- Tratamento de erro: o servidor rejeita requisições no formato inadequado / excluir campos obrigatórios deve resultar em erro / requisições com tipos de dados inadequados deve resultar em erro
5- Detecção de erros: testes negativos para identificar exceções
6- Schema: o conteúdo da resposta está de acordo com a estrutura ou formato esperado (contrato)
7- Funcional: o servidor retorna o valor previsto de acordo com a requisição / a requisição insere, atualiza ou exclui um recurso esperado
8- Segurança: Injeções de SQL não impactam na integridade dos dados

Pediu pra instalar o Node.js (instalação feita pelo portal da Capgemini, catálogo pré-aprovado)
E instalar o Postman

Mostrou a API pra estudo:
https://serverest.dev/

Pediu pra ver no terminal cmd se tem o node instalado usando o comando node -v

Falou sobre as formas de documentação de API: swagger e outras

Mostrou no Postman a execução de requisição GET e a resposta

Falou sobre REST(Representational State Transfer) e SOAP(Simple Object Access Protocol)
O REST pode realizar solicitações e enviar informações de volta em vários formatos de dados, incluindo JSON, HTML e XML, pois usa protocolo HTTP. Seguem padrões de comunicação de software seguros, confiáveis e eficientes par atroca de informações internas e externas entre os sistemas.
SOAP é uma maneira segura de construir APIs e funciona codificando dados no formato XML.
SOAP tem regras mais rígidas e SOAP é mais flexível.

Fez várias operações nas APIs pelo swagger


15-05-2024


Mostrou o Postman, as collections, a estrutura de pastas, as requisições
Mostrou as abas apresentadas na requisição
Mostrou url, url base, recurso, parâmetros, métodos de autenticação, headers, request body, scripts / testes

Pediu pra montar collection nova. Criei um novo Workspace e nova collection Serverest_tests.
Adicionamos nova request GET Listar Usuários e executamos.
Mostrou o reponse body.
Mostrou na aba script/tests, os Snippets ou testes prontos pra uso.
Adicionamos teste na aba script/tests, para validar o status code 200, o tempo de resposta, o response body se contém a string desejada e executamos.
Mostrou a aba Test Results que apareceu no response após executar.
Criamos requisições para os demais métodos (GET, POST, PUT, DELETE) da api Serverest e testes pra elas, incluindo requisições que precisam de autenticação.

Usamos método de geração dinâmica de email "{{randomEmail}}" pra evitar erro de email já cadastrado. Depois, usou pra nome também.
Mostrou o Console na parte inferior, em POST\Request Body pra saber o email enviado no request body.

Criamos variável de ambiente e usamos na {{urlBase}}
Em environment, criamos um Desenvolvimento e um Produção e em Desenvolvimento criamos uma variável baseUrl e em Produção também.

Acionamos o servidor local no cmd pelo comando npx serverest (fora da vpn funcionou)

--orientação do prof aula sobre ambiente localhost da api serverest
npm install -g npm (atualiza gerenciador de pacotes do node)
npm config set registry http://registry.npmjs.org/
npm cache clean --force

Falou sobre lista ou arrays e que inicia na posição 0.
Mostrou como executar código javascript
No navegador, na opção de menu Mais Ferramentas\Ferramentas do desenvolvedor
Na aba Console, para colar conteúdo, alguns navegadores precisam do comando "permitir colagem" ou "allow pasting"
Digitou no console o código:
var response = { <teclar Shift + ENTER pra quebra de linha sem executar>
  "frutas": ["maçãs", "bananas", "laranjas", "morangos", "uvas"]
}
E teclou ENTER pra executar
E digitou a variável response.frutas e teclou ENTER novamente
E mostrou que exibiu a lista iniciando em 0 zero
E digitou response.frutas[1] e ENTER e o sistema exibiu 'bananas'

Mostrou como executar a collection em Run Collection e as configs pra execução.
Manteve manual, 1 iteração e executou.

Pediu pra instalar:
--instalar postman
https://www.postman.com/downloads/

--instalar node.js (instalação feita pelo portal da Capgemini, catálogo pré-aprovado)
https://nodejs.org/en/download

--instalar git
https://git-scm.com/downloads

--instalar vscode
https://code.visualstudio.com/download

--instalar newman (funcionou pelo prompt do node)
npm install -g newman
npm install -g newman-reporter-html
npm install -g newman-reporter-htmlextra


16/05/2024

Prof passou mal, aula a ser reposta


17/05/2024


Criou variáveis para usuário e senha de cada ambiente do serverest no Postman.
Usou essas variáveis nas requisições.

Criamos requests para PUT e DELETE e os testes delas e executamos.

Comentou que o PUT funciona como o POST, se não encontra o email lá pra alterar, ele cadastra.

Executou a collection, desmarcando a request DEL, mantendo as demais configs. Ajustou os testes que falharam até passar todos.
Exportou a collection. Pediu pra deixar o nome da collection sem espaços em branco.
Exportou os ambientes também.
Abrimos o cmd a partir da pasta dos arquivos exportados, navegando até a pasta, digitando 'cmd' no caminho da pasta e clicando ENTER.
Executou o comando npm install -g newman (funcionou pelo prompt do node)
E os comandos
npm install -g newman-reporter-html
npm install -g newman-reporter-htmlextra

Após a instalação do newman, no cmd como administrador, a partir da pasta onde estão os arquivos da collection e ambientes (C:\Users\gialves\Postman\files), executou o comando:
newman run Serverest_tests.postman_collection -e local.postman_environment
Explicou que ao começar a digitar o nome da collection e digitar TAB, ele completa. 
Explicou que com a seta pra cima no cmd, ele apresenta o último comando.
Executou também o comando para gerar um report.html:
newman run Serverest_tests.postman_collection -e local.postman_environment -r htmlextra --reporter-htmlextra-export report.html

Obs.: Para evitar o erro "[DEP0040] DeprecationWarning: The 'punycode' module is deprecated", foi recomendado em pesquisa na internet, usar versão LTS (long term support) do node. Comandos:
npm install 20.10.0 (no ambiente Cap só funciona install do node pelo portal)
npm use 20.10.0

Importou a collection e a executou.
Encerrou o assunto Postman.

Pediu pra instalar o vscode e pra instalar o git.

Explicou que o Cypress é um framework pq é uma junção de vários recursos, bibliotecas, tem camandas que fazem vários tipos de testes.

Pediu pra abrir o vscode.
No vscode, no menu Terminal, clicou na opção New Terminal.

Pediu pra criar uma pasta chamada repository no C:
Na pasta repository, pediu pra criar outra pasta chamada projeto1.
Abriu a pasta projeto1 no vscode.

Pediu pra aplicar o comando npm init -y no terminal do vscode.
Daí o sistema cria o arquivo package.json (controlador de versão).

--depois, o comando npm install cypress
--depois, o comando npx cypress open
--no navegador do cypress, selecionamos E2E Testing, browser nativo do cypress Electron, opção next (incluindo opção Scaffold example specs) até chegar ao projeto1 com as specs
--executamos o todo, clicando sobre o link todo
Mostrou os asserts em cor verde
Mostrou a arquitetura de pastas do projeto no vscode e os arquivos que iremos trabalhar.

Pediu pra instalar a extensão "ES6 Mocha Snippets" (logo marrom) no MarketPlace do VSCODE

--depois, no vscode, criamos a pasta "3-primeiros-testes" dentro de projeto1\cypress\e2e\
--criamos o arquivo busca.cy.js na pasta "3-primeiros-testes"
--escrevemos e executamos o código 
/// <reference types="cypress" />

describe('Busca no google', () => {
    it('Deve buscar com sucesso palavras-chave', () => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('Automação de testes')
      //  cy.get('.FPdoLc > center > .gNO89b').click  resolver depois
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()

        cy.get('.DoxwDb > .PZPZlf').should('contain', 'Automação de teste')
    });
});



20-05-2024


--criamos um repositório (serverest-test) no git 
--mantemos opção Público
--selecionamos opção Add a README file
--em Add .gitignore, selecionamos a opção Node
--e clicamos em Create Repository

--vinculamos a pasta repository com o git
--acesso pelo terminal no vscode ou no cmd, acessando a pasta repository nesse terminal
--digitamos o comando "git clone https://github.com/gimaalves/serverest-test.git"
--teclamos ENTER

--pelo vscode, abrimos, no menu File\Open Folder, a pasta repository\serverest-test

--sempre ao iniciar projeto do node precisa do comando npm init
--pelo terminal no vscode, aplicamos o comando npm init -y
--depois, o comando npm install cypress
--depois, o comando npx cypress open

--caso precise forçar outra versão do cypress que não a última
--acessar npmjs.com/package/cypress, verificar a versão na aba Versions
--aplicar o comando npm install cypress@13.8.0

--caso precise voltar a versão
--acessar o arquivo package.json
--alterar a versão do cypress
--salvar o arquivo
--aplicar o comando npm install

--após abrir o cypress, aparece a arquitetura das pastas
-- removeu a pasta e2e\advanced
--criou as pastas api e web dentro de e2e
--criou os arquivos login.cy.js e cadastro.cy.js

--mostrou como instalar o cypress sem ser pelo npm
--fazendo o download pelo cypress.io
--descompactar
--executar o cypress.exe
--clicou em "browse manually"
--selecionou a pasta repository\serverest-test
--seguiu os mesmos passos pra acessar os arquivos de testes
--no vscode, em File\Open Folder, abriu a pasta do cypress descompactada
--acessar o terminal pelo vscode, aplicar o comando npm init -y
--a questão é que nesse caso, a versão será sempre a que foi feito o download

--criamos os testes para os arquivos login.cy.js e cadastro.cy.js da aplicação https://front.serverest.dev/
--mostrou o before, o after, o beforeeach e o aftereach
--mostrou como capturar print com o screenshot
--mostrou que é importante usar o clear() com o type() para não haver sobrescrição de dados
--mostrou como usar a baseUrl no arquivo cypress.config.js e apenas as funcionalidades nos métodos cy.visit()
--mostrou como acessar a página na execução para capturar elemento após execução navegando nas linhas da execução
--mostrou o método cy.wait(1000)

--comandos para publicação no git
--na primeira vez, pede a autenticação
git add . (ou git add cadastro.cy.js se quiser subir individualmente)
git commit -m "testes iniciais do login e cadastro"
git push origin main



21/05/2024



--falou sobre comandos no cmd como cd../.. que volta 2 níveis
--sobre o comando ls ou dir pra ver os diretórios

--mostrou execução do comando npx cypress open no cmd fora do vscode a partir do diretório do package.js

--mostrou como gerar emails únicos com 2 soluções:
--1- através do método Datenow() concatenado com demais trechos da string
--2- e através da biblioteca Faker(@faker-js/faker)
--instalando através do comando npm i @faker-js/faker
--e importando import { faker } from '@faker-js/faker';
--e usando no código faker.internet.email()
--que tb dá pra usar pra gerar nome faker.person.fullname() e outros

--mostrou que além do it.only para executar apenas esse teste
--pode-se usar o it.skip pra pular a execução desse teste

--mostrou como gravar video das execuções colocando em cypress.config.js dentro de e2e
--e separando por ',' com o baseUrl
--o trecho video: true e executando de forma headless no terminal pelo comando npx cypress run

--mostrou como mapear as pastas a serem descartadas nas publicações no github
--no arquivo .gitignore , adicionando as pastas node_modules/ videos/  screenshots/

--falou sobre testes horizontais (end to end ou ponta a ponta, integrados)
--e sobre testes verticais (funcionais específicos, dentro da sprint)

--mostrou como criar métodos customizados no arquivo support\commands.js
--para organizar a estrutura do código e usar para enxugar linhas repetitivas nos testes

--mostrou como usar o timeout para esperar elemento 
--cy.get('h1', {timeout: 10000}).should('contain', 'Lista de Compras')

--e publicou as alterações do dia no git


22/05/2024

--mostrou 2 formas de usar dados dinâmicos pela pasta fixtures
--1- criando um arquivo usuarios.json na pasta fixtures
--importando import dadosUsuario from '../../fixtures/usuarios.json'
--e usando cy.cadastroUsuarioAdmin(dadosUsuario[0].nome, dadosUsuario[0].email, dadosUsuario[0].senha)
--2- da forma nativa do cypress
cy.fixture('login').then((dadoslogin) => {
            cy.login(dadoslogin.email, dadoslogin.senha)
        })

--mostrou como formatar o documentor com as identações certinhas
--pelo comando do botão direito dentro do arquivo do código
--e opção Format Document ou Shift + Alt + F

--comentou que o Cypress roda em JavaScript que é uma linguagem assíncrona, ou seja, os comandos não rodam exatamente na ordem que escrevemos o código.

--comentou do ícone que parecem 2 folhas de papel
--pra usar como referência pra saber quantos arquivos estão sem salvar

--comentou sobre o grupo do telegram pra acompanhar sobre cypresss
--Cypress Br(telegram)

--falou sobre usar o script do arquivo package.json como atalho para scripts de execução
  "scripts": {
    "test": "npx cypress run --browser chrome",
    "report": "npx cypress run --record --key 9125553f-55e8-4637-9b07-d53b79d5823b"
  }
-- e executar no terminal como npm run test
--ou npm run report


--mostrou o login no cypress após cadastro
--responder às perguntas e preencher os campos e aplicar next
--e preencher nome do projeto com algum nome de preferência
--e clicar em Create Project
--copiar o projectId apresentado
--e colar no arquivo cypress.config.js dentro de e2e
--e executar via run headless
--para salvar e visualizar os resultados no dashboard do projeto vinculado na nuvem
--esse forma até aqui, apenas executando o npm run test, não executou na nuvem
--então mostrou outra forma
--pegando na aba Runs do cypress open abaixo de Specs
--o comando com o id do projeto
--npx cypress run --record --key 9125553f-55e8-4637-9b07-d53b79d5823b
--colocando esse comando no package.json em scripts como "report"
--e executando no terminal npm run report
--dessa forma apresentou (Cypress Cloud Report) os testes executando na nuvem na aba Run in GitHub Actions\Latest runs
https://cloud.cypress.io/projects/9isk8o/runs/1/overview?roarHideRunsWithDiffGroupsAndTags=1
--e ao clicar sobre a execução, mostrou vários detalhes dos resultados, como artefatos
--comentou que tem 500 execuções free por mês
--e que dependendo do projeto, compensa pagar pra ter o ilimitado
--mostrou que um dos detalhes é o Flaky tests, aqueles duvidosos, que ora passa ora não
--que precisam de revisão e ajustes
--se o dashboard estiver linkado com o github, toda vez que subir alteração, ele roda automaticamente

--falou sobre Page Objects
--desenhou e apresentou o conceito
--A ideia do PageObject é separar os elementos em arquivos diferentes baseados nas páginas em que eles aparecem, assim, escrevemos todos os elementos e métodos específicos daquela página em seu arquivo que é uma classe e usamos diretamente nos scripts de teste.
--lembrei das camadas de implementação do selenium, a camada BDD (cucumber), a camada das chamadas dos métodos, a camada dos elementos mapeados e seus métodos e a camada do utils

--mostrou na prática como estruturar implementação com Page Objects (PO)
--criando na pasta support, a pasta pages e os arquivos dentro dela
--cadastro.page.js e login.page.js pra conter os elementos mapeados e métodos
--e na pasta web o arquivo cadastro-com-pages.cy.js pra conter os testes que usam os elementos e métodos das pages
--no arquivo cadastro-com-pages.cy.js importou a page
import CadastroPage from '../../support/pages/cadastro.page'
--e o comando "export default new CadastroPage;" no fim do arquivo cadastro-com-pages.cy.js
--comentou que se precisar ocultar alguns itens da página e exportar apenas alguns
--pode se fazer algo como "export default new CadastroUsuarioAdmin(); CadastroUsuarioNaoAdmin();"

--mostrou outra forma de concatenar a string com Date.now() com a crase, $ e {}
--var email = `teste${Date.now()}@teste.com`
--e que poderia ao invés de usar var, usar let ou const

--publicou as novas implementações no github


 23-05-2024

--criamos o arquivo produtos-api.cy.js dentro da pasta api

--explicou que em um projeto no mercado, não faria dessa forma separado em pasta
--web e api. Ele separa o projeto inteiro, um pra web e outro pra api

--executamos o comando 'npx serverest' no prompt cmd para usar o localhost

--mostrou o cy.request para o GET
--mostrou como abrir o inspecionar navegador do cypress open pra ver no console
--os resultados das execuções dos testes de api
--clicando sobre a execução referente ao request na lista de execuções
--e em Console expandir o item Yielded pra ver o response
--passou os parâmetros method e url para o GET

--mostrou o .then((response)) pra validar o response body
--explicou que por ser assíncrono, precisa colocar no then
--pra primeiro ele acessar a url com o método indicado
--pra depois validar o body

--mostrou o expect dentro do then pra validar resultado esperado
--expect(response.status).to.equal(200)
--expect(response.duration).to.be.lessThan(1500)
--expect(response.body).to.have.property('produtos')

--mostrou o teste para o método 'POST' cadastrar produto
--com um dos parâmetros sendo o 
headers: {
                authorization: this.token

            }

--mostrou o teste para o método 'PUT' alterar produto

--mostrou o teste para o método 'DELETE' excluir produto

--criou um método customizado pra logar e pegar o token e retornar
--e usou esse token no beforeEach e referenciou nos testes this.token

--usou dado dinâmico pro nome do produto pra evitar msg de produto já cadastrado

--usou uma varável pra guardar a urlBase e usou nos testes

--criou um método customizado pra cadastrar produto e usar nos testes de 
--alteração de produto e de exclusão de produto

--usou fixture pra ocultar os dados de login

--comentou que ao usar o alias cy.token(urlBase, dadosUsuario.email, dadosUsuario.senha).as('token')
--para guardar o token retornado pelo método customizado
--que ele não funciona bem com o arrow function (=>) usado nos its
--precisa usar ao invés de => usar function()

--publicou no git as novas implementações


24-05-2024

--explicou diferença entre var, const e let: A principal diferença entre var e let é o escopo. Variáveis declaradas com var têm escopo global ou de função, enquanto variáveis declaradas com let têm escopo de bloco. A principal diferença entre var e const é a mutabilidade

--mostrou conteúdo conceitual de BDD, gherkin

--mostrou o uso do cucumber na prática

--comentou que gherkin não é caso de teste, que deve prever ação de comportamento de 
--forma declarativa e não imperativa, dando visão de cenário, conciso e direto ao ponto

--mostrou a doc do cucumber em cucumber.io

--criou uma feature de calculadora

--instalou a extensão Cucumber (Gherkin) Full Support

--aproveitou um projeto já iniciado pra mostrar a prática do cucumber com js

--rodou o projeto com apenas os cenários em cucumber

--aproveitou as sugestões de implementações do cucumber e implementou em js
--contendo cenário, esquema de cenário, contexto

--mostrou a criação do arquivo .feature a partir da história 004 Cadastro de Produtos


27-05-2024

--mostrou um projeto base pra fazermos cópia
--acessando https://github.com/fabioaraujoqa/template-cy-cucumber
--clicando em Fork, ajustando o nome se desejado
--clicando em Create fork
--clicando em Code, aba Local
--copiando o endereço
--acessando a pasta repository no terminal
--aplicando o comando git clone + o endereço copiado

--no vscode, abrimos o projeto clonado
--via menu File\Open Folder e selecionando a pasta do projeto clonado

--no terminal do vscode, aplicamos o comando npm install para instalar as dependências

--mostrou a estrutura de pastas do projeto clonado
--onde tem a pasta features em \e2e
--e a pasta step_definitions em \support

--mostrou o README

--aplicamos o comando npx cypress open

--explicou que se alterar a sentença no arquivo feature
--precisar mudar também o nome do método em step_definitions, senão ocasiona em erro
--as palavras-chave (parâmetros) tudo bem mudar

--criamos os arquivos login.feature em \e2e e login.step.js em \support\step_definitions
--implementamos testes de login usando fixture pra proteger os dados de login
--usamos método customizado em commands.js para o login
--criamos testes com contexto e esquema do cenário

--fizemos também testes para cadastro de produto

--mostrou como ocultar a senha do log na execução
--cy.get('[data-testid="senha"]').clear().type(senha, {log: false})

--pediu pra instalar o plugin pra sugestão de métodos step definitions
--Cucumber Step Definition Generator

--após ter instalado o plugin, definir corretamente o arquivo .feature e salvar
--ao clicar com o botão direito do mouse dentro da feature
--deve aparecer as opções para generate step definition
--daí é só usar as sugestões para o arquivo .step.js e continuar implementando

--mostrou que os métodos step definitions tem a mesma estrutura dos its
--e que dá pra fazer manualmente se precisar

--colocou no cypress.config a baseUrl

--mostrou como marcar os cenários no arquivo .feature com tags
--@critico e depois via comando executar apenas os testes com essa tag

--mostrou que ao pegar a sugestão de método do cucumber
--quando tem passagem de parâmetro, às vezes ele monta com o tipo de dado {any}
--e precisa ajustar conforme o dado desejado, ex: {string}, {int}

--criou dado dinâmico para o nome do produto para evitar o erro de produto já existente
--usando a variável ${nome} passada como parâmetro + ${Date.now()}

--mostrou as configurações que fez no projeto base no arquivo cypress.config.js
--e package.json

--comentou que algumas configurações e plugins mudaram do ano passado pra esse ano

--publicou as novas implementações no git


28-05-2024

--ajustou erro de execução dos testes do projeto cy-cucumber

--mostrou como marcar os cenários no arquivo .feature com tags @critico, @baixo
--mostrou no arquivo cypress.config.js a config dentro de e2e
    env: {
      TAGS: 'not @ignore',
    }

--mostrou como executar headless usando os scripts do arquivo package.json
--com cada tag conforme configurado
--"test:critico": "npx cypress run --env TAGS='@critico' --browser chrome"
--daí usar o comando atalho no terminal: npm run test:critico
--ou usar o comando direto npx cypress run --env TAGS='@critico' --browser chrome

--explicou sobre DevOps, que é uma combinação das palavras "Development"
--e Operations. É uma metodologia que promove a colaboração entre equipes de
--desenvolvimento de software e operações de TI com o objetivo de entregar software
--de alta qualidade de forma mais rápida e eficiente

--mostrou um Pipeline de Desenvolvimento
--Codificação -> Source Control (des ágil) -> Build e Teste (CI) -> Release (CD) -> Deploy e Teste (Continuous Deployment) -> Operação e Monitoria (DevOps)

--mostrou um Pipeline de Teste
--Um pipeline de CI/CD(Continuous Integration/Continuous Delivery) é um pipeline
--de implantação integrado a ferramentas de automação e fluxo de trabalho aprimorado
--Dev/QA -> Version Control -> Build -> Unit Test -> Deploy -> Auto Test -> Deploy to Production

--mostrou como configurar o Allure Reports
--https://allurereport.org/docs/
--mostrou a demo

--abrimos o projeto serverest-test no vscode
--acessamos em https://allurereport.org/docs/ o menu Install & Upgrade
--e Install Allure Report for Windows
--https://allurereport.org/docs/install-for-windows/
--no item Install from an archive, clicamos em "the latest Allure Report release on GitHub"
--no item Assets, clicamos na versão .zip
--descompactamos em alguma pasta do C: (C:\Users\gialves\allure-2.29.0)
--copiamos o caminho da pasta bin (C:\Users\gialves\allure-2.29.0\allure-2.29.0\bin)
--acessamos no menu iniciar "Edit environment variables for your account"
--clicamos em Path na parte superior e em Edit
--clicamos em New, colamos o caminho copiado e clicamos em OK e OK

--confirmamos se estava ok através do cmd e o comando allure --version

--adicionamos o script "allure:report": "npx allure serve allure-results"
--no arquivo package.json em scripts

--mostrou que em https://allurereport.org/docs/ tem passo a passo pra várias linguagens/tools
--e que seguiríamos o https://allurereport.org/docs/cypress/

--executamos no terminal do vscode o comando
--npm install --save-dev allure-commandline
--e mostrou que após execução desse comando, apareceu no arquivo package.json
--em "devDependencies", a linha "allure-commandline"

--executamos no terminal do vscode o comando
--npm install --save-dev allure-cypress 
--e mostrou que após execução desse comando, apareceu no arquivo package.json
--em "devDependencies", a linha "allure-cypress"

--no arquivo cypress.config.js, adicionamos a linha no topo do arquivo
--const { allureCypress } = require("allure-cypress/reporter");

--ainda no arquivo cypress.config.js, adicionamos em e2e e dentro de setupNodeEvents(on, config)
--a linha 
--allureCypress(on);

--no arquivo support\e2e.js, adicionamos a linha
--import "allure-cypress/commands";

--fez uma execução com "npx cypress run" pra gerar um json
--mostrou que após a execução, foi criada a pasta allure-results

--executou no terminal do vscode o comando 
--npx allure serve allure-results
--e o allure abriu no browser

--comentou que ao para a execução no cmd, o allure para de exibir
--então recomenda executar num terminal separado se precisar manter executando

--startou o localhost pelo comando npx serverest pra passar alguns testes
--e executou o report novamente

--colocou no arquivo .gitignore a linha
--allure-results/

--subiu as últimas alterações
--git add .
--git commit -m "ajustes testes falharam"
--git push origin main

--partimos pra construção do pipeline

--criamos na raiz do projeto no vscode
--a pasta .github
--dentro dela a pasta workflows
--dentro dela o arquivo test-cy.yml

--acessamos em https://github.com/gimaalves/cy-cucumber
--a aba Actions
--pesquisamos por "node" e ENTER
--clicamos em Configure
--copiamos o código apresentado em Preview e clicamos em Cancel changes

--colamos o código copiado no arquivo test-cy.yml e salvamos
--retiramos os comentários do topo do arquivo
--retiramos o trecho
  pull_request:
    branches: [ "main" ]
--retiramos em "node-version" as versões e deixamos apenas 18.x

--no arquivo package.json, criou o script "start": "npx serverest -y"

--retiramos no fim do arquivo, os runs e alteramos para:
    - name: Subir servidor do Serverest
      run: nohup npm run start &
    
    - name: Instalar dependencias do node
      run: npm install -f

    - name: Executar os testes
      run: npm run report

--explicou que precisa ter cuidado com o arquivo .yml pq ele funciona como o Robot Framework
--com identações

--fizemos publicação no git
--git add .
--git commit -m "ci1"
--git push origin main

--e verificamos no git https://github.com/gimaalves/cy-cucumber/tree/main
--que na aba Actions, estava escutando as publicações
--e foi possível ver as execuções do job

--verificamos também a execução no Cypress Cloud Report
--em Latest runs
https://cloud.cypress.io/projects/9isk8o/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-05-29%22%2C%22endDate%22%3A%222024-05-28%22%7D

--mostrou o comando do git para ver o link do repositório
--git remote -v

--e os comandos do git também
--Para remover o repositório atual: git remote rm origin
--Para criar ou conectar em um novo remote : git remote add origin aqui_o_endereo_do_seu_git

--e o comando do git também
--git status
--pra ver como está a branch

--e o comando do git também
--git pull
--pra pegar/baixar as alterações que estão no repositório e não no local

--instalamos o plugin GitHub Actions (com gatinho branco e fundo preto) no vscode
--pra ver as indicações de erro ao editar o arquivo test-cy.yml

--lembrou que antes de fazer as publicações no git
--principalmente quando tem integração contínua
--devemos executar local e ver se passa
--e executar os passos (run) que foram adicionados no arquivo test-cy.yml

--comentou sobre os orquestradores de publicações comuns
--azure devops
--git actions
--bamboo
--jenkins


29-05-2024

Demo Selenium Webdriver + Java

https://miro.com/app/board/uXjVKBn-jTg=/?share_link_id=208176318262

https://github.com/EtechCursos/etech-e2e-web
feito o fork
https://github.com/gimaalves/etech-e2e-web

Prof Marcos Barbosa
11995353005
https://www.linkedin.com/in/marcospbarbosa/



03-06-2024

Fizemos um fork no projeto base https://github.com/fabioaraujoqa/seletores-css
Criamos repositório em nosso perfil
Acessamos a pasta repositório em um terminal
Aplicamos o comando git clone https://github.com/gimaalves/seletores-css
No vscode, abrimos a pasta do projeto
Aplicamos o comando npm install
E o comando npx cypress open

Trabalhamos com várias formas de mapear elemento
Ver https://github.com/gimaalves/seletores-css

Depois, usamos o app
https://www.saucedemo.com/
pra implementar testes end to end

Criamos um projeto novo no github
--mantemos opção Público
--selecionamos opção Add a README file
--em Add .gitignore, selecionamos a opção Node
--e clicamos em Create Repository
https://github.com/gimaalves/test-e2e-saucedemo

Acessamos a pasta repositório em um terminal
Aplicamos o comando git clone e o endereço do projeto criado
No vscode, abrimos a pasta do projeto
Aplicamos o comando npm init - y //criar projeto node (arquivo package.json)
E o comando npm install cypress
E o comando npx cypress open
--no navegador do cypress, selecionamos E2E Testing, browser nativo do cypress Electron, opção next (incluindo opção Scaffold example specs) até chegar ao projeto com as specs

Removemos a pasta 2-advanced-examples
Movemos o arquivo todo.cy.js para a pasta raiz e2e
Removemos a pasta 1-getting-started
Alteramos o arquivo todo.cy.js para test-e2e-produto.cy.js

Implementamos o teste ponta a ponta de pedido e o otimizamos
Criamos o describe
Criamos a baseUrl no arquivo de configuração
Criamos o beforeEach pra acessar a url cy.visit("/")
Criamos o teste e2e (it)
Ver https://github.com/gimaalves/test-e2e-saucedemo

Conteúdo programático

Dia 1
Introdução ao Teste de Software
Criação de plano de testes usando mapa mental
Criação de casos de testes com base em estratégia de testes partição de equivalência, análise de valor limite, tabela de decisão e história de usuário

Dia 2
Execução de código java script no navegador
API - parte teórica
Requisições no network do navegador
Status code e significados
Principais Métodos HTTP GET, POST, PUT, DELETE
Contrato (payload), informações enviadas e recebidas nas requisições
O que testar em API
O que precisa instalar pra seguir com o curso
Formas de documentação de API: swagger e outras
Introdução ao Postman
Operações nas APIs pelo swagger

Dia 3
Mais detalhes do Postman
Prática com o Postman - Nova Collection
Prática com o Postman - Criação de requisição GET
Prática com o Postman - Criação de Testes usando Snippets para req GET
Métodos do Postman de geração de dados randômicos
Prática com o Postman - Criação de requisição POST
Prática com o Postman - Criação de Testes usando Snippets para req POST
Criação de ambiente e de variável de ambiente baseUrl
Overview sobre listas/arrays e código java script como exemplo de lista iniciando em zero
Introdução à execução de collection

Dia 4
Prática com o Postman - Criação de requisição PUT
Prática com o Postman - Criação de Testes usando Snippets para req PUT
Prática com o Postman - Criação de requisição DELETE
Prática com o Postman - Criação de Testes usando Snippets para req DELETE
Mais detalhes da execução de collection
Exportação de collection e ambiente
Instalação e execução via linha de comando com o Newman
Geração de report com o Newman html extra
Importação e execução de collection
Introdução ao Cypress
Criação de projeto e início no VSCODE
Instalação do Cypress e abertura da interface web do cypress
Estrutura de pastas e arquivos no Cypress
Criação e execução primeiro teste em cypress

Dia 5
Criação de repositório no Git
Vínculo do repositório git a um novo projeto cypress
Início de novo projeto cypress web
Criação de testes na prática pra aplicação serverest
Apresentação de métodos Before, Before Each, After, After Each
Apresentação de método para screenshot
Parametrização da Base Url no arquivo config e uso nos testes
Captura de elementos para uso nos métodos
Métodos de espera
Publicação das implementações no git

Dia 6
Método Datenow() para geração de dado dinâmico
Uso da biblioteca @faker-js/faker para geração de dado dinâmico
Uso das opções .only e .skip pra rodar apenas aquele teste ou pulá-lo
Execução com gravação de vídeo
Configuração de pastas no arquivo .gitignore a serem descartadas nas publicações
Testes horizontais(E2E) e verticais(sprint)
Criação de métodos customizados em commands.js e uso nos testes

Dia 7
Criação de arquivo .json em fixture e uso nos testes por importação e por forma nativa do cypress
Formatação do documento para melhor identação do código
Criação de scripts no arquivo package.json e uso nas execuções em CLI (linha de comando)
Configuração de perfil e id de projeto cypress pra dashboard na nuvem (Cypress Cloud Report)
Page Objects - conceito
Page Objects - prática
Concatenação de string com métodos e variáveis


Dia 8
Criação de projeto cypress pra teste de api
Método cy.request para GET
Execução de teste de api e verificação no console do navegador expandindo o item Yielded pra ver o response
Validações do response body com .then((response)) e vários expects
Método cy.request para POST
Método cy.request para PUT
Método cy.request para DELETE
Mais métodos customizados
Uso de alias pra retorno de método customizado e uso de function() ao invés de arrow function =>

Dia 9
Variáveis var, let e const
Conceito de BDD e Gherkin
Apresentação do Cucumber e sua documentação
Criação de features
Cucumber com js na prática com cenários, esquemas de cenários e contexto

Dia 10
Fork em projeto no Git cypress com cucumber e link com repositório local
Detalhes das implementações das setenças do cucumber com o método em step definitions
Criação de vários testes para as histórias
Uso de {log: false} para ocultar dado no log de execução
Ajustes de parâmetros de any pra string e outros dos métodos em step definitions

Dia 11
Uso de tags nos cenários das features e na execução dos testes
Execução em modo headless usando scripts do arquivo package.json
Introdução a DevOps
Pipeline de Desenvolvimento
Pipeline de Teste
Configuração do Allure Reports
Execução de testes e geração do allure report
Construção de Pipeline de Teste via GitHub Actions
Publicação no Git e verificação de execução dos jobs de integração contínua
Execução dos testes e geração do Cypress Cloud Report
Comandos do Git
Orquestradores de publicações comuns

Dia 12
Demo Selenium Webdriver + Java

Dia 13
Mapeamento de elementos web
Implementação de testes E2E
Otimização dos testes








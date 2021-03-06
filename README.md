![](https://alurakut.vercel.app/logo.svg)
# Vamos reviver o Orkut?

![](https://img.shields.io/badge/License-MIT-blueviolet)
![](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/NEXT.js-000000?style=flat&logo=nextdotjs&logoColor=white)


---
## Tabela de Conteúdos
* [Sobre o Projeto](#sobre-o-projeto)
* [Live Preview](#live-preview)
* [Conteúdo abordado na imersão](#conteúdo-abordado-na-imersão)
    * [Aula 1 - Components com React, Styled Components e NextJS](#aula-1---components-com-react-styled-components-e-nextjs)
    * [Aula 2 - React, State e o primeiro Formulário](#aula-2---react-state-e-o-primeiro-formulário)
    * [Aula 3 - Hooks no React, useEffect e protocolo HTTP](#aula-3---hooks-no-react-useeffect-e-protocolo-http)
    * [Aula 4 - Requisições com GraphQL, BFF e AJAX](#aula-4---requisições-com-graphql-bff-e-ajax)
    * [Aula 5 - Sistema de Login](#aula-5---sistema-de-login)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Como executar o projeto](#como-executar-o-projeto)
    * [Pré-requisitos](#pré-requisitos)
    * [Executando o projeto](#executando-o-projeto)
* [Licença](#licença)


---
## Sobre o Projeto

Desenvolvido durante a [Imersão React da Alura](https://www.alura.com.br/imersao-react).


---
## Live Preview
[Clique aqui](https://alurakut-diogo-alves.vercel.app/) e relembre os anos dourados da internet brasileira!


---
## Conteúdo abordado na imersão
* ### Aula 1 - Components com React, Styled Components e NextJS
    - Como iniciar o projeto com o comando 'create-next-app';
    - Criação de components com React usando styled-components;
    - Organização das pastas do projeto;
    - Passagem de propriedades (props) para componentes;
    - Realização do deploy do projeto na Vercel.

* ### Aula 2 - React, State e o primeiro Formulário
    - O que é uma SPA;
    - Utilidade do hook useEffect;
    - Criação de formulário para cadastrar comunidades;
    - Deploy das alterações do projeto na Vercel.
    
* ### Aula 3 - Hooks no React, useEffect e protocolo HTTP
    - Entendendo um pouco melhor o funcionamento do protocolo HTTP;
    - Consumindo API do Github usando fetch para preencher os amigos/seguidores;
    - Conhecendo Promises e como lidar com JSON;
    - Usando o hook useEffect para lidar com código assíncrono;
    - Conhecendo o DatoCMS, o CMS utilizado para gerenciar o cadastro das comunidades;
    - Como funciona a criação de um model no DatoCMS;
    - Cadastramento das comunidades pela interface do DatoCMS.
    
* ### Aula 4 - Requisições com GraphQL, BFF e AJAX
    - Entendendo o que é XML e AJAX;
    - Criando queries GraphQL para consumir dados do DatoCMS;
    - Desenvolvendo um BFF (Back-end For Front-end) para proteger os dados ao enviá-los para o servidor;
    - Criação das comunidades pela interface da aplicação.
    
* ### Aula 5 - Sistema de Login
    - Criação da página de Login;
    - Roteamento com Next.js;
    - Como funciona o redirecionamento de páginas;
    - Formulários com gerenciamento de estados do input;
    - Salvando cookies com o padrão JWT para autenticar o usuário da aplicação;
    - Como decodificar o token gerado para mostrar a Home apenas para usuários autenticados;


---
## Tecnologias utilizadas

- **[ReactJS](https://reactjs.org/)**
- **[styled-components](https://styled-components.com)**
- **[NextJS](https://nextjs.org/)**


---
##  Como executar o projeto

### Pré-requisitos
- Ter o [Git](https://git-scm.com/) instalado.
- Ter a versão mais recente do [nodeJS](https://nodejs.org/) instalada.


### Executando o projeto

```
# Clone este repositório
$ git clone https://github.com/diogo-alves/alurakut.git

# Acesse a pasta do projeto
$ cd alurakut

# Instale as dependências
$ npm install

# Execute o projeto
$ npm run dev
```


---
## Licença
Este projeto está sob a licença [MIT](./LICENSE) | Feito com ❤️ por Diogo Alves
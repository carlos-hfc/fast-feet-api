<p align="center">
  <img src="https://img.shields.io/badge/node-v18.18.2-339933?style=flat&logo=nodedotjs&logoColor=%23339933" />
  <img src="https://img.shields.io/badge/npm-v9.8.1-CB3837?style=flat&logo=npm" />
  <img src="https://img.shields.io/badge/feito_por-Carlos_Faustino-black" />
</p>

# :bulb: Sobre

A **Fast Feet** é uma aplicação para controle de encomendas de uma transportadora desenvolvido no módulo sobre API REST da formação de Node.js da Rocketseat.

## :page_with_curl: Pré-requisitos

1. Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. 
    <a href="https://nodejs.org">
      <img width="24" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
    </a>

## :gear: Configuração

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/carlos-hfc/fast-feet-api
```

2. Acesse o diretório do projeto:

```bash
cd fast-feet-api
```

3. Instale as dependências:

```bash
npm install
```

4. Rode a aplicação

```bash
npm run dev
```

## :computer_mouse: Features

### Requisitos funcionais

- :ballot_box_with_check: A aplicação deve ter dois tipos de usuário, entregador e/ou admin
- :ballot_box_with_check: Deve ser possível realizar login com CPF e Senha
- :ballot_box_with_check: Deve ser possível realizar o CRUD dos entregadores
- :ballot_box_with_check: Deve ser possível realizar o CRUD das encomendas
- :ballot_box_with_check: Deve ser possível realizar o CRUD dos destinatários
- :ballot_box_with_check: Deve ser possível marcar uma encomenda como aguardando (Disponível para retirada)
- :ballot_box_with_check: Deve ser possível retirar uma encomenda
- :ballot_box_with_check: Deve ser possível marcar uma encomenda como entregue
- :ballot_box_with_check: Deve ser possível marcar uma encomenda como devolvida
- :ballot_box_with_check: Deve ser possível listar as encomendas com endereços de entrega próximo ao local do entregador
- :ballot_box_with_check: Deve ser possível alterar a senha de um usuário
- :ballot_box_with_check: Deve ser possível listar as entregas de um usuário
- :ballot_box_with_check: Deve ser possível notificar o destinatário a cada alteração no status da encomenda

### Regras de negócio

- :ballot_box_with_check: Somente usuário do tipo admin pode realizar operações de CRUD nas encomendas
- :ballot_box_with_check: Somente usuário do tipo admin pode realizar operações de CRUD dos entregadores
- :ballot_box_with_check: Somente usuário do tipo admin pode realizar operações de CRUD dos destinatários
- :ballot_box_with_check: Para marcar uma encomenda como entregue é obrigatório o envio de uma foto
- :ballot_box_with_check: Somente o entregador que retirou a encomenda pode marcar ela como entregue
- :ballot_box_with_check: Somente o admin pode alterar a senha de um usuário
- :ballot_box_with_check: Não deve ser possível um entregador listar as encomendas de outro entregador

## :computer: Tecnologias utilizadas

<p float="left">
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
</p>

## :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
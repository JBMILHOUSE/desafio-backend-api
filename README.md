## :clipboard: Sobre o Projeto

Essa API foi construída utilizando Fastify e TypeScript para gerenciar a lista de ganhadores de uma promoção. O banco de dados utilizado é o MongoDB, com validações feitas através do Zod.

## 🛠️ Tecnologias Utilizadas

- **Back-End**
  - Fastify
  - Typescript
  - Mongo
  - Zod

## :pushpin: Rotas
#### POST
- ``/ganhador`` Rota responsavél cadastrar ganhador a lista.

#### GET
- ``/ganhadores``  Listar todos os ganhadores cadastrados, que será consumido pela Seção Ganhadores do front-end.

#### DELETE
- ``/ganhador/:id`` Rota que permite remover um ganhador específico utilizando seu ID.

## 🚀 Como Utilizar

### Passo a Passo

```
# Clone este repositório
> git clone https://github.com/JBMILHOUSE/desafio-backend-api.git

# Acesse a pasta do projeto qual terminal de sua preferência
> cd desafio-backend-api 

# Instalar as dependências
> npm i

# Iniciar a aplicação
> npm run dev

```

A aplicação estará disponível em `http://localhost:3333`.

---

<h4 align="center">
    Made with 💜 by <a href="https://br.linkedin.com/in/chris-oliveira-alexandre/" target="_blank">Chris</a>
</h4>
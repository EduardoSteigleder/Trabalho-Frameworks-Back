# Trabalho Frameworks Back

## Descrição

Este projeto consiste em uma API backend desenvolvida em Node.js utilizando o framework Express. A aplicação foi criada com o objetivo de praticar conceitos de desenvolvimento backend, organização de rotas, comunicação entre servidor e banco de dados, e implementação de operações básicas de um sistema CRUD.

A API permite criar, consultar e deletar registros em um banco de dados relacional, respondendo a requisições HTTP de forma simples e organizada. As rotas são separadas por responsabilidade, facilitando a manutenção e o entendimento do código.

## Tecnologias utilizadas

- **Node.js**, ambiente de execução JavaScript no servidor  
- **Express**, framework para criação e gerenciamento de rotas HTTP  
- **Banco de dados relacional**, utilizado para persistência dos dados  
- **Insomnia / Postman**, para teste das rotas e requisições da API  

## Funcionalidades

A API disponibiliza endpoints que permitem:

- Criar novos registros no banco de dados  
- Consultar registros existentes  
- Deletar registros  
- Verificar o status da aplicação através de uma rota de teste  

As funcionalidades seguem o padrão básico de um CRUD, utilizando métodos HTTP como GET, POST e DELETE.

## Estrutura do projeto

- `server.js`, arquivo principal responsável por iniciar o servidor e configurar a aplicação  
- `routes/`, pasta onde ficam definidas as rotas da API  
- `banco.sql`, arquivo com a estrutura do banco de dados e tabelas utilizadas  
- Arquivo de exportação do Insomnia, utilizado para facilitar os testes das rotas  

## Como utilizar a API

Após iniciar o servidor, a API ficará disponível em `http://localhost:3000`.  
As requisições podem ser feitas utilizando ferramentas como Insomnia ou Postman.

### Exemplos de uso das rotas

- **GET /health**  
  Utilizada para verificar se a API está em execução  
  Retorna um status simples confirmando que o servidor está ativo  

- **GET /registros**  
  Retorna a lista de registros armazenados no banco de dados  

- **POST /registros**  
  Utilizada para criar um novo registro  
  Os dados devem ser enviados no corpo da requisição em formato JSON  

  Exemplo:
  ```json
  {
    "nome": "Exemplo",
    "descricao": "Registro de teste"
  }

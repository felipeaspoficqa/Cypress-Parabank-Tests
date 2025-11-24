# 🧪 Cypress - Parabank Tests

Este repositório contém testes automatizados desenvolvidos com Cypress, utilizando boas práticas como organização por pastas, Page Objects e cenários focados no fluxo principal do site Parabank.

---

## 🚀 Tecnologias usadas

- Node.js
- Cypress
- JavaScript

---

## 📁 Estrutura do projeto

    cypress/
    ├── e2e/ → Arquivos de testes
    ├── fixtures/ → Massa de dados 
    ├── pages/ → Page Objects (ações e seletores)
    ├── support/ → Comandos personalizados e config global
    cypress.config.js → Configurações do Cypress
    package.json → Dependências do projeto


---

## ▶️ Como rodar o projeto

### 1. Instalar dependências

Faça o clone do repositório e instale as dependências:

```bash
npm install
```
2. Abrir a interface do Cypress

 ```bash
npx cypress open
```
3. Rodar em modo headless (terminal)

 ```bash
npx cypress run
```

## 🧱 Page Objects

A pasta cypress/pages/ contém classes que abstraem:

  - seletores

  - ações de interface (ex: clicar, preencher dados)

  - funções reutilizáveis entre testes

Isso deixa os testes mais limpos e fáceis de manter.

## 📌 Boas práticas adotadas

  - Organização recomendada pela documentação do Cypress

  - Page Objects para reuso de ações

  - Uso de beforeEach e afterEach para preparar o estado dos testes

  - Configurações centralizadas no cypress.config.js

## 📝 Observações
  - Projeto foi interrompido devido ao reset do ambiente, mas mantido no GitHub como registro de estudo.
  - Este projeto é didático. A aplicação Parabank reseta usuários e dados periodicamente, então os testes quebram com o tempo.

## 🙋‍♂️ Autor

Projeto criado por Felipe Rodrigues para estudo e prática de automação com Cypress.

## 📝 Licença
Este projeto é apenas para fins de estudo e não possui licença oficial.

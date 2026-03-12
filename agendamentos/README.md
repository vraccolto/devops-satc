# 📅 Organizador de Agendamentos

## 📖 Sobre o Projeto

O **Organizador de Agendamentos** é uma aplicação web desenvolvida em **React.js** com o objetivo de permitir que usuários registrem e visualizem serviços agendados de forma simples.

O sistema permite cadastrar informações básicas de um serviço e visualizar os registros em formato de listagem.

Este projeto foi criado como um **mini sistema de gerenciamento de serviços**, podendo ser evoluído futuramente para uma aplicação completa com banco de dados, autenticação e API.

---

# 🚀 Funcionalidades

Atualmente o sistema permite:

* ✅ Cadastrar um novo serviço
* ✅ Informar a data de execução
* ✅ Informar o valor do serviço
* ✅ Listar os serviços cadastrados em tela
* ✅ Interface simples e intuitiva

Funcionalidades planejadas para futuras versões:

* 🔜 Editar agendamentos
* 🔜 Excluir agendamentos
* 🔜 Salvar dados em banco de dados
* 🔜 Filtro por data
* 🔜 Ordenação de serviços
* 🔜 Integração com API backend
* 🔜 Autenticação de usuários

---

# 🛠️ Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

* **React.js** – Biblioteca JavaScript para construção de interfaces
* **Vite** – Ferramenta de build e desenvolvimento rápido
* **JavaScript**
* **HTML5**
* **CSS3**
* **Node.js** – Ambiente de execução necessário para rodar o projeto

---

# 📂 Estrutura do Projeto

```
agendamento-servicos
│
├── public
│
├── src
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

# ⚙️ Como executar o projeto

## 1 Pré-requisitos

Antes de começar você precisa ter instalado:

* Node.js
* npm ou yarn
* VSCode (opcional, mas recomendado)

---

## 2  Instalar dependências

```
npm install
```

---

## 3 Rodar o projeto

```
npm run dev
```

O sistema estará disponível em:

```
http://localhost:5173
```

---

# 📋 Como usar o sistema

1. Preencha o **nome do serviço**
2. Escolha a **data de execução**
3. Informe o **valor do serviço**
4. Clique em **Cadastrar**

O serviço será exibido automaticamente na lista de agendamentos.

---

# 📌 Exemplo de uso

| Serviço         | Data       | Valor  |
| --------------- | ---------- | ------ |
| Corte de grama  | 20/03/2026 | R$ 120 |
| Limpeza piscina | 22/03/2026 | R$ 200 |

---

# 🔮 Melhorias futuras

Algumas melhorias planejadas para evolução do projeto:

* Implementar persistência de dados com **LocalStorage**
* Criar API backend com Node.js
* Adicionar banco de dados (MySQL ou PostgreSQL)
* Criar sistema de login
* Adicionar calendário visual
* Implementar notificações de agendamento

---

# 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática de desenvolvimento front-end utilizando React.


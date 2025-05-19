# Talent_Flow
# Sistema de Gestão de Cursos

Este projeto foi desenvolvido por uma equipe com foco em arquitetura escalável, responsividade e integração via API com foco em frontend . A aplicação visa gerenciar cadastros de cursos, autenticação de usuários e coleta de feedbacks, utilizando tecnologias modernas.

## 🎯 Objetivo

Implementar uma interface gráfica que permita a interação do usuário com as funcionalidades já definidas nas etapas do projeto, utilizando boas práticas de design de interface, acessibilidade e responsividade.

---

## 🧠 Tecnologias Utilizadas

- **Vue.js 3**  
  Framework progressivo para construção de interfaces web modernas e reativas.  
   [https://vuejs.org](https://vuejs.org)

- **Vite**  
  Ferramenta de build ultrarrápida para projetos front-end modernos.  
  [https://vitejs.dev](https://vitejs.dev)

- **Vue Router**  
  Gerenciador de rotas oficial do Vue.js para navegação de páginas SPA.  
  [https://router.vuejs.org](https://router.vuejs.org)

- **Axios**  
  Cliente HTTP baseado em Promises, utilizado para consumir APIs RESTful.  
  [https://axios-http.com](https://axios-http.com)

- **Bootstrap 5**  
  Framework CSS para estilização responsiva, compatível com componentes Vue.  
  [https://getbootstrap.com](https://getbootstrap.com)

- **Bootstrap Icons**  
  Conjunto de ícones vetoriais integrável com Vue e Bootstrap.  
   [https://icons.getbootstrap.com](https://icons.getbootstrap.com)

---

## 📁 Estrutura do Projeto

```
src/
├── components/ # Componentes reutilizáveis (Navbar, etc.)
├── views/ # Páginas principais da aplicação
│ ├── Login.vue
│ ├── Dashboard.vue
│ ├── CadastroCurso.vue
│ ├── Feedback.vue
│ └── ListagemCursos.vue
├── services/ # Configuração da instância do Axios
│ └── api.js
├── router/ # Configuração de rotas
│ └── index.js
├── App.vue # Componente raiz
└── main.js # Ponto de entrada da aplicação

```
---

## 🔐 Funcionalidades

- Login com autenticação e armazenamento de token.
- Navegação segura com proteção de rotas (Vue Router).
- Cadastro de cursos com integração a API.
- Feedback do usuário com persistência de dados.
- Interface totalmente responsiva e amigável.

---

## 🚀 Como Executar

1. Clone o repositório:
```
git clone https://github.com/Eduardo-system/Talent_Flow.git
cd Talent_Flow
```
2. Instale as dependências:

```
npm install
```
3. Inicie o servidor de desenvolvimento:

```
npm run dev
```
## 🤝 Equipe


Este projeto foi desenvolvido por uma equipe ínterdisciplinar com foco em design de software, usabilidade e interaçao frontend, esta arquitetura adota princípios de componentização, isolamento de responsabilidades e escalabilidade.


## 📄 Licença

Este projeto está sob a licença MIT.

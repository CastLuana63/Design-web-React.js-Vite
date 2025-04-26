# Design web - React.js + Vite

Este é um protótipo de site desenvolvido utilizando **React.js** com **Vite**, com foco em um layout responsivo e carrosséis de imagens.

## 📋 Sobre o Projeto

- Projeto construído em React JS com Vite.
- Utiliza componentes reutilizáveis para cabeçalhos, sessões e carrosséis.
- Implementação de carrossel arrastável manualmente no desktop.
- Layout responsivo com adaptação para telas menores (carrossel em mobile e galeria em desktop).
- Estilização feita em **CSS** puro.
- Imagens gerenciadas por um módulo dedicado `imagens.js`.
- Componente de botão de **Feedback** flutuante.

## 🚀 Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CSS3](https://html5css3.com.br)

## 📁 Estrutura de Arquivos

```plaintext
/src
 ├── components/
 │    ├── headerTopDesktop/
 │    │     ├── headerTopDesktop.jsx
 │    │     ├── headerTopDesktop.css
 │    ├── header/
 │    ├── headerSessao/
 │    ├── cardCarousel/
 ├── utils/
 │    └── imagens.js
 ├── pages/
 │    └── home/
 │          ├── Home.jsx
 │          ├── home.css
 ├── assets/
 │    ├── logo.png
 │    ├── logo2.png
 │    ├── exemplo1.png
 │    ├── exemplo2.png
 │    ├── exemplo3.png
 │    ├── exemplo4.png
 │    ├── exemplo5.png
 │    ├── exemplo6.png
 │    ├── exemplo7.png
 │    ├── exemplo8.png
```

## ✨ Funcionalidades Principais

- **HeaderTopDesktop**: menu de links rápidos para outras marcas/grupos.

- **Header e HeaderSessao**: placeholders de cabeçalhos principais da página
- **CardCarousel**: carrossel de cartões (em desenvolvimento).
- **Seções de Imagens:**
  > - No desktop: imagens lado a lado.
  > - No mobile: carrossel rolável manualmente.
- **Botão Feedback**: botão fixo na tela para coleta de feedback do usuário.

## 🖌️ Estilização

- Layout responsivo com **media queries**.
- Barra de rolagem customizada para o site.
- Carrossel escondido no desktop e ativado no mobile.
- Botão de feedback animado com efeito hover.

## 📷 Imagens

- Todas as imagens são importadas via o arquivo `utils/imagens.js` para melhor organização.
- Exemplo de importação:

## ⚙️ Como Rodar Localmente

1. **Clone o repositório:**

   > `git clone https://github.com/seu-usuario/seu-projeto.git`

2. **Instale as dependências:**

   > `npm install`

3. **Rode o projeto:**
   > `npm run dev`

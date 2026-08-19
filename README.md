# 🏋️ GymFlow

> Crie, organize e execute suas fichas de treino na palma da mão. Um Progressive Web App (PWA) leve, responsivo e 100% offline.

---

## ⚡ Sobre o Projeto

O **GymFlow** foi desenvolvido para resolver o atrito de anotar e gerenciar treinos durante a rotina de musculação. Sem a necessidade de instalar frameworks pesados ou depender de conexão contínua com a internet, o aplicativo funciona de maneira fluida e nativa diretamente pelo navegador ou instalado como app no smartphone.

---

## 🚀 Principais Funcionalidades

- **📋 Gestão Completa de Fichas:**
  - Criação, edição e exclusão de treinos personalizados.
  - Seleção ágil por grupos musculares sugeridos ou definição personalizada.
  - Duplicação de treinos para criar variações rapidamente (ex.: Treino A e Treino B).
  - Reordenação intuitiva de exercícios via toque/arrasto (*Drag & Drop* com ícone `⋮⋮`).

- **📚 Catálogo Anatômico Integrado:**
  - Filtros estruturados por **Região Corporal**, **Grupo Muscular** e **Foco Anatômico**.
  - Mais de 40 exercícios populares cadastrados com suporte a exercícios personalizados.

- **⏱️ Modo de Execução em Tempo Real:**
  - Visualização focada durante a sessão na academia.
  - Checklists de séries concluídas com inputs rápidos para ajuste de carga e repetições reais.
  - Cronômetro de descanso automático com alertas táteis (vibração háptica) e sonoros via Web Audio API.

- **📊 Histórico e Volume:**
  - Registro automático das sessões concluídas com duração total, séries realizadas e tonelagem levantada.
  - Acompanhamento de carga máxima atingida por exercício.

- **📱 PWA & Funcionamento Offline:**
  - Instalável como app nativo no Android e iOS via *Service Worker* e *Web App Manifest*.
  - Persistência local via `localStorage` com suporte a **Exportar** e **Importar Backups** em formato JSON.

---

## 📲 Como Instalar no Smartphone (PWA)

O **GymFlow** não precisa de download pela Play Store ou App Store. Ele é instalado diretamente pelo navegador:

### 🤖 Android (Google Chrome)
1. Acesse o link do projeto pelo Chrome.
2. Toque no aviso **"Adicionar à tela inicial"** que surge na parte inferior.
3. Se o aviso não aparecer, toque nos **três pontinhos (⋮)** no canto superior direito e selecione **"Instalar aplicativo"** (ou *"Adicionar à tela inicial"*).
4. O app será adicionado à sua gaveta de aplicativos com ícone próprio e abrirá em tela cheia.

---

### 🍏 iOS / iPhone (Safari)
1. Abra o link do projeto obrigatoriamente pelo **Safari** *(outros navegadores no iOS não oferecem suporte completo à instalação PWA)*.
2. Toque no botão de **Compartilhar** (ícone do quadrado com a seta para cima, no centro inferior).
3. Role as opções para baixo e toque em **"Adicionar à Tela de Início"**.
4. Confirme o nome tocando em **"Adicionar"** no canto superior direito.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Utilização de Web Components nativos como `<dialog>` e `<search>`.
- **CSS3 Moderno:** Layout responsivo, Grid/Flexbox fluidos para telas mobile (otimizado para 6.1"), suporte a Safe Area e Dark Theme de alto contraste.
- **JavaScript Vanilla (ES6+):** Manipulação reativa do DOM, Web Audio API, Web Storage e Vibration API nativas.
- **PWA Architecture:** Cache offline e ciclo de vida gerenciado via `sw.js` e `manifest.json`.

---

## 📂 Estrutura de Arquivos

```text
GymFlow/
├── assets/
│   └── logo.svg          # Logotipo vetorial oficial
├── exercicios.js         # Catálogo de exercícios e estrutura muscular
├── index.html            # Estrutura e marcação semântica da aplicação
├── manifest.json         # Manifesto PWA com definições de instalação
├── README.md             # Documentação do projeto
├── script.js             # Lógica de negócio, estado, timers e DOM
├── style.css             # Estilização completa e temas
└── sw.js                 # Service Worker para suporte offline
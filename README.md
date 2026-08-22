<div align="center">

# 🏋️ GymFlow

**Gerencie, organize e execute suas fichas de musculação com zero fricção.**  
Um Progressive Web App (PWA) moderno, responsivo, 100% gratuito, sem anúncios e com funcionamento offline nativo.

[![Live Demo](https://img.shields.io/badge/demo-online-b7f531?style=for-the-badge&logo=googlechrome&logoColor=101411)](https://nanzim2.github.io/gymflow/)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25_Offline-181e1a?style=for-the-badge&logo=pwa&logoColor=b7f531)](https://nanzim2.github.io/gymflow/)
[![License: MIT](https://img.shields.io/badge/License-MIT-384438?style=for-the-badge)](LICENSE)

[🔗 Acessar Aplicação](https://nanzim2.github.io/gymflow/) · [📱 Como Instalar](#-instalação-no-smartphone-pwa) · [🛠️ Tecnologias](#-engenharia-e-tecnologias)

</div>

---

## 📸 Demonstração Visual

<div align="center">
  <img src="assets\Tela Inicial GymFlow.jpg" width="24%" alt="Tela Inicial GymFlow" />
  <img src="assets\Ficha de Treino.jpg" width="24%" alt="Ficha de Treino" />
  <img src="assets\Modo Execução.jpg" width="24%" alt="Modo Execução" />
  <img src="assets\Histórico de Sessões.jpg" width="24%" alt="Histórico de Sessões" />
</div>

---

## ⚡ Por que o GymFlow?

Muitos aplicativos de treino impõem barreiras desnecessárias: cadastros longos, telas de assinatura constantes, conexão obrigatória com a internet e interfaces poluídas. 

O **GymFlow** foi projetado com uma filosofia direta ao ponto:
- **Zero Cadastro:** Abra e use imediatamente. Seus dados pertencem a você.
- **Offline-First:** Funciona em academias no subsolo ou sem sinal de operadora.
- **Rápido e Leve:** Sem frameworks pesados; carregamento instantâneo via Vanilla JS.

---

## 🚀 Funcionalidades Principais

- **📋 Gestão Ágil de Treinos:**
  - Criação, edição e exclusão de fichas personalizadas.
  - Seleção por grupos musculares sugeridos ou definição livre de grupos.
  - Duplicação de treinos em 1 toque para criar variações de estímulo (ex.: Treino A1 e A2).
  - Reordenação de exercícios via toque/arrasto (*Drag & Drop*).

- **📚 Catálogo Anatômico Integrado:**
  - Filtros estruturados por **Região Corporal**, **Grupo Muscular** e **Foco Anatômico**.
  - Catálogo nativo com dezenas de exercícios e suporte a exercícios customizados.

- **⏱️ Modo de Execução em Tempo Real:**
  - Checklists de séries concluídas com inputs práticos de repetições e cargas reais.
  - Cronômetro de descanso integrado com alertas táteis (vibração háptica) e bips via Web Audio API.

- **📊 Histórico e Volume de Carga:**
  - Registro de sessões finalizadas com contagem de tonelagem total levantada e tempo decorrido.
  - Monitoramento de carga máxima atingida por exercício.

- **💾 Privacidade e Backups:**
  - Armazenamento 100% local via `localStorage`.
  - Exportação e importação de backups completos em formato JSON.

---

## 📲 Instalação no Smartphone (PWA)

O GymFlow se comporta como um aplicativo nativo no Android e iOS sem passar por lojas de aplicativos:

### 🤖 Android (Google Chrome)
1. Acesse o [link oficial](https://nanzim2.github.io/gymflow/) pelo Chrome.
2. Toque no aviso **"Adicionar GymFlow à tela inicial"** ou abra os **três pontinhos (⋮)** e selecione **"Instalar aplicativo"**.

### 🍏 iOS / iPhone (Safari)
1. Abra o [link oficial](https://nanzim2.github.io/gymflow/) obrigatoriamente pelo **Safari**.
2. Toque no ícone de **Compartilhar** (quadrado com seta para cima).
3. Selecione **"Adicionar à Tela de Início"** e confirme.

---

## 🛠️ Engenharia e Tecnologias

Construído priorizando desempenho máximo, acessibilidade e padrões modernos da Web Platform:

* **HTML5 Semântico:** Uso de tags nativas modernas como `<dialog>` para modais e `<search>` para campos de consulta.
* **CSS3 Avançado:** Grid/Flexbox fluidos, variáveis CSS (design system escuro de alto contraste) e suporte a safe-areas de smartphones (`env(safe-area-inset-bottom)`).
* **JavaScript Vanilla (ES6+):** Sem dependências externas ou bibliotecas pesadas. Manipulação reativa do DOM, Web Audio API para alertas sonoros e Vibration API para retorno tátil.
* **PWA & Cache Strategy:** Ciclo de vida e cache offline estruturado via `Service Worker` e `Web App Manifest`.

---

## 📂 Estrutura do Projeto

```text
GymFlow/
├── assets/
│   └── logo.svg          # Logotipo vetorial oficial
├── exercicios.js         # Catálogo anatômico e mapeamento muscular
├── index.html            # Estrutura semântica e interfaces modais
├── manifest.json         # Configuração de instalação PWA
├── README.md             # Documentação do projeto
├── script.js             # Lógica de negócio, cronômetros e persistência
├── style.css             # Design tokens e folhas de estilo mobile-first
└── sw.js                 # Service Worker e estratégias de cache offline
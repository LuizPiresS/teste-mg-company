# Teste Prático — Sessão Estratégica Digital (MG Company)

> **Segunda Etapa do Processo Seletivo:** Desenvolvimento de Landing Page de Alta Conversão utilizando **HTML5 e CSS3 puro**, com foco em estrutura semântica, hierarquia visual e responsividade total (desktop e mobile).

---

## 🌐 Deploy em Produção

- **Link do Deploy (Vercel):** [https://mg-company-kappa.vercel.app](https://mg-company-kappa.vercel.app)
- **Repositório GitHub:** [https://github.com/LuizPiresS/teste-mg-company](https://github.com/LuizPiresS/teste-mg-company)

---

## 📋 Sobre o Projeto

O projeto consiste no desenvolvimento da página de captura/aplicação para a **Masterclass & Sessão Estratégica Gratuita** com o especialista e mentor **Lucas Andrade**, cujo foco é estruturar crescimento, processos e escala previsível para operações digitais e e-commerces.

Todo o conteúdo textual e estrutural seguiu à risca as diretrizes da **Copy Base** e as **Orientações Técnicas** fornecidas no teste, com estética refinada no estilo Dark Theme moderno (midnight obsidian com iluminação neon cyan e botões em gradiente âmbar/dourado).

---

## 🎯 Regras do Teste Atendidas

| Regra | Status | Implementação |
|---|---|---|
| **1. Não utilizar frameworks ou templates prontos** |  Concluído | Código 100% autoral em **HTML5**, **CSS3** puro e **Vanilla JavaScript** (sem Bootstrap, Tailwind, React, etc.). |
| **2. Manter código simples, organizado e legível** |  Concluído | Padrão modular com variáveis CSS (`:root`), comentários explicativos e semântica estrita. |
| **3. Responsividade obrigatória (desktop e mobile)** |  Concluído | Layout fluido com CSS Grid, Flexbox e Media Queries testadas para desktops, tablets e smartphones (de 320px a 1920px+). |
| **4. Deploy funcional e público** |  Concluído | Deploy em produção ativo e estável via Vercel com carregamento rápido e SSL ativo. |

---

## 🏗️ Arquitetura e Decisões Técnicas

1. **HTML5 Semântico e Acessível:**
   - Uso de tags semânticas estruturais: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<picture>`.
   - Elementos com descrições acessíveis (`aria-label`, `role="alert"`, `alt` descritivo).
   - Metatags completas de SEO, Open Graph e configuração de viewport.

2. **CSS3 Puro & Design System Customizado:**
   - **Variáveis CSS (`:root`):** Paleta de cores, tipografia, raios de borda, sombras e transições centralizadas.
   - **Efeitos Visuais:** Glassmorphism (`backdrop-filter: blur`), gradientes radiais profundos e halo de luz neon nos retratos.
   - **Tipografia Fluida:** Utilização de `clamp()` em títulos para garantir escala harmoniosa entre dispositivos sem quebras bruscas.

3. **Otimização de Performance:**
   - Imagens convertidas para **WebP** com fallback em **JPEG** otimizado via `<picture>`, reduzindo o peso total dos assets de >3.5MB para menos de 600KB.
   - Ícones vetoriais em **SVG inline**, eliminando requisições HTTP adicionais e garantindo nitidez máxima em telas Retina.
   - Carregamento priorizado no Hero (`fetchpriority="high"`) e lazy loading nativo nas demais imagens (`loading="lazy"`).

4. **Experiência do Usuário (Vanilla JavaScript):**
   - **Scroll Suave:** Navegação contextual com offset para compensar a barra de navegação fixa.
   - **Máscara de Telefone:** Formatação automática para números brasileiros `(XX) XXXXX-XXXX`.
   - **Validação e Feedback:** Validação de campos e estado de sucesso interativo após o envio da aplicação.
   - **Cookie Consent:** Banner de cookies com persistência local via `localStorage`.

---

## 📂 Estrutura de Arquivos

```text
mg-company/
├── assets/
│   └── images/
│       ├── icon-diagnostico.webp   # Ilustração neon pilar 01
│       ├── icon-diagnostico.jpg    # Fallback JPEG
│       ├── icon-plano.webp         # Ilustração neon pilar 02
│       ├── icon-plano.jpg          # Fallback JPEG
│       ├── icon-visao.webp         # Ilustração neon pilar 03
│       ├── icon-visao.jpg          # Fallback JPEG
│       ├── lucas-andrade.webp      # Retrato principal do mentor
│       ├── lucas-andrade.jpg       # Fallback JPEG
│       ├── lucas-andrade-stage.webp # Foto em palco/palestra
│       └── lucas-andrade-stage.jpg  # Fallback JPEG
├── css/
│   └── style.css                   # Folha de estilo completa e comentada
├── js/
│   └── script.js                   # Interatividade, máscara e validação
├── docs/                           # Materiais originais recebidos no teste
│   ├── COPY.pdf
│   ├── OBSERVAÇÕES TÉCNICAS.txt
│   ├── Referencia - Desktop.pdf
│   └── Referencia - Mobile.pdf
├── index.html                      # Estrutura HTML5 da landing page
├── README.md                       # Documentação técnica do projeto
└── .gitignore                      # Arquivos ignorados no repositório
```

---

## 🚀 Como Executar Localmente

Como o projeto utiliza apenas tecnologias nativas do navegador, não é necessária a instalação de nenhuma dependência:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LuizPiresS/teste-mg-company.git
   cd teste-mg-company
   ```

2. **Abra o arquivo diretamente ou sirva com um servidor HTTP local:**
   - Com Python:
     ```bash
     python3 -m http.server 8000
     ```
   - Ou utilize extensões como Live Server (VS Code) apontando para a raiz do projeto.
   - Acesse no navegador: `http://localhost:8000`

---

## 📱 Seções da Página

1. **Header / Navegação:** Logotipo com emblema geométrico, links de âncoras e botão de CTA rápido.
2. **Hero:** Headline de impacto, subheadline explicativa, foto do especialista com halo circular neon e botão de inscrição.
3. **Seção 1 — Identificação / Dor:** Timeline de sintomas com conexões visuais e citação do especialista.
4. **Seção 2 — O Que a Sessão Entrega:** 3 blocos com ilustrações temáticas (Diagnóstico, Plano de Ação e Visão de Longo Prazo) e selos de exclusividade.
5. **Seção 3 — Conheça o Especialista:** Apresentação de Lucas Andrade, bio, métricas de autoridade e links sociais.
6. **Seção 4 — Como Funciona:** 4 passos ilustrados desde a inscrição até o direcionamento estratégico.
7. **CTA Final & Formulário de Aplicação:** Formulário com validação de campos e tela de confirmação imediata.
8. **Rodapé & Cookies:** Links institucionais, disclaimers legais e barra de consentimento de cookies.

---

## 👤 Autor

Desenvolvido por **Luiz Pires** para o teste técnico da MG Company.

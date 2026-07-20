# ISA Prime Seguros — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static single-page website (`index.html` + `style.css` + `script.js`) for ISA Prime Seguros that presents Ithalo Sapata Alves's insurance brokerage and drives visitors to contact via WhatsApp (direct buttons or a form that redirects to WhatsApp with a pre-filled message).

**Architecture:** Plain HTML/CSS/JS, no build step, no frameworks. `index.html` holds all markup with named section anchors; `style.css` is one stylesheet built up incrementally per section; `script.js` handles the mobile nav toggle, WhatsApp link enhancement (turns `data-message` attributes into properly encoded `wa.me` links), and the contact form's WhatsApp redirect. Sections are inserted by replacing HTML comment markers created in Task 1, so every later task's edit target is unambiguous.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid/Flexbox), vanilla JavaScript (ES6+), Google Fonts (Inter, Poppins). No package manager, no bundler.

**Reference asset:** `referencia.jpg` (project root) — the official ISA Prime logo, copied into `assets/logo.jpg` in Task 1 and reused as favicon, header logo, hero image, and footer logo.

## Global Constraints

- No frameworks, no build tooling — hand-written static `index.html`, `style.css`, `script.js` only.
- Color tokens (exact values, defined once in Task 1, reused everywhere): `--color-navy: #0F1F3D`, `--color-navy-2: #16294F`, `--color-gold: #C9A227`, `--color-gold-light: #E8C97A`, `--color-gold-dark: #B8860B`, `--color-offwhite: #FAF9F6`, `--color-white: #FFFFFF`, `--color-text: #1C2A44`, `--color-text-muted: #5B6478`.
- Fonts: headings use `var(--font-heading)` → Poppins (uppercase, letter-spacing); body uses `var(--font-body)` → Inter.
- WhatsApp number (single source of truth): `5511940129358` (E.164, no `+`/spaces). All WhatsApp links must go through this number.
- E-mail: `contato@isaprimeseguros.com.br`. Instagram: `@isaprimeseguros` → `https://instagram.com/isaprimeseguros`.
- No mention of a specific city/region of operation anywhere in the copy.
- No real client testimonials or a real bio exist yet — bio and testimonial text must be written as clearly-marked example/placeholder content (HTML comments noting "substituir por conteúdo real"), never presented as real client quotes.
- No personal photo exists yet — the "Sobre" section uses a styled placeholder (icon), not a fake photo.
- No FAQ section, no credibility/numbers section, no third-party form service (Formspree/Web3Forms) — the contact form submits by opening a `wa.me` link, entirely client-side.
- All external links (WhatsApp, Instagram) use `target="_blank" rel="noopener"`.
- This directory is not yet a git repository — Task 1 initializes it.

---

## Task 1: Project scaffold, design tokens, and base layout

**Files:**
- Create: `assets/logo.jpg` (copy of `referencia.jpg`)
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`

**Interfaces:**
- Produces: CSS custom properties (`--color-*`, `--font-*`, `--container-width`, `--radius`, `--shadow-soft`, `--transition`) and utility classes (`.container`, `.section-eyebrow`, `.section-heading`, `.section-intro`, `.btn`, `.btn-primary`, `.btn-outline`, `.btn-small`) that every later task's CSS and HTML rely on.
- Produces: `index.html` skeleton with section anchors `#hero #sobre #produtos #diferenciais #depoimentos #contato` and HTML comment markers (`<!-- HEADER_CONTENT -->`, `<!-- HERO_CONTENT -->`, etc.) that later tasks replace via exact string match.
- Produces: minimal `script.js` shell that later tasks extend.

- [ ] **Step 1: Initialize git and create the asset folder**

```bash
cd /Users/arthur/Documents/Ithalo/site
git init
mkdir -p assets
cp referencia.jpg assets/logo.jpg
```

- [ ] **Step 2: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISA Prime Seguros — Corretora de Seguros e Soluções Financeiras</title>
  <meta name="description" content="ISA Prime Seguros: seguro de vida, saúde e previdência e capitalização com Ithalo Sapata Alves. Atendimento próximo, cotação sem compromisso.">
  <link rel="icon" type="image/jpeg" href="assets/logo.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header" id="site-header">
    <!-- HEADER_CONTENT -->
  </header>

  <main>
    <section id="hero" class="hero">
      <!-- HERO_CONTENT -->
    </section>
    <section id="sobre" class="sobre">
      <!-- SOBRE_CONTENT -->
    </section>
    <section id="produtos" class="produtos">
      <!-- PRODUTOS_CONTENT -->
    </section>
    <section id="diferenciais" class="diferenciais">
      <!-- DIFERENCIAIS_CONTENT -->
    </section>
    <section id="depoimentos" class="depoimentos">
      <!-- DEPOIMENTOS_CONTENT -->
    </section>
    <section id="contato" class="contato">
      <!-- CONTATO_CONTENT -->
    </section>
  </main>

  <footer class="site-footer" id="site-footer">
    <!-- FOOTER_CONTENT -->
  </footer>

  <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" class="whatsapp-float whatsapp-link" data-message="Olá! Vim pelo site da ISA Prime e gostaria de falar com um consultor." aria-label="Falar no WhatsApp">
    <!-- WHATSAPP_ICON_SVG -->
  </a>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create `style.css` with reset, tokens, typography, and utilities**

```css
/* ==========================================================================
   ISA Prime Seguros — estilos globais
   ========================================================================== */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color-navy: #0F1F3D;
  --color-navy-2: #16294F;
  --color-gold: #C9A227;
  --color-gold-light: #E8C97A;
  --color-gold-dark: #B8860B;
  --color-offwhite: #FAF9F6;
  --color-white: #FFFFFF;
  --color-text: #1C2A44;
  --color-text-muted: #5B6478;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --container-width: 1140px;
  --radius: 12px;
  --shadow-soft: 0 10px 30px rgba(15, 31, 61, 0.08);
  --transition: 0.25s ease;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-offwhite);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-navy);
  letter-spacing: 0.03em;
  line-height: 1.2;
  font-weight: 700;
}

p {
  color: var(--color-text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

section {
  padding: 96px 0;
}

.section-eyebrow {
  display: inline-block;
  color: var(--color-gold-dark);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.section-heading {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-intro {
  color: var(--color-text-muted);
  max-width: 640px;
  font-size: 1.05rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid transparent;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-gold-light), var(--color-gold-dark));
  color: var(--color-navy);
  box-shadow: var(--shadow-soft);
}

.btn-outline {
  border-color: var(--color-navy);
  color: var(--color-navy);
  background: transparent;
}

.btn-outline:hover {
  background: var(--color-navy);
  color: var(--color-white);
}

.btn-small {
  padding: 10px 20px;
  font-size: 0.85rem;
}
```

- [ ] **Step 4: Create `script.js` shell**

```js
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Comportamentos interativos são adicionados nas próximas tasks.
});
```

- [ ] **Step 5: Verify the scaffold**

Start a local server and check the page loads cleanly:

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser and confirm:
- Background is off-white, no console errors (check DevTools Console).
- DevTools → Elements: `<body>` computed `background-color` is `rgb(250, 249, 246)` and computed `font-family` starts with `Inter`.
- Page has no visible crash even though sections are empty (comments don't render).

Also run a static sanity check:

```bash
grep -o 'id="[a-z-]*"' index.html
```

Expected output includes `id="site-header"`, `id="hero"`, `id="sobre"`, `id="produtos"`, `id="diferenciais"`, `id="depoimentos"`, `id="contato"`, `id="site-footer"`.

Stop the server with `Ctrl+C` when done.

- [ ] **Step 6: Commit**

```bash
git add assets/logo.jpg index.html style.css script.js
git commit -m "feat: scaffold ISA Prime landing page structure and design tokens"
```

---

## Task 2: Header navigation and hero section

**Files:**
- Modify: `index.html` (replace `<!-- HEADER_CONTENT -->` and `<!-- HERO_CONTENT -->` markers created in Task 1)
- Modify: `style.css` (append header + hero rules after the Task 1 content)
- Modify: `script.js` (replace the Task 1 shell with the real implementation)

**Interfaces:**
- Consumes: `--color-*`/`--font-*` tokens and `.btn`/`.container`/`.section-eyebrow` utilities from Task 1.
- Produces: `WHATSAPP_NUMBER` constant and `enhanceWhatsappLinks()` in `script.js`, which every later task that adds a `.whatsapp-link[data-message="..."]` element (Tasks 4, 7, 8) relies on to turn `href="https://wa.me/5511940129358"` into a fully encoded link — no further JS changes are needed in those tasks for that behavior.
- Produces: `setupMobileNav()`, wired to `#nav-toggle` / `#site-nav`, which Task 8's responsive CSS (`.site-nav.is-open`) depends on.

- [ ] **Step 1: Replace the header marker in `index.html`**

Find `    <!-- HEADER_CONTENT -->` (inside `<header class="site-header" id="site-header">`) and replace it with:

```html
    <div class="container site-header__inner">
      <a href="#hero" class="site-header__brand">
        <img src="assets/logo.jpg" alt="ISA Prime Seguros" class="site-header__logo">
      </a>
      <nav class="site-nav" id="site-nav">
        <ul class="site-nav__list">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" class="btn btn-primary btn-small whatsapp-link" data-message="Olá! Vim pelo site da ISA Prime e gostaria de saber mais.">Falar no WhatsApp</a>
      </nav>
      <button class="site-header__toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
```

- [ ] **Step 2: Replace the hero marker in `index.html`**

Find `      <!-- HERO_CONTENT -->` (inside `<section id="hero" class="hero">`) and replace it with:

```html
      <div class="container hero__inner">
        <div class="hero__media">
          <img src="assets/logo.jpg" alt="ISA Prime Seguros — Corretora de Seguros e Soluções Financeiras" class="hero__logo">
        </div>
        <div class="hero__copy">
          <span class="section-eyebrow">ISA Prime Seguros</span>
          <h1 class="hero__title">Proteção e planejamento financeiro para você e sua família</h1>
          <p class="hero__subtitle">Ithalo Sapata Alves ajuda você a escolher o seguro de vida, o plano de saúde e a solução de capitalização certos — com clareza, confiança e atendimento próximo.</p>
          <div class="hero__actions">
            <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" class="btn btn-primary whatsapp-link" data-message="Olá! Vim pelo site da ISA Prime e gostaria de saber mais sobre as soluções de vocês.">Falar no WhatsApp</a>
            <a href="#produtos" class="btn btn-outline">Ver soluções</a>
          </div>
        </div>
      </div>
```

- [ ] **Step 3: Append header + hero CSS to `style.css`**

Add after the last rule from Task 1 (`.btn-small { ... }`):

```css

/* ==========================================================================
   Header
   ========================================================================== */

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 249, 246, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(15, 31, 61, 0.08);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
}

.site-header__logo {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 50%;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.site-nav__list {
  display: flex;
  gap: 28px;
}

.site-nav__list a {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-navy);
  transition: color var(--transition);
}

.site-nav__list a:hover {
  color: var(--color-gold-dark);
}

.site-header__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
}

.site-header__toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-navy);
  transition: transform var(--transition), opacity var(--transition);
}

/* ==========================================================================
   Hero
   ========================================================================== */

.hero {
  padding-top: 72px;
  padding-bottom: 72px;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;
}

.hero__logo {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.hero__title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero__subtitle {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-bottom: 32px;
  max-width: 520px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
```

- [ ] **Step 4: Replace `script.js` with the real implementation**

Replace the entire file content (from Task 1) with:

```js
'use strict';

const WHATSAPP_NUMBER = '5511940129358';

function enhanceWhatsappLinks() {
  document.querySelectorAll('.whatsapp-link[data-message]').forEach((link) => {
    const message = link.dataset.message;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}

function setupMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  enhanceWhatsappLinks();
  setupMobileNav();
});
```

- [ ] **Step 5: Verify**

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000` and confirm:
- Header shows the logo, nav links, and a gold "Falar no WhatsApp" button; hero shows the logo, headline, subheadline, and two CTA buttons.
- In DevTools Console, run `document.querySelector('.hero__actions .whatsapp-link').href` — expected: `"https://wa.me/5511940129358?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20ISA%20Prime%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs."`
- Clicking "Ver soluções" scrolls smoothly to the (still empty) Produtos section.
- Resize the viewport below 720px width: the nav links and WhatsApp button disappear from the header bar, and a hamburger icon (3 lines) appears in their place.
- Click the hamburger: a dropdown with the nav links and WhatsApp button appears; `aria-expanded` on the button flips to `"true"` (check in Elements panel); clicking a link closes it again.

- [ ] **Step 6: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: add header navigation and hero section"
```

---

## Task 3: Sobre section

**Files:**
- Modify: `index.html` (replace `<!-- SOBRE_CONTENT -->` marker)
- Modify: `style.css` (append Sobre rules after the Task 2 hero block)

**Interfaces:**
- Consumes: `.section-eyebrow`, `--color-*` tokens from Task 1; no new JS interfaces produced.

- [ ] **Step 1: Replace the Sobre marker in `index.html`**

Find `      <!-- SOBRE_CONTENT -->` (inside `<section id="sobre" class="sobre">`) and replace it with:

```html
      <div class="container sobre__inner">
        <div class="sobre__portrait" aria-hidden="true">
          <!-- Espaço reservado para foto profissional do Ithalo -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>
          </svg>
        </div>
        <div class="sobre__copy">
          <span class="section-eyebrow">Sobre</span>
          <h2 class="sobre__name">Ithalo Sapata Alves</h2>
          <div class="sobre__bio">
            <!-- Texto de exemplo: substituir por bio real, anos de experiência e credenciais do Ithalo -->
            <p>Sou corretor de seguros e fundador da ISA Prime, com atuação focada em seguro de vida, saúde e previdência e soluções de capitalização. Meu trabalho é traduzir contratos complexos em decisões simples: entendo o momento de vida de cada cliente para indicar a cobertura certa, sem letras miúdas e sem surpresas.</p>
            <p>Acredito que confiança se constrói com transparência — por isso acompanho cada cliente desde a cotação até o acionamento do seguro, sempre que necessário.</p>
          </div>
          <div class="sobre__badges">
            <span class="sobre__badge">Atendimento personalizado</span>
            <span class="sobre__badge">Cotação sem compromisso</span>
            <span class="sobre__badge">Suporte em todas as etapas</span>
          </div>
        </div>
      </div>
```

- [ ] **Step 2: Append Sobre CSS to `style.css`**

Add after the last rule from Task 2 (`.hero__actions { ... }`):

```css

/* ==========================================================================
   Sobre
   ========================================================================== */

.sobre {
  background: var(--color-white);
}

.sobre__inner {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 56px;
  align-items: start;
}

.sobre__portrait {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius);
  background: linear-gradient(160deg, var(--color-navy), var(--color-navy-2));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold-light);
  box-shadow: var(--shadow-soft);
}

.sobre__portrait svg {
  width: 88px;
  height: 88px;
}

.sobre__name {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.sobre__bio p {
  margin-bottom: 16px;
  color: var(--color-text-muted);
}

.sobre__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.sobre__badge {
  background: var(--color-offwhite);
  border: 1px solid rgba(15, 31, 61, 0.12);
  color: var(--color-navy);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 999px;
}
```

- [ ] **Step 3: Verify**

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000#sobre` and confirm:
- White background section with a navy rounded square (placeholder "photo") on the left and the bio text + three gold-outlined badge chips on the right.
- Clicking "Sobre" in the header nav scrolls here smoothly.
- No console errors.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add Sobre section"
```

---

## Task 4: Produtos section

**Files:**
- Modify: `index.html` (replace `<!-- PRODUTOS_CONTENT -->` marker)
- Modify: `style.css` (append Produtos rules after the Task 3 Sobre block)

**Interfaces:**
- Consumes: `enhanceWhatsappLinks()` from Task 2 — the three `.whatsapp-link[data-message]` CTAs added here are picked up automatically at `DOMContentLoaded`, no JS changes needed in this task.

- [ ] **Step 1: Replace the Produtos marker in `index.html`**

Find `      <!-- PRODUTOS_CONTENT -->` (inside `<section id="produtos" class="produtos">`) and replace it with:

```html
      <div class="container">
        <span class="section-eyebrow">Produtos</span>
        <h2 class="section-heading">Soluções para cada momento da sua vida</h2>
        <p class="section-intro">Conheça as frentes em que a ISA Prime pode te ajudar a proteger o presente e planejar o futuro.</p>
        <div class="produtos__grid">
          <article class="produto-card">
            <svg class="produto-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
            <h3 class="produto-card__title">Seguro de Vida</h3>
            <p class="produto-card__text">Proteção financeira para sua família em qualquer imprevisto, com planos flexíveis que cabem no seu orçamento e nas suas prioridades.</p>
            <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" class="btn btn-outline btn-small whatsapp-link" data-message="Olá! Quero saber mais sobre o Seguro de Vida da ISA Prime.">Quero saber mais</a>
          </article>
          <article class="produto-card">
            <svg class="produto-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 12h4l2-5 4 10 2-5h4"></path>
            </svg>
            <h3 class="produto-card__title">Saúde e Previdência</h3>
            <p class="produto-card__text">Planos de saúde e previdência privada pensados para o seu momento de vida, com orientação para escolher a cobertura certa sem pagar por benefícios que você não vai usar.</p>
            <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" class="btn btn-outline btn-small whatsapp-link" data-message="Olá! Quero saber mais sobre Saúde e Previdência na ISA Prime.">Quero saber mais</a>
          </article>
          <article class="produto-card">
            <svg class="produto-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="10" width="18" height="9" rx="2"></rect>
              <path d="M7 10V7a5 5 0 0110 0v3"></path>
              <circle cx="12" cy="14.5" r="1.5"></circle>
            </svg>
            <h3 class="produto-card__title">Capitalização</h3>
            <p class="produto-card__text">Uma forma de guardar dinheiro com disciplina e ainda concorrer a sorteios — ideal para quem quer criar uma reserva com objetivo definido.</p>
            <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" class="btn btn-outline btn-small whatsapp-link" data-message="Olá! Quero saber mais sobre Capitalização na ISA Prime.">Quero saber mais</a>
          </article>
        </div>
      </div>
```

- [ ] **Step 2: Append Produtos CSS to `style.css`**

Add after the last rule from Task 3 (`.sobre__badge { ... }`):

```css

/* ==========================================================================
   Produtos
   ========================================================================== */

.produtos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 48px;
}

.produto-card {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 36px 28px;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  transition: transform var(--transition);
}

.produto-card:hover {
  transform: translateY(-4px);
}

.produto-card__icon {
  width: 52px;
  height: 52px;
  color: var(--color-gold-dark);
  margin-bottom: 20px;
}

.produto-card__title {
  font-size: 1.15rem;
  margin-bottom: 12px;
}

.produto-card__text {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin-bottom: 24px;
  flex-grow: 1;
}
```

- [ ] **Step 3: Verify**

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000#produtos` and confirm:
- Three white cards in a row (Seguro de Vida, Saúde e Previdência, Capitalização), each with a gold icon, description, and an outlined "Quero saber mais" button.
- In DevTools Console, run `document.querySelectorAll('.produto-card .whatsapp-link')[2].href` — expected: `"https://wa.me/5511940129358?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Capitaliza%C3%A7%C3%A3o%20na%20ISA%20Prime."`

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add Produtos section"
```

---

## Task 5: Diferenciais section

**Files:**
- Modify: `index.html` (replace `<!-- DIFERENCIAIS_CONTENT -->` marker)
- Modify: `style.css` (append Diferenciais rules after the Task 4 Produtos block)

**Interfaces:**
- Consumes: tokens from Task 1 only; no JS.

- [ ] **Step 1: Replace the Diferenciais marker in `index.html`**

Find `      <!-- DIFERENCIAIS_CONTENT -->` (inside `<section id="diferenciais" class="diferenciais">`) and replace it with:

```html
      <div class="container">
        <span class="section-eyebrow">Diferenciais</span>
        <h2 class="section-heading">Por que escolher a ISA Prime</h2>
        <p class="section-intro">Os quatro pilares que sustentam nosso trabalho todos os dias.</p>
        <div class="diferenciais__grid">
          <div class="diferencial-item">
            <svg class="diferencial-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
            <h3 class="diferencial-item__title">Seguros</h3>
            <p class="diferencial-item__text">Cobertura sob medida para proteger o que é importante para você.</p>
          </div>
          <div class="diferencial-item">
            <svg class="diferencial-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M7 3h7l4 4v14H7z"></path>
              <path d="M14 3v4h4"></path>
              <path d="M9.5 15.5l2 2 3.5-4"></path>
            </svg>
            <h3 class="diferencial-item__title">Documentação</h3>
            <p class="diferencial-item__text">Cuidamos da papelada e da burocracia para que o processo seja simples do início ao fim.</p>
          </div>
          <div class="diferencial-item">
            <svg class="diferencial-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 19h16"></path>
              <path d="M7 19v-5"></path>
              <path d="M12 19v-9"></path>
              <path d="M17 19V7"></path>
              <path d="M14 5l3-2 3 2"></path>
            </svg>
            <h3 class="diferencial-item__title">Soluções Financeiras</h3>
            <p class="diferencial-item__text">Estratégias de capitalização e previdência alinhadas aos seus objetivos.</p>
          </div>
          <div class="diferencial-item">
            <svg class="diferencial-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M2 12l4-4 4 4"></path>
              <path d="M6 8v6a2 2 0 002 2h2"></path>
              <path d="M22 12l-4 4-4-4"></path>
              <path d="M18 16v-6a2 2 0 00-2-2h-2"></path>
            </svg>
            <h3 class="diferencial-item__title">Confiança que Gera Valor</h3>
            <p class="diferencial-item__text">Relacionamento transparente, construído para durar além da primeira apólice.</p>
          </div>
        </div>
      </div>
```

- [ ] **Step 2: Append Diferenciais CSS to `style.css`**

Add after the last rule from Task 4 (`.produto-card__text { ... }`):

```css

/* ==========================================================================
   Diferenciais
   ========================================================================== */

.diferenciais {
  background: var(--color-navy);
  color: var(--color-white);
}

.diferenciais .section-eyebrow {
  color: var(--color-gold-light);
}

.diferenciais .section-heading,
.diferenciais .section-intro {
  color: var(--color-white);
}

.diferenciais .section-intro {
  color: rgba(255, 255, 255, 0.72);
}

.diferenciais__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 48px;
}

.diferencial-item {
  text-align: center;
}

.diferencial-item__icon {
  width: 48px;
  height: 48px;
  color: var(--color-gold-light);
  margin: 0 auto 16px;
}

.diferencial-item__title {
  color: var(--color-white);
  font-size: 1rem;
  margin-bottom: 8px;
}

.diferencial-item__text {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
}
```

- [ ] **Step 3: Verify**

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000#diferenciais` and confirm:
- Full-width navy section with 4 gold-icon columns: Seguros, Documentação, Soluções Financeiras, Confiança que Gera Valor — mirroring the 4 icons in `referencia.jpg`.
- Text is legible (white/light-gray on navy), no contrast issues.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add Diferenciais section"
```

---

## Task 6: Depoimentos section

**Files:**
- Modify: `index.html` (replace `<!-- DEPOIMENTOS_CONTENT -->` marker)
- Modify: `style.css` (append Depoimentos rules after the Task 5 Diferenciais block)

**Interfaces:**
- Consumes: tokens from Task 1 only; no JS.

- [ ] **Step 1: Replace the Depoimentos marker in `index.html`**

Find `      <!-- DEPOIMENTOS_CONTENT -->` (inside `<section id="depoimentos" class="depoimentos">`) and replace it with:

```html
      <div class="container">
        <span class="section-eyebrow">Depoimentos</span>
        <h2 class="section-heading">Quem confia na ISA Prime</h2>
        <p class="section-intro">Substitua os depoimentos abaixo por relatos reais de clientes assim que estiverem disponíveis.</p>
        <div class="depoimentos__grid">
          <article class="depoimento-card">
            <div class="depoimento-card__stars" aria-hidden="true">★★★★★</div>
            <p class="depoimento-card__quote">"[Depoimento do cliente aqui — substitua por um relato real.]"</p>
            <p class="depoimento-card__name">Nome do Cliente</p>
            <p class="depoimento-card__role">Cliente ISA Prime</p>
          </article>
          <article class="depoimento-card">
            <div class="depoimento-card__stars" aria-hidden="true">★★★★★</div>
            <p class="depoimento-card__quote">"[Depoimento do cliente aqui — substitua por um relato real.]"</p>
            <p class="depoimento-card__name">Nome do Cliente</p>
            <p class="depoimento-card__role">Cliente ISA Prime</p>
          </article>
          <article class="depoimento-card">
            <div class="depoimento-card__stars" aria-hidden="true">★★★★★</div>
            <p class="depoimento-card__quote">"[Depoimento do cliente aqui — substitua por um relato real.]"</p>
            <p class="depoimento-card__name">Nome do Cliente</p>
            <p class="depoimento-card__role">Cliente ISA Prime</p>
          </article>
        </div>
      </div>
```

- [ ] **Step 2: Append Depoimentos CSS to `style.css`**

Add after the last rule from Task 5 (`.diferencial-item__text { ... }`):

```css

/* ==========================================================================
   Depoimentos
   ========================================================================== */

.depoimentos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 48px;
}

.depoimento-card {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 32px 28px;
  box-shadow: var(--shadow-soft);
}

.depoimento-card__stars {
  color: var(--color-gold-dark);
  margin-bottom: 16px;
  font-size: 1rem;
  letter-spacing: 2px;
}

.depoimento-card__quote {
  color: var(--color-text-muted);
  font-style: italic;
  margin-bottom: 20px;
}

.depoimento-card__name {
  font-weight: 600;
  color: var(--color-navy);
}

.depoimento-card__role {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
```

- [ ] **Step 3: Verify**

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000#depoimentos` and confirm 3 white cards with gold stars, italic placeholder quote, and name/role — clearly placeholder text, not presented as real quotes.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: add Depoimentos section"
```

---

## Task 7: Contato section with WhatsApp-redirect form

**Files:**
- Modify: `index.html` (replace `<!-- CONTATO_CONTENT -->` marker)
- Modify: `style.css` (append Contato rules after the Task 6 Depoimentos block)
- Modify: `script.js` (add the contact form handler)

**Interfaces:**
- Consumes: `WHATSAPP_NUMBER` constant and the `DOMContentLoaded` listener structure from Task 2.
- Produces: `setupContactForm()`, called from the same `DOMContentLoaded` listener as `enhanceWhatsappLinks()`/`setupMobileNav()`.

- [ ] **Step 1: Replace the Contato marker in `index.html`**

Find `      <!-- CONTATO_CONTENT -->` (inside `<section id="contato" class="contato">`) and replace it with:

```html
      <div class="container contato__inner">
        <div class="contato__info">
          <span class="section-eyebrow">Contato</span>
          <h2 class="section-heading">Vamos conversar?</h2>
          <p class="section-intro">Fale direto com a ISA Prime pelo canal que preferir, ou preencha o formulário que a gente chama você no WhatsApp.</p>
          <ul class="contato__list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20l1.4-4.2A8 8 0 1112 20a7.9 7.9 0 01-4-1.1L4 20z"></path></svg>
              <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" class="whatsapp-link" data-message="Olá! Vim pelo site da ISA Prime e gostaria de falar com um consultor.">(11) 94012-9358</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>
              <a href="mailto:contato@isaprimeseguros.com.br">contato@isaprimeseguros.com.br</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>
              <a href="https://instagram.com/isaprimeseguros" target="_blank" rel="noopener">@isaprimeseguros</a>
            </li>
          </ul>
        </div>
        <form class="contato-form" id="contato-form">
          <div class="form-field">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" required>
          </div>
          <div class="form-field">
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" required>
          </div>
          <div class="form-field">
            <label for="interesse">Interesse</label>
            <select id="interesse" name="interesse" required>
              <option value="Seguro de Vida">Seguro de Vida</option>
              <option value="Saúde e Previdência">Saúde e Previdência</option>
              <option value="Capitalização">Capitalização</option>
              <option value="Outro assunto">Outro assunto</option>
            </select>
          </div>
          <div class="form-field">
            <label for="mensagem">Mensagem (opcional)</label>
            <textarea id="mensagem" name="mensagem"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar pelo WhatsApp</button>
        </form>
      </div>
```

- [ ] **Step 2: Append Contato CSS to `style.css`**

Add after the last rule from Task 6 (`.depoimento-card__role { ... }`):

```css

/* ==========================================================================
   Contato
   ========================================================================== */

.contato {
  background: var(--color-white);
}

.contato__inner {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 56px;
}

.contato__list {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contato__list li {
  display: flex;
  align-items: center;
  gap: 14px;
}

.contato__list svg {
  width: 24px;
  height: 24px;
  color: var(--color-gold-dark);
  flex-shrink: 0;
}

.contato__list a {
  font-weight: 600;
  color: var(--color-navy);
}

.contato__list a:hover {
  color: var(--color-gold-dark);
}

.contato-form {
  background: var(--color-offwhite);
  border-radius: var(--radius);
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-navy);
}

.form-field input,
.form-field select,
.form-field textarea {
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(15, 31, 61, 0.18);
  background: var(--color-white);
  color: var(--color-text);
}

.form-field textarea {
  resize: vertical;
  min-height: 96px;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: 2px solid var(--color-gold);
  outline-offset: 1px;
}

.contato-form .btn {
  align-self: flex-start;
}
```

- [ ] **Step 3: Add the contact form handler to `script.js`**

Find:

```js
document.addEventListener('DOMContentLoaded', () => {
  enhanceWhatsappLinks();
  setupMobileNav();
});
```

Replace it with:

```js
document.addEventListener('DOMContentLoaded', () => {
  enhanceWhatsappLinks();
  setupMobileNav();
  setupContactForm();
});

function setupContactForm() {
  const form = document.getElementById('contato-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const interesse = form.interesse.value;
    const mensagem = form.mensagem.value.trim();

    const linhas = [
      'Olá! Vim pelo site da ISA Prime.',
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Interesse: ${interesse}`,
    ];

    if (mensagem) {
      linhas.push(`Mensagem: ${mensagem}`);
    }

    const texto = linhas.join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener');
  });
}
```

- [ ] **Step 4: Verify**

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000#contato` and confirm:
- Left column shows WhatsApp number, e-mail, and Instagram as clickable links with gold icons; right column shows the form on an off-white card.
- Fill in Nome = `Maria Silva`, Telefone = `11999998888`, Interesse = `Capitalização`, Mensagem = `Quero simular`. Open DevTools, override `window.open` before submitting to capture the URL without leaving the page:

```js
window.open = (url) => { console.log(url); };
```

Then submit the form. Expected console output (decode the `%xx` sequences to confirm): a `https://wa.me/5511940129358?text=...` URL whose decoded text is:

```
Olá! Vim pelo site da ISA Prime.
Nome: Maria Silva
Telefone: 11999998888
Interesse: Capitalização
Mensagem: Quero simular
```

- Submit again with Mensagem left empty — confirm the decoded text has no `Mensagem:` line.

- [ ] **Step 5: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: add Contato section with WhatsApp-redirect form"
```

---

## Task 8: Footer, floating WhatsApp button, responsive polish, and final QA

**Files:**
- Modify: `index.html` (replace `<!-- FOOTER_CONTENT -->` and `<!-- WHATSAPP_ICON_SVG -->` markers)
- Modify: `style.css` (append footer, floating-button, and responsive rules after the Task 7 Contato block)

**Interfaces:**
- Consumes: `enhanceWhatsappLinks()` from Task 2 for the footer's and floating button's `.whatsapp-link` elements — no JS changes needed here.

- [ ] **Step 1: Replace the footer marker in `index.html`**

Find `    <!-- FOOTER_CONTENT -->` (inside `<footer class="site-footer" id="site-footer">`) and replace it with:

```html
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <img src="assets/logo.jpg" alt="ISA Prime Seguros" class="site-footer__logo">
        <span class="site-footer__brand-name">ISA Prime Seguros</span>
      </div>
      <ul class="site-footer__links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#diferenciais">Diferenciais</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <div class="site-footer__social">
        <a href="https://wa.me/5511940129358" target="_blank" rel="noopener" aria-label="WhatsApp" class="whatsapp-link" data-message="Olá! Vim pelo site da ISA Prime e gostaria de falar com um consultor.">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20l1.4-4.2A8 8 0 1112 20a7.9 7.9 0 01-4-1.1L4 20z"></path></svg>
        </a>
        <a href="mailto:contato@isaprimeseguros.com.br" aria-label="E-mail">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>
        </a>
        <a href="https://instagram.com/isaprimeseguros" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>
        </a>
      </div>
    </div>
    <div class="container site-footer__bottom">
      © 2026 ISA Prime Seguros — Corretora de Seguros e Soluções Financeiras. Todos os direitos reservados.
    </div>
```

- [ ] **Step 2: Replace the floating button icon marker in `index.html`**

Find `    <!-- WHATSAPP_ICON_SVG -->` (inside the fixed `.whatsapp-float` anchor near the end of `<body>`) and replace it with:

```html
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20l1.4-4.2A8 8 0 1112 20a7.9 7.9 0 01-4-1.1L4 20z"></path></svg>
```

- [ ] **Step 3: Append footer, floating-button, and responsive CSS to `style.css`**

Add after the last rule from Task 7 (`.contato-form .btn { ... }`):

```css

/* ==========================================================================
   Footer
   ========================================================================== */

.site-footer {
  background: var(--color-navy);
  color: rgba(255, 255, 255, 0.8);
  padding: 56px 0 32px;
}

.site-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 32px;
}

.site-footer__brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.site-footer__logo {
  height: 44px;
  width: 44px;
  object-fit: cover;
  border-radius: 50%;
}

.site-footer__brand-name {
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.site-footer__links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.site-footer__links a:hover {
  color: var(--color-gold-light);
}

.site-footer__social {
  display: flex;
  gap: 16px;
}

.site-footer__social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
}

.site-footer__social a:hover {
  background: rgba(255, 255, 255, 0.12);
}

.site-footer__social svg {
  width: 18px;
  height: 18px;
  color: var(--color-white);
}

.site-footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 24px;
  font-size: 0.85rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

/* ==========================================================================
   Floating WhatsApp button
   ========================================================================== */

.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 90;
  transition: transform var(--transition);
}

.whatsapp-float:hover {
  transform: scale(1.08);
}

.whatsapp-float svg {
  width: 30px;
  height: 30px;
  color: var(--color-white);
}

/* ==========================================================================
   Responsive
   ========================================================================== */

@media (max-width: 960px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .sobre__inner {
    grid-template-columns: 1fr;
  }

  .sobre__portrait {
    max-width: 220px;
    margin: 0 auto;
  }

  .produtos__grid,
  .depoimentos__grid {
    grid-template-columns: 1fr;
  }

  .diferenciais__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contato__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  section {
    padding: 64px 0;
  }

  .site-nav {
    position: fixed;
    top: 76px;
    left: 0;
    right: 0;
    background: var(--color-offwhite);
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 24px;
    border-bottom: 1px solid rgba(15, 31, 61, 0.08);
    transform: translateY(-16px);
    opacity: 0;
    pointer-events: none;
    transition: transform var(--transition), opacity var(--transition);
  }

  .site-nav.is-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .site-nav__list {
    flex-direction: column;
    gap: 16px;
  }

  .site-header__toggle {
    display: flex;
  }

  .site-header__toggle[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .site-header__toggle[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }

  .site-header__toggle[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .site-footer__inner {
    flex-direction: column;
  }
}
```

- [ ] **Step 4: Full-page QA pass**

```bash
cd /Users/arthur/Documents/Ithalo/site
python3 -m http.server 8000
```

Open `http://localhost:8000` and walk the whole page top to bottom:
- Footer shows logo, brand name, quick links, and 3 social icons (WhatsApp/e-mail/Instagram) on navy background, with a copyright line below.
- The circular green floating WhatsApp button is visible in the bottom-right corner on every section as you scroll.
- In DevTools Console: `document.querySelector('.whatsapp-float').href` starts with `https://wa.me/5511940129358?text=`.
- Resize DevTools viewport to 1440px, 1024px, 768px, 480px widths and confirm no horizontal scrollbar appears and no overlapping content at any width (Produtos/Depoimentos cards stack to 1 column below 960px, Diferenciais drops to 2 columns, Sobre/Contato stack to 1 column, header hamburger appears below 720px).
- Click every header/footer nav link and confirm each scrolls to the matching section.
- Run `grep -o '<!-- [A-Z_]*_CONTENT -->' index.html` — expected: no output (all 8 content markers from Task 1 were replaced by Tasks 2–8). The remaining `<!-- Espaço reservado...` and `<!-- Texto de exemplo...` comments are intentional and should stay.

- [ ] **Step 5: Commit**

```bash
git add index.html style.css
git commit -m "feat: add footer, floating WhatsApp button, and responsive styles"
```

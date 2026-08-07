# Finalizar configuração de SEO — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fechar a pendência crítica da seção 8 de `ESPECIFICACOES.md` — remover o TODO de domínio pendente, adicionar `apple-touch-icon`, e atualizar `lastmod` do sitemap — conforme já decidido em `docs/superpowers/specs/2026-08-05-finalizar-seo-design.md`.

**Architecture:** Site estático sem build (HTML/CSS/JS puro). Três edições pontuais em `index.html` e `sitemap.xml`, sem lógica nova. Nenhuma URL muda de valor — o placeholder `https://www.isaprimeseguros.com.br/` já é o domínio real confirmado pelo cliente.

**Tech Stack:** HTML estático.

## Global Constraints

- Domínio de produção confirmado: `www.isaprimeseguros.com.br` (não trocar nenhuma URL existente).
- Não há framework de testes automatizados neste projeto — validação é manual (spec `2026-08-05-finalizar-seo-design.md`, seção "Testes").
- Fora de escopo: conteúdo (foto, bio, depoimentos reais) — pendência separada, seção 9 de `ESPECIFICACOES.md`.

---

### Task 1: Remover TODO de domínio, adicionar apple-touch-icon e atualizar lastmod do sitemap

**Files:**
- Modify: `index.html:9` (remover comentário TODO)
- Modify: `index.html:11` (adicionar link `apple-touch-icon` logo após o `rel="icon"` existente)
- Modify: `sitemap.xml:4` (atualizar `<lastmod>`)

**Interfaces:**
- Nenhuma — edições de conteúdo estático, sem funções/APIs envolvidas.

- [ ] **Step 1: Remover o comentário TODO em `index.html`**

Remover a linha 9 inteira:

```html
  <!-- TODO: confirmar o domínio real de produção e atualizar canonical/og:url/twitter:image, robots.txt e sitemap.xml quando o domínio for registrado -->
```

O bloco resultante (linhas 8–10 antigas, viram 8–9) deve ficar:

```html
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.isaprimeseguros.com.br/">
```

- [ ] **Step 2: Adicionar `apple-touch-icon` em `index.html`**

Logo após a linha do `<link rel="icon" ...>`, adicionar:

```html
  <link rel="icon" type="image/jpeg" href="assets/logo.jpg">
  <link rel="apple-touch-icon" href="assets/logo.jpg">
```

- [ ] **Step 3: Atualizar `lastmod` em `sitemap.xml`**

Trocar:

```xml
    <lastmod>2026-07-21</lastmod>
```

por:

```xml
    <lastmod>2026-08-07</lastmod>
```

(Usar a data de hoje, 2026-08-07, em vez de 2026-08-05 citada na spec original, já que a spec ficou parada sem ser aplicada até agora.)

- [ ] **Step 4: Validação manual**

Abrir `index.html` em um navegador (ex.: `python3 -m http.server 8000` e acessar `http://localhost:8000`) e conferir visualmente que a página carrega normalmente (nenhuma mudança visual esperada, já que `apple-touch-icon` e o `lastmod` não afetam o layout). Conferir com `grep -n "TODO" index.html` que não há mais ocorrências, e com `grep -n "apple-touch-icon" index.html` que a tag foi adicionada.

- [ ] **Step 5: Atualizar `ESPECIFICACOES.md` seção 8**

A seção 8 ainda descreve a "Pendência crítica" do domínio como em aberto (linhas 133). Substituir esse parágrafo para refletir que o domínio foi confirmado e as mudanças de escopo da spec `2026-08-05-finalizar-seo-design.md` foram aplicadas. Novo texto para o parágrafo que começa com "**⚠️ Pendência crítica**:":

```markdown
**Domínio de produção confirmado**: `www.isaprimeseguros.com.br` é o domínio real, confirmado pelo cliente (ver `docs/superpowers/specs/2026-08-05-finalizar-seo-design.md`). Todas as URLs absolutas (canonical, `og:url`, `og:image`, `twitter:image`, `robots.txt`, `sitemap.xml`) já usam esse valor. Ainda pendente, fora do código: assim que o site for publicado nesse domínio, submeter ao Google Search Console e enviar o `sitemap.xml`.
```

- [ ] **Step 6: Commit**

```bash
git add index.html sitemap.xml ESPECIFICACOES.md
git commit -m "Finaliza configuração de SEO: remove TODO de domínio, adiciona apple-touch-icon, atualiza sitemap"
```

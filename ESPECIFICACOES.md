# Especificações — ISA Prime Seguros

> Documento de especificação técnica e funcional do estado atual do site. Descreve o que está implementado hoje (`index.html`, `style.css`, `script.js`), servindo como referência para manutenção e evolução do projeto.
>
> Existe também um spec de design anterior ao build, em `docs/superpowers/specs/2026-07-20-isa-prime-landing-page-design.md`, e o plano de implementação em `docs/superpowers/plans/2026-07-20-isa-prime-landing-page.md`. Este documento descreve o resultado **as-built**, já implementado.

## 1. Visão geral

Site institucional de página única (one-page) para **ISA Prime — Corretora de Seguros e Soluções Financeiras**, marca de **Ithalo Sapata Alves**, corretor de seguros.

**Objetivo do site**: apresentar a corretora e converter visitantes em contato via WhatsApp (link direto) ou formulário (que também redireciona para o WhatsApp).

## 2. Stack tecnológica

- HTML, CSS e JavaScript puros (vanilla), sem framework e sem etapa de build.
- Fontes via Google Fonts: `Inter` (corpo de texto) e `Poppins` (títulos).
- Sem backend/servidor: todo o "envio" de formulário é resolvido no cliente, redirecionando para o WhatsApp Web/App.
- Hospedagem: qualquer serviço de arquivos estáticos (o design spec cita Vercel, GitHub Pages, Hostinger como opções).

### Arquivos principais

| Arquivo | Papel |
|---|---|
| `index.html` | Estrutura e conteúdo (copy) de todas as seções da página. |
| `style.css` | Estilos globais, componentes e responsividade (custom properties em `:root`). |
| `script.js` | Comportamento: menu mobile, links de WhatsApp com mensagem pré-preenchida, envio do formulário de contato. |
| `assets/logo.jpg` | Logo da marca, usada no header, hero e footer. |
| `referencia.jpg` | Imagem de referência da identidade visual (não usada em runtime, é insumo de design). |
| `robots.txt` | Libera indexação total e aponta para o `sitemap.xml`. |
| `sitemap.xml` | Sitemap com a única URL do site (página única). |

## 3. Identidade visual

Definida em `:root` de `style.css` via custom properties:

| Token | Valor | Uso |
|---|---|---|
| `--color-navy` | `#0F1F3D` | Cor primária (texto de títulos, fundos escuros, botões outline). |
| `--color-navy-2` | `#16294F` | Variação do navy (gradiente do retrato placeholder). |
| `--color-gold` | `#C9A227` | Accent/CTA. |
| `--color-gold-light` | `#E8C97A` | Gradiente de botões, ícones sobre fundo escuro. |
| `--color-gold-dark` | `#B8860B` | Gradiente de botões, eyebrows, ícones. |
| `--color-offwhite` | `#FAF9F6` | Fundo base da página. |
| `--color-white` | `#FFFFFF` | Fundo de cards. |
| `--color-text` | `#1C2A44` | Texto padrão. |
| `--color-text-muted` | `#5B6478` | Texto secundário/descrições. |

- **Tipografia**: títulos em `Poppins` 700, caixa-alta, `letter-spacing` largo; corpo em `Inter`.
- **Ícones**: SVGs inline, estilo outline (stroke, sem fill), reproduzindo os 4 pilares da logo (escudo, documento, gráfico, aperto de mãos).
- **Componentes visuais**: cards com `border-radius: 12px` e sombra suave (`--shadow-soft`), botões em pílula (`border-radius: 999px`), botão primário com gradiente dourado.

## 4. Estrutura da página e conteúdo

Navegação por âncoras: Sobre, Produtos, Diferenciais, Depoimentos, Contato.

### 4.1 Header (`.site-header`, fixo/sticky)
Logo circular + navegação por âncora + botão "Falar no WhatsApp". Em mobile, menu hambúrguer (`#nav-toggle`) que abre `#site-nav` como painel fixo.

### 4.2 Hero (`#hero`)
Logo em destaque + headline ("Proteção e planejamento financeiro para você e sua família") + subheadline citando Ithalo Sapata Alves e os 3 produtos. Dois CTAs: "Falar no WhatsApp" e "Ver soluções" (scroll para `#produtos`).

### 4.3 Sobre (`#sobre`)
Bio de Ithalo Sapata Alves (texto placeholder profissional) + badges ("Atendimento personalizado", "Cotação sem compromisso", "Suporte em todas as etapas"). Retrato ainda é um placeholder visual (ícone de silhueta em SVG sobre fundo em gradiente navy) — **não há foto real**; há comentário HTML indicando isso (`<!-- Espaço reservado para foto profissional do Ithalo -->`).

### 4.4 Produtos (`#produtos`)
3 cards, cada um com ícone, título, descrição curta e CTA de WhatsApp com mensagem pré-preenchida específica:
- **Seguro de Vida**
- **Saúde e Previdência**
- **Capitalização**

### 4.5 Diferenciais (`#diferenciais`)
Faixa de fundo navy com 4 itens (ícone + título + texto curto), espelhando os 4 pilares da logo:
- Seguros
- Documentação
- Soluções Financeiras
- Confiança que Gera Valor

### 4.6 Depoimentos (`#depoimentos`)
3 cards com 5 estrelas, texto e nome **placeholder** (`[Depoimento do cliente aqui — substitua por um relato real.]`, "Nome do Cliente") — precisam ser substituídos por depoimentos reais antes de publicar oficialmente com essa seção visível.

### 4.7 Contato (`#contato`)
Duas colunas:
- **Lista de contato direto**: WhatsApp, e-mail (`contato@isaprimeseguros.com.br`), Instagram (`@isaprimeseguros`).
- **Formulário** (`#contato-form`): campos Nome, Telefone, Interesse (select: Seguro de Vida / Saúde e Previdência / Capitalização / Outro assunto), Mensagem (opcional). Botão "Enviar pelo WhatsApp".

### 4.8 Footer (`.site-footer`)
Logo, nome da marca, links de navegação, ícones sociais (WhatsApp, e-mail, Instagram), copyright "© 2026 ISA Prime Seguros".

### 4.9 Botão flutuante de WhatsApp
Fixo no canto inferior direito (`.whatsapp-float`), visível em todas as seções, cor oficial do WhatsApp (`#25D366`).

## 5. Dados de contato (fonte da verdade)

| Canal | Valor |
|---|---|
| WhatsApp | `(11) 94012-9358` → `https://wa.me/5511940129358` |
| E-mail | `contato@isaprimeseguros.com.br` |
| Instagram | `@isaprimeseguros` |

Não há menção a cidade/região de atendimento em nenhum ponto do texto (decisão deliberada, ver spec de design).

## 6. Comportamento em JavaScript (`script.js`)

Executado em `DOMContentLoaded`, três responsabilidades:

1. **`enhanceWhatsappLinks()`** — para todo elemento `.whatsapp-link[data-message]`, monta o `href` como `https://wa.me/{numero}?text={mensagem codificada}`. Isso permite que cada botão de WhatsApp na página tenha uma mensagem pré-preenchida diferente via atributo `data-message` no HTML.
2. **`setupMobileNav()`** — alterna a classe `is-open` no menu (`#site-nav`) ao clicar no botão hambúrguer (`#nav-toggle`), atualizando `aria-expanded`; fecha o menu automaticamente ao clicar em qualquer link de navegação.
3. **`setupContactForm()`** — intercepta o submit do formulário (`#contato-form`), monta uma mensagem de texto a partir dos campos preenchidos (nome, telefone, interesse, e mensagem se houver) e abre `https://wa.me/{numero}?text=...` em nova aba. **Não há envio para nenhum backend/serviço de formulário** — é puramente um atalho para preencher a mensagem do WhatsApp.

Número de WhatsApp está hardcoded na constante `WHATSAPP_NUMBER = '5511940129358'` no topo do arquivo.

## 7. Responsividade

Mobile-first, dois breakpoints principais em `style.css`:

- **`max-width: 960px`**: hero e "sobre" passam de grid 2 colunas para 1 coluna (empilhado); grids de produtos, diferenciais (2 colunas) e depoimentos também colapsam.
- **`max-width: 720px`**: menu de navegação vira painel fixo abaixo do header (ativado pelo hambúrguer), padding de seções reduz, diferenciais viram 1 coluna.

O botão flutuante de WhatsApp é `position: fixed` e permanece acessível em qualquer resolução.

## 8. SEO / metadata

- `<title>` e `<meta name="description">` atualizados para incluir intenção de busca local: "São Caetano do Sul" e "Grande São Paulo" (antes só citavam produtos + nome do corretor, sem localização).
- `lang="pt-BR"` no `<html>`.
- `meta name="robots" content="index, follow"` explícito.
- `<link rel="canonical">` e tags **Open Graph** (`og:type`, `og:site_name`, `og:locale`, `og:title`, `og:description`, `og:url`, `og:image`) e **Twitter Card** (`summary`) — importantes aqui porque o link é compartilhado principalmente via WhatsApp/Instagram.
- **Dados estruturados JSON-LD** (`schema.org`) do tipo `InsuranceAgency`, com `address` (São Caetano do Sul/SP/BR), `areaServed` (Grande São Paulo), `sameAs` (Instagram, WhatsApp) e `founder` (`Person` Ithalo Sapata Alves).
- `robots.txt` e `sitemap.xml` na raiz, referenciando o domínio de produção.
- `width`/`height` explícitos (`1254x1254`, proporção real do arquivo) nas três instâncias de `assets/logo.jpg`, para evitar layout shift (Core Web Vitals); logo do footer usa `loading="lazy"` por estar abaixo da dobra.
- Conteúdo do body (hero, sobre, contato) passou a citar "São Caetano do Sul" e "Grande São Paulo" explicitamente — antes era uma decisão deliberada não citar região (ver spec de design), revertida a pedido do cliente para otimizar buscas locais.
- Favicon aponta para `assets/logo.jpg`.

**⚠️ Pendência crítica**: o domínio de produção ainda não existe. Todas as URLs absolutas (canonical, `og:url`, `og:image`, `twitter:image`, `robots.txt`, `sitemap.xml`) usam `https://www.isaprimeseguros.com.br/` como placeholder, inferido do domínio já usado no e-mail de contato. Há um comentário `TODO` logo no `<head>` de `index.html` marcando isso. **Assim que o domínio real for registrado/confirmado, é preciso**: (1) confirmar ou corrigir esse valor em todos os arquivos citados, e (2) submeter o site ao Google Search Console e enviar o `sitemap.xml`.

## 9. Itens pendentes / placeholders a substituir antes do lançamento definitivo

Estes pontos já estão sinalizados no HTML/spec de design, mas ainda não foram resolvidos com conteúdo real:

1. **Foto de Ithalo Sapata Alves** — seção Sobre usa um ícone de silhueta em vez de foto real.
2. **Bio completa** — texto atual da seção Sobre é um placeholder profissional; falta anos de experiência, credenciais e dados reais.
3. **Depoimentos reais** — os 3 cards de depoimentos têm texto e nomes fictícios/placeholder.

Fora de escopo (decisão deliberada, não pendência): integração com serviço de formulário (Formspree/Web3Forms), seção de FAQ, números de credibilidade, menção a cidade/região.

## 10. Como rodar localmente

Não há processo de build. Basta abrir `index.html` diretamente no navegador, ou servir a pasta com qualquer servidor estático simples, por exemplo:

```bash
python3 -m http.server 8000
# depois acessar http://localhost:8000
```

## 11. Deploy

Repositório com um único commit até o momento (`c56f352 — primeiro deploy`). Por ser um site 100% estático, pode ser publicado em qualquer host de arquivos estáticos (Vercel, Netlify, GitHub Pages, Hostinger etc.) sem configuração de build.

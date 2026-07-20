# ISA Prime Seguros — Landing Page (Design)

## Contexto

Site institucional de página única (single page) para Ithalo Sapata Alves, corretor de seguros, sob a marca **ISA Prime — Corretora de Seguros e Soluções Financeiras**. Objetivo: apresentar a corretora e converter visitantes em contato via WhatsApp ou formulário.

Identidade visual de referência: `referencia.jpg` (logo oficial) — azul-marinho + dourado, tom elegante/corporativo, com 4 pilares: Seguros, Documentação, Soluções Financeiras, Confiança que Gera Valor.

## Objetivo e CTA

Dupla via de contato, ambas levando ao WhatsApp:
- Botões de WhatsApp diretos (header, hero, flutuante, contato).
- Formulário de contato que monta a mensagem a partir dos campos preenchidos e abre `https://wa.me/5511940129358` com o texto pronto (sem backend próprio).

## Produtos em destaque

- Seguro de Vida
- Saúde e Previdência
- Capitalização

## Dados de contato

- WhatsApp: (11) 94012-9358 → `https://wa.me/5511940129358`
- E-mail: contato@isaprimeseguros.com.br
- Instagram: @isaprimeseguros
- Sem menção a cidade/região específica (atendimento não localizado no texto).

## Estrutura da página

1. **Header fixo (sticky)** — logo reduzida + navegação por âncora (Sobre, Produtos, Diferenciais, Depoimentos, Contato) + botão CTA WhatsApp. Menu hambúrguer no mobile.
2. **Hero** — fundo off-white, logo em destaque, headline + subheadline apresentando a ISA Prime e Ithalo Sapata Alves, dois CTAs: "Falar no WhatsApp" e "Ver soluções" (scroll até Produtos).
3. **Sobre** — bio de exemplo do Ithalo (texto placeholder profissional, fácil de editar depois), espaço reservado para foto (placeholder visual, sem foto real por ora), menção à especialização em Vida, Saúde e Previdência, Capitalização.
4. **Produtos** — 3 cards (Vida, Saúde e Previdência, Capitalização), cada um com ícone de linha dourado, descrição curta e CTA que abre WhatsApp com mensagem pré-preenchida específica do produto.
5. **Diferenciais** — faixa com os 4 itens da logo: Seguros, Documentação, Soluções Financeiras, Confiança que Gera Valor — ícones de linha replicando o estilo da logo.
6. **Depoimentos** — 3 cards com texto placeholder (`[depoimento do cliente aqui]`), nome fictício e estrelas, para substituição futura pelo cliente.
7. **Contato** — bloco com links diretos (WhatsApp, e-mail, Instagram) ao lado de formulário (nome, telefone, interesse [select: Vida / Saúde e Previdência / Capitalização / Outro], mensagem). Envio via JS: monta texto formatado e redireciona para o link `wa.me`.
8. **Footer** — logo, copyright, links rápidos, ícones de redes sociais/contato.
9. **Botão flutuante de WhatsApp** — fixo no canto inferior direito, visível em todas as seções (scroll).

## Estilo visual

- **Paleta**: azul-marinho (`#0F1F3D`) como cor primária de texto/fundo escuro, dourado (`#C9A227`, com variação de gradiente sutil `#B8860B → #E8C97A` em detalhes) como accent/CTA, off-white (`#FAF9F6`) como fundo base, branco puro em cards.
- **Tipografia**: títulos em caixa-alta com letter-spacing largo (ecoando o "PRIME" da logo), fonte sans-serif geométrica; corpo de texto em sans-serif limpa e legível (ex: Inter via Google Fonts).
- **Ícones**: estilo de linha fina (outline), em dourado ou azul-marinho, consistentes com os 4 ícones da logo (escudo, documento, gráfico, aperto de mãos).
- **Efeitos**: sombras suaves em cards, transições leves em hover, sem gradientes pesados nem estética "fintech" chamativa — visual limpo, espaçado, elegante.
- Sem foto real por enquanto: usar placeholders visuais discretos (ex: silhueta/ícone) na seção Sobre, fáceis de substituir depois.

## Responsividade

Mobile-first. Menu vira hambúrguer abaixo do breakpoint de tablet. Cards de Produtos/Diferenciais/Depoimentos empilham em coluna única no mobile. Botão flutuante de WhatsApp sempre acessível e não sobrepõe conteúdo interativo.

## Tecnologia

- Arquivos estáticos: `index.html`, `style.css`, `script.js`. Sem frameworks, sem etapa de build — abre direto no navegador e pode ser hospedado em qualquer serviço estático (Vercel, GitHub Pages, Hostinger etc.).
- `script.js` cobre: toggle do menu mobile, scroll suave para âncoras, montagem da mensagem do formulário e redirecionamento para `wa.me`.
- Logo (`referencia.jpg`) usada como asset visual na página (header/hero); demais ícones recriados em SVG inline para permitir estilização em CSS (cor, hover).

## Conteúdo/copy

Todo o texto (headlines, bio, descrições de produtos, depoimentos) será escrito em português, tom profissional e caloroso, claramente marcado como placeholder onde depende de dados reais do cliente (bio detalhada, depoimentos, foto). Sem seção de FAQ ou números de credibilidade (não solicitados).

## Fora de escopo

- Foto pessoal real do Ithalo (usar placeholder).
- Integração com serviço de formulário (Formspree/Web3Forms) — descartado em favor do redirecionamento para WhatsApp.
- Menção a cidade/região de atuação.
- Seções de FAQ e números/credibilidade.

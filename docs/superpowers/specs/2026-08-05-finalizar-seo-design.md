# Design — Finalizar configuração de SEO

> Fecha a "Pendência crítica" registrada em `ESPECIFICACOES.md` (seção 8): o domínio de produção estava marcado como placeholder pendente de confirmação.

## Contexto

O SEO técnico do site (title/description localizados, `robots` meta, canonical, Open Graph, Twitter Card, JSON-LD `InsuranceAgency`, `robots.txt`, `sitemap.xml`, `width`/`height` nas imagens) já estava implementado. Faltava confirmar o domínio de produção real, que estava marcado com um `TODO` no `<head>` de `index.html`.

**Decisão do cliente**: o domínio `www.isaprimeseguros.com.br` está registrado e é o valor definitivo — coincide com o placeholder já usado em todo o código. O site ainda não foi publicado nesse domínio.

## Mudanças de escopo

1. **`index.html`** — remover o comentário `TODO` sobre confirmação de domínio (não há URLs para trocar, pois o placeholder já é o valor real).
2. **`index.html`** — adicionar `apple-touch-icon` reaproveitando `assets/logo.jpg` (sem gerar imagem nova), para melhorar a aparência ao salvar o site na tela inicial em iOS/Android.
3. **`sitemap.xml`** — atualizar `<lastmod>` de `2026-07-21` para `2026-08-05`, refletindo as mudanças de conteúdo já feitas (menção a São Caetano do Sul/Grande SP).

Fora de escopo: conteúdo (foto, bio, depoimentos reais) — pendência de conteúdo já documentada separadamente em `ESPECIFICACOES.md` seção 9, não é frente de SEO.

## Próximos passos (fora do código, dependem do deploy)

Não executáveis agora porque o site ainda não está publicado no domínio final:

- Submeter o site ao Google Search Console e enviar `sitemap.xml` assim que o deploy for feito.
- Verificar no Bing Webmaster Tools (opcional).
- Testar o preview de compartilhamento (Facebook Sharing Debugger / preview do WhatsApp) para validar `og:image`.
- Rodar o Google Rich Results Test no JSON-LD após a publicação.

## Testes

Não há testes automatizados neste projeto (site estático sem build). Validação é manual: abrir `index.html` no navegador e no HTML validator, conferir que os metadados batem entre `index.html`, `robots.txt` e `sitemap.xml`.

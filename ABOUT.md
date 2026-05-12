# Sobre

Controle Album 2026 e uma aplicacao web para acompanhar a colecao de figurinhas da Copa do Mundo FIFA 2026.

## Recursos

- Controle de figurinhas por selecao.
- Contagem de faltantes, adquiridas e repetidas.
- Lista de troca copiavel.
- Filtros por status, confederacao e busca por jogador/selecao.
- Suporte a fotos reais das figurinhas em `src/assets/stickers`.
- Deploy automatico pelo GitHub Pages.

## GitHub Pages

O projeto usa Vite com `base: '/Controle-Album2026/'` e publica o resultado de `npm run build`. Isso evita que o GitHub Pages sirva arquivos `.jsx` diretamente e corrige o erro:

```text
Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/jsx".
```

## Imagens

As imagens reais das figurinhas devem seguir o nome `CODIGO-NUMERO`, como `BRA-12.jpg`. O app detecta automaticamente esses arquivos no build.

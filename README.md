# Controle Album 2026

Aplicativo em React + Vite para controlar figurinhas do album Panini FIFA World Cup 2026. Ele permite marcar figurinhas que voce ja tem, contar repetidas, filtrar faltantes e copiar uma lista de troca.

## Publicacao no GitHub Pages

O projeto esta configurado para GitHub Pages no repositorio:

https://github.com/jovemegidio/Controle-Album2026

O workflow em `.github/workflows/deploy.yml` roda:

```bash
npm ci
npm run build
```

Depois publica a pasta `dist` pelo GitHub Pages. O `base` do Vite esta configurado como `/Controle-Album2026/`, que evita o erro de MIME em `main.jsx` porque o Pages passa a servir o JavaScript compilado em `dist/assets`.

## Como rodar localmente

```bash
npm install
npm run dev
```

Para testar o build final:

```bash
npm run build
npm run preview
```

## Fotos reais das figurinhas

As fotos reais devem ficar em:

```text
src/assets/stickers
```

Use o padrao `CODIGO-NUMERO.ext`, por exemplo:

```text
BRA-12.jpg
ARG-11.webp
FIFA-2.png
```

Extensoes aceitas: `jpg`, `jpeg`, `png`, `webp` e `avif`. Quando uma foto existe, o card da figurinha usa a imagem real. Quando nao existe, o app mostra um card textual sem quebrar a pagina.

## Estrutura

- `src/data/teams.js`: base de selecoes e figurinhas.
- `src/assets/stickers`: fotos reais das figurinhas.
- `src/components`: componentes da interface.
- `public/trophy.svg`: favicon usado no Pages.
- `.github/workflows/deploy.yml`: deploy automatico para GitHub Pages.

## Observacoes

Os dados ficam no `localStorage` do navegador. As fotos oficiais da Panini nao sao incluidas no repositorio por padrao; adicione apenas imagens que voce tem direito de usar.

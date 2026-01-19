# VKS Landing (React + Vite + Tailwind)

Landing page institucional com layout multi-seção replicando as referências fornecidas.

## Como rodar
- `npm install`
- `npm run dev` (porta padrão 5173)
- `npm run build` para gerar a versão de produção

## Onde ajustar textos e listas
- Conteúdos, menus e listas: `src/constants/content.ts`
- Componentes de UI (botões, cards, inputs): `src/components/ui/`
- Seções: `src/components/sections/`
- Montagem da página: `src/pages/Home.tsx`

## Assets (substituir pelos definitivos)
Todos os arquivos ficam em `public/assets/imagens/`:
- Logos/brand: `6 - Positiva.png`, `7 - Negativa.png`, `5 - Outline.png`, `8 - Grayscale.png`, `14 - Símbolo Positivo.png`, `glass vks.png`, `V.png` (+ variações permitidas)
- Fundos/hero e sobre: `hero.jpg`, `sobre.jpg`, `midia-bg.jpg`
- Sócios: `patricia.jpg`, `bruno.jpg`, `everson.jpg`
- Miscelânea: `artigo-1.jpg` ... `artigo-6.jpg`, `midia-valor.png`, `midia-estadao.png`, `midia-folha.png`, `ora-1.jpg` ... `ora-4.jpg`, `instituto-ora.png`, vídeos `IMAGENS COMPILADO.mp4`, `IMAGENS SÓCIOS COMPILADO.mp4`
- PDFs: `public/docs/VKS.pdf`

Se algum asset não estiver presente, o layout usa gradientes/vidro como placeholder sem quebrar a estrutura.

## Estrutura de pastas (principal)
- `src/`
  - `components/layout` – Header, Footer
  - `components/sections` – Hero, Triade, SobreNos, AreasAtuacao, Socios, ArtigosNoticias, NaMidia, Ecossistema, InstitutoORA, Portfolio, Contato
  - `components/ui` – Button, Card, Container, Badge, Input, Textarea
  - `constants` – textos e listas dinâmicas
  - `pages/Home.tsx` – monta todas as seções

## Notas de UI/Interações
- Header sticky com blur e CTA dourado; scroll suave habilitado.
- Botões possuem estados hover; cards com efeito vidro/blur.
- Slider “Na Mídia” funcional com setas para ciclar os itens.
- Formulário e cards de contato replicam o visual das referências; mapa usa placeholder em caso de ausência do embed.
# vksmasterfinal

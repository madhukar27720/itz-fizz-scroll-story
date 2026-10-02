# Itz Fizz® — A little more pop.

A scroll driven sparkling soda brand page, built as a frontend assignment and portfolio concept. It recreates the reference's spaced welcome headline, animated percentage callouts and central moving visual, then extends the experience into a dark, scroll led brand story and three playful flavour cards.

## The build

- React 19 + Vite 7
- GSAP 3 + ScrollTrigger for the intro, count cards, product motion and scroll reveals
- Tailwind CSS 4, plus custom CSS for the art direction and responsive layout
- Custom vector product artwork; no stock photos or external image dependencies
- Keyboard friendly links, semantic sections, mobile layout and reduced motion support

## Run it locally

Install Node.js 22 or newer and pnpm 11, then run:

```bash
pnpm install
pnpm dev
```

Open the localhost URL Vite prints in the terminal. Create a production build with `pnpm build`; use `pnpm preview` to preview it locally.

The deployment workflow is at [.github/workflows/deploy.yml](.github/workflows/deploy.yml). If the first run cannot access Pages, enable Pages for the repository in **Settings → Pages** and check the workflow permissions, then rerun it. After the first push, deploy future changes by committing and pushing to `main`.

# Perry

Marketing site for **Perry** — a digital studio that makes websites, games, and digital work.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed for deployment on Vercel.

## Brand

- Primary accent: `#FF263C`
- Background: black (`#000000`)
- Logo: red circle with slanted eye cutouts (`public/logo.png`, `public/favicon.svg`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Local development server |
| `npm run build`   | Production build         |
| `npm run start`   | Serve production build   |
| `npm run lint`    | ESLint                   |

## Deploy on Vercel

1. Push this repo to GitHub (or connect the folder in the Vercel dashboard).
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No extra env vars required.
4. Deploy.

Or from the CLI:

```bash
npx vercel
```

## Project structure

```
src/
  app/           # App Router layout + home page
  components/    # Header, Hero, Work, Services, About, Contact, Footer
public/
  logo.png       # Brand mark
  favicon.svg    # Favicon
  og-logo.png    # Open Graph image
```

## Featured work

- [eas.cx](https://eas.cx) — live project linked from the Work and Contact sections.

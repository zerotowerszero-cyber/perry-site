# Perry

Marketing site for **Perry** — a digital studio that makes websites, games, and digital work.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed for deployment on Vercel.

## Brand & visual system

Light theme modeled after a clean product marketing layout (not dark):

| Token | Value |
| --- | --- |
| Background | `#FFFFFF` |
| Primary text / buttons | `#0A0A0A` |
| Secondary text | `#7D8187` |
| Cards / panels | `#F9F8F6` |
| Light buttons | `#EBEBEB` |
| Borders | `#D5D9E2` |
| Cyan accent | `#0093A3` / soft `#F2FEFF` |
| Brand mark | `#FF263C` eyes logo (`public/logo.svg`, `public/favicon.svg`) |

## Typography

x.ai/bot uses **Universal Sans** and **Universal Sans Display** from Family Type (commercial).

- CSS variables: `--font-sans` and `--font-display` in `src/app/globals.css`
- `@font-face` stubs: `public/fonts/universal-sans.css`
- **Do not** scrape or hotlink `.woff2` files from x.ai
- Drop licensed files into `public/fonts/` — see `public/fonts/README.md` for filenames
- Until those files are present, **Inter** (`next/font`) is the temporary fallback

Headings use the `.font-display` utility (Universal Sans Display → Inter).

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
  app/           # App Router layout + home page + globals
  components/    # Header, Hero, Features, Services, Work, Packages, Contact, Footer
public/
  logo.svg       # Brand mark (red #FF263C)
  favicon.svg
  fonts/         # Universal Sans stubs + drop licensed .woff2 here
```

## Featured work

- [eas.cx](https://eas.cx) — live project linked from Work and Contact.

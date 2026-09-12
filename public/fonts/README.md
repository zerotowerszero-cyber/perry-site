# Fonts — Universal Sans (Family Type)

x.ai/bot uses **Universal Sans** and **Universal Sans Display** from [Family Type](https://www.familytype.co/). These are commercial fonts.

## Do not

- Scrape or hotlink `.woff2` files from x.ai (or any other site)
- Commit unlicensed font binaries

## Drop licensed files here

After purchasing a license, place these files in this folder (names must match `universal-sans.css`):

| File | Family | Weight |
| --- | --- | --- |
| `UniversalSans-Text-400.woff2` | Universal Sans | 400 |
| `UniversalSans-Text-400Italic.woff2` | Universal Sans | 400 italic |
| `UniversalSans-Text-550.woff2` | Universal Sans | 550 |
| `UniversalSans-Text-550Italic.woff2` | Universal Sans | 550 italic |
| `UniversalSans-Display-400.woff2` | Universal Sans Display | 400 |
| `UniversalSans-Display-400Italic.woff2` | Universal Sans Display | 400 italic |
| `UniversalSans-Display-550.woff2` | Universal Sans Display | 550 |
| `UniversalSans-Display-550Italic.woff2` | Universal Sans Display | 550 italic |

`universal-sans.css` already declares `@font-face` for these paths. The site loads it from `layout.tsx`.

## Temporary fallback

Until the `.woff2` files are present, CSS stacks fall back to **Inter** (via `next/font`) and system UI. See `--font-sans` and `--font-display` in `src/app/globals.css`.

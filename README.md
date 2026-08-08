# Yann Villellas — Portfolio

Software engineering portfolio built with Next.js 16 (App Router), Tailwind CSS v4, and next-intl for bilingual content (English/French).

## Stack

- **Framework:** Next.js 16 with Turbopack
- **Styling:** Tailwind CSS v4 (inline theme, design tokens)
- **Internationalization:** next-intl (SSG-compatible, `Link` from `@/i18n/navigation`). Display labels in `messages/*.json`, structured content in `src/data/*.ts`.
- **Fonts:** Inter (body) and Montserrat (headings) via `next/font`
- **Deployment:** Static generation (SSG) — all pages pre-rendered at build time

## Architecture

- **`PageContainer`** — single source of truth for page layout (horizontal constraints, optional vertical spacing)
- **`CardLink` / `Pill`** — shared interactive primitives, all hover/transition behavior unified
- **Design tokens** — `--chrome-inset-x/y`, `--header-height`, `--mobile-nav-height`, `--header-offset`, `--content-footer-gap` in `globals.css`. All values on an 8px grid.
- **i18n** — all user-facing content in `messages/en.json` and `messages/fr.json`. `useTranslations` with namespace per page.

## Development

```bash
npm run dev      # Dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint validation
npm start        # Production server
```

- **Data:** Structured content (projects, experience, skills, education, interests) in typed `src/data/*.ts` files. Display labels in `messages/*.json`. Compile-time type safety, no `t.raw()` casts.

## Project structure

```text
src/
  app/[locale]/      # Routes (about, contact, projects, [id])
  components/        # Shared components (hero, navigation, home, projects, icons)
  styles/            # Background, navigation CSS modules
  i18n/              # routing.ts, request.ts, navigation.ts
  types/             # TypeScript declarations
messages/            # en.json, fr.json translation files
```

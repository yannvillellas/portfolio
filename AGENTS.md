# Agent instructions

`yann.app`, a personal portfolio. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, next-intl. Every page is prerendered; a small proxy resolves the locale.

## Commands

```bash
npm run dev      # Turbopack, http://localhost:3000
npm run lint     # ESLint
npx tsc --noEmit # type check
npm run build    # the real gate: prerenders every route
```

A change is done when `lint`, `tsc` and `build` all pass. There is no test suite; do not add one unasked.

## Layout

| Path                           | Holds                                                              |
| ------------------------------ | ------------------------------------------------------------------ |
| `src/app/[locale]/`            | every route, one segment per page                                  |
| `src/components/`              | components, grouped by area (home, project, projects, about, three, ui, layout) |
| `src/data/`                    | projects, experience, education, skills — both languages per entry |
| `messages/`                    | interface strings, one namespace per page                          |
| `public/images/projects/`      | project screenshots, WebP where weight mattered                    |
| `src/app/[locale]/globals.css` | `@theme` tokens: colours and radii                                 |

## Internationalisation

- French and English are parallel: same pages, same figures, same number of chapters. Never edit one language alone.
- User-facing text comes from `messages/*.json` or from `src/data/`, never hard-coded in a component.
- Import `Link`, `redirect`, `useRouter` from `@/i18n/navigation`, never from `next/link`.
- Locale routing lives in `src/proxy.ts`; supported locales in `src/i18n/routing.ts`.

## Conventions

- Server Components by default; `"use client"` only for state, events or browser APIs.
- Tailwind is the design system: no arbitrary value when a scale class exists (`text-sm`, not `text-[13px]`), no opacity standing in for a colour level.
- Colour roles: `chrome` for text on a raised surface, `control` for a visible interactive element, `line` for hairlines. Contrast is measured, not eyeballed.
- The theme is `data-theme` on `<html>`, set before paint.
- Numbers in digits, date ranges with an en dash and no spaces (`2020–2025`).

## Do not

- Commit secrets, `.env*` files or credentials.
- Edit `messages/fr.json` without its English counterpart.
- Add a dependency without asking. `sharp` is imported by `src/lib/og.ts` to transcode WebP screenshots for the share cards; `three` drives the 3D phone.
- Leave a WebGL resource alive on unmount: dispose textures, materials and render targets, and keep one renderer per mount.

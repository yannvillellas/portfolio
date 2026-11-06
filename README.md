# yann.app

Portfolio of Yann Villellas, software engineer. Every project leads with a working interface, a real screenshot, and the decisions behind it.

**Live:** [yann.app](https://yann.app) — French and English, light and dark.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, next-intl. Fully static, no runtime dependency.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000, redirects to /fr
```

| Command         | What it does                             |
| --------------- | ---------------------------------------- |
| `npm run dev`   | development server with Turbopack        |
| `npm run build` | production build, every page prerendered |
| `npm run start` | serves the production build              |
| `npm run lint`  | ESLint                                   |

There is no test suite: the build prerenders every route, which catches what types do not.

## Content

Copy is data, not markup.

| Where                                                 | What                                                              |
| ----------------------------------------------------- | ----------------------------------------------------------------- |
| `src/data/projects.ts`                                | 7 projects, French and English, three chapters each plus its demo |
| `src/data/experience.ts`, `education.ts`, `skills.ts` | the about page timeline                                           |
| `messages/fr.json`, `messages/en.json`                | every interface string, one namespace per page                    |
| `public/images/projects/`                             | screenshots, 540 px wide WebP                                     |

To add a project, add an entry in both languages: TypeScript refuses a partial translation.

## Deployment

Static output on Vercel. No environment variables are required.

## License

The code is readable. Text, screenshots and personal content are not licensed for reuse.

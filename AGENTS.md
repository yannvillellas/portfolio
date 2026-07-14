# Copilot Instructions - Portfolio Project

## Architecture Overview

This is a **Next.js 15 App Router** portfolio site with **internationalization (i18n)** using `next-intl`. The project uses:

- **React 19** with Server Components by default
- **Tailwind CSS v4** (inline theme configuration in CSS)
- **TypeScript** with strict mode
- **Turbopack** for fast development builds

### Key Architectural Pattern: Locale-First Routing

All pages are nested under `src/app/[locale]/` dynamic segment. Middleware (`src/middleware.ts`) handles locale detection/redirection for routes matching `/((?!api|trpc|_next|_vercel|.*\\..*).*)`

## Internationalization (i18n) Setup

**Configuration files:**

- `src/i18n/routing.ts` - defines supported locales (`en`, `fr`) and default locale
- `src/i18n/request.ts` - configures how messages are loaded per request
- `src/i18n/navigation.ts` - exports locale-aware navigation wrappers (`Link`, `redirect`, `useRouter`, etc.)
- `messages/[locale].json` - translation files organized by page namespaces (e.g., `HomePage`, `AboutPage`)

**Critical patterns:**

```tsx
// ✅ Always use next-intl hooks for translations
import { useTranslations } from "next-intl";
const t = useTranslations("HomePage"); // namespace from messages JSON

// ✅ Always use locale-aware navigation from @/i18n/navigation
import { Link } from "@/i18n/navigation"; // NOT from "next/link"
<Link href="/about">{t("about")}</Link>;

// ✅ Root layout validates locale before rendering
if (!hasLocale(routing.locales, locale)) {
  notFound();
}
```

## Styling with Tailwind CSS v4

**Important differences from Tailwind v3:**

- Configuration is in `src/app/[locale]/globals.css` using `@theme inline` directive
- Custom fonts defined via CSS variables: `--font-inter` (body), `--font-poppins` (headings)
- Dark mode uses native CSS `@media (prefers-color-scheme: dark)` in globals.css
- PostCSS configured with `@tailwindcss/postcss` plugin only

**Font loading pattern:**

```tsx
// In layout.tsx: Import fonts and set as CSS variables
import { Inter, Poppins } from "next/font/google";
const inter = Inter({ variable: "--font-inter", ... });
<body className={`${inter.variable} ${poppins.variable}`}>
```

## Path Aliases

Use `@/*` for imports from `src/` directory:

```tsx
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
```

## Development Workflow

**Commands:**

- `npm run dev` - Start dev server with Turbopack (recommended)
- `npm run build` - Production build
- `npm run lint` - ESLint validation
- `npm start` - Production server

**Adding new pages:**

1. Create page under `src/app/[locale]/[route]/page.tsx`
2. Add translations to `messages/en.json` and `messages/fr.json` with appropriate namespace
3. Use `useTranslations("[Namespace]")` hook in component
4. Use `Link` from `@/i18n/navigation` for internal navigation

**Adding new locales:**

1. Add locale to `src/i18n/routing.ts` locales array
2. Create `messages/[new-locale].json` with all page namespaces
3. Middleware automatically handles routing

## Component Organization

- `src/components/` - Shared components (currently empty)
- `src/app/[locale]/` - Page components
- Server Components by default; add `"use client"` only when needed for client interactivity

## Metadata and SEO

**All pages and layouts must export metadata:**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};
```

For dynamic metadata with i18n, use `generateMetadata`:

```tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Title" : "Titre",
  };
}
```

## Key Files Reference

- `next.config.ts` - Wraps config with `createNextIntlPlugin()`
- `src/middleware.ts` - Locale routing middleware (excludes API routes, static files)
- `src/types/css.d.ts` - TypeScript declarations for CSS custom properties

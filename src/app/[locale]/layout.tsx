import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages, getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildOpenGraph } from "@/i18n/metadata";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "../fonts/switzer-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/switzer-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  adjustFontFallback: "Arial",
  variable: "--font-switzer",
});

import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { InlineScript } from "@/components/InlineScript";
import { themeInitScript } from "@/lib/theme";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");

  return {
    metadataBase: new URL("https://yann.app"),
    title: {
      default: "Yann Villellas",
      template: "%s - Yann Villellas",
    },
    description: t("heroSubtitle"),
    openGraph: buildOpenGraph(
      locale,
      `Yann Villellas — ${t("role")}`,
      t("heroSubtitle"),
    ),
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const skipLabel = (await getTranslations("Navigation"))("skip");

  return (
    <html
      lang={locale}
      data-theme="light"
      suppressHydrationWarning
      className={switzer.variable}
    >
      <head>
        <InlineScript html={themeInitScript} />
      </head>
      <body className="relative flex min-h-svh flex-col">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:ring-1 focus:ring-line"
          >
            {skipLabel}
          </a>
          <Navigation />
          <main id="main" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

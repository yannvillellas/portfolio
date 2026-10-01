import type { Metadata } from "next";
import { Home, User, Folder, Mail } from "lucide-react";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages, getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildOpenGraph } from "@/i18n/metadata";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { InlineScript } from "@/components/InlineScript";

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
      `${t("eyebrow")} — ${t("title")}`,
      t("heroSubtitle"),
    ),
  };
}

const defaultFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const t = await getTranslations("Navigation");
  const messages = await getMessages();

  const menuItems = [
    { label: t("home"), link: "/", mobileIcon: <Home size={18} /> },
    { label: t("about"), link: "/about", mobileIcon: <User size={18} /> },
    {
      label: t("projects"),
      link: "/projects",
      mobileIcon: <Folder size={18} />,
    },
    { label: t("contact"), link: "/contact", mobileIcon: <Mail size={18} /> },
  ];

  return (
    <html lang={locale} data-theme="light" suppressHydrationWarning>
      <head>
        <InlineScript
          html={`(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.setAttribute("data-theme","dark");else if(t==="light")document.documentElement.setAttribute("data-theme","light");else if(window.matchMedia("(prefers-color-scheme:dark)").matches)document.documentElement.setAttribute("data-theme","dark")}catch(e){}})()`}
        />
      </head>
      <body
        className={`${defaultFont.variable} relative flex min-h-svh flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation items={menuItems} />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

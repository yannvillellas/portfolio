import type { Metadata } from "next";
import { Home, User, Folder, Mail } from "lucide-react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { InlineScript } from "@/components/InlineScript";

export const metadata: Metadata = {
  title: {
    default: "Yann Villellas",
    template: "%s - Yann Villellas",
  },
  description: "Personal portfolio website",
};

const defaultFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Navigation" });
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
        className={`${defaultFont.variable} ${headingFont.variable} relative flex min-h-svh flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation items={menuItems} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

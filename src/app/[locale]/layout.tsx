import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
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
    { label: t("home"), link: "/" },
    { label: t("about"), link: "/about" },
    { label: t("projects"), link: "/projects" },
    { label: t("contact"), link: "/contact" },
  ];

  return (
    <html lang={locale}>
      <body
        className={`${defaultFont.variable} ${headingFont.variable} relative`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation items={menuItems} />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t||t==="system")document.documentElement.setAttribute("data-theme",window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");else document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${defaultFont.variable} ${headingFont.variable} relative`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation items={menuItems} />
          <main className="min-h-svh pb-20 md:pb-0">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

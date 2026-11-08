"use client";

import { useEffect, useRef, useState } from "react";
import { Folder, Home, Mail, User } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/layout/Container";
import BackLink from "@/components/layout/BackLink";
import MobileNav from "@/components/layout/MobileNav";
import NavLinks from "@/components/layout/NavLinks";
import type { NavigationItem } from "@/components/layout/NavLinks";
import Wordmark from "@/components/layout/Wordmark";
import { usePathname } from "@/i18n/navigation";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const showBack = pathname.startsWith("/projects/") || pathname === "/legal";
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    try {
      if (previousPath.current !== null) {
        sessionStorage.setItem("previous-path", previousPath.current);
      }
    } catch {
      // Storage can be unavailable; the back link falls back to the home page.
    }
    previousPath.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: NavigationItem[] = [
    {
      label: t("home"),
      link: "/",
      mobileIcon: <Home size={18} aria-hidden="true" />,
    },
    {
      label: t("projects"),
      link: "/projects",
      mobileIcon: <Folder size={18} aria-hidden="true" />,
    },
    {
      label: t("about"),
      link: "/about",
      mobileIcon: <User size={18} aria-hidden="true" />,
    },
    {
      label: t("contact"),
      link: "/contact",
      mobileIcon: <Mail size={18} aria-hidden="true" />,
    },
  ];

  return (
    <>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <Container className="flex h-14 items-center justify-between sm:h-16">
          {showBack ? <BackLink label={t("back")} /> : <Wordmark />}
          <nav
            className="hidden items-center gap-6 sm:flex"
            aria-label={t("primary")}
          >
            <NavLinks items={items} variant="desktop" />
          </nav>
        </Container>
      </header>
      <MobileNav items={items} label={t("mobile")} />
    </>
  );
}

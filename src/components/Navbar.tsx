"use client";

import React from "react";
import { Link } from "@/i18n/navigation";

export interface MenuItem {
  label: string;
  link: string;
}

interface NavbarProps {
  items: MenuItem[];
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <nav className="flex items-center gap-8">
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="text-base font-medium tracking-wider text-foreground no-underline transition-colors duration-300 hover:text-(--accent)"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

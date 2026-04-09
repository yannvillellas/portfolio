import React from "react";
import NavLinks from "./NavLinks";
import { NavigationItem } from "./NavigationContainer";

interface DesktopMenuProps {
  items: NavigationItem[];
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <NavLinks items={items} variant="desktop" />
    </nav>
  );
}

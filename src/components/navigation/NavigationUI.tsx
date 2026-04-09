import React from "react";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { NavigationItem } from "./NavigationContainer";

interface NavigationUIProps {
  items: NavigationItem[];
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export default function NavigationUI({
  items,
  isOpen,
  toggleMenu,
  closeMenu,
}: NavigationUIProps) {
  return (
    <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div
        className={`flex flex-col bg-background/80 backdrop-blur-xl border border-foreground/10 shadow-2xl rounded-2xl overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[400px]" : "max-h-[72px]"
        }`}
      >
        <div className="flex justify-between items-center h-[72px] px-6 shrink-0">
          <Logo />
          <DesktopMenu items={items} />
          <div className="md:hidden">
            <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
        <MobileMenu items={items} isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
}

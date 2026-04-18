import React from "react";
import Logo from "../Logo";
import MenuToggle from "./MenuToggle";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { NavigationItem } from "./NavigationContainer";

interface NavigationProps {
  items: NavigationItem[];
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export default function Navigation({
  items,
  isOpen,
  toggleMenu,
  closeMenu,
}: NavigationProps) {
  return (
    <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <div
        className={`flex flex-col bg-background/20 backdrop-blur-md rounded-2xl overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[400px]" : "max-h-[72px]"
        }`}
      >
        <div className="flex justify-between items-center h-[72px] px-6 shrink-0">
          <Logo />
          <DesktopMenu items={items} />
          <div className="md:hidden">
            <MenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
        <MobileMenu items={items} isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
}

"use client";

import React from "react";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import BurgerMenu from "@/components/BurgerMenu";

export interface NavigationItem {
  label: string;
  link: string;
}

export interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <header className="absolute top-0 left-0 w-full p-8 z-40 pointer-events-none">
      <div className="flex justify-between items-baseline w-full">
        <div className="pointer-events-auto z-50">
          <Logo />
        </div>
        <div className="hidden md:block pointer-events-auto z-50">
          <Navbar items={items} />
        </div>
        <div className="md:hidden pointer-events-auto z-50">
          <BurgerMenu items={items} />
        </div>
      </div>
    </header>
  );
}

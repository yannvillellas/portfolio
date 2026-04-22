"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation/Navigation";

export interface NavigationItem {
  label: string;
  link: string;
}

export interface NavigationProps {
  items: NavigationItem[];
}

export default function NavigationContainer({ items }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navigation
      items={items}
      isOpen={isOpen}
      toggleMenu={() => setIsOpen((prev) => !prev)}
      closeMenu={() => setIsOpen(false)}
    />
  );
}

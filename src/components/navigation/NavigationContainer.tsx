"use client";

import React, { useState, useEffect } from "react";
import NavigationUI from "./NavigationUI";

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
    <NavigationUI
      items={items}
      isOpen={isOpen}
      toggleMenu={() => setIsOpen(!isOpen)}
      closeMenu={() => setIsOpen(false)}
    />
  );
}

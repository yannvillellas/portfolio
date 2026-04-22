import NavLinks from "@/components/navigation/NavLinks";
import type { NavigationItem } from "@/components/navigation/NavigationContainer";

interface MobileMenuProps {
  items: NavigationItem[];
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({
  items,
  isOpen,
  closeMenu,
}: MobileMenuProps) {
  return (
    <nav
      className={`md:hidden flex flex-col px-6 pb-6 gap-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"
      }`}
    >
      <NavLinks items={items} variant="mobile" onItemClick={closeMenu} />
    </nav>
  );
}

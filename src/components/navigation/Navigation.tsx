import Logo from "@/components/Logo";
import DesktopMenu from "@/components/navigation/DesktopMenu";
import MobileNav from "@/components/navigation/MobileNav";
import type { NavigationItem } from "@/components/navigation/NavigationContainer";

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <>
      <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50">
        <div className="flex justify-between items-center h-18 px-6 nav-glass">
          <Logo />
          <DesktopMenu items={items} />
        </div>
      </header>
      <MobileNav items={items} />
    </>
  );
}

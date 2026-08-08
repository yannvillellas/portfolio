import Logo from "@/components/Logo";
import DesktopMenu from "@/components/navigation/DesktopMenu";
import MobileNav from "@/components/navigation/MobileNav";

export interface NavigationItem {
  label: string;
  link: string;
  mobileIcon?: React.ReactNode;
}

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <>
      <header className="fixed top-(--chrome-inset-y) left-(--chrome-inset-x) right-(--chrome-inset-x) z-50">
        <div className="flex justify-between items-center h-(--header-height) px-6 nav-glass">
          <Logo />
          <DesktopMenu items={items} />
        </div>
      </header>
      <MobileNav items={items} />
    </>
  );
}

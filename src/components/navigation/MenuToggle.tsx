"use client";

export interface MenuToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MenuToggle({ isOpen, toggleMenu }: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="relative flex items-center justify-center w-10 h-10 cursor-pointer focus:outline-none text-foreground"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-4">
        <span
          className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
            isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 h-0.5 w-full bg-current -translate-y-1/2 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
            isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
          }`}
        />
      </div>
    </button>
  );
}

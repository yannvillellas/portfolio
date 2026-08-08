import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <div className="select-none">
      <Link
        href="/"
        className="text-2xl font-bold font-heading tracking-tight no-underline"
      >
        Yann Villellas
      </Link>
    </div>
  );
}

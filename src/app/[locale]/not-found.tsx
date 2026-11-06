import en from "../../../messages/en.json";
import { Link } from "@/i18n/navigation";

const copy = en.NotFound;

export default function LocaleNotFound() {
  return (
    <div className="mx-auto flex min-h-[60svh] max-w-2xl flex-col justify-center px-6 py-16">
      <p className="text-sm text-mut">{copy.eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight lg:text-5xl">
        {copy.title}
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-mut">
        {copy.description}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex text-sm text-ink underline-offset-4 hover:text-accent hover:underline"
      >
        {copy.back}
      </Link>
    </div>
  );
}

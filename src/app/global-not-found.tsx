import "./[locale]/globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import en from "../../messages/en.json";
import NotFoundContent from "@/components/layout/NotFoundContent";

const copy = en.NotFound;

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-paper text-ink">
        <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
          <NotFoundContent
            copy={copy}
            link={
              <Link
                href="/"
                className="inline-flex text-sm text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {copy.back}
              </Link>
            }
          />
        </main>
      </body>
    </html>
  );
}

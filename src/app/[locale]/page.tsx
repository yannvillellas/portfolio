import Hero from "@/components/hero/Hero";
import HomeSectionsPreview from "@/components/home/HomeSectionsPreview";

export default function HomePage() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <HomeSectionsPreview />
    </main>
  );
}

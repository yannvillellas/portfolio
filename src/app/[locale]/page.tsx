import Background from "@/components/hero/Background";
import PageContainer from "@/components/PageContainer";
import Hero from "@/components/hero/Hero";
import HomeSectionsPreview from "@/components/home/HomeSectionsPreview";

export default function HomePage() {
  return (
    <main className="relative bg-background text-foreground">
      <Background>
        <PageContainer vertical={false}>
          <Hero />
          <HomeSectionsPreview />
        </PageContainer>
      </Background>
    </main>
  );
}

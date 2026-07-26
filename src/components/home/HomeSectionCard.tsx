import ActionButton from "@/components/home/ActionButton";
import PageContainer from "@/components/PageContainer";

export interface HomeSection {
  href: "/about" | "/projects" | "/contact";
  title: string;
  description: string;
  imageToneClassName: string;
}

interface HomeSectionCardProps {
  section: HomeSection;
  reverseOnDesktop?: boolean;
  ctaLabel: string;
}

export default function HomeSectionCard({
  section,
  reverseOnDesktop = false,
  ctaLabel,
}: HomeSectionCardProps) {
  return (
    <section className="flex min-h-svh w-full items-center py-[clamp(56px,8vw,120px)]">
      <PageContainer>
        <div
          className={`flex flex-col items-stretch gap-10 md:gap-12 lg:gap-14 ${
            reverseOnDesktop ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="flex md:basis-2/5">
            <div className="flex w-full flex-col justify-center gap-5 rounded-4xl border border-foreground/20 bg-background/45 p-7 backdrop-blur-[14px] md:p-10 lg:p-12">
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                {section.title}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
                {section.description}
              </p>
              <ActionButton href={section.href} label={ctaLabel} />
            </div>
          </div>

          <div className="flex md:basis-3/5">
            <div
              className={`relative flex w-full overflow-hidden rounded-[1.75rem] border border-foreground/20 shadow-[0_24px_80px_rgba(0,0,0,0.18)] ${section.imageToneClassName} aspect-[608/463.233] md:aspect-[531.4/423.583] lg:aspect-[793.4/608]`}
              role="img"
              aria-label={`${section.title} preview image`}
            >
              <div className="absolute inset-0 bg-linear-to-tr from-black/15 via-transparent to-white/15" />

              <div className="absolute left-5 right-5 top-5 flex items-center gap-2 md:left-6 md:right-6 md:top-6">
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 md:bottom-6 md:left-6 md:right-6">
                <span className="h-3 w-2/3 rounded-full bg-white/65" />
                <span className="h-3 w-1/2 rounded-full bg-white/45" />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

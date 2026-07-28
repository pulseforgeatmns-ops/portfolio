import { site } from "@/lib/content";
import { GoldRule } from "@/components/SectionPrimitives";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88svh] items-center border-b border-[var(--line)] bg-bg"
      aria-labelledby="hero-heading"
    >
      <div className="brief-container w-full py-24 lg:py-32">
        <div className="brief-grid">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
            <p className="eyebrow mb-10 text-center lg:text-left">
              Executive Architecture Brief · 2026
            </p>

            <h1
              id="hero-heading"
              className="display-title text-center text-[clamp(2.75rem,7vw,5.5rem)] lg:text-left"
            >
              {site.name}
            </h1>

            <p className="mt-6 text-center text-sm tracking-[0.14em] text-muted uppercase lg:text-left">
              {site.role}
            </p>

            <div className="mx-auto mt-10 flex justify-center lg:mx-0 lg:justify-start">
              <GoldRule />
            </div>

            <p className="mx-auto mt-10 max-w-xl text-center font-display text-xl italic leading-snug text-navy sm:text-2xl lg:mx-0 lg:text-left">
              “{site.tagline}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

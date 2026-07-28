import {
  coreTenets,
  designCompass,
  philosophyThemes,
  site,
} from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

export function EngineeringPhilosophySection() {
  return (
    <BriefSection id="engineering-philosophy">
      <SectionKicker number="08" label="Engineering Philosophy" />

      <div className="brief-grid items-start">
        <div className="col-span-12 lg:col-span-7">
          <h2
            id="engineering-philosophy-heading"
            className="display-title max-w-xl text-[clamp(2.1rem,4.2vw,3.5rem)] italic"
          >
            I design software that reduces operational burden.
          </h2>
          <GoldRule className="mt-8 mb-5" />
          <p className="text-sm text-muted">
            {site.name} · Founder, Pulseforge
          </p>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
            {philosophyThemes.map((theme) => (
              <span
                key={theme}
                className="border-b border-[var(--line)] pb-1 text-sm text-muted"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-5">
          <div className="panel p-6 sm:p-7">
            <p className="eyebrow">Design Compass</p>
            <ol className="mt-6 space-y-5">
              {designCompass.map((question, index) => (
                <li
                  key={question}
                  className="flex gap-4 border-t border-[var(--line)] pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="font-display text-lg text-gold">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-ink">{question}</p>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <p className="eyebrow mb-5">Core Tenets</p>
        <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {coreTenets.map((tenet) => (
            <article key={tenet.numeral} className="bg-bg-elevated p-6 sm:p-7">
              <div className="flex gap-4">
                <span className="font-display text-3xl italic text-[color-mix(in_srgb,var(--navy)_22%,white)]">
                  {tenet.numeral}
                </span>
                <div>
                  <h3 className="font-display text-xl text-navy">
                    {tenet.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {tenet.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </BriefSection>
  );
}

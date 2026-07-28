import { designPrinciples } from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

export function DesignPrinciplesSection() {
  return (
    <BriefSection id="design-principles">
      <SectionKicker number="04" label="Design Principles" />

      <div className="brief-grid">
        <div className="col-span-12 lg:col-span-8">
          <h2
            id="design-principles-heading"
            className="display-title text-[clamp(2rem,4vw,3.25rem)]"
          >
            Six principles that govern every design decision.
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <p className="lead">
            These are not aspirations — they are constraints. Every component,
            workflow, and integration is measured against them before it ships.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 xl:grid-cols-3">
        {designPrinciples.map((principle) => (
          <article key={principle.number} className="bg-bg-elevated p-6 sm:p-7">
            <p className="text-[0.7rem] tabular-nums tracking-[0.18em] text-gold">
              {principle.number}
            </p>
            <h3 className="mt-4 font-display text-2xl text-navy">
              {principle.title}
            </h3>
            <p className="mt-2 font-display text-base italic text-muted">
              {principle.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </BriefSection>
  );
}

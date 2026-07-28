import { architectureDecisions } from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

export function ArchitectureDecisionsSection() {
  return (
    <BriefSection id="architecture-decisions">
      <SectionKicker number="07" label="Architecture Decisions" />

      <div className="brief-grid">
        <div className="col-span-12 lg:col-span-8">
          <h2
            id="architecture-decisions-heading"
            className="display-title text-[clamp(2rem,4vw,3.25rem)]"
          >
            Six decisions that define the Pulseforge architecture.
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <p className="lead">
            Each decision below was made deliberately, tested against real
            operational requirements, and validated in production. These are not
            defaults — they are commitments.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        {architectureDecisions.map((decision, index) => (
          <article
            key={decision.title}
            className="border border-[var(--line)] bg-bg-elevated"
          >
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="border-b border-[var(--line)] p-5 sm:p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
                <p className="text-[0.65rem] tabular-nums tracking-[0.16em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl text-navy">
                  {decision.title}
                </h3>
              </div>
              <div className="border-b border-[var(--line)] p-5 sm:p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
                <p className="eyebrow">Rationale</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {decision.rationale}
                </p>
              </div>
              <div className="bg-bg-soft p-5 sm:p-6 lg:col-span-4">
                <p className="eyebrow">Business Impact</p>
                <p className="mt-3 font-display text-base italic leading-relaxed text-navy">
                  {decision.impact}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </BriefSection>
  );
}

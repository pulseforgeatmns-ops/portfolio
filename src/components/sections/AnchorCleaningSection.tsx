import { anchorFlow, anchorMetrics } from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

export function AnchorCleaningSection() {
  return (
    <BriefSection id="anchor-cleaning">
      <SectionKicker number="05" label="Case Study" />

      <div className="brief-grid items-start">
        <div className="col-span-12 lg:col-span-7">
          <p className="eyebrow mb-4">Production Validation</p>
          <h2
            id="anchor-cleaning-heading"
            className="display-title text-[clamp(2rem,4vw,3.25rem)]"
          >
            Anchor Cleaning Company
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <p className="lead">
            Anchor Cleaning is the first production deployment of the Pulseforge
            platform — a live operational environment used to validate
            AI-assisted workflows against real customer interactions and business
            operations. The full capability stack was exercised from prospect
            intelligence through communications and reporting.
          </p>
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] lg:col-span-5">
          {anchorMetrics.map((metric) => (
            <article key={metric.label} className="bg-bg-elevated p-5 sm:p-6">
              <p className="font-display text-3xl text-navy sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="eyebrow mb-6">Operating Model</p>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {anchorFlow.map((step, index) => (
            <li key={step.title} className="relative border border-[var(--line)] bg-bg-elevated p-5">
              <p className="text-[0.65rem] tabular-nums tracking-[0.16em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </BriefSection>
  );
}

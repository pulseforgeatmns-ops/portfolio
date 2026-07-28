import { executiveHighlights, kpis } from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

export function ExecutiveSummarySection() {
  return (
    <BriefSection id="executive-summary" bordered={false}>
      <SectionKicker number="01" label="Executive Summary" />

      <div className="brief-grid items-start">
        <div className="col-span-12 lg:col-span-7">
          <h2
            id="executive-summary-heading"
            className="display-title text-[clamp(2rem,4vw,3.25rem)]"
          >
            Founder. Operator.
            <br />
            AI Systems Architect.
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <div className="space-y-5 lead">
            <p>
              Jacob Maynard is a founder and AI systems architect with 10+ years
              of operations leadership. He translates operational complexity into
              software architecture — designing modular, deterministic systems
              that reduce manual overhead and preserve human control over
              high-stakes decisions.
            </p>
            <p>
              Pulseforge is the expression of that work: a modular platform for
              workflow orchestration, operational intelligence, CRM automation,
              knowledge management, communications, reporting, and
              human-governed decision support.
            </p>
            <p>
              The architecture is in production with Anchor Cleaning Company,
              validated against real operational demands — live data, real
              workflows, no controlled environment.
            </p>
          </div>
        </div>

        <aside className="col-span-12 lg:col-span-5">
          <div className="panel-soft p-6 sm:p-7">
            <p className="eyebrow">Briefing Points</p>
            <ul className="mt-5 space-y-4">
              {executiveHighlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 border-t border-[var(--line)] pt-4 text-sm leading-relaxed text-ink first:border-t-0 first:pt-0"
                >
                  <span
                    className="mt-2 h-px w-3 shrink-0 bg-gold"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="bg-bg-elevated p-6 sm:p-7">
            <p className="font-display text-3xl text-navy sm:text-4xl">
              {kpi.value}
            </p>
            <h3 className="mt-3 text-sm font-medium text-ink">{kpi.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {kpi.detail}
            </p>
          </article>
        ))}
      </div>
    </BriefSection>
  );
}

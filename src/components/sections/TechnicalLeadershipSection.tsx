import { leadershipTimeline } from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

export function TechnicalLeadershipSection() {
  return (
    <BriefSection id="technical-leadership">
      <SectionKicker number="06" label="Technical Leadership" />

      <div className="brief-grid">
        <div className="col-span-12 lg:col-span-8">
          <h2
            id="technical-leadership-heading"
            className="display-title text-[clamp(2rem,4vw,3.25rem)]"
          >
            From operator to architect — a decade in the making.
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <p className="lead">
            The systems Jacob builds are grounded in real operational experience.
            Every design decision is informed by years of managing service
            operations before a line of Pulseforge was written. Leadership spans
            product strategy, architecture, workflow design, implementation,
            cross-functional communication, and operational systems thinking.
          </p>
        </div>
      </div>

      <ol className="mt-14 border-t border-[var(--line)]">
        {leadershipTimeline.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-3 border-b border-[var(--line)] py-6 md:grid-cols-12 md:gap-6 md:py-7"
          >
            <div className="md:col-span-1">
              <span className="text-[0.7rem] tabular-nums tracking-[0.16em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl text-navy">{item.title}</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-[0.98rem] leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </BriefSection>
  );
}

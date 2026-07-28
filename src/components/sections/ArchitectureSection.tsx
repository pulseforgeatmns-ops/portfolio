import {
  architectureLayers,
  architecturePrinciples,
} from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

export function ArchitectureSection() {
  return (
    <BriefSection id="architecture">
      <SectionKicker number="03" label="Platform Architecture" />

      <div className="brief-grid">
        <div className="col-span-12 lg:col-span-7">
          <h2
            id="architecture-heading"
            className="display-title text-[clamp(2rem,4vw,3.25rem)]"
          >
            Layered architecture.
            <br />
            Governed at every boundary.
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <p className="lead">
            Pulseforge is organized as a stack of discrete layers, each with a
            clearly defined responsibility. Operators interact at the surface; AI
            processes at depth; humans govern at the boundaries that matter.
          </p>
        </div>

        <aside className="col-span-12 lg:col-span-5">
          <div className="panel h-full p-6 sm:p-7">
            <p className="eyebrow">Architecture Principles</p>
            <ul className="mt-6 space-y-5">
              {architecturePrinciples.map((item) => (
                <li
                  key={item.tag}
                  className="border-t border-[var(--line)] pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="text-sm leading-relaxed text-ink">
                    {item.statement}
                  </p>
                  <p className="mt-2 text-[0.68rem] tracking-[0.14em] text-gold uppercase">
                    {item.tag}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-14" aria-label="Platform architecture diagram">
        <p className="eyebrow mb-6">System Stack</p>
        <ol className="mx-auto max-w-3xl">
          {architectureLayers.map((layer, index) => {
            const isGate = index === 0 || index === 4;
            return (
              <li key={layer.title} className="flex flex-col items-center">
                <article
                  className={`w-full border px-5 py-4 sm:px-7 sm:py-5 ${
                    isGate
                      ? "border-navy bg-navy text-white"
                      : "border-[var(--line)] bg-bg-elevated text-navy"
                  }`}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-[0.65rem] tabular-nums tracking-[0.16em] ${
                          isGate ? "text-gold" : "text-gold"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl">
                        {layer.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm ${
                        isGate ? "text-white/65" : "text-muted"
                      }`}
                    >
                      {layer.detail}
                    </p>
                  </div>
                </article>
                {index < architectureLayers.length - 1 ? (
                  <div
                    className="flex h-7 w-px flex-col items-center bg-[var(--line-strong)]"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </BriefSection>
  );
}

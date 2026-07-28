import { capabilities } from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

const philosophy = [
  {
    title: "Modular",
    detail: "Each service is independently deployable",
  },
  {
    title: "Deterministic",
    detail: "Predictable, auditable outputs",
  },
  {
    title: "Observable",
    detail: "Full visibility at every layer",
  },
  {
    title: "Governed",
    detail: "Humans approve before execution",
  },
];

export function PulseforgeSection() {
  return (
    <BriefSection id="pulseforge">
      <SectionKicker number="02" label="Pulseforge" />

      <div className="brief-grid">
        <div className="col-span-12 lg:col-span-8">
          <p className="eyebrow mb-4">Platform</p>
          <h2
            id="pulseforge-heading"
            className="display-title max-w-3xl text-[clamp(2rem,4vw,3.25rem)]"
          >
            A modular AI platform designed from operational first principles.
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <p className="lead">
            Pulseforge is the platform Jacob designed to prove the architecture
            works. Eight integrated capability layers share context, pass state,
            and surface only what humans need to act on — keeping automation
            deterministic and governance intact at every boundary.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {philosophy.map((item) => (
          <div key={item.title} className="bg-bg-elevated p-5 sm:p-6">
            <p className="font-display text-lg text-navy">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="eyebrow mb-5">Capability Map</p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="border border-[var(--line)] bg-bg-elevated p-5"
            >
              <p className="text-[0.65rem] tabular-nums tracking-[0.16em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl text-navy">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </BriefSection>
  );
}

import { site } from "@/lib/content";
import {
  BriefSection,
  GoldRule,
  SectionKicker,
} from "@/components/SectionPrimitives";

const links = [
  {
    label: "LinkedIn",
    href: site.linkedIn,
    external: true,
  },
  {
    label: "GitHub",
    href: site.github,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.emailPlaceholder}`,
    note: "Placeholder",
  },
  {
    label: "Download Resume",
    href: site.resumePath,
    download: true,
  },
  {
    label: "Download Portfolio PDF",
    href: site.portfolioPdfPath,
    download: true,
  },
];

export function ContactSection() {
  return (
    <BriefSection id="contact" className="bg-bg-soft">
      <SectionKicker number="09" label="Contact" />

      <div className="brief-grid">
        <div className="col-span-12 lg:col-span-8">
          <h2
            id="contact-heading"
            className="display-title text-[clamp(2.1rem,4.2vw,3.5rem)]"
          >
            Designing software that reduces operational burden.
          </h2>
          <GoldRule className="mt-8 mb-8" />
          <p className="lead">
            Jacob is a founder and AI systems architect with 10+ years of
            operations leadership. He designed Pulseforge as a modular platform
            for workflow orchestration, operational intelligence, CRM automation,
            knowledge management, communications, reporting, and human-governed
            decision support.
          </p>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-navy">
            {site.openness}
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-[var(--line)] pt-8">
        <p className="eyebrow mb-5">Connect</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(link.download ? { download: true } : {})}
                className="inline-flex items-baseline gap-2 border-b border-gold/50 pb-1 text-sm text-navy transition-colors hover:border-gold"
              >
                <span>{link.label}</span>
                {link.note ? (
                  <span className="text-[0.65rem] tracking-wide text-muted">
                    ({link.note})
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-16 text-xs text-faint">
        © 2026 {site.name}. Executive architecture portfolio.
      </p>
    </BriefSection>
  );
}

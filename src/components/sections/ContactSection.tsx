"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
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
    external: false,
    note: "Placeholder",
  },
  {
    label: "Download Resume",
    href: site.resumePath,
    external: false,
    download: true,
  },
  {
    label: "Download Portfolio PDF",
    href: site.portfolioPdfPath,
    external: false,
    download: true,
  },
];

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      tone="black"
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gold sm:right-[-6rem] sm:h-[34rem] sm:w-[34rem] lg:right-8"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionLabel number="10" label="Closing" light />
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl"
        >
          <span className="text-white">
            Designing
            <br />
            software that
            <br />
            reduces
          </span>
          <br />
          <span className="text-gold">
            operational
            <br />
            burden.
          </span>
        </motion.h2>
        <GoldRule className="mt-8 mb-8" />
        <p className="max-w-2xl text-[1.05rem] leading-relaxed text-white/70">
          Jacob is a founder and AI systems architect with 10+ years of
          operations leadership. He designed Pulseforge as a modular platform
          for workflow orchestration, operational intelligence, CRM automation,
          knowledge management, communications, reporting, and human-governed
          decision support.
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/55">
          {site.openness}
        </p>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            Connect
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(link.download ? { download: true } : {})}
                  className="inline-flex items-center rounded-full border border-gold/70 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-navy focus-visible:bg-gold focus-visible:text-navy"
                >
                  {link.label}
                  {link.note ? (
                    <span className="ml-2 text-[0.6rem] tracking-normal text-gold/70">
                      ({link.note})
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 text-xs text-white/35">
          © 2026 {site.name}. Executive architecture portfolio.
        </p>
      </div>
    </SectionShell>
  );
}

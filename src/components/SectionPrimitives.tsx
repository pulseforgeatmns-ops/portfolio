import { type ReactNode } from "react";

export function SectionLabel({
  number,
  label,
  light = false,
}: {
  number: string;
  label: string;
  light?: boolean;
}) {
  return (
    <p
      className={`section-label mb-6 ${light ? "text-white/55" : ""}`}
      aria-hidden="true"
    >
      <span className="num">{number}</span>
      <span className="rule" />
      <span className={light ? "text-white/55" : ""}>{label}</span>
    </p>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`gold-rule ${className}`} aria-hidden="true" />;
}

export function SectionShell({
  id,
  children,
  className = "",
  tone = "light",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "black";
}) {
  const tones = {
    light: "bg-bg text-ink",
    dark: "bg-navy text-white",
    black: "bg-black text-white",
  };

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 lg:scroll-mt-8 ${tones[tone]} ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </section>
  );
}

import { type ReactNode } from "react";

export function SectionKicker({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <p className="section-kicker" aria-hidden="true">
      <span className="num">{number}</span>
      <span className="rule" />
      <span>{label}</span>
    </p>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`gold-rule ${className}`} aria-hidden="true" />;
}

export function BriefSection({
  id,
  children,
  className = "",
  bordered = true,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`section-pad scroll-mt-20 lg:scroll-mt-10 ${
        bordered ? "border-t border-[var(--line)]" : ""
      } ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="brief-container">{children}</div>
    </section>
  );
}

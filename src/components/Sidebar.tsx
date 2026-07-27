"use client";

import { navItems, site, type SectionId } from "@/lib/content";

export function Sidebar({ activeId }: { activeId: SectionId }) {
  return (
    <aside
      className="no-print fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-width)] flex-col bg-navy text-white lg:flex"
      aria-label="Primary"
    >
      <div className="border-b border-white/10 px-5 py-6">
        <a href="#hero" className="flex items-center gap-3 rounded-sm">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold font-display text-sm font-semibold text-navy">
            JM
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium tracking-wide">
              {site.name}
            </span>
            <span className="block truncate text-xs text-white/55">
              AI Systems Architect
            </span>
          </span>
        </a>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="Sections">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-[0.92rem] transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full transition-opacity ${
                      active ? "bg-gold opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`w-6 shrink-0 text-xs tracking-wider ${
                      active ? "text-gold" : "text-white/40"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 px-5 py-4 text-xs text-white/40">
        © 2026 {site.name}
      </div>
    </aside>
  );
}

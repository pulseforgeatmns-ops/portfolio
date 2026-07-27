"use client";

import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";
import { AnchorCleaningSection } from "@/components/sections/AnchorCleaningSection";
import { ArchitectureDecisionsSection } from "@/components/sections/ArchitectureDecisionsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DesignPrinciplesSection } from "@/components/sections/DesignPrinciplesSection";
import { EngineeringPhilosophySection } from "@/components/sections/EngineeringPhilosophySection";
import { ExecutiveSummarySection } from "@/components/sections/ExecutiveSummarySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PulseforgeSection } from "@/components/sections/PulseforgeSection";
import { TechnicalLeadershipSection } from "@/components/sections/TechnicalLeadershipSection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/lib/content";

export function PortfolioShell() {
  const activeId = useActiveSection(navItems.map((item) => item.id));

  return (
    <>
      <a href="#executive-summary" className="skip-link">
        Skip to content
      </a>
      <Sidebar activeId={activeId} />
      <MobileNav activeId={activeId} />
      <div className="main-shell">
        <main id="main-content">
          <HeroSection />
          <ExecutiveSummarySection />
          <PulseforgeSection />
          <ArchitectureSection />
          <DesignPrinciplesSection />
          <AnchorCleaningSection />
          <TechnicalLeadershipSection />
          <ArchitectureDecisionsSection />
          <EngineeringPhilosophySection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}

export const site = {
  name: "Jacob Maynard",
  title: "Jacob Maynard | AI Systems Architect",
  description:
    "Founder and AI Systems Architect designing modular AI platforms, workflow automation, knowledge systems, and human-governed decision support.",
  role: "Founder | AI Systems Architect",
  tagline: "Designing software that reduces operational burden.",
  url: "https://portfolio.jacobmaynard.co",
  linkedIn: "https://www.linkedin.com/in/jacob-maynard7/",
  github: "https://github.com/pulseforgeatmns-ops",
  emailPlaceholder: "email@placeholder.com",
  resumePath: "/downloads/Jacob-Maynard-Resume.pdf",
  portfolioPdfPath: "/downloads/Jacob-Maynard-Portfolio.pdf",
  openness:
    "Open to AI Solutions Architect and related architecture leadership opportunities.",
};

export const navItems = [
  { id: "executive-summary", number: "01", label: "Executive Summary" },
  { id: "pulseforge", number: "02", label: "Pulseforge" },
  { id: "architecture", number: "03", label: "Platform Architecture" },
  { id: "design-principles", number: "04", label: "Design Principles" },
  { id: "anchor-cleaning", number: "05", label: "Anchor Cleaning" },
  { id: "technical-leadership", number: "06", label: "Technical Leadership" },
  { id: "architecture-decisions", number: "07", label: "Architecture Decisions" },
  { id: "engineering-philosophy", number: "08", label: "Engineering Philosophy" },
  { id: "contact", number: "09", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];

export const kpis = [
  {
    value: "10+",
    label: "Years Operations Leadership",
    detail: "Service operations translated into systems architecture.",
  },
  {
    value: "1",
    label: "Modular AI Platform",
    detail: "Pulseforge — designed from operational first principles.",
  },
  {
    value: "8+",
    label: "Integrated Capabilities",
    detail: "Intelligence, CRM, workflows, knowledge, and governance.",
  },
  {
    value: "Live",
    label: "Production-Validated Workflows",
    detail: "Validated against real operational demands at Anchor Cleaning.",
  },
];

export const capabilities = [
  {
    title: "Prospect Intelligence",
    description:
      "Score, enrich, and prioritize prospects with evidence grounded in operational fit.",
  },
  {
    title: "CRM Automation",
    description:
      "Keep pipeline state current without burying operators in manual entry.",
  },
  {
    title: "Workflow Orchestration",
    description:
      "Coordinate multi-step processes with deterministic state and clear ownership.",
  },
  {
    title: "Communications",
    description:
      "Route outreach and follow-up through governed channels that stay inspectable.",
  },
  {
    title: "Marketing Automation",
    description:
      "Publish and track content with human approval before anything goes public.",
  },
  {
    title: "Knowledge Management",
    description:
      "Capture operational knowledge so recommendations remain grounded and reusable.",
  },
  {
    title: "Reporting",
    description:
      "Surface pipeline health and system performance for decision-makers.",
  },
  {
    title: "Human-in-the-Loop Decision Support",
    description:
      "Present actionable recommendations where humans authorize high-stakes execution.",
  },
];

export const architectureLayers = [
  {
    title: "Operator",
    detail: "User · Administrator · Service Manager",
  },
  {
    title: "Conversational Interface",
    detail: "Web App · Dashboard · API Surface",
  },
  {
    title: "Workflow Orchestrator",
    detail: "Deterministic state · Auditable transitions",
  },
  {
    title: "Capability Services",
    detail:
      "Prospect Intelligence · CRM · Knowledge · Reporting · Communications",
  },
  {
    title: "Human Approval Layer",
    detail: "Governed automation at every exit point",
  },
  {
    title: "External Systems",
    detail: "Email · CRM · Calendar · Enrichment · Messaging",
  },
];

export const architecturePrinciples = [
  {
    statement: "Each layer has one responsibility",
    tag: "Separation of concerns",
  },
  {
    statement: "State flows downward only",
    tag: "Unidirectional data",
  },
  {
    statement: "Human approval at exit points",
    tag: "Governed automation",
  },
  {
    statement: "Every decision is logged",
    tag: "Full auditability",
  },
];

export const designPrinciples = [
  {
    number: "01",
    title: "Modular Architecture",
    subtitle: "Composable by design",
    description:
      "Each service is independently deployable with explicit contracts and clear boundaries.",
  },
  {
    number: "02",
    title: "Deterministic Workflows",
    subtitle: "Predictable, always",
    description:
      "Critical paths produce auditable outputs that operators can trust and replay.",
  },
  {
    number: "03",
    title: "Evidence-Based Decisions",
    subtitle: "Signal over intuition",
    description:
      "Recommendations are grounded in inspectable operational evidence before action.",
  },
  {
    number: "04",
    title: "Human Governance",
    subtitle: "Approval before execution",
    description:
      "High-stakes automation stops at a human boundary by design, not by exception.",
  },
  {
    number: "05",
    title: "Observability",
    subtitle: "Visibility at every layer",
    description:
      "State, decisions, and outcomes remain visible so systems stay operable under load.",
  },
  {
    number: "06",
    title: "Scalability",
    subtitle: "Expand without rewrite",
    description:
      "New capabilities plug into shared orchestration without collapsing architecture.",
  },
];

export const anchorMetrics = [
  { value: "80%", label: "Less manual entry" },
  { value: "3×", label: "Follow-up consistency" },
  { value: "< 24h", label: "Response time" },
  { value: "100%", label: "Pipeline visibility" },
];

export const anchorFlow = [
  {
    title: "Business Problem",
    detail:
      "Acquisition, follow-up, CRM hygiene, and reporting competed for the same operator attention.",
  },
  {
    title: "AI-Assisted Workflow",
    detail:
      "Pulseforge orchestrates prospecting, communications, and operational intelligence as shared context.",
  },
  {
    title: "Human Review",
    detail:
      "Operators approve high-stakes actions so automation remains governed and inspectable.",
  },
  {
    title: "Operational Improvement",
    detail:
      "Live validation against real customer interactions — not a controlled demo environment.",
  },
];

export const leadershipTimeline = [
  {
    title: "Operations Leadership",
    detail: "10+ years translating ambiguity into repeatable operating systems.",
  },
  {
    title: "Founder",
    detail:
      "Built Pulseforge and Anchor Cleaning as architecture and validation environments.",
  },
  {
    title: "Platform Architecture",
    detail: "Defined service boundaries, governed data flows, and approval policies.",
  },
  {
    title: "Product Development",
    detail:
      "Led requirements, specifications, implementation reviews, and roadmap sequencing.",
  },
  {
    title: "Deployment",
    detail: "Shipped production workflows under real operational constraints.",
  },
  {
    title: "Continuous Improvement",
    detail:
      "Tightened observability, governance, and reliability from live feedback.",
  },
];

export const architectureDecisions = [
  {
    title: "Human Approval Layer",
    rationale:
      "AI systems must not execute high-stakes decisions without an explicit human gate.",
    impact:
      "Eliminates risk of costly automation errors while preserving speed where autonomy is safe.",
  },
  {
    title: "Evidence Graph",
    rationale:
      "Recommendations should be grounded in inspectable operational evidence, not opaque model confidence.",
    impact:
      "Decisions remain auditable, defensible, and reusable across workflows.",
  },
  {
    title: "Workflow Engine",
    rationale:
      "Operational complexity requires deterministic orchestration with explicit state transitions.",
    impact:
      "Teams can reason about process outcomes, ownership, and failure modes.",
  },
  {
    title: "Knowledge System",
    rationale:
      "Institutional knowledge must compound instead of living in scattered notes and tribal memory.",
    impact:
      "Operators inherit context; systems improve without becoming black boxes.",
  },
  {
    title: "Modular Services",
    rationale:
      "A monolith of agents is fragile. Bounded services with clear contracts scale more safely.",
    impact:
      "Capabilities evolve independently without rewriting the platform core.",
  },
  {
    title: "Deterministic Execution",
    rationale:
      "Reliability comes before autonomy. Probabilistic AI belongs where it adds leverage, not where it creates risk.",
    impact:
      "Business-critical paths stay predictable under real operational load.",
  },
];

export const designCompass = [
  "Does this reduce manual effort?",
  "Can a human inspect this decision?",
  "Does this compound over time?",
  "Can we remove this layer?",
];

export const coreTenets = [
  {
    numeral: "I",
    title: "Complexity is a tax.",
    detail:
      "Every unnecessary layer extracts ongoing cost from operators and maintainers.",
  },
  {
    numeral: "II",
    title: "Every manual step is a systems opportunity.",
    detail:
      "Repetition signals where architecture should absorb operational burden.",
  },
  {
    numeral: "III",
    title: "Reliability before autonomy.",
    detail:
      "Automation earns trust by being observable, reviewable, and fail-closed.",
  },
  {
    numeral: "IV",
    title: "Business outcomes over AI hype.",
    detail:
      "Architecture succeeds when operational burden drops — not when demos impress.",
  },
];

export const philosophyThemes = [
  "Human-centered AI",
  "Business-first engineering",
  "Operational simplicity",
  "Long-term maintainability",
  "Systems thinking",
  "Reliability before autonomy",
];

export const executiveHighlights = [
  "Translates operational complexity into modular software architecture",
  "Designs deterministic workflows with human-governed automation",
  "Validates platform decisions in live production environments",
  "Prioritizes business outcomes over AI novelty",
];

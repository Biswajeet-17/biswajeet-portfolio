import type { Project } from "@/types/project";

/** Remote images configured in next.config.ts (Unsplash). Replace with `/images/projects/*` anytime. */
export const PROJECTS: Project[] = [
  {
    id: "ims",
    title: "Insurance Management System",
    shortDescription:
      "Comprehensive insurance policy management platform with real-time updates, claims processing, and seamless team collaboration.",
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Insurance paperwork and calculator on desk",
    stack: ["Angular", "Redis", ".NET Core", "MS-SQL", "Bootstrap"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    overview:
      "Insurance Management System delivers end-to-end policy lifecycle tooling with Angular on the frontend and ASP.NET/.NET APIs on the backend. Real-time dashboards use SignalR to push critical claim and renewal events.",
    features: [
      "Policy creation, versioning, underwriting notes, renewals.",
      "Claims intake, workflow assignment, SLA-driven escalations.",
      "SignalR notifications for teams and auditors.",
      "Role-based dashboards with exportable summaries.",
      "Operational audit trails aligned with regulated environments.",
    ],
    technologies: [
      "Angular",
      ".NET Core",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "MS-SQL",
      "Redis",
      "Bootstrap",
      "JWT",
    ],
    challenges:
      "Orchestrating reliable real-time refreshes alongside consistent transactional workflows required careful partitioning of read models, cache invalidation, and background processing for heavier reports.",
  },
  {
    id: "diam",
    title: "Digital Identity & Access Management Platform",
    shortDescription:
      "A cybersecurity solution providing secure user authentication, multi-factor authentication, and role-based access control.",
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Abstract cybersecurity concept image",
    stack: ["Angular", ".NET Core", "JWT", "MS-SQL"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    overview:
      "A centralized IAM layer that standardizes sign-in journeys, strengthens identity assurance, and enforces granular access policies backed by audited events.",
    features: [
      "Secure onboarding with MFA and step-up prompts.",
      "RBAC templates with segregation-of-duty checks.",
      "Session management and token rotation policies.",
      "Admin tooling for entitlement reviews and revocation.",
      "Security event logging with tamper-evident patterns.",
    ],
    technologies: [
      "Angular",
      ".NET Core",
      "ASP.NET Identity patterns",
      "JWT bearer auth",
      "MS-SQL",
      "AES/HMAC utilities",
      "Swagger/OpenAPI governance",
    ],
    challenges:
      "Balancing strong authentication flows with usability meant progressive profiling of risk signals, backoff strategies on repeated failures, and resilient token validation paths under burst traffic.",
  },
  {
    id: "taxi-bms",
    title: "Taxi Booking & Management Platform",
    shortDescription:
      "Real-time taxi dispatch platform with GPS tracking, fare calculation, driver/passenger apps, and admin dashboard.",
    imageSrc:
      "https://images.unsplash.com/photo-1575023782232-75913f987634?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "City street with taxis from above",
    stack: ["Angular", ".NET Core", "JWT", "MS-SQL"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    overview:
      "Dispatch-heavy platform aligning booking, fleet visibility, fares, disputes, and financial reconciliation with low-latency updates for operators.",
    features: [
      "Live bookings with driver matching heuristics.",
      "Fare rules engine with tariffs and surcharge windows.",
      "GPS-aware trip tracking surfaces for ops teams.",
      "Driver and rider consoles with SLA messaging.",
      "Admin analytics for hotspots, cancellations, payouts.",
    ],
    technologies: [
      "Angular",
      ".NET Core",
      "SignalR/geo-friendly APIs",
      "MS-SQL spatial-friendly schemas",
      "JWT",
      "Background workers for payouts",
    ],
    challenges:
      "Keeping ETA and fare computations consistent offline/online blends while preventing race conditions needed careful orchestration layers and idempotent command handling.",
  },
];

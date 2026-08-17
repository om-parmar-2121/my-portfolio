export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: string[];
  deliverables: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "frontend-engineering",
    number: "01",
    title: "Full-Stack Web Development",
    shortDesc: "End-to-end applications built with Next.js 14, React, Node.js, and TypeScript that scale seamlessly.",
    description: "Architecting and implementing bespoke web applications engineered for blazing performance, bulletproof state management, type-safe API integrations, and robust database models.",
    tags: ["Next.js 14", "TypeScript", "React", "PostgreSQL", "Node.js", "Server Actions"],
    deliverables: [
      "Custom Full-Stack Web Application",
      "Robust REST & GraphQL APIs",
      "Authentication & Role-Based Access Control",
      "Database Schema Design & Query Optimization",
      "Automated CI/CD Pipeline & Vercel/AWS Setup",
    ],
    icon: "Code2",
  },
  {
    id: "framer-and-ui",
    number: "02",
    title: "Framer & Interactive Design Systems",
    shortDesc: "Pixel-perfect Framer rebuilds, interactive micro-animations, and high-conversion landing pages.",
    description: "Bridging the gap between Figma designs and live production. I craft fluid Framer sites with custom code components, scroll-driven interactions, and optimized conversion pathways.",
    tags: ["Framer Rebuilds", "Micro-Animations", "Design Tokens", "Figma to Code", "Responsive Layouts"],
    deliverables: [
      "Figma to Framer / Next.js Conversion",
      "Custom Interactive Canvas Components",
      "CMS Setup for Blogs & Case Studies",
      "Kinetic Scroll Animations & Micro-Interactions",
      "Zero-Layout-Shift Responsive Implementation",
    ],
    icon: "Layout",
  },
  {
    id: "cloud-and-performance",
    number: "03",
    title: "Web Performance & Core Web Vitals",
    shortDesc: "Auditing, refactoring, and optimizing sluggish web apps to achieve 99+ Lighthouse scores.",
    description: "Transforming slow-loading web applications into lightning-fast experiences. I eliminate render-blocking assets, optimize image pipelines, reduce bundle sizes, and tune edge caches.",
    tags: ["Core Web Vitals", "Edge Caching", "Bundle Optimization", "SEO Engineering", "Lighthouse 100"],
    deliverables: [
      "Comprehensive Web Vitals & Speed Audit",
      "JS Bundle Splitting & Tree-Shaking",
      "Image & Font Delivery Optimization",
      "Dynamic Edge Caching Strategies",
      "Technical SEO & Structured Meta Data",
    ],
    icon: "Zap",
  },
  {
    id: "product-consulting",
    number: "04",
    title: "Product Strategy & MVP Launch",
    shortDesc: "Turning early concepts into production-ready MVPs that validate hypotheses and impress investors.",
    description: "From technical scoping and wireframe critique to fast execution. I guide founders through pragmatic tech choices, preventing over-engineering and accelerating time-to-market.",
    tags: ["MVP Scoping", "Tech Stack Architecture", "Rapid Prototyping", "Analytics & Tracking", "Launch Playbook"],
    deliverables: [
      "Technical Roadmap & Architecture Spec",
      "High-Fidelity Interactive MVP",
      "Payment Gateway & Subscription Integration (Stripe)",
      "User Analytics & Event Tracking",
      "Post-Launch Technical Handover & Docs",
    ],
    icon: "Rocket",
  },
];

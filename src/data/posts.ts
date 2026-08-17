export interface PostItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  coverImage: string;
  content: string[];
}

export const postsData: PostItem[] = [
  {
    id: "post-1",
    slug: "building-zero-latency-nextjs-apps",
    title: "Architecting Zero-Latency Web Apps with Next.js 14 and Edge Middleware",
    date: "May 24, 2024",
    readTime: "5 min read",
    category: "Architecture",
    excerpt: "How to combine Server Components, Edge Middleware caching, and streaming SSR to achieve sub-100ms response times globally.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Modern web users expect instant interactions. Achieving true sub-second performance requires rethinking every layer of the rendering pipeline — from DNS resolution and TLS handshakes to React hydration.",
      "With Next.js 14 App Router, we can leverage React Server Components (RSC) to keep heavy dependencies on the server, shipping zero client-side JavaScript for static layout elements.",
      "By placing Edge Middleware in front of dynamic API endpoints and utilizing stale-while-revalidate caching headers, dynamic user data can be served from edge points-of-presence in under 50ms.",
      "In this breakdown, we explore practical patterns for parallel data fetching, streaming suspense boundaries, and optimistic client UI updates.",
    ],
  },
  {
    id: "post-2",
    slug: "kinetic-typography-and-framer-motion",
    title: "Mastering Kinetic Typography and Scroll Physics with Framer Motion",
    date: "April 18, 2024",
    readTime: "7 min read",
    category: "Design Systems",
    excerpt: "A deep dive into creating high-end, smooth scroll-triggered typographic animations without causing jank or layout thrashing.",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Kinetic typography breathes life into modern digital portfolios. When executed thoughtfully, movement guides user focus and reinforces brand authority.",
      "However, unoptimized scroll listeners and layout-triggering properties (`top`, `margin`, `height`) quickly degrade frame rates on mobile devices.",
      "By leveraging `transform: translate3d()` and `will-change: transform` alongside Framer Motion's `useScroll` and `useTransform` hooks, we offload all interpolation directly to the GPU.",
      "We'll inspect how to synchronize staggered word reveals, continuous marquee loops, and interactive cursor magnetic effects seamlessly.",
    ],
  },
  {
    id: "post-3",
    slug: "scaling-indie-saas-to-first-revenue",
    title: "From Idea to Launch: The Pragmatic Full-Stack Playbook for Indie Builders",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Product Strategy",
    excerpt: "Essential lessons learned from shipping over 30 web products: avoiding architecture traps, choosing boring tech, and validating before coding.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "The biggest danger for software engineers building their own products is over-engineering too early. Building microservices for an app with zero users is a common trap.",
      "A pragmatic tech stack (Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Stripe) allows a single developer to build, deploy, and iterate with unprecedented speed.",
      "Focus on the core value loop first: what is the single problem the user is paying you to solve? Build that cleanly, wrap it in a polished landing experience, and get feedback immediately.",
      "In this article, I share my personal launch checklist covering analytics instrumentation, transactional emails, SEO metadata, and feedback pipelines.",
    ],
  },
];

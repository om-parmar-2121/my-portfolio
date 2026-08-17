export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectTag: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Sami Al-Hassan",
    role: "Founder & Creative Director",
    company: "OntopDesign Studio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: "Om's engineering craft is in a tier of its own. He turned our complex motion concepts into an ultra-fast, responsive Next.js web application that converted visitors on day one. A true master of the stack.",
    rating: 5,
    projectTag: "Damas Agency Platform",
  },
  {
    id: "testimonial-2",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "Najm Technologies",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content: "Working with Om was an incredible experience. Not only did he execute the entire frontend rewrite in record time, but his strategic insights on state management and caching saved our backend team weeks of rework.",
    rating: 5,
    projectTag: "Najm Full-Stack App",
  },
  {
    id: "testimonial-3",
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    company: "Kavi Neural Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "When our real-time streaming canvas began choking under heavy user load, Om diagnosed the WebGL bottlenecks within 48 hours and engineered an elegant Web Worker solution that doubled our FPS. Essential engineer.",
    rating: 5,
    projectTag: "Kavi Generative Studio",
  },
  {
    id: "testimonial-4",
    name: "David Vance",
    role: "Co-Founder & CEO",
    company: "PostWing Inc.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content: "Om is rare: he has the aesthetic eye of a high-end designer and the engineering discipline of a veteran systems architect. He delivered our core SaaS scheduler with 99.99% reliability.",
    rating: 5,
    projectTag: "PostWing Platform",
  },
];

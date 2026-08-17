export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  featured: boolean;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  galleryImages: string[];
  liveUrl?: string;
  githubUrl: string;
  architectureHighlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "fintrack",
    slug: "fintrack",
    title: "FinTrack",
    category: "Personal Finance & Analytics Platform",
    year: "2024",
    client: "Personal Finance System",
    role: "Full-Stack Developer",
    timeline: "Completed",
    featured: true,
    tagline: "A comprehensive full-stack MERN application for income, expenses, budgeting, debt management, and real-time financial analytics.",
    summary: "FinTrack provides individuals with an intuitive, data-driven financial management tool. It integrates multi-method authentication (OTP & Google OAuth), Recoil state management for high performance, and interactive visual charts.",
    challenge: "Handling complex client-side transaction filtering and state synchronization across multiple views (Budgets, Debts, Categories, Analytics) without unnecessary re-renders or server latency.",
    solution: "Designed a clean MERN architecture using TypeScript, Recoil atoms/selectors for localized state updates, and an Express REST API with MongoDB persistence and Nodemailer for OTP delivery.",
    techStack: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Recoil",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Postman",
    ],
    metrics: [
      { label: "Authentication", value: "OTP + OAuth" },
      { label: "State Engine", value: "Recoil Atoms" },
      { label: "API Architecture", value: "RESTful" },
      { label: "Database", value: "MongoDB Atlas" },
    ],
    heroImage: "/fintrack-image.png",
    galleryImages: [
      "/fintrack-image.png",
    ],
    githubUrl: "https://github.com/om-parmar-2121/FinTrack",
    architectureHighlights: [
      "Separation of concerns: authentication controllers isolated from financial transaction logic",
      "Passwordless & OAuth entry via Email OTP and Google OAuth",
      "Optimized client state with Recoil rendering isolation",
      "Deployable on Vercel (Frontend) and Render (Express API)",
    ],
  },
  {
    id: "staffsphere",
    slug: "staffsphere",
    title: "StaffSphere",
    category: "Role-Based HR & Employee System",
    year: "2024",
    client: "Enterprise HR Workflow",
    role: "Full-Stack Developer",
    timeline: "Completed",
    featured: true,
    tagline: "Role-aware human resources platform managing employee onboarding workflows, leave requests, attendance logs, and notices.",
    summary: "StaffSphere automates the entire employee lifecycle with strict Role-Based Access Control (RBAC). It separates HR administrative workspaces from employee self-service portals.",
    challenge: "Enforcing granular permissions between HR admins (reviewing approvals, managing rosters) and employees (submitting leave requests, viewing attendance) securely on both frontend and API layers.",
    solution: "Engineered an Express/Node.js backend with JWT authentication, bcrypt password hashing, and custom RBAC middleware guarding REST endpoints, combined with a responsive React UI.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Postman",
    ],
    metrics: [
      { label: "Access Control", value: "Multi-Role RBAC" },
      { label: "Security", value: "JWT + bcrypt" },
      { label: "Design Pattern", value: "MVC Model" },
      { label: "Persistence", value: "Mongoose ODM" },
    ],
    heroImage: "/staffphere-image.png",
    galleryImages: [
      "/staffphere-image.png",
    ],
    githubUrl: "https://github.com/om-parmar-2121/StaffSphere",
    architectureHighlights: [
      "Onboarding workflow with pending state and HR verification approval step",
      "Attendance and structured leave request and approval flow",
      "Protected API routes with JWT token verification and role validation",
      "Modular controller and service organization for maintainability",
    ],
  },
  {
    id: "college-management-system",
    slug: "college-management-system",
    title: "CMS",
    category: "Academic & Administrative Portal",
    year: "2024",
    client: "Higher Education Portal",
    role: "Full-Stack Developer",
    timeline: "Completed",
    featured: true,
    tagline: "A multi-role academic portal engineered for Administrators, Faculty, and Students to streamline campus operations.",
    summary: "Centralizes student roster maintenance, attendance tracking, grade sheet evaluation, class scheduling, and campus announcements behind dedicated role-specific dashboards.",
    challenge: "Managing relational educational workflows (such as timetable synchronization, faculty subject allocation, and grade reporting) across three distinct user roles with high data integrity.",
    solution: "Designed structured Mongoose data schemas, request-level business controllers, and a modular React frontend with TypeScript and clean stateful custom hooks.",
    techStack: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
    ],
    metrics: [
      { label: "User Roles", value: "3 Dashboards" },
      { label: "Core Modules", value: "5 Modules" },
      { label: "Type Safety", value: "TypeScript" },
      { label: "Database", value: "MongoDB Atlas" },
    ],
    heroImage: "/cms-image.png",
    galleryImages: [
      "/cms-image.png",
    ],
    githubUrl: "https://github.com/om-parmar-2121/College-Management-System",
    architectureHighlights: [
      "Administrator module: Roster creation, schedule synchronization, notice broadcasting",
      "Faculty module: Attendance logging, examination marks entry, class timetables",
      "Student portal: Academic performance / GPA views, attendance history, timetable viewer",
      "RESTful API endpoints with modular controller-route binding",
    ],
  },
];

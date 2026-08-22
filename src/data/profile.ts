export interface SkillItem {
  name: string;
  color: string;
  glow: string;
}

export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  eyebrow: string;
  tagline: string;
  location: string;
  timezone: string;
  contactEmail: string;
  resumeUrl: string;
  status: {
    available: boolean;
    text: string;
  };
  bioParagraphs: string[];
  achievements: string[];
  socials: {
    name: string;
    url: string;
    icon: string;
    handle: string;
  }[];
  skillsList: SkillItem[];
  skillRows: SkillItem[][];
  allTechStack: string[];
}

export const profileData: ProfileData = {
  name: "Om Parmar",
  fullName: "Om Parmar",
  role: "Full-Stack MERN Developer & Software Engineer",
  eyebrow: "/FULL-STACK MERN DEVELOPER",
  tagline: "Building scalable web applications, secure REST APIs, and intuitive user experiences with clean architecture and practical problem-solving.",
  location: "Ahmedabad, Gujarat, India",
  timezone: "UTC+5:30 / IST",
  contactEmail: "omparmar2105@gmail.com",
  resumeUrl: "/resume.pdf",
  status: {
    available: true,
    text: "Open to SDE Roles & Internships",
  },
  bioParagraphs: [
    "I'm a Computer Engineering undergraduate passionate about full-stack web development, clean system design, and practical software engineering.",
    "Specialized in the MERN ecosystem (React.js, Node.js, Express.js, MongoDB), I build end-to-end applications featuring role-based access control, secure authentication (JWT, OAuth, OTP), state management with Recoil, and type-safe backend architectures.",
    "Beyond web applications, I have solved 400+ algorithmic problems on LeetCode and Codeforces with a focus on Data Structures & Algorithms, clean code principles, and efficient time-space complexity.",
  ],
  achievements: [
    "Solved 400+ problems on LeetCode and Codeforces focusing on Data Structures & Algorithms.",
    "Built and architected 3 production-grade full-stack MERN systems: FinTrack, StaffSphere, and College Management System.",
    "Engineered robust authentication flows with JWT, Google OAuth, and Nodemailer OTP verification.",
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/om-parmar-2121",
      icon: "Github",
      handle: "om-parmar-2121",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/om-parmar-9843b62b6",
      icon: "Linkedin",
      handle: "om-parmar",
    },
    {
      name: "Email",
      url: "mailto:omparmar2105@gmail.com",
      icon: "Mail",
      handle: "omparmar2105@gmail.com",
    },
  ],
  skillsList: [
    { name: "JavaScript", color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.45)" },
    { name: "TypeScript", color: "#3178C6", glow: "rgba(49, 120, 198, 0.45)" },
    { name: "C", color: "#A9BACD", glow: "rgba(169, 186, 205, 0.45)" },
    { name: "C++", color: "#00599C", glow: "rgba(0, 89, 156, 0.45)" },
    { name: "HTML", color: "#E44D26", glow: "rgba(228, 77, 38, 0.45)" },
    { name: "CSS", color: "#1572B6", glow: "rgba(21, 114, 182, 0.45)" },
    { name: "React", color: "#61DAFB", glow: "rgba(97, 218, 251, 0.45)" },
    { name: "Node.js", color: "#68A063", glow: "rgba(104, 160, 99, 0.45)" },
    { name: "Express.js", color: "#FFFFFF", glow: "rgba(255, 255, 255, 0.35)" },
    { name: "Tailwind CSS", color: "#38BDF8", glow: "rgba(56, 189, 248, 0.45)" },
    { name: "MongoDB", color: "#47A248", glow: "rgba(71, 162, 72, 0.45)" },
    { name: "MySQL", color: "#00618A", glow: "rgba(0, 97, 138, 0.45)" },
    { name: "Git", color: "#F34F29", glow: "rgba(243, 79, 41, 0.45)" },
    { name: "GitHub", color: "#FFFFFF", glow: "rgba(255, 255, 255, 0.35)" },
  ],
  // Stepped Funnel structure matching the reference image (5 -> 4 -> 3 -> 2 = 14 cards)
  skillRows: [
    [
      { name: "JavaScript", color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.45)" },
      { name: "TypeScript", color: "#3178C6", glow: "rgba(49, 120, 198, 0.45)" },
      { name: "C", color: "#A9BACD", glow: "rgba(169, 186, 205, 0.45)" },
      { name: "C++", color: "#00599C", glow: "rgba(0, 89, 156, 0.45)" },
      { name: "HTML", color: "#E44D26", glow: "rgba(228, 77, 38, 0.45)" },
    ],
    [
      { name: "CSS", color: "#1572B6", glow: "rgba(21, 114, 182, 0.45)" },
      { name: "React", color: "#61DAFB", glow: "rgba(97, 218, 251, 0.45)" },
      { name: "Node.js", color: "#68A063", glow: "rgba(104, 160, 99, 0.45)" },
      { name: "Express.js", color: "#FFFFFF", glow: "rgba(255, 255, 255, 0.35)" },
    ],
    [
      { name: "Tailwind CSS", color: "#38BDF8", glow: "rgba(56, 189, 248, 0.45)" },
      { name: "MongoDB", color: "#47A248", glow: "rgba(71, 162, 72, 0.45)" },
      { name: "MySQL", color: "#00618A", glow: "rgba(0, 97, 138, 0.45)" },
    ],
    [
      { name: "Git", color: "#F34F29", glow: "rgba(243, 79, 41, 0.45)" },
      { name: "GitHub", color: "#FFFFFF", glow: "rgba(255, 255, 255, 0.35)" },
    ],
  ],
  allTechStack: [
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
  ],
};

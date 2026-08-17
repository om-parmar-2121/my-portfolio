import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Om Parmar — Full-Stack MERN Developer & Software Engineer",
  description: "Computer Engineering student & Full-Stack MERN Developer building scalable web applications, secure REST APIs, and intuitive user experiences.",
  keywords: [
    "Om Parmar",
    "Full-Stack Developer",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Software Engineer",
  ],
  authors: [{ name: "Om Parmar" }],
  openGraph: {
    title: "Om Parmar — Full-Stack MERN Developer & Software Engineer",
    description: "Building scalable web applications, secure REST APIs, and intuitive user experiences with clean architecture.",
    url: "https://github.com/om-parmar-2121",
    siteName: "Om Parmar Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Om Parmar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Parmar — Full-Stack MERN Developer & Software Engineer",
    description: "Building scalable web applications, secure REST APIs, and intuitive user experiences.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#CCFF00] selection:text-black">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { FeaturedWork } from "@/components/FeaturedWork";
import { DeveloperStats } from "@/components/DeveloperStats";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Marquee />
      <About />
      <FeaturedWork />
      <DeveloperStats />
      <ContactSection />
    </div>
  );
}

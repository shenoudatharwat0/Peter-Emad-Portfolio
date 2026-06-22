import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TimelineSection } from "@/sections/TimelineSection";
import { ContactSection } from "@/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

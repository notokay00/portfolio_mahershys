import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div id="projects">
        <ProjectShowcase />
      </div>
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
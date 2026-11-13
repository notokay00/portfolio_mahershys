import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="projects">
        <ProjectShowcase />
      </div>
      <ExperienceSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
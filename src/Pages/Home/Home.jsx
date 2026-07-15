import AboutMe from "./components/AboutMe/AboutMe";
import HeroSection from "./components/HeroSection";
import ProjectTimeline from "./components/ProjectTimeline/ProjectTimeline";
import TechnicalFocus from "./components/TechnicalFocus/TechnicalFocus";

function Home() {
  return (
    <main className="h-1200">
      <HeroSection />

      <AboutMe />

      <TechnicalFocus />

      <ProjectTimeline />
    </main>
  );
}

export default Home;

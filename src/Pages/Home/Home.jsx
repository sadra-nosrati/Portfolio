import AboutMe from "./components/AboutMe/AboutMe";
import Patents from "./components/FeaturedProjects/Patents";
import HeroSection from "./components/HeroSection";
import ProjectTimeline from "./components/ProjectTimeline/ProjectTimeline";
import TechnicalFocus from "./components/TechnicalFocus/TechnicalFocus";

function Home() {
  return (
    <main className="h-1500">
      <HeroSection />

      <AboutMe />

      <TechnicalFocus />

      <ProjectTimeline />

      <Patents />
    </main>
  );
}

export default Home;

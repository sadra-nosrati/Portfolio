import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Patents from "./components/FeaturedProjects/Patents";
import HeroSection from "./components/HeroSection";
import ProjectTimeline from "./components/ProjectTimeline/ProjectTimeline";
import TechnicalFocus from "./components/TechnicalFocus/TechnicalFocus";

function Home() {
  return (
    <main>
      <HeroSection />

      <AboutMe />

      <TechnicalFocus />

      <ProjectTimeline />

      <Patents />

      <Contact />
    </main>
  );
}

export default Home;

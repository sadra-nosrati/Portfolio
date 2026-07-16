import useDocumentTitle from "../../hooks/useDocumentTitle";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection";
import Patents from "./components/Patents/Patents";
import ProjectTimeline from "./components/ProjectTimeline/ProjectTimeline";
import TechnicalFocus from "./components/TechnicalFocus/TechnicalFocus";

function Home() {
  useDocumentTitle("محمد نصرتی");

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

import AboutMe from "./components/AboutMe/AboutMe";
import HeroSection from "./components/HeroSection";
import TechnicalFocus from "./components/TechnicalFocus";

function Home() {
  return (
    <main className="h-1000">
      <HeroSection />

      <AboutMe />

      <TechnicalFocus />
    </main>
  );
}

export default Home;

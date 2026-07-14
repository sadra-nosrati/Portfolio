import AboutBox from "./AboutBox";
import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";

function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex items-center mx-auto max-w-7xl mt-40 gap-10"
    >
      <AboutImage />

      <div>
        <h2
          id="about-title"
          className="inline-block text-lg text-secondary bg-secondary/10 px-4 py-1 rounded-sm transition-all duration-300 hover:bg-secondary/20 hover:px-5"
        >
          درباره من
        </h2>

        <AboutParagraph />

        <AboutBox />
      </div>
    </section>
  );
}

export default AboutMe;

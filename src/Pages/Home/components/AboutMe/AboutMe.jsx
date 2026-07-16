import AboutBox from "./AboutBox";
import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";

function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto px-4 py-10 flex max-w-7xl flex-col items-center gap-5 tablet-portrait:py-14 tablet-landscape:py-20 tablet-landscape:flex-row tablet-landscape:items-center tablet-landscape:gap-9 laptop:py-25 laptop:gap-15"
    >
      <AboutImage />

      <div className="w-full text-center tablet-landscape:text-right">
        <h2
          id="about-title"
          className="inline-block rounded-md bg-secondary/10 px-4 py-1 text-base text-secondary transition-all duration-300 hover:bg-secondary/20 hover:px-6 mobile:text-lg"
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

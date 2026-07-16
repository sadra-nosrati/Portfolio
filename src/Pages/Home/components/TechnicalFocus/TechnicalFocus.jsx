import TechnicalBox from "./TechnicalBox";

function TechnicalFocus() {
  return (
    <section
      id="skills"
      aria-labelledby="technical-focus-title"
      className="bg-navy-soft px-4 flex flex-col items-center justify-center py-20 tablet-portrait:py-32 laptop:py-40"
    >
      <h2
        id="technical-focus-title"
        className="group relative text-3xl tablet-portrait:text-4xl font-bold text-white"
      >
        حوزه‌های تخصصی
        <span className="absolute -bottom-3 right-0 h-1 w-12 rounded-full bg-secondary transition-all duration-500 group-hover:w-full" />
      </h2>

      <TechnicalBox />
    </section>
  );
}

export default TechnicalFocus;

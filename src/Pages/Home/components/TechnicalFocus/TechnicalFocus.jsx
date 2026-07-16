import TechnicalBox from "./TechnicalBox";

function TechnicalFocus() {
  return (
    <section
      id="skills"
      aria-labelledby="technical-focus-title"
      className="bg-navy-soft py-20 tablet-portrait:py-32 laptop:py-40"
    >
      <div className="w-full px-4 tablet-portrait:px-6">
        <div className="mx-auto max-w-7xl">
          <h2
            id="technical-focus-title"
            className="group relative mx-auto w-fit text-3xl font-bold text-white tablet-portrait:text-4xl"
          >
            حوزه‌های تخصصی
            <span className="absolute -bottom-3 right-0 h-1 w-12 rounded-full bg-secondary transition-all duration-500 group-hover:w-full" />
          </h2>

          <TechnicalBox />
        </div>
      </div>
    </section>
  );
}

export default TechnicalFocus;

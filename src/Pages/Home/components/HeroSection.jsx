import React from "react";

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-140 items-center overflow-hidden mobile-small:min-h-150 mobile:min-h-160 mobile-landscape:min-h-162.5 tablet-portrait:min-h-170 tablet-landscape:min-h-175 laptop:min-h-180"
    >
      <img
        src="/Images/Main-Image-1.png"
        alt="کوره صنعتی و سیستم حرارتی مورد استفاده در صنایع تولید باتری"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-linear-to-l from-primary/95 via-primary/75 to-primary/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 mobile:px-6 tablet-portrait:px-8">
        <div className="max-w-xl text-right mobile-landscape:max-w-2xl tablet-landscape:max-w-3xl">
          <p className="mb-4 inline text-sm text-secondary bg-secondary/30 px-4 py-1 rounded-sm mobile:text-base tablet-portrait:text-lg">
            راهکارهای مهندسی برای صنایع پیشرفته
          </p>

          <h1
            id="hero-title"
            className="mb-5 mt-5 text-xl font-bold leading-[1.6] text-white mobile:text-2xl mobile-landscape:text-3xl tablet-portrait:text-3xl tablet-landscape:text-4xl laptop:text-5xl"
          >
            طراحی و ساخت <span className="text-secondary">کوره‌های صنعتی</span>{" "}
            برای تولید و فرآوری باتری‌های صنعتی
          </h1>

          <p className="mb-8 text-sm leading-7 text-white/75 mobile:text-base mobile-landscape:text-lg tablet-portrait:leading-8">
            ارائه سیستم‌های حرارتی پیشرفته، تجهیزات ذوب و راهکارهای مهندسی‌شده
            برای صنایع تولید باتری خودرو، باتری‌های صنعتی و فرآیندهای حرارتی
            پیچیده.
          </p>

          <div className="flex flex-col gap-3 mobile:flex-row mobile:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-secondary px-7 py-3 text-center text-sm text-white transition hover:bg-accent mobile:px-8"
            >
              مشاهده پروژه‌ها
            </a>

            <a
              href="/catalog.pdf"
              className="rounded-xl border border-white/30 px-7 py-3 text-center text-sm text-white transition hover:border-secondary hover:text-secondary mobile:px-8"
            >
              دریافت کاتالوگ فنی
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

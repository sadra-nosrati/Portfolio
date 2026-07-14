import { FaRecycle, FaFire, FaCogs, FaFilter } from "react-icons/fa";

function TechnicalFocus() {
  return (
    <section
      aria-labelledby="technical-focus-title"
      className="bg-navy-soft mt-32 mobile-landscape:mt-40 flex flex-col items-center justify-center py-20 tablet-portrait:py-32 laptop:py-40"
    >
      <h2
        id="technical-focus-title"
        className="group relative w-fit text-3xl tablet-portrait:text-4xl font-bold text-white"
      >
        حوزه‌های تخصصی
        <span className="absolute -bottom-3 right-0 h-1 w-12 rounded-full bg-secondary transition-all duration-500 group-hover:w-full" />
      </h2>

      <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 laptop:grid-cols-4 gap-5 laptop:gap-6 mt-16 tablet-portrait:mt-24 max-w-7xl px-5">
        <article className="group relative overflow-hidden rounded-2xl bg-primary/40 border border-white/10 p-5 tablet-portrait:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40 hover:bg-primary/60">
          <FaRecycle className="text-4xl text-secondary mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

          <h3 className="text-lg font-bold text-white mb-3">بازیافت سرب</h3>

          <p className="text-sm leading-7 text-slate-300">
            طراحی و راه‌اندازی خطوط بازیافت باتری‌های سرب‌اسیدی و تولید شمش و
            آلیاژ سرب با رویکرد بهینه‌سازی فرآیندهای صنعتی.
          </p>
        </article>

        <article className="group relative overflow-hidden rounded-2xl bg-primary/40 border border-white/10 p-5 tablet-portrait:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40 hover:bg-primary/60">
          <FaFire className="text-4xl text-secondary mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

          <h3 className="text-lg font-bold text-white mb-3">
            کوره گردان صنعتی
          </h3>

          <p className="text-sm leading-7 text-slate-300">
            طراحی، تحلیل و بهینه‌سازی کوره‌های گردان، تجهیزات فرآیندی و
            مکانیزم‌های مورد استفاده در صنایع ذوب سرب.
          </p>
        </article>

        <article className="group relative overflow-hidden rounded-2xl bg-primary/40 border border-white/10 p-5 tablet-portrait:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40 hover:bg-primary/60">
          <FaCogs className="text-4xl text-secondary mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

          <h3 className="text-lg font-bold text-white mb-3">اتوماسیون صنعتی</h3>

          <p className="text-sm leading-7 text-slate-300">
            طراحی مکانیزم‌های مکانیکی، سیستم‌های انتقال و تجهیزات اتوماسیون
            صنعتی برای افزایش راندمان خطوط تولید.
          </p>
        </article>

        <article className="group relative overflow-hidden rounded-2xl bg-primary/40 border border-white/10 p-5 tablet-portrait:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40 hover:bg-primary/60">
          <FaFilter className="text-4xl text-secondary mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

          <h3 className="text-lg font-bold text-white mb-3">
            فیلتراسیون صنعتی
          </h3>

          <p className="text-sm leading-7 text-slate-300">
            طراحی سیستم‌های فیلتراسیون صنعتی، غبارگیرها و تجهیزات حرارتی مورد
            نیاز صنایع ذوب و بازیافت فلزات.
          </p>
        </article>
      </div>
    </section>
  );
}

export default TechnicalFocus;

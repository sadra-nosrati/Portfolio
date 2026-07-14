import { FaRecycle, FaFire, FaCogs, FaFilter } from "react-icons/fa";

const TechnicalBoxStyle =
  "group relative overflow-hidden rounded-2xl bg-primary/40 border-2 border-white/10 p-5 tablet-portrait:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/40 hover:bg-primary/60";
const TechnicalBoxIconStyle =
  "text-4xl text-secondary mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6";
const TechnicalBoxTitle = "text-lg font-bold text-white mb-3";
const TechnicalBoxDesc = "text-sm leading-7 text-slate-300";

function TechnicalBox() {
  return (
    <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 laptop:grid-cols-4 gap-5 laptop:gap-6 mt-16 tablet-portrait:mt-24 max-w-7xl px-5">
      <article className={TechnicalBoxStyle}>
        <FaRecycle className={TechnicalBoxIconStyle} />

        <h3 className={TechnicalBoxTitle}>بازیافت سرب</h3>

        <p className={TechnicalBoxDesc}>
          طراحی و راه‌اندازی خطوط بازیافت باتری‌های سرب‌اسیدی و تولید شمش و
          آلیاژ سرب با رویکرد بهینه‌سازی فرآیندهای صنعتی.
        </p>
      </article>

      <article className={TechnicalBoxStyle}>
        <FaFire className={TechnicalBoxIconStyle} />

        <h3 className={TechnicalBoxTitle}>کوره گردان صنعتی</h3>

        <p className={TechnicalBoxDesc}>
          طراحی، تحلیل و بهینه‌سازی کوره‌های گردان، تجهیزات فرآیندی و
          مکانیزم‌های مورد استفاده در صنایع ذوب سرب.
        </p>
      </article>

      <article className={TechnicalBoxStyle}>
        <FaCogs className={TechnicalBoxIconStyle} />

        <h3 className={TechnicalBoxTitle}>اتوماسیون صنعتی</h3>

        <p className={TechnicalBoxDesc}>
          طراحی مکانیزم‌های مکانیکی، سیستم‌های انتقال و تجهیزات اتوماسیون صنعتی
          برای افزایش راندمان خطوط تولید.
        </p>
      </article>

      <article className={TechnicalBoxStyle}>
        <FaFilter className={TechnicalBoxIconStyle} />

        <h3 className={TechnicalBoxTitle}>فیلتراسیون صنعتی</h3>

        <p className={TechnicalBoxDesc}>
          طراحی سیستم‌های فیلتراسیون صنعتی، غبارگیرها و تجهیزات حرارتی مورد نیاز
          صنایع ذوب و بازیافت فلزات.
        </p>
      </article>
    </div>
  );
}

export default TechnicalBox;

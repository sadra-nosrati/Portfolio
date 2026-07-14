function AboutMe() {
  const paragraphStyle = "text-slate-700 mt-2 text-sm";
  const boxAboutMeStyle =
    "group relative flex flex-col items-center justify-center w-36 h-24 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:border-slate-300 hover:shadow-[0_6px_18px_rgba(4,21,37,0.08)]";
  const boxAboutMeStrongStyle =
    "text-3xl font-bold text-primary transition-transform duration-500 group-hover:scale-105";
  const boxAboutMeSpanStyle = "text-sm text-slate-500 mt-1";

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex items-center mx-auto max-w-7xl mt-40 gap-10"
    >
      <div className="relative shrink-0 group">
        <div className="absolute inset-0 rounded-2xl bg-slate-100 transition-transform duration-500 group-hover:rotate-3"></div>

        <img
          src="./Images/Main-Image-2.png"
          alt="مهندس مکانیک مکاترونیک در حوزه طراحی تجهیزات صنعتی و بازیافت سرب"
          loading="lazy"
          className="relative w-130 h-130 rounded-2xl object-cover transition-all duration-500 ease-out group-hover:-rotate-3deg"
        />
      </div>

      <div>
        <h2
          id="about-title"
          className="inline-block text-lg text-secondary bg-secondary/10 px-4 py-1 rounded-sm transition-all duration-300 hover:bg-secondary/20 hover:px-5"
        >
          درباره من
        </h2>

        <div className="mt-5">
          <p className={paragraphStyle}>
            مهندس مکانیک با گرایش مکاترونیک و بیش از ۲۴ سال تجربه تخصصی در
            طراحی، تحلیل، ساخت و راه‌اندازی تجهیزات و خطوط صنعتی در حوزه تولید
            سرب و بازیافت باتری‌های سرب‌اسیدی هستم.
          </p>

          <p className={paragraphStyle}>
            تجربه گسترده در طراحی و بهینه‌سازی سیستم‌های کوره‌های گردان، تجهیزات
            فرآیندی، مکانیزم‌های مکانیکی و سیستم‌های اتوماسیون صنعتی، همراه با
            تسلط بر نرم‌افزارهای CAD و ابزارهای شبیه‌سازی، امکان ارائه راهکارهای
            مهندسی برای افزایش راندمان، کاهش هزینه‌ها و بهبود عملکرد خطوط تولید
            را فراهم کرده است.
          </p>

          <p className={paragraphStyle}>
            از مهم‌ترین تجربیات حرفه‌ای من می‌توان به طراحی و اجرای کامل
            سایت‌های بازیافت باتری‌های مستعمل تا تولید شمش و آلیاژ سرب، طراحی و
            ساخت مکانیزم‌های کوره‌های گردان و توسعه تجهیزات اختصاصی مورد استفاده
            در صنایع ذوب سرب اشاره کرد.
          </p>

          <p className={paragraphStyle}>
            همچنین تجربه طراحی و ساخت اولین سیستم ریخته‌گری پیوسته شمش سرب مجهز
            به ربات کارتزین برای چیدمان و بسته‌بندی، با طراحی و ساخت کاملاً
            داخلی، از پروژه‌های شاخص حرفه‌ای من محسوب می‌شود.
          </p>

          <p className={paragraphStyle}>
            در زمینه تجهیزات جانبی صنایع ذوب نیز سابقه طراحی و نظارت بر ساخت
            مشعل‌های آب‌خنک، بومی‌سازی تجهیزات حرارتی و طراحی سیستم‌های
            فیلتراسیون و غبارگیرهای صنعتی مورد نیاز خطوط ذوب سرب را دارم.
          </p>

          <p className={paragraphStyle}>
            هدف من به‌کارگیری دانش و تجربه مهندسی در پروژه‌های صنعتی پیشرفته، حل
            مسائل پیچیده، بهینه‌سازی فرآیندها و افزایش بهره‌وری سیستم‌های تولیدی
            است.
          </p>
        </div>

        <ul
          aria-label="آمار حرفه‌ای"
          className="mt-10 flex items-center justify-between"
        >
          <li className={boxAboutMeStyle}>
            <strong className={boxAboutMeStrongStyle}>+24</strong>

            <span className={boxAboutMeSpanStyle}>سال تجربه تخصصی</span>
          </li>

          <li className={boxAboutMeStyle}>
            <strong className={boxAboutMeStrongStyle}>+5</strong>
            <span className={boxAboutMeSpanStyle}>پروژه صنعتی</span>
          </li>

          <li className={boxAboutMeStyle}>
            <strong className={boxAboutMeStrongStyle}>+3</strong>
            <span className={boxAboutMeSpanStyle}>اختراع و نوآوری</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;

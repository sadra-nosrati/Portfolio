const projects = [
  {
    title: "مدیر مهندسی ساخت",
    company: "صبا باتری تهران",
    location: "تهران",
    date: "۱۳۹۵ - اکنون",
    items: [
      "طراحی ماشین‌آلات صنعتی و کوره‌های گردان بازیافت سرب",
      "نظارت بر تهیه مستندات فنی تجهیزات",
      "طراحی سیستم‌های فیلتراسیون صنعتی",
      "طراحی کولینگ‌تاور مسیر دود کوره‌های ذوب سرب",
    ],
  },
  {
    title: "مدیر پشتیبانی فنی",
    company: "صبا باتری",
    location: "تهران",
    date: "۱۳۸۰ - ۱۳۹۵",
    items: [
      "مدیریت نگهداری و تعمیرات پیشگیرانه خطوط تولید",
      "بهینه‌سازی فرآیندهای تعمیرات صنعتی",
    ],
  },
  {
    title: "کارشناس مهندسی تأسیسات مکانیکی",
    company: "فرماندهی مهندسی نیروی دریایی ارتش",
    location: "تهران",
    date: "۱۳۷۳ - ۱۳۸۰",
    items: [
      "طراحی موتورخانه و تأسیسات مکانیکی",
      "طراحی سیستم‌های پایپینگ و انتقال آب",
    ],
  },
];

function ProjectTimeline() {
  return (
    <section className="mx-auto mt-32 w-full max-w-7xl px-5">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-primary">
          پروژه‌های شاخص در گذر زمان
        </h2>

        <p className="mt-3 text-slate-500">
          مروری بر مهم‌ترین مسئولیت‌ها و سوابق حرفه‌ای
        </p>
      </div>

      <div className="relative">
        <div className="absolute right-5 top-0 h-full w-0.5 bg-secondary/20 tablet-landscape:right-1/2 tablet-landscape:-translate-x-1/2"></div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative grid tablet-landscape:grid-cols-2"
            >
              <div
                className={`${
                  index % 2 === 0
                    ? "tablet-landscape:pl-14"
                    : "tablet-landscape:col-start-2 tablet-landscape:pr-14"
                } pr-14`}
              >
                <div className="rounded-3xl bg-white p-7 shadow-[0_2px_12px_rgba(4,21,37,.05)] transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(4,21,37,.08)]">
                  <h3 className="text-xl font-bold text-primary">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-secondary font-medium">
                    {project.company}
                  </p>

                  <div className="mt-2 flex gap-2 text-sm text-slate-500">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.date}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {project.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700 leading-8"
                      >
                        <span className="mt-3 h-2 w-2 rounded-full bg-secondary shrink-0"></span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute top-9 z-20 pr-3 tablet-landscape:pr-1 tablet-landscape:right-1/2 tablet-landscape:translate-x-1/2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary shadow-[0_0_0_7px_rgba(199,127,62,.12)]">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectTimeline;

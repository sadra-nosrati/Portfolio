const boxAboutMeStyle =
  "group relative flex h-24 w-36 flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:shadow-[0_12px_30px_rgba(4,21,37,.08)] active:scale-[.98]";
const boxAboutMeStrongStyle =
  "text-3xl font-bold text-primary transition-transform duration-500 group-hover:scale-105";
const boxAboutMeSpanStyle = "text-sm text-slate-500 mt-1";

function AboutBox() {
  return (
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
  );
}

export default AboutBox;

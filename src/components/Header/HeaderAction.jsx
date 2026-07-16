import { RxHamburgerMenu } from "react-icons/rx";

const ActionStyle =
  "text-[15px] font-medium tracking-normal text-primary/80 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:tracking-wide hover:text-primary";

function HeaderAction({ setIsOpen }) {
  return (
    <>
      <nav className="hidden tablet-landscape:block">
        <ul className="flex items-center gap-11">
          <li>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,.08)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:bg-secondary hover:shadow-[0_16px_35px_rgba(0,0,0,.16)] active:translate-y-0"
            >
              ارتباط
            </a>
          </li>

          <li>
            <a href="#skills" className={ActionStyle}>
              تخصص‌ ها
            </a>
          </li>

          <li>
            <a href="#projects" className={ActionStyle}>
              پروژه‌ها
            </a>
          </li>

          <li>
            <a href="#blog" className={ActionStyle}>
              بلاگ
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setIsOpen(true)}
        aria-label="باز کردن منو"
        className="flex w-10 h-10 mobile:w-12 mobile:h-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-[0_10px_30px_rgba(15,23,42,.08)] active:scale-95 tablet-landscape:hidden"
      >
        <RxHamburgerMenu className="mobile:text-2xl text-xl text-primary" />
      </button>
    </>
  );
}

export default HeaderAction;

import { HiBars3BottomRight } from "react-icons/hi2";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-slate-50/60 backdrop-blur-2xl supports-backdrop-filter:bg-slate-50/40">
      <div className="mx-auto flex h-16 items-center justify-between px-4 mobile:px-6 tablet-landscape:h-20 tablet-landscape:px-8 laptop:max-w-7xl">
        <div className="hidden tablet-landscape:flex items-center gap-10">
          <a
            href="#contact"
            className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
          >
            ارتباط
          </a>

          <nav aria-label="منوی اصلی">
            <ul className="flex items-center gap-8 text-primary">
              <li>
                <a
                  href="#skills"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  تخصص‌ها
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  پروژه‌ها
                </a>
              </li>

              <li>
                <a
                  href="#blog"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  بلاگ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <button
          aria-label="باز کردن منو"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/15 text-primary transition-all duration-300 hover:border-secondary hover:text-secondary tablet-landscape:hidden"
        >
          <HiBars3BottomRight size={26} />
        </button>

        <a
          href="/"
          aria-label="صفحه اصلی"
          className="w-32 duration-300 mobile:w-36 tablet-landscape:w-44"
        >
          <img
            src="./Images/Desktop-Logo.png"
            alt="لوگوی سایت"
            className="w-full"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;

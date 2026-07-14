import { HiBars3BottomRight } from "react-icons/hi2";

function HeaderAction() {
  return (
    <>
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
    </>
  );
}

export default HeaderAction;

import HeaderAction from "../HeaderAction";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-slate-50/60 backdrop-blur-2xl supports-backdrop-filter:bg-slate-50/40">
      <div className="mx-auto flex h-16 items-center justify-between px-4 mobile:px-6 tablet-landscape:h-20 tablet-landscape:px-8 laptop:max-w-7xl">
        <HeaderAction />

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

import { HiOutlineXMark } from "react-icons/hi2";

function MobileSideBarHeader({ setIsOpen }) {
  return (
    <header className="relative flex h-22 items-center justify-between border-b border-slate-100 px-6">
      <div className="absolute bottom-0 right-6 h-0.5 w-14 rounded-full bg-secondary" />

      <a
        href="/"
        className="group flex items-center gap-0"
        aria-label="صفحه اصلی"
      >
        <img
          src="./Images/Mobile-Logo.webp"
          alt="لوگوی سایت"
          draggable="false"
          className="w-16 transition-transform duration-300 group-active:scale-95"
        />

        <div>
          <h2 className="text-sm font-bold text-primary">محمد نصرتی</h2>

          <p className="mt-0.5 text-xs text-slate-500">Mechanical Engineer</p>
        </div>
      </a>

      <button
        onClick={() => setIsOpen(false)}
        aria-label="بستن منو"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-primary transition-all duration-300 active:scale-90 active:bg-secondary active:text-white"
      >
        <HiOutlineXMark className="text-2xl" />
      </button>
    </header>
  );
}

export default MobileSideBarHeader;

import {
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineXMark,
} from "react-icons/hi2";
import { LuFileText, LuFolderOpen, LuWrench } from "react-icons/lu";

const MobileSideBarActionStyle =
  "group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all duration-200 active:scale-[.96]";

const MobileSideBarActiveStyle = "bg-[#041525] text-white";

function MobileSideBar({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-screen w-72 flex-col bg-white shadow-[0_20px_50px_rgba(15,23,42,.15)] origin-right transform-gpu transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          isOpen
            ? "translate-x-0 scale-100"
            : "translate-x-full scale-[.98] pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100">
          <a href="/">
            <img
              src="./Images/Mobile-Logo.webp"
              alt="لوگوی سایت"
              className="w-17"
            />
          </a>

          <button
            aria-label="بستن منو"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-slate-100 hover:rotate-90 active:scale-90"
          >
            <HiOutlineXMark
              className="text-2xl"
              onClick={() => setIsOpen(false)}
            />
          </button>
        </div>

        <nav aria-label="منوی اصلی" className="flex-1 mt-4">
          <ul className="px-2">
            <li>
              <a
                href="/"
                className={`${MobileSideBarActionStyle} ${MobileSideBarActiveStyle}`}
              >
                <HiOutlineHome className="text-2xl text-white" />
                <span>صفحه اصلی</span>
              </a>
            </li>

            <li>
              <a href="/services" className={MobileSideBarActionStyle}>
                <LuWrench className="text-2xl transition-colors duration-200 group-active:text-white" />
                <span className="group-active:text-white">تخصص ها</span>
              </a>
            </li>

            <li>
              <a href="/projects" className={MobileSideBarActionStyle}>
                <LuFolderOpen className="text-2xl transition-colors duration-200 group-active:text-white" />
                <span className="group-active:text-white">پروژه ها</span>
              </a>
            </li>

            <li>
              <a href="/blog" className={MobileSideBarActionStyle}>
                <LuFileText className="text-2xl transition-colors duration-200 group-active:text-white" />
                <span className="group-active:text-white">بلاگ</span>
              </a>
            </li>

            <li>
              <a href="/contact" className={MobileSideBarActionStyle}>
                <HiOutlineEnvelope className="text-2xl transition-colors duration-200 group-active:text-white" />
                <span className="group-active:text-white">ارتباط</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default MobileSideBar;

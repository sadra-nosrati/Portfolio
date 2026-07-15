import {
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineXMark,
} from "react-icons/hi2";
import { LuFileText, LuFolderOpen, LuWrench } from "react-icons/lu";

const MobileSideBarActionStyle =
  "group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 transition-all duration-300 ease-out hover:bg-[#041525] hover:text-white hover:translate-x-1 active:scale-[.98]";

function MobileSideBar({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 flex h-screen w-72 flex-col border-l border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.12)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
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

        <nav aria-label="منوی اصلی" className="flex-1 mt-8">
          <ul className="px-2">
            <li>
              <a href="/" className={MobileSideBarActionStyle}>
                <HiOutlineHome className="text-2xl group-active:text-white" />
                <span className="group-active:text-white">صفحه اصلی</span>
              </a>
            </li>

            <li>
              <a href="/services" className={MobileSideBarActionStyle}>
                <LuWrench className="text-2xl group-active:text-white" />
                <span className="group-active:text-white">تخصص ها</span>
              </a>
            </li>

            <li>
              <a href="/projects" className={MobileSideBarActionStyle}>
                <LuFolderOpen className="text-2xl group-active:text-white" />
                <span className="group-active:text-white">پروژه ها</span>
              </a>
            </li>

            <li>
              <a href="/blog" className={MobileSideBarActionStyle}>
                <LuFileText className="text-2xl group-active:text-white" />
                <span className="group-active:text-white">بلاگ</span>
              </a>
            </li>

            <li>
              <a href="/contact" className={MobileSideBarActionStyle}>
                <HiOutlineEnvelope className="text-2xl group-active:text-white" />
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

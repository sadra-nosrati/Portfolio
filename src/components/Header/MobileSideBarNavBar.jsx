import { HiOutlineEnvelope, HiOutlineHome } from "react-icons/hi2";
import { LuFileText, LuFolderOpen, LuWrench } from "react-icons/lu";

const MobileSideBarActionStyle =
  "group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition-all duration-200 active:scale-[.96]";

const MobileSideBarActiveStyle = "bg-[#041525] text-white";

function MobileSideBarNavBar() {
  return (
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
          <a href="#skills" className={MobileSideBarActionStyle}>
            <LuWrench className="text-2xl transition-colors duration-200 group-active:text-white" />
            <span className="group-active:text-white">تخصص ها</span>
          </a>
        </li>

        <li>
          <a href="#projects" className={MobileSideBarActionStyle}>
            <LuFolderOpen className="text-2xl transition-colors duration-200 group-active:text-white" />
            <span className="group-active:text-white">پروژه ها</span>
          </a>
        </li>

        <li>
          <a href="#blog" className={MobileSideBarActionStyle}>
            <LuFileText className="text-2xl transition-colors duration-200 group-active:text-white" />
            <span className="group-active:text-white">بلاگ</span>
          </a>
        </li>

        <li>
          <a href="#contact" className={MobileSideBarActionStyle}>
            <HiOutlineEnvelope className="text-2xl transition-colors duration-200 group-active:text-white" />
            <span className="group-active:text-white">ارتباط</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileSideBarNavBar;

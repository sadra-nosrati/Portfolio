import { HiOutlineEnvelope, HiOutlineHome } from "react-icons/hi2";
import { LuFileText, LuFolderOpen, LuWrench } from "react-icons/lu";

const items = [
  {
    href: "/",
    label: "صفحه اصلی",
    icon: HiOutlineHome,
  },
  {
    href: "#skills",
    label: "تخصص ها",
    icon: LuWrench,
  },
  {
    href: "#projects",
    label: "پروژه ها",
    icon: LuFolderOpen,
  },
  {
    href: "#blog",
    label: "بلاگ",
    icon: LuFileText,
  },
  {
    href: "#contact",
    label: "ارتباط",
    icon: HiOutlineEnvelope,
  },
];

const baseStyle =
  "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200";

function MobileSideBarNavBar({ activeItem, setActiveItem, setIsOpen }) {
  const handleClick = (href) => {
    setActiveItem(href);
    setIsOpen(false);
  };

  return (
    <nav className="mt-4 flex-1">
      <ul className="space-y-2 px-2">
        {items.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => handleClick(href)}
              className={`${baseStyle} ${
                activeItem === href
                  ? "bg-primary text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon className="text-2xl" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileSideBarNavBar;

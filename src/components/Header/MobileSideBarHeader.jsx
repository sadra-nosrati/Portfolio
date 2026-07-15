import { HiOutlineXMark } from "react-icons/hi2";

function MobileSideBarHeader({ setIsOpen }) {
  return (
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
        <HiOutlineXMark className="text-2xl" onClick={() => setIsOpen(false)} />
      </button>
    </div>
  );
}

export default MobileSideBarHeader;

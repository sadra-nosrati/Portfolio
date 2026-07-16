import { useState } from "react";
import HeaderAction from "./HeaderAction";
import MobileSideBar from "./MobileSideBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white inset-x-0 top-4 z-50 px-4 tablet-portrait:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-18 items-center justify-between">
            <HeaderAction setIsOpen={setIsOpen} />

            <a
              href="/"
              aria-label="صفحه اصلی"
              className="group flex shrink-0 items-center justify-center"
            >
              <img
                src="./Images/Desktop-Logo.webp"
                alt="لوگوی سایت"
                draggable="false"
                className="w-40 transition-all duration-500 group-hover:brightness-110 mobile:w-50 tablet-portrait:w-60"
              />
            </a>
          </div>
        </div>
      </header>

      <MobileSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;

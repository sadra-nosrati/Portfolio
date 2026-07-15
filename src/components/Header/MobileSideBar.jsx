import MobileSideBarHeader from "./MobileSideBarHeader";
import MobileSideBarNavBar from "./MobileSideBarNavBar";

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
        <MobileSideBarHeader setIsOpen={setIsOpen} />
        <MobileSideBarNavBar />
      </aside>
    </>
  );
}

export default MobileSideBar;

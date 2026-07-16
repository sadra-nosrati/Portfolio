import { GoMention } from "react-icons/go";

function Footer() {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("لینک صفحه کپی شد.");
    } catch {
      alert("امکان کپی لینک وجود ندارد.");
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-8 mobile:px-6 tablet-landscape:flex-row tablet-landscape:px-8">
        <p className="text-center text-sm leading-7 text-slate-500 tablet-landscape:text-right">
          © {new Date().getFullYear()} تمامی حقوق محفوظ است. طراحی و توسعه توسط{" "}
          <a
            href="https://sadranosrati.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors duration-300 hover:text-secondary"
          >
            Sadra
          </a>
        </p>

        <nav aria-label="اشتراک‌گذاری صفحه" className="flex items-center gap-3">
          <button
            type="button"
            onClick={copyLink}
            aria-label="کپی لینک صفحه"
            className="flex cursor-pointer h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-lg text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:text-white"
          >
            <GoMention />
          </button>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

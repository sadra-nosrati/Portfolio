import ContactHeader from "./ContactHeader";

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto py-15 max-w-7xl px-4 mobile:px-6 tablet-landscape:px-8"
    >
      <div className="overflow-hidden rounded-4xl bg-primary px-6 py-14 shadow-[0_20px_60px_rgba(4,21,37,.12)] mobile:px-8 tablet-portrait:px-12 tablet-portrait:py-16 tablet-landscape:px-16">
        <ContactHeader />

        <address className="mt-12 not-italic">
          <div className="grid gap-5 tablet-portrait:grid-cols-2">
            <a
              href="tel:+989120881682"
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-white/8"
            >
              <span className="block text-sm text-slate-400">شماره تماس</span>

              <strong
                dir="ltr"
                className="mt-3 block text-xl tracking-wider text-white transition-colors duration-300 group-hover:text-secondary text-left"
              >
                0912 088 1682
              </strong>
            </a>

            <a
              href="mailto:m.nosrati1970@gmail.com?subject=درخواست همکاری"
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-white/8"
            >
              <span className="text-sm text-slate-400">ایمیل</span>

              <strong
                dir="ltr"
                className="mt-3 text-lg text-white transition-colors duration-300 group-hover:text-secondary"
              >
                m.nosrati1970@gmail.com
              </strong>
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}

export default Contact;

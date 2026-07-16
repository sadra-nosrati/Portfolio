function ContactHeader() {
  return (
    <header className="mx-auto text-center">
      <h2
        id="contact-title"
        className="inline-block rounded-md bg-white/10 px-4 py-1 text-base text-secondary transition-all duration-300 hover:bg-white/15 hover:px-6 mobile:text-lg"
      >
        آماده همکاری با صنایع و شرکت‌ها
      </h2>

      <p className="mt-6 text-sm leading-8 text-slate-300 mobile:text-base">
        برای مشاوره، طراحی، بهینه‌سازی تجهیزات و اجرای پروژه‌های صنعتی، از طریق
        اطلاعات تماس یا ایمیل با من در ارتباط باشید.
      </p>
    </header>
  );
}

export default ContactHeader;

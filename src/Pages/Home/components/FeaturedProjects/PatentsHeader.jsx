function PatentsHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <h2
        id="patents-title"
        className="inline-block rounded-md bg-secondary/10 px-4 py-1 text-base text-secondary transition-all duration-300 hover:bg-secondary/20 hover:px-6 mobile:text-lg"
      >
        اختراعات و نوآوری‌ها
      </h2>

      <p className="mt-5 text-sm leading-8 text-slate-600 mobile:text-base">
        مروری بر اختراعات و نوآوری‌های مهندسی با تمرکز بر توسعه تجهیزات و
        فناوری‌های صنعتی.
      </p>
    </header>
  );
}

export default PatentsHeader;

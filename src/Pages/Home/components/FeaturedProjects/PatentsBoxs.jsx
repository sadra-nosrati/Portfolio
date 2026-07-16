import patents from "../../../../data/PatentsData";

function PatentsBoxs() {
  return (
    <>
      {patents.map((patent) => (
        <article
          key={patent.title}
          className="group overflow-hidden rounded-3xl bg-white ring-1 ring-slate-100 shadow-[0_6px_20px_rgba(4,21,37,.05)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(4,21,37,.09)]"
        >
          <div className="overflow-hidden">
            <img
              src={patent.image}
              alt={patent.alt}
              className="h-60 w-full object-cover transition-transform duration-700"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold leading-8 text-primary transition-colors duration-300 group-hover:text-secondary">
                {patent.title}
              </h3>

              <span className="shrink-0 rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                {patent.badge}
              </span>
            </div>

            <p className="mt-4 text-sm leading-8 text-slate-600">
              {patent.description}
            </p>
          </div>
        </article>
      ))}
    </>
  );
}

export default PatentsBoxs;

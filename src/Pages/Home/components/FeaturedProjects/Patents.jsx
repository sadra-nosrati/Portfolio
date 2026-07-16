import PatentsBoxs from "./PatentsBoxs";
import PatentsHeader from "./PatentsHeader";

function Patents() {
  return (
    <section
      id="patents"
      aria-labelledby="patents-title"
      className="mt-40 bg-[#F3F3F5]"
    >
      <div className="mx-auto max-w-7xl px-4 py-40 mobile:px-6 tablet-landscape:px-8">
        <PatentsHeader />

        <div className="mt-14 grid gap-8 tablet-portrait:grid-cols-2 laptop:grid-cols-3">
          <PatentsBoxs />
        </div>
      </div>
    </section>
  );
}

export default Patents;

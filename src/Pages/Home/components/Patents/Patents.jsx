import PatentsBoxs from "./PatentsBoxs";
import PatentsHeader from "./PatentsHeader";

function Patents() {
  return (
    <section
      id="patents"
      aria-labelledby="patents-title"
      className="mt-40 bg-[#F3F3F5]"
    >
      <div className="w-full px-4 py-20 tablet-portrait:px-6">
        <div className="mx-auto max-w-7xl">
          <PatentsHeader />

          <div className="mt-14 grid gap-8 tablet-portrait:grid-cols-2 laptop:grid-cols-3">
            <PatentsBoxs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Patents;

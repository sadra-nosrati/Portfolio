import useDocumentTitle from "../../hooks/useDocumentTitle";

function PreLoader() {
  useDocumentTitle("محمد نصرتی");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-secondary/20"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-secondary border-r-secondary"></div>
      </div>
    </div>
  );
}

export default PreLoader;

import { useEffect } from "react";

function useDocumentTitle(title) {
  return useEffect(() => {
    document.title = title;

    return () => {
      document.title = "محمد نصرتی";
    };
  }, [title]);
}

export default useDocumentTitle;

import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import PreLoader from "./components/Common/PreLoader";

function App() {
  const [loading, setLoading] = useState(document.readyState !== "complete");

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }

    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) return <PreLoader />;

  return (
    <>
      <Header />
      <Home />
      <Footer />

      <ToastContainer
        position="top-right"
        newestOnTop
        autoClose={3500}
        closeButton={false}
        hideProgressBar={false}
        draggable
        draggablePercent={35}
        pauseOnHover
        limit={3}
        rtl
        theme="light"
        toastStyle={{
          width: "100%",
          fontFamily: "YekanBakh-SemiBold",
        }}
      />
    </>
  );
}

export default App;

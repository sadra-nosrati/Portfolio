import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
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

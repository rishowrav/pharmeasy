import { Outlet } from "react-router-dom";
import Footer from "../components/ShareSection/Footer";
import Navbar from "../components/ShareSection/NavBar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-322px)]">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;

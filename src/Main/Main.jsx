import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/ShareSection/Footer";
import Navbar from "../components/ShareSection/NavBar";

const Main = () => {
  const location = useLocation();

  const isLoginOrRegister =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {isLoginOrRegister || <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-322px)] ">
        <Outlet />
      </div>

      {isLoginOrRegister || <Footer></Footer>}
    </div>
  );
};

export default Main;

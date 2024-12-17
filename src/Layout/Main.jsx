import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Header/Footer";

const Main = () => {
  const location = useLocation();

  const isLoginOrReg =
    location.pathname === "/login" || location.pathname === "/registration";
  return (
    <div className="h-screen">
      {!isLoginOrReg ? <Header></Header> : ""}
      <Outlet></Outlet>
      {!isLoginOrReg ? <Footer></Footer> : ""}
    </div>
  );
};

export default Main;

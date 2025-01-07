import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Header/Footer";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useCarts from "../hooks/useCarts";

const Main = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [cart, refetch] = useCarts();
  const [subTotal, setSubTotal] = useState(0);
  const [calculation, setcalculation] = useState(0);

  useEffect(() => {
    // item age theke add na thakle first item 1 tar price show korbo
    if (user?.email && cart.length > 0) {
      const subtotalPrice = cart.reduce(
        (acc, cartItem) => acc + (cartItem.itemPrice || cartItem.price),
        0
      );
      console.log(subtotalPrice);
      const tax = (subtotalPrice * 15) / 100;
      const finalCalculation = subtotalPrice + tax;
      setSubTotal(subtotalPrice);
      setcalculation(finalCalculation);
    } else {
      setSubTotal(0);
      setcalculation(0);
    }
  }, [cart, user]);
  console.log(subTotal, calculation);
  const isLoginOrReg =
    location.pathname === "/login" || location.pathname === "/registration";
  return (
    <div className="h-screen">
      {!isLoginOrReg ? <Header></Header> : ""}
      <Outlet context={{ subTotal, calculation }}></Outlet>
      {!isLoginOrReg ? <Footer></Footer> : ""}
    </div>
  );
};

export default Main;

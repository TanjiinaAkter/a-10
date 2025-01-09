import Breadcrumb from "../../components/Breadcrumb";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import { BiDollar } from "react-icons/bi";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pyment = () => {
  const [cart] = useCarts();
  const { user } = useAuth();
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    if (user?.email && cart.length > 0) {
      const subtotalPrice = cart.reduce(
        (acc, cartItem) => acc + (cartItem.itemPrice || cartItem.price),
        0
      );
      const tax = (subtotalPrice * 15) / 100;
      const finalCalculation = parseFloat((tax + subtotalPrice).toFixed(2));
      setCalculation(finalCalculation);
    }
  }, [cart, user]);
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div className="mx-auto w-[86%] my-12">
        <div className="card bg-base-100 w-full md:w-1/2 mx-auto rounded-none shadow-xl">
          <div className="card-body">
            <p className="text-center border-b-orange-300">Payment</p>
            <h2 className="text-center text-2xl text-gray-400">
              Finalize Your Purchase
            </h2>
            <p className="text-black flex mt-3 font-semibold">
              Payable Amount :
              <span className="text-green-600  flex items-center justify-start">
                <BiDollar /> {calculation}
              </span>
            </p>
            <p>
              total item purchased:{" "}
              <span className="text-green-600 "> {cart.length}</span>
            </p>
            <div className="divider "></div>
            <div className=" justify-center mt-2">
              <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pyment;

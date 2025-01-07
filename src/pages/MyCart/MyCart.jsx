// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useLoaderData } from "react-router-dom";

import "./MyCart.css";
import SubTotalCard from "../../components/subTotalCard";
import MyCartSingle from "../MyCartSingle/MyCartSingle";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useCarts from "../../hooks/useCarts";
import Breadcrumb from "../../components/Breadcrumb";
const MyCart = () => {
  const { subTotal, calculation } = useOutletContext();
  const [cart] = useCarts();

  return (
    <div>
      <Helmet>
        <title>Havenique | MyCart</title>
      </Helmet>
      <Breadcrumb></Breadcrumb>

      <div className="mx-auto my-5 md:w-[83%]">
        <h1 className="text-center mb-8 text-3xl font-semibold">
          My <span className="text-[#b7c940]">Shopping</span> bag
        </h1>
        {/* ============== 2nd row ================*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-5">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4 m-3 md:m-0 ">
            <div>
              {cart.map((item) => (
                <MyCartSingle key={item._id} item={item}></MyCartSingle>
              ))}
            </div>
            <hr className="my-2" />
          </div>
          {/*================= SUBTOTAL ======================*/}
          <SubTotalCard
            subTotal={subTotal}
            calculation={calculation}></SubTotalCard>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

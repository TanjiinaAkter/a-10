import { useEffect, useState } from "react";
import DashboardBtn from "../../../components/dashboardBtn";
import useAllProducts from "../../../hooks/useAllproducts";
import usePayments from "../../../hooks/usePayments";
const Stats = () => {
  const [allproducts] = useAllProducts();
  const [payments] = usePayments();
  const totalRevenue = payments.reduce((acc, total) => {
    return acc + parseFloat(total.price || 0);
  }, 0);
  const [mostUnique, setMostUnique] = useState({});
  useEffect(() => {
    if (allproducts.length > 0) {
      const mostUnique = [
        ...new Set(allproducts.map((product) => product.topCategory)),
      ];
      console.log(mostUnique);
      setMostUnique(mostUnique);
    }
  }, [allproducts]);
  // console.log(mostUnique);
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>
      <p className="text-center mb-4 mt-[3rem] md:mt-0">Performance Summary</p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Product Insights</span>
      </h2>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <div className="my-6 flex mx-auto w-[90%] flex-wrap md:flex-nowrap justify-between items-center gap-3">
        <div
          className="relative w-full h-32 text-white p-3"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/m4DDknh/black-friday-best-sale-shopping-cart-with-bags.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          {/* Content */}
          <div className="flex h-full relative text-white flex-col font-semibold z-10 ">
            <h3 className="font-semibold text-lg">ORDERS</h3>
            <p className="font-bold text-2xl">{payments.length}</p>
          </div>
        </div>
        <div
          className="bg-red-600 w-full relative p-3 h-32 "
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/Xzx84Jx/colorful-paper-shopping-bags-blue-surface.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          <div className="absolute bg-opacity-80 bg-[#82161f] inset-0"></div>
          <div className="flex h-full relative text-white flex-col font-semibold z-10 ">
            <h3 className="font-semibold text-lg">PRODUCTS</h3>
            <p className="font-bold text-2xl">{allproducts.length}</p>
          </div>
        </div>
        <div
          className="bg-blue-600 p-3 w-full relative h-32"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/mbn6CH5/hand-holding-growth-arrow-with-coins.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute inset-0 bg-blue-700 bg-opacity-60"></div>
          <div className="relative z-10 flex flex-col text-white">
            <h3 className="font-semibold text-lg">REVENUE</h3>
            <p className="font-bold text-2xl">$ {totalRevenue.toFixed(2)}</p>
          </div>
        </div>
        <div
          className="relative p-3 w-full h-32"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/JxVgPx2/folded-colorful-clothes-arranged-closet-lights-181624-13644.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute bg-green-600 inset-0 bg-opacity-50"></div>
          <div className="flex flex-col relative z-10 text-white">
            <h3 className="font-semibold text-lg">CATEGORIES</h3>
            <p className="font-bold text-2xl">{mostUnique.length}</p>
          </div>
        </div>
      </div>
      <div className="shadow-md"></div>
    </div>
  );
};

export default Stats;

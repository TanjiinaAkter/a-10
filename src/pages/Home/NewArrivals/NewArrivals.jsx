import { HiMiniShoppingBag } from "react-icons/hi2";

const NewArrivals = () => {
  return (
    <div className="mx-auto md:w-[80%] my-[5rem]">
      <h2 className="text-xl flex text-gray-500 md:text-3xl font-semibold mb-4">
        <HiMiniShoppingBag className="text-xl mr-2 md:text-3xl" /> New
        <span className="text-[#9dad37] ml-1"> Arrivals</span>
          </h2>
          <hr className="bg-[#9dad37]  h-[2.8px]  mb-5 " />
    </div>
  );
};

export default NewArrivals;

import { useEffect, useState } from "react";
// import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
// import { GoArrowSwitch } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
// import { MdOutlineArrowOutward } from "react-icons/md";

import "aos/dist/aos.css";
import useAllproducts from "../../../hooks/useAllproducts";
// import { Link } from "react-router-dom";
import BrandOneCart from "../BrandOneCart/BrandOneCart";
const BrandOne = () => {
  // const productFind = (product) => {
  //   console.log(product);
  // };
  const [mens, setMens] = useState([]);

  const [allproducts] = useAllproducts();
  //console.log(mens);
  useEffect(() => {
    const mensCollection = allproducts.filter(
      (men) => men.topCategory === "Men"
    );
    setMens(mensCollection);
  }, [allproducts]);

  return (
    <div className="mx-auto w-[79%] mt-24 mb-12">
      <div className="flex flex-col md:flex-row justify-start w-full">
        <div className="flex items-center justify-start gap-1 bg-[#b7c940] ">
          <IoIosPhonePortrait className=" text-4xl text-white py-2  h-full "></IoIosPhonePortrait>
          <p className="text-white py-2 px-2 md:text-3xl">Mens Wear </p>
        </div>
        <div className="border-t-2 border-t-[#9dad37] border-b border-b-gray-200 flex items-center flex-1">
          <p className=" text-[1.3rem] md:text-2xl pl-3 py-2">
            Product :
            <span className="text-[#b7c940] font-semibold">
              mens collections
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 h-full ">
        {mens.slice(0, 4).map((item) => (
          <BrandOneCart
            // productFind={item}
            key={item._id}
            item={item}></BrandOneCart>
        ))}

        {/* ))} */}
      </div>
    </div>
  );
};

export default BrandOne;

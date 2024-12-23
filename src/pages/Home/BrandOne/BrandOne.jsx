import { useEffect, useState } from "react";
import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

import "aos/dist/aos.css";
import useAllproducts from "../../../hooks/useAllproducts";
import { Link } from "react-router-dom";
const BrandOne = () => {
  const [mens, setMens] = useState([]);

  const [allproducts] = useAllproducts();
  console.log(mens);
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
        {mens.map((item) => (
          <div key={item._id}>
            <div className="card   overflow-hidden  mt-6  relative flex  hover:scale-105 duration-500 transition-transform justify-between items-center h-[20rem] border rounded-none bg-[#f3f3f3]">
              <div className="h-full  w-full flex justify-center items-center">
                {/* src={st.photo} */}
                <img className="object-cover h-[90%]" src={item.photo} alt="" />
              </div>
              <div className="flex absolute top-3 right-3 flex-col justify-between items-center gap-12 ">
                <FaRegHeart className="text-2xl text-[#b7c940]"></FaRegHeart>
                <GoArrowSwitch className="text-2xl"></GoArrowSwitch>
              </div>
            </div>
            <div className="flex  justify-between items-center bg-black w-full  text-white p-1">
              <Link to={`/productdetails/${item._id}`}>
                <button className="flex justify-center text-[#b7c940] gap-2 items-center p-3">
                  Quickshop
                  <MdOutlineArrowOutward className="text-2xl"></MdOutlineArrowOutward>
                </button>
              </Link>
              <button className="flex text-[#b7c940] gap-2 justify-center items-center">
                Add to cart
                <FaBagShopping className="text-2xl" />
              </button>
            </div>
            <div className="my-4 flex justify-center flex-col items-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <h3>On sale from ${item.price}</h3>
            </div>
          </div>
        ))}

        {/* ))} */}
      </div>
    </div>
  );
};

export default BrandOne;

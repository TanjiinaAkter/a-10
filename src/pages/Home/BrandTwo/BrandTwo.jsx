// import { useEffect, useState } from "react";
import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";

import { IoIosPhonePortrait } from "react-icons/io";

import { MdOutlineArrowOutward } from "react-icons/md";
// import { useLoaderData } from "react-router-dom";
//{ addInCartPage }
const BrandTwo = () => {
  //   const allLaptop = useLoaderData();
  //console.log(allLaptop);
  //   const [showlaptop, setShowLaptop] = useState([0]);
  //   console.log(showlaptop);
  //   useEffect(() => {
  //     if (allLaptop) {
  //       const get = allLaptop.filter(
  //         (lap) => lap.type.toLowerCase() === "laptop".toLowerCase()
  //       );
  //       setShowLaptop(get);
  //     }
  //   }, [allLaptop]);
  return (
    <div className="mx-auto w-[79%] mt-24 mb-12">
      <div className="flex flex-col md:flex-row justify-start w-full">
        <div className="flex items-center justify-start gap-1 bg-[#b7c940] ">
          <IoIosPhonePortrait className=" text-4xl text-white py-2  h-full "></IoIosPhonePortrait>
          <p className="text-white py-2 px-2 md:text-3xl">Phones </p>
        </div>
        <div className="border-t-2 border-t-[#9dad37] border-b border-b-gray-200 flex items-center flex-1">
          <p className=" text-[1.3rem] md:text-2xl pl-3 py-2">
            Product :
            <span className="text-[#b7c940] font-semibold"> Router</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 h-full ">
        {/* {showlaptop.slice(0, 4).map((st) => ( */}
        {/* key={st._id} */}
        <div>
          <div className="card overflow-hidden  mt-6  relative flex  hover:scale-105 duration-500 transition-transform justify-between items-center h-[20rem] border rounded-none bg-[#f3f3f3]">
            <div className="h-full  w-full flex justify-center items-center">
              {/* src={st.photo}  */}
              <img
                className="object-cover h-[80%]"
                src="https://i.ibb.co.com/R4S4BY4/51d-R5-N2fe6-L-SS1000-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="flex absolute top-3 right-3 flex-col justify-between items-center gap-12 ">
              <FaRegHeart className=" text-[#b7c940] text-2xl"></FaRegHeart>
              <GoArrowSwitch className="text-2xl"></GoArrowSwitch>
            </div>
          </div>
          <div className="flex justify-between items-center bg-black w-full  text-white p-1">
            <button className="flex text-[#b7c940] justify-center gap-2 items-center p-3">
              Quickshop
              <MdOutlineArrowOutward className="text-2xl"></MdOutlineArrowOutward>
            </button>

            <button className="flex text-[#b7c940] gap-2 justify-center items-center">
              Add to cart
              <FaBagShopping className="text-2xl" />
            </button>
          </div>
          <div className="my-4 flex justify-center flex-col items-center">
            <h3 className="text-xl font-semibold">product name</h3>
            <h3>On sale from $238.00</h3>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default BrandTwo;

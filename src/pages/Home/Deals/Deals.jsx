import { FaEye, FaTags } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import "./Deals.css";
// import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Deals = () => {
  //   const dealsData = useLoaderData();

  //   const [deals, setDeals] = useState([]);
  //console.log(deals);
  //   useEffect(() => {
  //     if (dealsData) {
  //       const match = dealsData.filter(
  //         (deal) => deal.type.toLowerCase() === "mobile".toLowerCase()
  //       );
  //       setDeals(match);
  //     }
  //   }, [dealsData]);
  return (
    <div className="mx-auto md:w-[79%]">
      {/* ============ TITLE ==================*/}
      <div className="px-8 md:px-0 flex items-center justify-start gap-2 my-4  text-[#9dad37] font-semibold ">
        <FaTags className="text-xl md:text-3xl" />
        <h2 className="text-xl text-gray-500 md:text-3xl">
          Deals of <span className="text-[#9dad37]">the day</span>{" "}
        </h2>
      </div>
      <hr className="bg-[#9dad37]  h-[3px]  mb-5 " />
      {/* ============ all cards ==================*/}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 0,
          waitForTransition: true,
        }}
        //   navigation={{
        //     clickable: true,
        //   }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper">
        <div className="grid grid-cols-1 md:grid-cols-4 px-8 gap-3 mb-3 md:px-0  ">
          {/* {deals.map((deal) => ( */}
          {/* key={deal._id} */}
          <SwiperSlide>
            <div className="md:py-4 bg-[#f3f3f3] py-4 md:px-0 w-full  relative hover-tobe ">
              <div className="w-full   mx-auto px-2  relative ">
                <img
                  className="object-contain mx-auto w-[15rem] h-[15rem]"
                  //    src={deal.photo}
                  src="https://i.ibb.co.com/jRbBC9Q/Bright-Blue-3-piece-wedding-suit-removebg-preview.png"
                  alt=""
                />
                <div className="hover-eye hidden">
                  <button className="bg-[#9dad37]  px-2 py-2 md:px-3 md:py-3 rounded-sm text-white ">
                    <FaEye className="" />
                  </button>
                </div>
              </div>

              <span className="absolute top-0 right-0 bg-red-600 px-2 py-[2px] rounded-sm text-white">
                -7%
              </span>
              {/* {deal.name} */}
              <h4 className="text-black  ml-3 "></h4>
              <div className="flex items-center justify-normal gap-2 ml-3 mb-3">
                <h3 className=" text-red-600">
                  {/* //    {deal.price} */}
                  <del className="text-black">$ 54.50</del>
                </h3>
              </div>
              <div className="flex items-center  justify-normal gap-2">
                <div className="">
                  <button className="ml-3 flex flex-row items-center justify-start gap-2 bg-[#9dad37]  px-2 py-[6px] rounded-sm text-white text-sm md:text-[17px] lg:text-[15px]">
                    <HiOutlineShoppingBag /> Add To Cart
                  </button>
                </div>
                <div className="flex gap-2 items-center ">
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaRegHeart />
                  </button>
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaArrowRightArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:py-4 bg-[#f3f3f3] py-4 md:px-0 w-full  relative hover-tobe ">
              <div className="w-full   mx-auto px-2  relative ">
                <img
                  className="object-contain mx-auto w-[15rem] h-[15rem]"
                  //    src={deal.photo}
                  src="https://i.ibb.co.com/jRbBC9Q/Bright-Blue-3-piece-wedding-suit-removebg-preview.png"
                  alt=""
                />
                <div className="hover-eye hidden">
                  <button className="bg-[#9dad37]  px-2 py-2 md:px-3 md:py-3 rounded-sm text-white ">
                    <FaEye className="" />
                  </button>
                </div>
              </div>

              <span className="absolute top-0 right-0 bg-red-600 px-2 py-[2px] rounded-sm text-white">
                -7%
              </span>
              {/* {deal.name} */}
              <h4 className="text-black  ml-3 "></h4>
              <div className="flex items-center justify-normal gap-2 ml-3 mb-3">
                <h3 className=" text-red-600">
                  {/* //    {deal.price} */}
                  <del className="text-black">$ 54.50</del>
                </h3>
              </div>
              <div className="flex items-center  justify-normal gap-2">
                <div className="">
                  <button className="ml-3 flex flex-row items-center justify-start gap-2 bg-[#9dad37]  px-2 py-[6px] rounded-sm text-white text-sm md:text-[17px] lg:text-[15px]">
                    <HiOutlineShoppingBag /> Add To Cart
                  </button>
                </div>
                <div className="flex gap-2 items-center ">
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaRegHeart />
                  </button>
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaArrowRightArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:py-4 bg-[#f3f3f3] py-4 md:px-0 w-full  relative hover-tobe ">
              <div className="w-full   mx-auto px-2  relative ">
                <img
                  className="object-contain mx-auto w-[15rem] h-[15rem]"
                  //    src={deal.photo}
                  src="https://i.ibb.co.com/jRbBC9Q/Bright-Blue-3-piece-wedding-suit-removebg-preview.png"
                  alt=""
                />
                <div className="hover-eye hidden">
                  <button className="bg-[#9dad37]  px-2 py-2 md:px-3 md:py-3 rounded-sm text-white ">
                    <FaEye className="" />
                  </button>
                </div>
              </div>

              <span className="absolute top-0 right-0 bg-red-600 px-2 py-[2px] rounded-sm text-white">
                -7%
              </span>
              {/* {deal.name} */}
              <h4 className="text-black  ml-3 "></h4>
              <div className="flex items-center justify-normal gap-2 ml-3 mb-3">
                <h3 className=" text-red-600">
                  {/* //    {deal.price} */}
                  <del className="text-black">$ 54.50</del>
                </h3>
              </div>
              <div className="flex items-center  justify-normal gap-2">
                <div className="">
                  <button className="ml-3 flex flex-row items-center justify-start gap-2 bg-[#9dad37]  px-2 py-[6px] rounded-sm text-white text-sm md:text-[17px] lg:text-[15px]">
                    <HiOutlineShoppingBag /> Add To Cart
                  </button>
                </div>
                <div className="flex gap-2 items-center ">
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaRegHeart />
                  </button>
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaArrowRightArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:py-4 bg-[#f3f3f3] py-4 md:px-0 w-full  relative hover-tobe ">
              <div className="w-full   mx-auto px-2  relative ">
                <img
                  className="object-contain mx-auto w-[15rem] h-[15rem]"
                  //    src={deal.photo}
                  src="https://i.ibb.co.com/jRbBC9Q/Bright-Blue-3-piece-wedding-suit-removebg-preview.png"
                  alt=""
                />
                <div className="hover-eye hidden">
                  <button className="bg-[#9dad37]  px-2 py-2 md:px-3 md:py-3 rounded-sm text-white ">
                    <FaEye className="" />
                  </button>
                </div>
              </div>

              <span className="absolute top-0 right-0 bg-red-600 px-2 py-[2px] rounded-sm text-white">
                -7%
              </span>
              {/* {deal.name} */}
              <h4 className="text-black  ml-3 "></h4>
              <div className="flex items-center justify-normal gap-2 ml-3 mb-3">
                <h3 className=" text-red-600">
                  {/* //    {deal.price} */}
                  <del className="text-black">$ 54.50</del>
                </h3>
              </div>
              <div className="flex items-center  justify-normal gap-2">
                <div className="">
                  <button className="ml-3 flex flex-row items-center justify-start gap-2 bg-[#9dad37]  px-2 py-[6px] rounded-sm text-white text-sm md:text-[17px] lg:text-[15px]">
                    <HiOutlineShoppingBag /> Add To Cart
                  </button>
                </div>
                <div className="flex gap-2 items-center ">
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaRegHeart />
                  </button>
                  <button className="border border-[#9dad37]  rounded-sm px-1 py-[7px] text-[#9dad37] ">
                    <FaArrowRightArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* ))} */}
        </div>
      </Swiper>
    </div>
  );
};

export default Deals;

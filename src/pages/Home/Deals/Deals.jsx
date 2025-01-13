import {  FaTags } from "react-icons/fa6";

import "./Deals.css";
// import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import DealCard from "./DealCard";
import { useQuery } from "@tanstack/react-query";
const Deals = () => {
  const axiosPublic = useAxiosPublic();
  const { data: deals = [] } = useQuery({
    queryKey: ["deals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/deals");
      console.log(deals);
      return res.data;
    },
  });
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
          {deals.map((deal) => (
           <DealCard key={deal._id} deal={deal}></DealCard>
          ))}

          {/* ))} */}
        </div>
      </Swiper>
    </div>
  );
};

export default Deals;

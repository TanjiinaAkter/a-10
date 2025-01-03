// import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Breadcrumb from "../../components/Breadcrumb";
import { FaRedo } from "react-icons/fa";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { useState } from "react";
import BrandproductCart from "../BrandproductsCart/BrandproductCart";

const BrandProducts = () => {
  const [filter, setFilter] = useState({
    size: [],
    color: [],
    priceRange: "",
    discountRange: "",
    availability: "",
  });
  console.log("new filter value", filter);
  const [sort, setSort] = useState("default");

  const [searchParams] = useSearchParams();
  const topCategory = searchParams.get("topCategory");
  const thirdCategory = searchParams.get("thirdCategory");

  const axiosPublic = useAxiosPublic();
  const { data: searchFromDropDown = [] } = useQuery({
    queryKey: ["searchFromDropDown", topCategory, thirdCategory, sort, filter],
    queryFn: async () => {
      // ekhane top ar chirt seach paramas diye niye oisob product er details pacchi
      const res = await axiosPublic.get(
        `/allproducts/DropDown?topCategory=${topCategory}&thirdCategory=${thirdCategory}&color=${filter.color}&size=${filter.size}&priceRange=${filter.priceRange}&discountRange=${filter.discountRange}&sort=${sort}&availability=${filter.availability}`
      );
      return res.data;
    },
  });
  console.log(searchFromDropDown);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  const handleFilterChange = (e, filterType) => {
    const { value, checked } = e.target;
    setFilter((prevFilter) => {
      if (filterType === "color" || filterType === "size") {
        const updatedValues = checked
          ? [...prevFilter[filterType], value]
          : prevFilter[filterType].filter((item) => item !== value);
        return { ...prevFilter, [filterType]: updatedValues };
      } else {
        return { ...prevFilter, [filterType]: value };
      }
    });
  };
  //console.log(sort)
  return (
    <div className="mt-24">
      <Helmet>
        <title>Havenique | {topCategory}</title>
      </Helmet>
      <Breadcrumb></Breadcrumb>

      {/*================ SLIDER ================*/}
      <div className=" mx-auto w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          speed={5000}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 0,
            waitForTransition: true,
          }}
          // navigation={{
          //   clickable: true,
          // }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper">
          <SwiperSlide className=" md:h-[30rem] mb-8 mt-8">
            <div className="card rounded-none bg-red-100 shadow-xl">
              <figure className="">
                <img
                  className=" w-full h-[10rem] object-cover md:h-[15rem] "
                  src="https://i.ibb.co.com/cF7dhQ7/banner.png"
                  alt="Movie"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" md:h-[30rem] mb-8 mt-8">
            <div className="card rounded-none bg-red-100 shadow-xl">
              <figure className="">
                <img
                  className=" w-full h-[10rem] object-cover md:h-[15rem] "
                  src="https://i.ibb.co.com/ZLRLZh9/3d-black-friday-celebration.jpg"
                  alt="Movie"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" md:h-[30rem] mb-8 mt-8">
            <div className="card rounded-none bg-red-100 shadow-xl">
              <figure className="">
                <img
                  className=" w-full h-[10rem] object-cover md:h-[15rem] "
                  src="https://i.ibb.co.com/8sjzRyn/3d-black-friday-celebration-1.jpg"
                  alt="Movie"
                />
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*================ Products of BRAND ================*/}
      <div className="md:mx-auto mx-3  md:w-[79%]  my-12">
        <div className="grid  grid-cols-1 md:grid-cols-5  gap-5">
          {/*================ Products of BRAND from sidebar================*/}
          <div className="col-span-1  flex flex-col">
            {/* SIZE SIDEBAR */}
            <div className="flex items-center">
              {/* Other filter components like size, color, etc. */}

              <button
                onClick={() =>
                  setFilter({
                    size: [],
                    color: [],
                    priceRange: "",
                    discountRange: "",
                    availability: "",
                  })
                }
                className=" flex items-center gap-2 px-5 hover:bg-black hover:text-white transition-all duration-500 ease-in py-2 rounded-none text-center border border--gray-400  mb-7   max-w-fit">
                Reset Filters <FaRedo className="text-sm text-red-500"></FaRedo>
              </button>
            </div>

            <div>
              <h1 className="text-[1rem] uppercase mb-3"> Size</h1>
              <div className="flex flex-col gap-3 ">
                {["S", "M", "L", "XL"].map((size) => (
                  <label key={size}>
                    <input
                      type="checkbox"
                      value={size}
                      checked={filter.size.includes(size)}
                      onChange={(e) => handleFilterChange(e, "size")}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            {/* COLOR SIDEBAR */}
            <div>
              <h1 className="text-[1rem] uppercase mb-3"> color</h1>
              <div className="flex flex-col gap-3 ">
                {["red", "black", "white", "blue"].map((color) => (
                  <label key={color}>
                    <input
                      value={color.toLowerCase()}
                      checked={filter.color.includes(color.toLowerCase())}
                      type="checkbox"
                      onChange={(e) => handleFilterChange(e, "color")}
                    />
                    {color}
                  </label>
                ))}
              </div>
            </div>
            {/*  Price Range   SIDEBAR */}
            <div className="divider"></div>
            <div>
              <h1 className="text-[1rem] uppercase">Price Range</h1>
              <div className="flex flex-col gap-3 ">
                {[
                  "0-1000",
                  "1001-3000",
                  "3001-5000",
                  "5001-10000",
                  "10001-17000",
                ].map((price) => (
                  <label key={price}>
                    <input
                      type="radio"
                      value={price}
                      onChange={(e) => handleFilterChange(e, "priceRange")}
                      checked={filter.priceRange === price}
                    />
                    {price}
                  </label>
                ))}
              </div>
            </div>
            {/*  AVAILIBILITY  SIDEBAR */}
            <div className="divider"></div>
            {/* <div>
              <h1 className="text-[1rem] uppercase">availibility</h1>
              <div className="flex flex-col gap-3">
                {["in stock", "out of stock"].map((status) => (
                  <label key={status}>
                    <input
                      type="radio"
                      value={status}
                      checked={filter.availability === status}
                      onChange={(e) => handleFilterChange(e, "availability")}
                    />
                    {status}
                  </label>
                ))}
              </div>
            </div>
            <div className="divider"></div> */}
            {/* DISCOUNT RANGE  SIDEBAR */}
            <div>
              <h1 className="text-[1rem] uppercase">discount range</h1>
              <div className="flex flex-col gap-3">
                {["0-10%", "11-20%", "21-50%", "51-90%"].map((discount) => (
                  <label key={discount}>
                    <input
                      type="radio"
                      value={discount}
                      onChange={(e) => handleFilterChange(e, "discountRange")}
                      checked={filter.discountRange === discount}
                    />
                    {discount}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4   justify-between  flex flex-col gap-3">
            <div>
              <div className="flex flex-row justify-between">
                <h2 className="text-gray-400">
                  Showing all {searchFromDropDown.length} results
                </h2>

                <div>
                  <select
                    onChange={handleSortChange}
                    value={sort}
                    name="sort"
                    id="priceSort"
                    className="border border-gray-300 rounded-sm px-3 py-2">
                    <option className="text-black" value="default">
                      Sort by price
                    </option>
                    <option className="text-gray-400" value="low-to-high">
                      Price: low to high
                    </option>
                    <option className="text-gray-400" value="high-to-low">
                      Price: high to low
                    </option>
                  </select>
                </div>
              </div>

              {/* searchFromDropDown */}
              <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-4 ">
                {searchFromDropDown.map((product) => (
                  <BrandproductCart
                    key={product._id}
                    product={product}></BrandproductCart>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;

// import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { useEffect, useState } from "react";
// import BrandProd from "../BrandProd/BrandProd";
import Breadcrumb from "../../components/Breadcrumb";
import { FaHeart } from "react-icons/fa";
import { Helmet } from "react-helmet";

const BrandProducts = () => {
  // const { brandname } = location.state || {};
  // Access the passed state , obj ta nilam brandname er amader current location e ..
  //   const allprod = useLoaderData();
  //   console.log(allprod);

  //   const [matched, setMatched] = useState([]);
  //======================
  // useEffect use kortesi karon amader brandname change hote thakte pare tai.. ar dependency te brandname ar allprod thakbe eitao changable tai... ar location use kore amra oi location er state niye ekhane kaj kortesi, jodi brandname thake tahole ei kaj hobe
  //======================
  //   useEffect(() => {
  //     // if (brandname) {
  //     // Filter or perform any action based on brandname
  //     const filteredProducts = allprod.filter(
  //       (product) => product.brandname === brandname
  //     );
  //     setMatched(filteredProducts);
  //     // }
  //   }, [brandname, allprod]);
  //   console.log(matched);
  return (
    <div className="mt-24">
      <Helmet>
        <title>Havenique | Men</title>
      </Helmet>
      <Breadcrumb></Breadcrumb>
      {/* <button className="btn ml-6 mt-8 mb-3 rounded-sm bg-[#b7c940] text-white text-xl">
        <Link to="/" className="flex items-center gap-1">
          <FaArrowLeftLong />
          Back To Home
        </Link>
      </button> */}
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
          <div className="col-span-1  flex flex-col gap-7">
            <div>
              <h1 className="text-[1rem] uppercase">category</h1>
              <ul className="mt-5 text-gray-400 ">
                <li>red()</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[1rem] uppercase">SIZE</h1>
              <ul className="mt-5 text-gray-400 ">
                <li>red()</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[1rem] uppercase">Color</h1>
              <ul className="mt-5 text-gray-400 ">
                <li>red()</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[1rem] uppercase">price</h1>
              <ul className="mt-5 text-gray-400 ">
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[1rem] uppercase">availibility</h1>
              <ul className="mt-5 text-gray-400 ">
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[1rem] uppercase">discount range</h1>
              <ul className="mt-5 text-gray-400 ">
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
                <li>red</li>
              </ul>
            </div>
          </div>
          <div className="col-span-4   justify-between flex flex-col gap-3">
            <div>
              <div className="flex flex-row justify-between">
                <h2 className="text-gray-400">Showing all 8 results</h2>
                <div>
                  <select
                    name=""
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
              <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12 ">
                <div className="card-1">
                  <div className="group  relative  w-full">
                    <div className="w-full mx-auto">
                      <img
                        className="object-cover w-full md:h-[18rem]"
                        src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-550x550.jpg"
                        alt=""
                      />
                    </div>
                    <div className="absolute top-3 text-[#9dad37] right-3 py-[2px] px-2 border-2 border-gray-300">
                      30%
                    </div>
                    <div className="left-0 w-full transform  transition-all duration-500 bottom-[-12%] group-hover:bottom-0 opacity-0 group-hover:opacity-100 bg-black absolute px-3 py-2 text-white flex items-center gap-3 justify-between">
                      <btn className="cursor-pointer border-r-2 pr-1 h-full text-[#9dad37] font-semibold text-[12px] ">
                        Quick Look
                      </btn>
                      <FaHeart className="text-white cursor-pointer text-3xl px-[6px]"></FaHeart>
                      <btn className="cursor-pointer text-[#9dad37] font-semibold h-full border-l-2 pl-1 text-[12px] ">
                        Add to cart
                      </btn>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <h3 className="text-gray-500">Category</h3>
                    <h1>name</h1>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                    </div>
                    <p> price:$200</p>
                  </div>
                </div>
                <div className="card-1">
                  <div className="group  relative  w-full">
                    <div className="w-full mx-auto">
                      <img
                        className="object-cover w-full md:h-[18rem]"
                        src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-550x550.jpg"
                        alt=""
                      />
                    </div>
                    <div className="absolute top-3 text-[#9dad37] right-3 py-[2px] px-2 border-2 border-gray-300">
                      30%
                    </div>
                    <div className="left-0 w-full transform  transition-all duration-500 bottom-[-12%] group-hover:bottom-0 opacity-0 group-hover:opacity-100 bg-black absolute px-3 py-2 text-white flex items-center gap-3 justify-between">
                      <btn className="cursor-pointer border-r-2 pr-1 h-full text-[#9dad37] font-semibold text-[12px] ">
                        Quick Look
                      </btn>
                      <FaHeart className="text-white cursor-pointer text-3xl px-[6px]"></FaHeart>
                      <btn className="cursor-pointer text-[#9dad37] font-semibold h-full border-l-2 pl-1 text-[12px] ">
                        Add to cart
                      </btn>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <h3 className="text-gray-500">Category</h3>
                    <h1>name</h1>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                    </div>
                    <p> price:$200</p>
                  </div>
                </div>
                <div className="card-1">
                  <div className="group  relative  w-full">
                    <div className="w-full mx-auto">
                      <img
                        className="object-cover w-full md:h-[18rem]"
                        src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-550x550.jpg"
                        alt=""
                      />
                    </div>
                    <div className="absolute top-3 text-[#9dad37] right-3 py-[2px] px-2 border-2 border-gray-300">
                      30%
                    </div>
                    <div className="left-0 w-full transform  transition-all duration-500 bottom-[-12%] group-hover:bottom-0 opacity-0 group-hover:opacity-100 bg-black absolute px-3 py-2 text-white flex items-center gap-3 justify-between">
                      <btn className="cursor-pointer border-r-2 pr-1 h-full text-[#9dad37] font-semibold text-[12px] ">
                        Quick Look
                      </btn>
                      <FaHeart className="text-white cursor-pointer text-3xl px-[6px]"></FaHeart>
                      <btn className="cursor-pointer text-[#9dad37] font-semibold h-full border-l-2 pl-1 text-[12px] ">
                        Add to cart
                      </btn>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <h3 className="text-gray-500">Category</h3>
                    <h1>name</h1>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                    </div>
                    <p> price:$200</p>
                  </div>
                </div>
                <div className="card-1">
                  <div className="group  relative  w-full">
                    <div className="w-full mx-auto">
                      <img
                        className="object-cover w-full md:h-[18rem]"
                        src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-550x550.jpg"
                        alt=""
                      />
                    </div>
                    <div className="absolute top-3 text-[#9dad37] right-3 py-[2px] px-2 border-2 border-gray-300">
                      30%
                    </div>
                    <div className="left-0 w-full transform  transition-all duration-500 bottom-[-12%] group-hover:bottom-0 opacity-0 group-hover:opacity-100 bg-black absolute px-3 py-2 text-white flex items-center gap-3 justify-between">
                      <btn className="cursor-pointer border-r-2 pr-1 h-full text-[#9dad37] font-semibold text-[12px] ">
                        Quick Look
                      </btn>
                      <FaHeart className="text-white cursor-pointer text-3xl px-[6px]"></FaHeart>
                      <btn className="cursor-pointer text-[#9dad37] font-semibold h-full border-l-2 pl-1 text-[12px] ">
                        Add to cart
                      </btn>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <h3 className="text-gray-500">Category</h3>
                    <h1>name</h1>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 h-[20px] w-[20px]"
                      />
                    </div>
                    <p> price:$200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;

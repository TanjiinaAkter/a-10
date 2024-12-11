import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductDetail.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Breadcrumb from "../../components/Breadcrumb";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    "https://i.ibb.co.com/R4S4BY4/51d-R5-N2fe6-L-SS1000-removebg-preview.png",
    "https://i.ibb.co.com/jRbBC9Q/Bright-Blue-3-piece-wedding-suit-removebg-preview.png",
    "https://i.ibb.co.com/RjkZdxd/Rectangle-11.png",
    "https://i.ibb.co.com/fxZz0pz/pexels-divinetechygirl-1181405.jpg",
  ];
  return (
    <div className="mx-auto w-[90%] p-5 pt-0">
      <Breadcrumb></Breadcrumb>
      <div className="md:flex  mb-12 mt-5 md:justify-between gap-12 ">
        <div className=" md:w-1/2 md:flex md:flex-col gap-5 bg-gray-100 ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#d2dbdb",
              "--swiper-pagination-color": "#000000",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 md:w-[90%] md:mx-auto ">
            {images.map((img, index) => (
              <SwiperSlide key={index} className="mb-10">
                <img
                  className="w-full object-contain h-[18rem] md:h-[22rem]"
                  src={img}
                  alt={`Slide ${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper  md:w-1/2 ">
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  className="md:w-[5rem] hover:border-[#b7c940] transition-all duration-500 hover:scale-50 border-8 rouned-md object-cover h-[5rem] md:h-[5rem]"
                  src={img}
                  alt={`Slide ${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex md:w-1/2 justify-start items-s md:px-12 flex-col   ">
          {/* {name} */}
          <div className="my-2">
            <h3 className="text-3xl uppercase font-semibold ">product name</h3>
            <div className="flex justify-start items-center pt-2 gap-6">
              <p className="text-lg text-black ">$400</p>
              {/* //[discounted price] */}
              <p className="text-lg text-gray-400 ">
                <del>$400</del>{" "}
              </p>
              {/* [discounted %] */}
              <p className="text-lg text-green-500 ">40% off</p>
            </div>
          </div>
          <div className="my-12">
            <div className="flex gap-2 items-center mb-5">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400 h-[20px] w-[20px]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400 h-[20px] w-[20px]"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400 h-[20px] w-[20px]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400 h-[20px] w-[20px]"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400 h-[20px] w-[20px]"
                />
              </div>
              <p className="text-gray-400 text-sm ">(1 customer review)</p>
            </div>
            <p className="text-gray-400">
              Customer reveiw Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque
              penatibus et magnis dis parturient montes nascetur ridiculus mus.
              Vestibulum ultricies aliquam convallis.
            </p>
          </div>

          <div>
            <h4 className="mb-1">
              Color- <span className="text-gray-500 capitalize">blue</span>
            </h4>
            <div className="flex items-center gap-4">
              <h4>Size</h4>

              <div className="join gap-3">
                <input
                  className="btn rounded-full"
                  type="radio"
                  name="options"
                  aria-label="S"
                />
                <input
                  className="btn rounded-full"
                  type="radio"
                  name="options"
                  aria-label="M"
                />
                <input
                  className="btn rounded-full"
                  type="radio"
                  name="options"
                  aria-label="L"
                />
              </div>
            </div>
          </div>

          <div className="join flex flex-wrap gap-2 my-12">
            <button
              // onClick={addInCartPage} //Add full product to cart on button click
              className="btn uppercase rounded-none  border-1 text-[12px] text-white bg-black hover:bg-[#b7c940] hover:text-white">
              Add To Cart <FaShoppingBag></FaShoppingBag>
            </button>
            <button className="btn text-[12px] uppercase border-1 rounded-none border-black text-gray-400 bg-transparent hover:bg-[#b7c940] hover:text-white">
              Add to wishlist <FaHeart></FaHeart>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Reviews</Tab>
          </TabList>

          <TabPanel>
            <p className="my-16">
              <b>DESCRIPTION </b> <br />
              <p className="mt-4 text-pretty text-gray-400">
                ce romanized as Yossy, is a fictional anthropomorphic dinosaur
                who appears in video games published by Nintendo. Yoshi debuted
                in Super Mario World on the Super Nintendo Entertainment System
                as Mario and sidekick. Yoshi later starred in platform and
                puzzle games, including Super Mario World 2: Island,ory and olly
                World. Yoshi also appears in many of the Mario spin-off games,
                including Mario Party and Mario Kart, various Mario sports
                games, andcrossover fighting game series Super Smash Bros. Yoshi
                belongs to the species of the same name, which is characterized
                by their variety of colors.
              </p>
            </p>
          </TabPanel>
          <TabPanel>
            <p className="my-16">
              <b className="uppercase">1 review for product name</b> <br />
              <p className="mt-4 text-pretty text-gray-400">
                ce romanized as Yossy, is a fictional anthropomorphic dinosaur
                who appears in video games published by Nintendo. Yoshi debuted
                in Super Mario World on the Super Nintendo Entertainment System
                as Mario and sidekick. Yoshi later starred in platform and
                puzzle games, including Super Mario World 2: Island,ory and olly
                World. Yoshi also appears in many of the Mario spin-off games,
                including Mario Party and Mario Kart, various Mario sports
                games, andcrossover fighting game series Super Smash Bros. Yoshi
                belongs to the species of the same name, which is characterized
                by their variety of colors.
              </p>
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;

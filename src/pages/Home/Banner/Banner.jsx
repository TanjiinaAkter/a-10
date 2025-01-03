import { GiHamburgerMenu } from "react-icons/gi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";

const Banner = ({ handleScroll }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const handleSlideChange = () => {
    Aos.refresh();
  };

  return (
    <div className="mt-[13rem] md:mt-[9rem] banner-main w-[80%] mx-auto grid grid-rows-3 grid-cols-1 md:grid-cols-4 space-y-3 md:gap-5">
      {/* row-1 */}
      <div className=" w-full py-[.7rem] row-span-3">
        <details className="dropdown bg-[#9dad37] w-full">
          <summary className=" pl-3 flex items-center gap-2 list-none m-1 text-xl font-semibold text-white">
            <GiHamburgerMenu className="md:text-xl text-white" /> CATEGORIES
          </summary>
          <ul className="menu w-full left-0 top-[100%] dropdown-content bg-base-100 rounded-none z-[1] p-2 shadow">
            <li>
              <a onClick={() => handleScroll("mens")}>Mens wear</a>
            </li>
            <li>
              <a onClick={() => handleScroll("women")}>Womens wear</a>
            </li>
            <li>
              <a onClick={() => handleScroll("kids")}>Kids wear</a>
            </li>
            <li>
              <a onClick={() => handleScroll("decor")}>Home Decor</a>
            </li>
          </ul>
        </details>
      </div>

      {/* row-2 */}
      <div className="bg-green-200 col-span-2 row-span-3 -z-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={handleSlideChange}
          className="mySwiper custom-swiper">
          <SwiperSlide className="relative ">
            <img src="https://i.ibb.co.com/Kh5jFWL/freestocks-3-Q3ts-J01nc-unsplash.jpg" alt="" />
            <div className="text-div ">
              <div className="absolute text">
                <h2
                  className=" text-[1.5rem] md:text-[2rem] lg:text-4xl"
                  data-aos="fade-left">
                  Big Sale Upto 50% Off
                </h2>
                <button
                  className="px-4 py-2 bg-[#9dad37]   my-5 text-white"
                  data-aos="fade-up-right">
                  Shopping Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src="https://i.ibb.co.com/sv4CFY5/istockphoto-1224014607-612x612.jpg" alt="" />{" "}
            <div className="text-div ">
              <div className="absolute text">
                <h2
                  className=" text-[1.5rem] md:text-[2rem] lg:text-4xl"
                  data-aos="fade-left">
                  Big Sale Upto 50% Off
                </h2>
                <button
                  className="px-4 py-2 bg-[#9dad37]   my-5 text-white"
                  data-aos="fade-up-right">
                  Shopping Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://i.ibb.co.com/p0rTfgw/jezael-melgoza-lay-Mb-SJ3-YOE-unsplash.jpg"
              alt=""
            />
            <div className="text-div ">
              <div className="absolute text">
                <h2
                  className=" text-[1.5rem] md:text-[2rem] lg:text-4xl"
                  data-aos="fade-left">
                  Big Sale Upto 50% Off
                </h2>
                <button
                  className="px-4 py-2 bg-[#9dad37]  my-5 text-white"
                  data-aos="fade-up-right">
                  Shopping Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* row-3 */}
      <div className=" flex flex-col gap-4 row-span-3">
        <img src="https://i.ibb.co.com/QndHBVf/istockphoto-1301194623-612x612.webp" alt="" />
        <img src="https://i.ibb.co.com/xCGrP0N/istockphoto-495737517-612x612.webp" alt="" />
      </div>
    </div>
  );
};

export default Banner;

// import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Breadcrumb from "../../components/Breadcrumb";
import { FaHeart } from "react-icons/fa";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";

const BrandProducts = () => {
  const [, refetch] = useCarts();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const topCategory = searchParams.get("topCategory");
  const thirdCategory = searchParams.get("thirdCategory");

  const axiosPublic = useAxiosPublic();
  const { data: searchFromDropDown = [] } = useQuery({
    queryKey: ["searchFromDropDown", topCategory, thirdCategory],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/allproducts/DropDown?topCategory=${topCategory}&thirdCategory=${thirdCategory}`
      );
      return res.data;
    },
  });
  console.log(searchFromDropDown);

  const handleAddToCart = (product) => {
    if (user && user?.email) {
      const itemData = {
        title: product.title,
        price: product.price,
        photo: product.photo,
        brandname: product.brandname,
        color: product.color,
        size: "M",
        name: user?.displayName,
        email: user?.email,
      };
      console.log(itemData);
      axiosSecure.post("/carts", itemData).then((res) => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${itemData.title} id added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className="mt-24">
      <Helmet>
        <title>Havenique | Men</title>
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
          <div className="col-span-1  flex flex-col gap-7">
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
                <h2 className="text-gray-400">
                  Showing all {searchFromDropDown.length} results
                </h2>
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
              {/* searchFromDropDown */}
              <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12 ">
                {searchFromDropDown.map((product) => (
                  <div key={product._id} className="card-1 md:w-[14rem]">
                    <div className="group  relative  w-full">
                      <Link to={`/productdetails/${product?._id}`}>
                        <div className="w-full mx-auto bg-[#F3F3F3]">
                          <img
                            className="object-contain mx-auto w-[17rem] md:w-[90%] md:h-[18rem]"
                            src={product?.photo}
                            alt=""
                          />
                        </div>
                      </Link>
                      <div className="absolute bg-gray-200 top-3 text-black right-3 py-[2px] px-2 border-2 border-gray-300">
                        {product?.discountedPercentage}%
                      </div>
                      <div className="left-0 w-full transform  transition-all duration-500 bottom-[-12%] group-hover:bottom-0 opacity-0 group-hover:opacity-100 bg-black absolute px-3 py-2 text-white flex items-center gap-3 justify-between">
                        <Link to={`/productdetails/${product?._id}`}>
                          <btn className="cursor-pointer border-r-2 pr-1 h-full text-[#9dad37] font-semibold text-[12px] ">
                            Quick Look
                          </btn>
                        </Link>
                        <FaHeart className="text-white cursor-pointer text-3xl px-[6px]"></FaHeart>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="cursor-pointer text-[#9dad37] font-semibold h-full border-l-2 pl-1 text-[12px] ">
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="text-center my-3">
                      <h1 className="text-[18px] uppercase mb-1 mt-2">
                        {product?.title}
                      </h1>
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
                      <p className="text-gray-400"> ${product?.price}</p>
                    </div>
                  </div>
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HiMiniShoppingBag } from "react-icons/hi2";
import useAllproducts from "../../../hooks/useAllproducts";
import { useEffect, useState } from "react";
import "./Brands.css";
const Brands = () => {
  const [allproducts] = useAllproducts();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    if (allproducts) {
      const brandData = allproducts.map((brand) => ({
        brandname: brand.brandname,
        photo: brand.photo,
      }));
      setBrands(brandData);
    }
  }, [allproducts]);
  console.log(brands);
  return (
    <div className="mx-auto md:w-[80%] my-[5rem]">
      <h2 className="text-xl flex text-gray-500 md:text-3xl font-semibold mb-4">
        <HiMiniShoppingBag className="text-xl mr-2 md:text-3xl" /> Shop by{" "}
        <span className="text-[#9dad37] ml-1"> Brands</span>
      </h2>
      <hr className="bg-[#9dad37]  h-[2.8px]  mb-5 " />

      <div className="p-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          speed={1000}
          pagination={{
            clickable: true,
          }}
          navigation={{ clickable: true }}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className="mySwiper custom-swiper">
          {brands.map((brand) => (
            <SwiperSlide key={brand._id}>
              <div className="flex flex-col  md:w-[10rem] p-3  justify-center items-center bg-[#f3f3f3]">
                <img
                  className="md:w-full h-[14rem] md:h-[10rem] object-cover"
                  src={brand.photo}
                  alt=""
                />
              </div>
              <h2 className="text-gray-500 font-semibold text-center my-1">
                {brand.brandname}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;

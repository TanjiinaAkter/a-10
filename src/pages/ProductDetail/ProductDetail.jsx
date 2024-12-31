import { useEffect, useState } from "react";
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
// import Breadcrumb from "../../components/Breadcrumb";
import { FaHeart, FaShoppingBag, FaStar } from "react-icons/fa";
import useAllproducts from "../../hooks/useAllproducts";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { useQuery } from "@tanstack/react-query";
import useCarts from "../../hooks/useCarts";

const ProductDetail = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [allproducts] = useAllproducts();
  const { id } = useParams();
  const [singleDetail, setSingleDetail] = useState(null);
  const [, refetch] = useCarts();
  // const { data: singleUserCart = [], refetch } = useQuery({
  //   queryKey: ["singleUserCart", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/carts/single?email=${user?.email}`);
  //     console.log(res.data);
  //     return res.data;
  //   },
  // });
  // console.log(singleUserCart);
  //console.log(singleDetail);
  useEffect(() => {
    if (id) {
      const prodDetail = allproducts.find((prod) => prod._id === id);
      //console.log(prodDetail);
      setSingleDetail(prodDetail);
    }
  }, [allproducts, id]);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    // console.log("Selected Size:", size); // This is where you can handle the size value
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = singleDetail
    ? [singleDetail.photo, singleDetail.photo, singleDetail.photo]
    : [];
  const handleAddToCart = (singleDetail) => {
    // console.log("item info", singleDetail);

    if (user && user?.email) {
      const itemData = {
        title: singleDetail.title,
        price: singleDetail.price,
        photo: singleDetail.photo,
        brandname: singleDetail.brandname,
        color: singleDetail.color,
        size: selectedSize,
        name: user?.displayName,
        email: user?.email,
      };
      //console.log("item info", itemData);
      axiosSecure
        .post("/carts", itemData)
        .then((res) => {
          //console.log(res.data);
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
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          //{ state: { from: location } }
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="mx-auto w-[90%] p-5 mt-[12rem] md:mt-[8rem] pt-0">
      {/* <Breadcrumb></Breadcrumb> */}
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
            <h3 className="text-3xl uppercase font-semibold ">
              {singleDetail?.title}
            </h3>
            <div className="flex justify-start items-center pt-2 gap-6">
              <p className="text-lg text-black ">${singleDetail?.price}</p>
              {/* //[discounted price] */}
              <p className="text-lg text-gray-400 ">
                <del>${singleDetail?.discountedPrice}</del>
              </p>
              {/* [discounted %] */}
              <p className="text-lg text-green-500 ">
                {singleDetail?.discountedPercentage}% off
              </p>
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
              Color-
              <span className="text-gray-500 capitalize">
                {singleDetail?.color}
              </span>
            </h4>
            <div className="flex items-center gap-4">
              <h4>Size</h4>
              <div className="flex space-x-4">
                {/* proti ta size er jonno btn toiri hocche */}
                {["S", "M", "L"].map((size) => (
                  <button
                    type="button"
                    key={size}
                    className={`px-4 py-2 border rounded-full font-medium transition-all ${
                      selectedSize === size
                        ? "bg-purple-600 text-white "
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                    onClick={() => handleSizeClick(size)}>
                    {/* ekahne amra key theke pawa btn name ta diye dicchi ui te
                    show korar jonno */}
                    {size}
                  </button>
                ))}
              </div>
              <input type="hidden" name="size" value={selectedSize} readOnly />
            </div>
            {selectedSize && <p>Selected Size: {selectedSize}</p>}
          </div>

          <div className="join flex flex-wrap gap-2 my-12">
            <button
              onClick={() => handleAddToCart(singleDetail)}
              // onClick={addInCartPage} //Add full product to cart on button click
              className="btn uppercase rounded-none  border-1 text-[12px] text-white bg-black hover:bg-[#b7c940] hover:text-white">
              Add To Cart <FaShoppingBag></FaShoppingBag>
            </button>
            <button className="btn text-[12px] uppercase border-1 rounded-none border-black text-gray-400 bg-transparent hover:bg-[#b7c940] hover:text-white">
              Add to wishlist <FaHeart></FaHeart>
            </button>
          </div>
          <div>
            <button className="text-blue-600 flex items-center gap-3 underline font-semibold text-[1rem]">
              <FaStar className="" />
              Write a Review
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
              {singleDetail?.description}
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

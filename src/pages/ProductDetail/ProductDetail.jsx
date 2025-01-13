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
import useUserWishlist from "../../hooks/useUserWishlist";
import { useQuery } from "@tanstack/react-query";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [singleDetail, setSingleDetail] = useState(null);
  const { id } = useParams();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  // ei specific id ter review gulo ekhane pabo
  const [reviewsAll, setReviewsAll] = useState([]);
  console.log(reviewsAll);
  useEffect(() => {
    if (reviews.length > 0 && id) {
      const review = reviews.filter((item) => item.prodId === id);

      setReviewsAll(review);
    }
  }, [reviews, id]);

  console.log("ekhane all id matched reviews pabo", reviewsAll);

  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [allproducts] = useAllproducts();

  const [, refetch] = useCarts();
  const [, wishlistRefetch] = useUserWishlist();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/wishlist/userwishlist?email=${user?.email}`)
        .then((res) => {
          const getUserWishlistData = res.data || [];
          const found = getUserWishlistData.find(
            (data) => data.singleDetail._id === id
          );
          setIsInWishlist(found);
        });
    }
  }, [axiosSecure, id, user?.email]);
  useEffect(() => {
    if (user?.email && id) {
      axiosSecure.get(`/carts/single?email=${user?.email}`).then((res) => {
        const cartItems = res.data || [];
        const found = cartItems.some((item) => item.productId === id);
        setIsInCart(found);
      });
    }
  }, [axiosSecure, id, user]);
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
    //console.log("item info", singleDetail);

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
        productId: singleDetail._id,
        quantity: 1,
      };

      axiosSecure
        .post("/carts", itemData)
        .then((res) => {
          if (res.data.insertedId) {
            refetch();
            setIsInCart(true);
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

  const handleWishlist = (singleDetail) => {
    if (user?.email) {
      axiosSecure
        .post("/wishlist", {
          email: user?.email,
          name: user?.displayName,
          date: new Date(),
          singleDetail,
        })
        .then((res) => {
          if (res.data.insertedId) {
            wishlistRefetch();
            setIsInWishlist(true);
            console.log(res.data);
          }
        });
    } else {
      Swal.fire({
        title: "want to add in wishlist?",
        text: "please login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ok, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
        
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
              <p className="text-lg text-black ">
                ${singleDetail?.discountedPrice}
              </p>
              {/* //[discounted price] */}
              <p className="text-lg text-gray-400 ">
                <del>${singleDetail?.price}</del>
              </p>
              {/* [discounted %] */}
              <p className="text-lg text-green-500 ">
                {singleDetail?.discountedPercentage}% off
              </p>
            </div>
          </div>
          <div className="my-12">
            <div className="flex gap-2 items-center mb-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star._id}
                    className={`${
                      reviewsAll[0]?.rating >= star
                        ? "text-orange-400"
                        : "text-gray-400"
                    } `}></FaStar>
                ))}
              </div>
              <p className="text-gray-400 text-sm ">
                ({reviewsAll.length} customer review)
              </p>
            </div>
            <p className="text-gray-400">
              {reviewsAll[0]?.reviewDescription
                ? `${reviewsAll[0]?.reviewDescription}`
                : "no review yet"}
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
              disabled={isInCart}
              //btn er css styles condition
              className={`btn ${isInCart}? 'btn-disabled' :'btn-primary' uppercase rounded-none  border-1 text-[12px] text-white bg-black hover:bg-[#b7c940] hover:text-white`}>
              {isInCart ? "Already in Cart" : "Add to Cart"}
              <FaShoppingBag></FaShoppingBag>
            </button>
            <button
              disabled={isInWishlist}
              onClick={() => handleWishlist(singleDetail)}
              className={`btn ${
                isInWishlist ? "btn-disabled" : ""
              } text-[12px] uppercase border-1 rounded-none border-black text-gray-400 bg-transparent hover:bg-[#b7c940] hover:text-white`}>
              {isInWishlist ? (
                <>
                  Added to wishlist <FaHeart></FaHeart>
                </>
              ) : (
                <>
                  Add to wishlist <FaHeart></FaHeart>
                </>
              )}
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
            <div className="my-16">
              <b className="uppercase">
                {reviewsAll.length} review for this product
              </b>{" "}
              <br />
              {reviewsAll.map((item) => (
                <div className="card p-3 w-[80%]  gap-2" key={item._id}>
                  <div className="flex gap-4 items-center">
                    <img
                      className="w-[4rem] h-[4rem] object-cover"
                      src={item.userphoto}
                      alt=""
                    />
                    <div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star._id}
                            className={`${
                              item.rating >= star
                                ? "text-orange-400"
                                : "text-gray-400"
                            } `}></FaStar>
                        ))}
                      </div>
                      <h3 className="capitalize text-gray-600 font-semibold">
                        {item.name}
                      </h3>
                      <h2 className="text-gray-400">{item.reviewtitle}</h2>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-4 mb-2">
                    {item.reviewDescription}
                  </p>
                </div>
              ))}
              <div className="divider"></div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;

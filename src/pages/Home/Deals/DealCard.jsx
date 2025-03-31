import { FaArrowRightArrowLeft, FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SwiperSlide } from "swiper/react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useCarts from "../../../hooks/useCarts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
const DealCard = ({ deal }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCarts();

  //console.log(cart);
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    if (cart && deal._id) {
      const found = cart.find((item) => item.productId === deal._id);
      console.log(found);
      setIsInCart(found);
    }
  }, [cart, deal._id]);
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
        productId: product._id,
        quantity: 1,
      };
      axiosSecure.post("/carts", itemData).then((res) => {
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
    <SwiperSlide key={deal._id}>
      <div className="md:py-4 bg-[#f3f3f3] py-4 md:px-0 w-full  relative hover-tobe ">
        <div className="w-full   mx-auto px-2  relative ">
          <img
            className="object-cover mx-auto w-[15rem] h-[15rem]"
            src={deal.photo}
            alt=""
          />
        </div>

        <span className="absolute top-0 right-0 bg-red-600 px-2 py-[2px] rounded-sm text-white">
          -{deal.discountedPercentage}%
        </span>
        {/* {deal.name} */}
        <h4 className="text-black  ml-3 "></h4>
        <div className="flex items-center justify-normal gap-2 ml-3 mb-3">
          <h3 className=" text-red-600">
            <del className="text-gray-500">$ {deal.price} </del>
          </h3>
          <h3>{deal.discountedPrice}</h3>
        </div>
        <div className="flex items-center  justify-normal gap-2">
          <div className="">
            <button
              disabled={isInCart}
              onClick={() => handleAddToCart(deal)}
              className={`ml-3 flex flex-row items-center justify-start gap-2 ${
                isInCart ? " btn-disabled" : " "
              } font-semibold bg-black px-2 py-[6px] rounded-sm text-[#9dad37] text-sm md:text-[17px] lg:text-[15px]`}>
              <HiOutlineShoppingBag className="font-semibold text-lg" />
              {isInCart ? "Added already" : "Add To Cart"}
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
  );
};

export default DealCard;

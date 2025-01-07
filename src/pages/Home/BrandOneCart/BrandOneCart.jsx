import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BrandOneCart = ({ item }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCarts();
  const [isInCart, setIsInCart] = useState(false);
  console.log(isInCart);
  useEffect(() => {
    if (user?.email && item._id) {
      const found = cart.some((cartItem) => cartItem.productId === item._id);
      setIsInCart(found);
    }
  }, [cart, user, item._id]);
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
    <div key={item._id}>
      <Link to={`/productdetails/${item._id}`}>
        <div className="card   overflow-hidden  mt-6  relative flex  hover:scale-105 duration-500 transition-transform justify-between items-center h-[20rem] border rounded-none bg-[#f3f3f3]">
          <div className="h-full  w-full flex justify-center items-center">
            {/* src={st.photo} */}
            <img className="object-cover h-[90%]" src={item.photo} alt="" />
          </div>
          <div className="flex absolute top-3 right-3 flex-col justify-between items-center gap-12 ">
            <FaRegHeart className="text-2xl text-[#b7c940]"></FaRegHeart>
            <GoArrowSwitch className="text-2xl"></GoArrowSwitch>
          </div>
        </div>
      </Link>
      <div className="flex  justify-between items-center bg-black w-full  text-white p-1">
        <Link to={`/productdetails/${item._id}`}>
          <button className="flex justify-center text-[#b7c940] gap-2 items-center p-3">
            Quickshop
            <MdOutlineArrowOutward className="text-2xl"></MdOutlineArrowOutward>
          </button>
        </Link>
        <button
          onClick={() => handleAddToCart(item)}
          disabled={isInCart}
          className={`flex text-[#b7c940] ${
            isInCart ? "btn-disabled" : "btn-primary"
          } gap-2 justify-center items-center`}>
          {isInCart ? "Already in Cart" : "Add to Cart"}
          <FaBagShopping className="text-2xl" />
        </button>
      </div>
      <div className="my-4 flex justify-center flex-col items-center">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <h3>On sale from ${item.price}</h3>
      </div>
    </div>
  );
};

export default BrandOneCart;

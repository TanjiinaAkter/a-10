import { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import Swal from "sweetalert2";
import useUserWishlist from "../../hooks/useUserWishlist";
const BrandproductCart = ({ product }) => {
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
  const [wishlist, wishlistRefetch] = useUserWishlist();
  useEffect(() => {
    if (wishlist.length > 0 && product._id) {
      const found = wishlist.find(
        (prod) => prod.singleDetail._id === product._id
      );
      setIsInWishlist(found);
    }
  }, [wishlist, product._id]);
  useEffect(() => {
    if (user?.email && product._id) {
      const found = cart.some((item) => item.productId === product._id);
      setIsInCart(found);
    }
  }, [cart, user, product._id]);
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
  const handleWishlist = (product) => {
    console.log(product._id);
    if (user?.email) {
      axiosSecure
        .post("/wishlist", {
          singleDetail: product,
          email: user?.email,
          name: user?.displayName,
          date: new Date(),
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            wishlistRefetch();
            setIsInWishlist(true);
          }
        });
    }
  };
  return (
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
          <IoHeart
            onClick={() => handleWishlist(product)}
            className={` ${
              isInWishlist ? "text-red-600 btn-disabled" : "text-white "
            } cursor-pointer text-[37px] px-[6px]`}></IoHeart>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={isInCart}
            className="cursor-pointer text-[#9dad37] font-semibold h-full border-l-2 pl-1 text-[12px] ">
            {isInCart ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
      <div className="text-center my-3">
        <h1 className="text-[18px] uppercase mb-1 mt-2">{product?.title}</h1>
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
  );
};

export default BrandproductCart;

// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useLoaderData } from "react-router-dom";

import "./MyCart.css";
// import MycartSingle from "../MycartSingle/MycartSingle";
// import { useEffect } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { MdDeleteOutline, MdEdit } from "react-icons/md";
// import { useState } from "react";
// import MycartSingle from "../MycartSingle/MycartSingle";
import MyCartSingle from "../MyCartSingle/MyCartSingle";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import { useState } from "react";
const MyCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
 
  console.log(cart);
  //   const [totals, setTotals] = useState({}); // Store totals for each item

  // ekhane jegulo add to cart korechi seta nicchi
  //const cartpageitems = useLoaderData();
  // console.log(cartpageitems);
  //const [cartItems, setCartItems] = useState(cartpageitems);
  //   console.log(cartItems);
  //   const handleDelete = (_id) => {
  //     console.log("clicked", _id);

  //     // delete operation comes from mycartsingle item

  //     fetch(`http://localhost:5000/cart/${_id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           // ei id er sathe na mille  filter er maddhome niye store korbo
  //           setCartItems(cartItems.filter((cart) => cart._id !== _id));
  //         }
  //       });
  //   };

  //================ Function to update the total for a specific item ================//

  //   const handleTotalChange = (id, newTotal) => {
  //     setTotals((prevTotals) => ({
  //       ...prevTotals,
  //       [id]: newTotal,
  //     }));
  //   };

  // const calculateSubtotal = () => {
  //   return cartItems.reduce((total, item) => {
  //     const itemTotal = totals[item._id] || item.price; // Default to item price if no total is set
  //     return total + itemTotal;
  //   }, 0);
  // };
  //   const calculateSubtotal = () => {
  //     return cartItems.reduce((total, item) => {
  //       const itemPrice = parseFloat(item.price) || 0;
  //       const itemTotal = totals[item._id] || itemPrice;

  //       console.log(
  //         `Item ID: ${item._id}, Total: ${itemTotal}, Price: ${itemPrice}`
  //       );

  //       return total + itemTotal;
  //     }, 0);
  //   };

  //   const subtotal = calculateSubtotal();
  return (
    <div>
      <Helmet>
        <title>Havenique | MyCart</title>
      </Helmet>
      {/* <button className="btn ml-6 mt-8 mb-3 rounded-sm bg-[#b7c940] text-white text-xl">
        <Link to="/" className="flex items-center gap-1">
          <FaArrowLeftLong />
          Back To Home
        </Link>
      </button> */}
      <div className="mx-auto my-32 md:w-[80%]">
        <h1 className="text-center mb-8 text-3xl font-semibold">
          My <span className="text-[#b7c940]">Shopping</span> bag
        </h1>
        {/* ============== 2nd row ================*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-5">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4 m-3 md:m-0 ">
            <div>
              {cart.map((item) => (
                <MyCartSingle key={item._id} item={item}></MyCartSingle>
              ))}
            </div>
            <hr className="my-2" />
          </div>
          {/*================= SUBTOTAL ======================*/}
          <div className="m-5 shadow-md p-4 rounded-sm h-max">
            <h2 className="uppercase font-semibold">Order Summary</h2>
            <hr className="my-2 bg-black w-full h-[2px]" />
            <div className="flex justify-between items-end">
              {/* {subtotal} */}
              <h2 className=" font-semibold mt-6">subtotal</h2>
              <p className=" font-semibold">$230</p>
            </div>
            <hr className="my-1" />
            <div className="flex justify-between items-end">
              <h2 className="font-semibold  mt-6">Tax</h2>
              <p className="font-semibold">$00</p>
            </div>
            <hr className="my-1" />
            <div className="flex justify-between items-end">
              <h2 className=" font-bold uppercase mt-6">Order Total</h2>
              <p className="font-semibold">$30</p>
            </div>
            <hr className="my-1" />
            <p className="text-gray-400 font-semibold my-4 text-[14px]">
              Tax included & shipping calculated at checkout
            </p>
            <div className=" w-full">
              <Link to="/checkout">
                <button className=" px-3 py-[8px] uppercase text-sm transition-all duration-500 hover:bg-gray-300 hover:text-black font-semibold  mb-4 w-full bg-black text-white inline-block">
                  Proceed to checkout
                </button>
              </Link>
              <Link to="/">
                <button className="px-3 py-[6px] border-black hover:bg-black hover:text-white border text-sm uppercase font-semibold  mb-1 w-full bg-white text-black inline-block">
                  Continue to shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

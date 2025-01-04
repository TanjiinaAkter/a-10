import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const MycartSingle = ({ item }) => {
  const [, refetch] = useCarts();
  console.log("check item props", item);
  const { user } = useAuth();
  const [itemPrice, setItemPrice] = useState(
    () => (item.quantity || 1) * item.price
  );
  // Initialize state with the passed quantity
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const axiosSecure = useAxiosSecure();
  const addTo = () => {
    const newQuantity = quantity + 1;
    const newPrice = newQuantity * item.price;
    setQuantity(newQuantity);
    setItemPrice(newPrice);
    return updateQuantityAndPrice(newQuantity, newPrice, item);
  };
  const minusTo = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      const newPrice = newQuantity * item.price;
      setQuantity(newQuantity);
      setItemPrice(newPrice);
      return updateQuantityAndPrice(newQuantity, newPrice, item);
    }
  };

  const updateQuantityAndPrice = (quantity, itemPrice, item) => {
    if (user?.email) {
      axiosSecure
        .patch(`/carts/single?email=${user?.email}`, {
          quantity,
          itemPrice,
          // ekhane item._id ditesi karon productId dile main all cart er item er props add hoye change hobe
          productId: item._id,
        })
        .then((res) => {
          refetch();
          console.log(res.data);
        })
        .catch((error) => {
          console.log("eorrwoefnweoiffwffwefwef", error);
        });
    }
  };
  const handleUserEditProduct = (item) => {
    if (user?.email) {
      axiosSecure
        .patch(`/carts/single?email=${user?.email}`, {
          color: item.color,
          size: item.size,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };
  return (
    <div className="border shadow-sm border-gray-200 p-4 item pr-1 my-5 flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between md:flex-row  lg:col-span-2 md:col-span-3 gap-[8px]">
      <div className=" bg-[#f3f3f3] h-[6rem] w-[6rem]  items-center flex ">
        {/* {item.photo} */}
        <img
          className="h-full w-full  object-contain"
          src={item.photo}
          alt=""
        />
      </div>
      <div className="flex  flex-wrap lg:flex-nowrap items-center justify-center md:justify-between gap-4">
        {/* {name}  */}
        <h3 className="text-[19px] md:text-[.9rem] font-semibold text-gray-500 ">
          {item.title}
        </h3>
        {/* {price} */}
        <h6 className="text-[19px] md:text-lg  text-gray-400">${item.price}</h6>

        <h2 className="text-[1rem] py-2 font-semibold md:text-[.9rem] text-gray-400">
          {item.color}
        </h2>
        <div className="flex flex-row items-center justify-center">
          <button onClick={minusTo} className="border border-gray-300 p-3">
            <IoIosArrowDown className="text-gray-600" />
          </button>

          <input
            className="custom-number-input w-[30%] text-black text-center focus:outline-none list-none px-1 rounded-l-sm py-[9px]"
            type="number"
            id="numberInput"
            name="number"
            value={quantity}
            readOnly
          />
          <button onClick={addTo} className="border border-gray-300 p-3">
            <IoIosArrowUp className="text-gray-600" />
          </button>
        </div>
        <h6 className="text-[19px] md:text-lg  text-gray-400">
          total $ {itemPrice}
        </h6>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-[#b7c940] text-xl text-white px-2 py-[8px]">
          <MdEdit onClick={handleUserEditProduct(item)} />
        </div>
        <div className="bg-red-500 text-xl rounded-r-sm text-white px-2 py-[8px]">
          <MdDeleteOutline onClick={() => handleDelete(_id)} />
        </div>
      </div>
    </div>
  );
};

export default MycartSingle;

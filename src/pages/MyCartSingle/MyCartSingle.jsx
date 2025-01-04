import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import Swal from "sweetalert2";

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const MycartSingle = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [cart, refetch] = useCarts();
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
  const handleDelete = (item) => {
    console.log(item._id);
    if (user?.email) {
      axiosSecure
        .delete(`/carts/single/${item?._id}`, {
          id: item._id,
        })
        .then((res) => {
          refetch();
          console.log(res.data);
          if (res.data.deletedCount === 1) {
            Swal.fire({
              position: "top-end",
              icon: "Deleted",
              title: `${item.title} has been deleted!!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
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
          color: selectedColor,
          size: selectedSize,
          productId: item._id,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="border hover:bg-gray-100 shadow-sm border-gray-200 p-4 item pr-1 my-5 flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between md:flex-row  lg:col-span-2 md:col-span-3 gap-[8px]">
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
        <div className="bg-[#b7c940] hover:bg-black hover:transition-all hover:scale-110 text-xl text-white px-2 py-[4px]">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className=""
            onClick={() =>
              document.getElementById(`modal_${item._id}`).showModal()
            }>
            <MdEdit />
          </button>
          {item && (
            <dialog id={`modal_${item._id}`} className="modal">
              <div className="modal-box max-h-full rounded-none">
                <div className="border flex p-1 justify-between items-center gap-2 text-black border-gray-400">
                  <div className="w-[5rem] bg-gray-200 h-[5rem] ">
                    <img
                      className="w-full h-full object-cover"
                      src={item.photo}
                      alt=""
                    />
                  </div>
                  <h5 className="text-sm font-semibold text-gray-500">
                    {item.title}
                  </h5>
                  <h5 className="text-sm font-semibold text-gray-500">
                    {item.brandname}
                  </h5>
                  <h5 className="text-sm font-semibold text-gray-500">
                    price: {item.price}
                  </h5>
                </div>
                <div className="text-black my-7">
                  <h5 className="text-base font-semibold text-gray-500">
                    Change size From- {item.size} to {selectedSize}
                  </h5>
                  <div className="flex gap-3 my-3  items-center">
                    {["S", "M", "L"].map((size) => (
                      <button
                        type="button"
                        key={size}
                        className={`px-[11px] py-[6px] border text-sm rounded-full font-medium transition-all ${
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
                </div>

                <div className="text-base font-semibold text-gray-500">
                  <h5 className="my-2">
                    Change color from- {item.color} to {selectedColor}
                  </h5>
                  <div className="flex items-center gap-3">
                    {["red", "white", "blue", "black"].map((color) => (
                      <p
                        className={` ${
                          selectedColor?.toLowerCase() === color?.toLowerCase()
                            ? " bg-violet-500 border-none  text-white"
                            : ""
                        }  text-black cursor-pointer px-[8px] py-[10px] bg-gray-200 hover rounded-full`}
                        onClick={() => handleColorClick(color)}
                        key={color}>
                        {color}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex my-7  w-full">
                  <button
                    className="bg-black hover:bg-gray-200 hover:scale-105 transition-all duration-1000 text-white  w-full px-3 py-2"
                    onClick={() => handleUserEditProduct(item)}>
                    Add to cart
                  </button>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn rounded-none">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          )}
        </div>
        <div className="bg-red-500 text-xl hover:bg-black hover:transition-all hover:scale-110 duration-500 rounded-r-sm text-white px-2 py-[8px]">
          <MdDeleteOutline onClick={() => handleDelete(item)} />
        </div>
      </div>
    </div>
  );
};

export default MycartSingle;

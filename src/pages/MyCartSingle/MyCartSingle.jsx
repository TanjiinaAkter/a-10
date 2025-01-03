import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

const MycartSingle = ({ item }) => {
  const {
    photo,

    brandname,

    price,

    _id,

    quantity: initialQuantity,
  } = item;

  // Initialize state with the passed quantity
  const [quantity, setQuantity] = useState(
    initialQuantity > 1 ? initialQuantity : 1
  );

  const addTo = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  //   const addto = () => {
  //     const newQuantity = quantity + 1;
  //     setQuantity(newQuantity);
  //   };

  //   const minusTo = () => {
  //     if (quantity > 1) {
  //       const newQuantity = quantity - 1;
  //       setQuantity(newQuantity);
  //     }
  //   };
  // Update total on initial load and when quantity changes
  //   useEffect(() => {
  //     updateTotal(quantity);
  //   }, [quantity]);

  // Function to update subtotal and call parent function
  //   const updateTotal = (newQuantity) => {
  //     // price ta string e ache setake float e convert kore nilam
  //     const numberPrice = parseFloat(price);
  //     if (isNaN(numberPrice)) {
  //       console.log("Price is not a valid number.");
  //       return;
  //     }
  //     const newTotal = numberPrice * newQuantity;
  //     // Pass the new total to the parent component
  //     onTotalChange(_id, newTotal);
  //   };

  // Update quantity in the backend when quantity changes
  //   useEffect(() => {
  //     if (quantity !== initialQuantity) {
  //       // Only update if quantity changes
  //       fetch(`http://localhost:5000/cart/${_id}`, {
  //         method: "PATCH",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify({ quantity }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => console.log("Updated quantity:", data))
  //         .catch((error) => console.error("Error updating quantity:", error));
  //     }
  //   }, [quantity, _id, initialQuantity]);

  return (
    <div className="item pr-1 my-5 flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between md:flex-row  lg:col-span-2 md:col-span-3 gap-[8px]">
      <div className=" bg-[#f3f3f3] h-[6rem] w-[6rem]  items-center flex ">
        {/* {item.photo} */}
        <img
          className="h-full w-full  object-contain"
          src={item.photo}
          alt=""
        />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between gap-4">
        {/* {name}  */}
        <h3 className="text-[19px] md:text-[1.1rem] text-gray-400 ">
          {item.title}
        </h3>
        {/* {price} */}
        <h6 className="text-[19px] md:text-lg  text-gray-400">${item.price}</h6>

        <h2 className="text-[1rem] py-2 md:text-lg "> {item.brandname}</h2>
        <div className="flex flex-row items-center justify-center">
          <button className="border border-gray-300 p-3">
            {/* onClick={minusTo} */}
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
        <h6 className="text-[19px] md:text-lg  text-gray-400"> total $560 </h6>
      </div>
      <div className="flex flex-row items-center">
        <div className="bg-[#b7c940] text-xl text-white px-2 py-[8px]">
          <MdEdit />
        </div>
        <div className="bg-red-500 text-xl rounded-r-sm text-white px-2 py-[8px]">
          <MdDeleteOutline onClick={() => handleDelete(_id)} />
        </div>
      </div>
    </div>
  );
};

export default MycartSingle;

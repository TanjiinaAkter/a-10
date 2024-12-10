// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  //   const getDetails = useLoaderData(); // Data from loader (brands collection)
  //   const [cart, setCart] = useState(getDetails);
  //   const { photo, name, brandname, type, price, description, _id, rating } =
  //     cart;

  // Async function to handle the POST request to add the product to the cart
  const addInCartPage = async () => {
    // const product = {
    //   _id: cart.id,
    //   name,
    //   brandname,
    //   photo,
    //   type,
    //   description,
    //   rating,
    //   price,
    // };
    // console.log(product);
    // try {
    //   // Perform the POST request with async/await
    //   const response = await fetch("http://localhost:5000/cart", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(product), // Sending the entire product object
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to add item to cart");
    //   }
    //   const data = await response.json();
    //   console.log("Item added to cart:", data);
    // } catch (error) {
    //   console.error("Error adding to cart:", error);
    // }
  };

  return (
    <div className="mx-auto w-[80%]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="md:w-1/2">
          {/* {photo} */}
          <img className="w-[20rem] min-w-[12rem]" src="" alt={name} />
        </div>
        <div className="flex md:w-1/2 justify-start items-start flex-col gap-5 p-2 my-[2rem]">
          {/* {name} */}
          <h2 className="text-4xl font-semibold">name</h2>
          {/* {type} */}
          <h3 className="text-2xl font-medium">type</h3>
          {/* {price} */}
          <h3 className="text-2xl font-medium">$ price</h3>
          {/* {rating} */}
          <h3 className="text-2xl font-medium">Rating:</h3>
          <div className="join gap-2">
            <button className="btn border-1 border-[#b7c940] text-[#b7c940] bg-white">
              Buy Now
            </button>
            <button
              onClick={addInCartPage} //Add full product to cart on button click
              className="btn border-2 border-white bg-[#b7c940] text-white">
              Add To Cart
            </button>
          </div>
          <p>
            <span className="text-xl font-medium">Description:</span> <br />
            {/* {description} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

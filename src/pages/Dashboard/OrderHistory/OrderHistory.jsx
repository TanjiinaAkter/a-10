import DashboardBtn from "../../../components/dashboardBtn";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

import useAllproducts from "../../../hooks/useAllproducts";

import OrderHistoryCard from "./OrderHistoryCard";

const OrderHistory = () => {
  const [prodIdAndImages, setProdIdAndImages] = useState([]);
  const [allproducts] = useAllproducts();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/single?email=${user?.email}`
      );
      //console.log(res.data);
      return res.data;
    },
  });
  console.log(payments);
  useEffect(() => {
    if (allproducts.length > 0 && payments.length > 0) {
      // Step 1: Map over payments and find matching products
      const matchedProducts = payments.flatMap((payment) =>
        payment.prodIds.map((prodId) =>
          allproducts.find((product) => product._id === prodId)
        )
      );

      // Step 2: Filter out undefined values
      const validProducts = matchedProducts.filter(
        (item) => item !== undefined
      );

      // Step 3: Remove duplicates by product ID
      const uniqueMatchedProducts = Array.from(
        new Map(validProducts.map((item) => [item._id, item])).values()
      );

      // Step 4: Extract necessary product details
      const productDetails = uniqueMatchedProducts.map((item) => ({
        photo: item.photo, // Product image
        title: item.title, // Product title
        _id: item._id, // Product ID
        color: item.color, // Product color
        price: item.price, // Product price
      }));

      setProdIdAndImages(productDetails); // Update state with product data
      refetch(); // Re-fetch data to keep it fresh
    }
  }, [allproducts, payments, refetch]);

  // useEffect(() => {
  //   if (allproducts.length > 0 && payments.length > 0) {
  //     // Step 1: Find products related to the payment
  //     const matchedProducts = payments.flatMap(
  //       (payment) =>
  //         payment.prodIds.map((prodId) =>
  //           allproducts.find((product) => product._id === prodId)
  //         )
  //       // Filter out any undefined values
  //     );

  //     // Step 2: Remove duplicates by product ID
  //     //at first proti element k notun array banabo jekhane key hobe item id ar value hobe pura item ta,
  //     // new Map([
  //     //["1", { _id: "1", name: "Product A" }],
  //     //["2", { _id: "2", name: "Product B" }],
  //     //["1", { _id: "1", name: "Product A" }] // Overwrites the previous "1"
  //     //])

  //     //
  //     //  new Map er kaj hocche key value gulo store kore jekhane key obosshoi unique hoy, .values() iterable kore ,,,,Array.from holo unique items niye notun array create kore
  //     const uniqueMatchedProducts = Array.from(
  //       new Map(matchedProducts.map((item) => [item._id, item])).values()
  //     );
  //     console.log(uniqueMatchedProducts);
  //     // Step 3: Create a list of products with necessary details
  //     const productDetails = uniqueMatchedProducts.map((item) => ({
  //       photo: item.photo, // Product image
  //       title: item.title, // Product title
  //       _id: item._id, // Product ID
  //       color: item.color, // Product color
  //       price: item.price, // Product price
  //     }));

  //     setProdIdAndImages(productDetails); // Update state with product data
  //     refetch(); // Re-fetch data to keep it fresh
  //   }
  // }, [allproducts, payments, refetch]); // Run when any of these change

  // Extract product photo and title
  // const prodIdAndImages = uniqueMatchedProducts.map((item) => ({
  //   photo: item.photo,
  //   title: item.title,
  //   _id: item._id,
  //   color: item.color,
  //   price: item.price,
  // }));
  //   setProdIdAndImages(prodIdAndImages);
  //   refetch();
  console.log("prodIdAndImages", prodIdAndImages);

  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>
      <p className="text-center mb-4 mt-[3rem] md:mt-0">
        Everything you have ordered
      </p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Order History</span>
      </h2>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />

      <div>
        <div className="orderDetails my-12 ">
          {payments.map((payment) => {
            // Filter products for the current payment
            const relatedProducts = prodIdAndImages.filter((prod) =>
              payment.prodIds.includes(prod._id)
            );

            return (
              <div
                key={payment._id}
                className="mb-6 p-4 w-full md:w-[80%]  mx-auto shadow-sm rounded-none">
                {/* Payment Info */}
                <div className="flex p-3 flex-wrap gap-2 text-gray-500 bg-blue-50 justify-between items-center ">
                  <p> Placed in : {payment.date}</p>
                  <p>Total: {payment.price}</p>
                  <p>Transaction ID: {payment.transactionId}</p>
                  <p>Status: {payment.status}</p>
                </div>

                {/* Products under this payment */}
                <div className="grid grid-cols-1  md:grid-cols-1 gap-4">
                  {relatedProducts.map((prod, index) => (
                    <OrderHistoryCard
                      key={prod._id}
                      index={index}
                      prod={prod}></OrderHistoryCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

import { MdDelete } from "react-icons/md";
import DashboardBtn from "../../../components/dashboardBtn";
import useUserWishlist from "../../../hooks/useUserWishlist";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import userCarts from "../../../hooks/useCarts";
const WishList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const { user } = useAuth();
  const [, refetch] = userCarts();
  const axiosSecure = useAxiosSecure();
  const [wishlist] = useUserWishlist();
  console.log(wishlist);
  const handleAddToCart = (list) => {
    if (user && user?.email) {
      axiosSecure.post("/carts", list).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          if (res.data.insertedId) {
            setAddedToCart((prev) => ({ ...prev, [list._id]: true }));
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${list.title} id added to the cart`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    }
  };
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>
      <p className="text-center mb-4 mt-[3rem] md:mt-0">Items you love</p>
      <hr className="w-[20%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Wishlist</span>
      </h2>
      <hr className="w-[20%] mx-auto h-[3px] bg-black" />

      <div className="overflow-x-auto  mt-12 m-1 mx-auto card rounded-md md:w-[90%] shadow-sm  w-[90%]  mb-12">
        <table className="table w-full p-8">
          {/* head */}
          <thead className="bg-[#eff6ff]">
            <tr className="text-[1rem]  font-base text-gray-500 ">
              <th>#</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Color</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody className="bg-white ">
            {/* row 1 */}
            {wishlist.map((list) => (
              <tr key={list._id} className="border-y-2 border-gray-200 ">
                <button className="my-[1.9rem] mx-2 px-1 rounded-md hover:scale-110 transition-all duration-300 text-red-600 text-center py-1 bg-gray-200 text-2xl font-semibold">
                  <MdDelete />
                </button>
                <td className="">
                  <img className="w-[6rem] h-[6rem] object-cover bg-gray-200 hover:scale-x-105 duration-300 transition-all" src={list.singleDetail.photo} alt="" />
                </td>
                <td className="text-black">{list.singleDetail.title}</td>
                <td> {list.singleDetail.price}</td>
                <td> {list.singleDetail.color}</td>
                <td>
                  <div className="flex flex-col gap-[4px]">
                    added on {list.date}
                    {addedToCart[list._id] ? (
                      <button
                        disabled
                        onClick={() => handleAddToCart(list)}
                        className="badge text-white hover:scale-105 bg-[#9dad37] py-[13px] px-5 hover:bg-black transition-all duration-500 font-semibold">
                        Added
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(list)}
                        className="badge text-white hover:scale-105 bg-[#9dad37] py-[13px] px-5 hover:bg-black transition-all duration-500 font-semibold">
                        Add to cart
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;

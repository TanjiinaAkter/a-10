import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserWishlist from "../../../hooks/useUserWishlist";
import useCarts from "../../../hooks/useCarts";

const WishlistCart = ({ list = { list } }) => {
  console.log(list);
  const [addedToCart, setAddedToCart] = useState(false);
  const { user } = useAuth();
  const [cart, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const [, wishlistRefetch] = useUserWishlist();
  useEffect(() => {
    if (cart.length > 0 && list.singleDetail._id) {
      const found = cart.find(
        (prod) => prod.productId === list.singleDetail._id
      );
      setAddedToCart(found);
    }
  }, [cart, list.singleDetail._id]);
  const handleAddToCart = (list) => {
    console.log(list._id);
    if (user && user?.email) {
      console.log(list);
      const itemData = {
        title: list.singleDetail.title,
        price: list.singleDetail.price,
        photo: list.singleDetail.photo,
        brandname: list.singleDetail.brandname,
        color: list.singleDetail.color,
        size: "M",
        name: user?.displayName,
        email: user?.email,
        productId: list.singleDetail._id,
        quantity: 1,
      };
      axiosSecure.post("/carts", itemData).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          if (res.data.insertedId) {
            refetch();
            setAddedToCart(true);
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${list.singleDetail.title} added to the cart`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    }
  };
  const handleDeleteWishlist = (list) => {
    if (user?.email) {
      axiosSecure.delete(`/wishlist/userwishlist/${list._id}`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount === 1) {
          wishlistRefetch();
          Swal.fire({
            position: "top-end",
            icon: "Deleted",
            title: `${list.singleDetail.title} has been deleted!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <tr key={list._id} className="border-y-2 border-gray-200 ">
      <button className="my-[1.9rem] mx-2 px-1 rounded-md hover:scale-110 transition-all duration-300 text-red-600 text-center py-1 bg-gray-200 text-2xl font-semibold">
        <MdDelete onClick={() => handleDeleteWishlist(list)} />
      </button>
      <td className="">
        <img
          className="w-[6rem] h-[6rem] object-cover bg-gray-200 hover:scale-x-105 duration-300 transition-all"
          src={list.singleDetail.photo}
          alt=""
        />
      </td>
      <td className="text-black">{list.singleDetail.title}</td>
      <td className=""> {list.singleDetail.price}</td>
      <td> {list.singleDetail.color}</td>
      <td>
        <div className="flex flex-col gap-[4px]">
          added on {list.date}
          <button
            disabled={addedToCart}
            onClick={() => handleAddToCart(list)}
            className={`${
              addedToCart ? "btn-disabled bg-gray-600" : "bg-[#9dad37]"
            } badge text-white hover:scale-105  py-[13px] px-5 hover:bg-black transition-all duration-500 font-semibold`}>
            {addedToCart ? "Added" : "Add to cart"}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WishlistCart;

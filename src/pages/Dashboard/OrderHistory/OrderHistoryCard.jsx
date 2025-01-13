import { useState } from "react";
import { FaStar } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OrderHistoryCard = ({ prod, index }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(user.photo);
  const onSubmit = (data) => {
    const Getdata = {
      ...data,
      rating,
      prodId: prod._id,
      photo: prod.photo,
      title: prod.title,
      color: prod.color,
      size: prod.size,
      email: user?.email,
      name: user?.displayName,
      userphoto: user?.photoURL,
    };
    console.log("checking sending product data", Getdata);
    if (user?.email) {
      axiosSecure.post("/reviews", Getdata).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "Deleted",
            title: "Your Review has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }

    document.getElementById(`${prod._id}`).close();
  };
  return (
    <div
      key={prod._id}
      className="p-3  border border-gray-200  flex justify-between  items-center">
      <div className="flex gap-5 items-center">
        <p>{index + 1}</p>
        <div className="bg-gray-100 ">
          <img
            src={prod.photo}
            alt={prod.title}
            className="w-[5rem] ml-1 h-[5rem] object-cover rounded-md mb-2"
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-justify text-gray-500 font-semibold">
            {prod.title}
          </p>
          <p className="text-justify text-gray-500 font-semibold">
            {prod.color}
          </p>
          <p className="text-justify text-gray-500  font-semibold">
            {prod.price}
          </p>
        </div>
      </div>

      <div className="flex  flex-col md:flex-row items-center gap-2 border-b-2 text-[#e3a92c]">
        <FaStar></FaStar>
        <button className=""></button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className=""
          onClick={() => document.getElementById(`${prod._id}`).showModal()}>
          Add A Review
        </button>
        <dialog id={`${prod._id}`} className="modal">
          <div className="modal-box  rounded-none ">
            <div className="modal-action flex-col">
              <form
                onSubmit={handleSubmit(onSubmit)}
                method="dialog"
                className="card-body">
                <div className="form-control shadow-slate-200 shadow-md p-3">
                  <label className="label">
                    <span className="label-text font-semibold text-[1rem]">
                      Rate this Product
                    </span>

                    <div className="amarr flex">
                      {[1, 2, 3, 4, 5].map((star) => {
                        return (
                          <FaStar
                            className={`${
                              rating >= star
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }`}
                            onClick={() => setRating(star)}
                            key={star}
                          />
                        );
                      })}
                    </div>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text outline-none  font-semibold text-gray-400">
                      Title
                    </span>
                  </label>
                  <input
                    {...register("reviewtitle", { required: true })}
                    type="text"
                    placeholder="title"
                    className="input input-bordered rounded-none text-black"
                    required
                  />
                  {errors.reviewtitle && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-400">
                      Description
                    </span>
                  </label>
                  <textarea
                    {...register("reviewDescription", { required: true })}
                    className="border focus:outline-gray-400  border-gray-300"
                    rows={5}
                    cols={10}></textarea>
                  {errors.reviewDescription && (
                    <span>This field is required</span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="rounded-none px-3 py-2 hover:bg-gray-600 hover:scale-95 transition-all duration-500 bg-black text-white">
                    Submit Review
                  </button>
                </div>
              </form>
              <div className="flex  justify-end w-fit  mt-3">
                <button
                  onClick={() => document.getElementById(`${prod._id}`).close()}
                  className="rounded-none px-3 py-2 hover:bg-gray-600 hover:scale-95 transition-all duration-500 bg-red-600 text-white">
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default OrderHistoryCard;

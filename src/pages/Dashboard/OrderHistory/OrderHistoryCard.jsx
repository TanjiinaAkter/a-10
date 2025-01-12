import { FaStar } from "react-icons/fa";

const OrderHistoryCard = ({ prod, index }) => {
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
            <div className="modal-action">
              <form method="dialog" className="card-body">
                <div className="form-control shadow-slate-200 shadow-md p-3">
                  <label className="label">
                    <span className="label-text font-semibold text-[1rem]">
                      Rate this Product
                    </span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text outline-none  font-semibold text-gray-400">
                      Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="title"
                    className="input input-bordered rounded-none text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-400">
                      Description
                    </span>
                  </label>
                  <textarea
                    className="border focus:outline-gray-400  border-gray-300"
                    name=""
                    id=""
                    rows={5}
                    cols={10}></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="flex justify-end  mt-3">
                  <button className="rounded-none px-3 py-2 hover:bg-gray-600 hover:scale-95 transition-all duration-500 bg-black text-white">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default OrderHistoryCard;

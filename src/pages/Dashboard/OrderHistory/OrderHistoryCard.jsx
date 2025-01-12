import { FaStar } from "react-icons/fa";

const OrderHistoryCard = ({ prod ,index}) => {
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
        <button className="">Add A Review</button>
      </div>
    </div>
  );
};

export default OrderHistoryCard;

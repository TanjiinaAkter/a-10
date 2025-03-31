import { FaFileAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewsCard = ({ item }) => {
  return (
    <div className="card p-6 bg-base-100 rounded-none  shadow-xl">
      <div className="flex flex-col md:flex-row  items-center justify-between gap-2">
        <div>
          <div className="bg-gray-200 ">
            <img
              src={item.photo}
              style={{
                height: "60px",
                width: "60px",
                color: "red",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="text-gray-500">
            <h3 className="text-2xl md:text-xl font-semibold  ">
              {item.title}
            </h3>
            <p>{item.color}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
          <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
            <div className="flex flex-col   gap-2 text-gray-500">
              <h2 className="text-[1rem] md:text-xl font-semibold mt-5 ">
                Your review about this product
              </h2>
              <p>{item.reviewtitle}</p>

              <p className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`${
                      item.rating >= star ? "text-yellow-400" : ""
                    }`}></FaStar>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center py-3">
            <Link to={`/productdetails/${item.prodId}`}>
              <button className="btn btn-md bg-red-600 text-white rounded-sm text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Details
              </button>
            </Link>

            {/* <button className="btn btn-wide  bg-red-600  text-white rounded-sm ">
                             Details
                           </button> */}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="mt-3 flex gap-1 my-4">
          <FaFileAlt className=" text-[1.4rem] text-[#9dad37] " />
          <p className="text-[1.1rem] text-gray-500">
            Product desctiption: <br />
          </p>
        </div>
        <span className="text-gray-400">{item.reviewDescription}</span>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default ReviewsCard;

import { FaBookmark, FaRev } from "react-icons/fa";
import DashboardBtn from "../../../components/dashboardBtn";

const ReviewProducts = () => {
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>
      <div className="md:mt-12 mx-auto w-[85%]">
        <p className="text-center mb-4 mt-[3rem] md:mt-0">Items you love</p>
        <hr className="w-[20%] mx-auto h-[3px] bg-black" />
        <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
          Product <span className="text-[#9dad37]">Review</span>
        </h2>
        <hr className="w-[20%] mx-auto h-[3px] bg-black" />

        <div className="grid-cols-1 md:grid-cols-2 gap-4 my-12 ">
          <div className="card p-6 bg-base-100 rounded-none  shadow-xl">
            <div className="flex flex-col md:flex-row  items-center justify-between gap-2">
              <div className="  ">
                <img
                  src="https://i.ibb.co.com/V2MD129/25.jpg"
                  style={{ height: "70px", width: "70px", color: "red" }}
                  alt=""
                />
              </div>
              <div className="text-gray-500">
                <h3 className="text-2xl md:text-xl font-semibold  ">
                  product name
                </h3>
                <p>price</p>
                <p>size</p>
                <p>color</p>
              </div>
              <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                  <div className="flex flex-col   gap-2 text-gray-500">
                    <h2 className="text-[1rem] md:text-xl font-semibold mt-5 ">
                      your review about this product
                    </h2>
                    <p>product title</p>
                    <p className="flex gap-2">
                      <FaBookmark className=" text-[1.5rem]" /> product
                      desctiption
                    </p>
                    <p className="flex gap-2">
                      <FaRev className=" text-[1.5rem]" /> product rating
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <div className="flex justify-center items-center py-3">
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

                  {/* <button className="btn btn-wide  bg-red-600  text-white rounded-sm ">
                     Details
                   </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;

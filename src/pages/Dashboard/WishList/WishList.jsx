import { MdDelete } from "react-icons/md";
import DashboardBtn from "../../../components/dashboardBtn";

const WishList = () => {
  return (
    <div className="md:mt-12">
       <DashboardBtn></DashboardBtn>
      <p className="text-center mb-4 mt-[3rem] md:mt-0">Items you love</p>
      <hr className="w-[20%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Wishlist</span>
      </h2>
      <hr className="w-[20%] mx-auto h-[3px] bg-black" />

      <div className="overflow-x-auto  mt-12 m-1 mx-auto card rounded-md md:w-[90%] shadow-lg  w-[90%]  mb-12">
        <table className="table w-full p-8">
          {/* head */}
          <thead className="bg-[#f5f7fa]">
            <tr className="text-[1rem]  font-base text-gray-500 ">
              <th>#</th>

              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr className="border-b-2 border-gray-200 ">
              <th>1</th>

              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <div className="flex gap-2">
                  <button className="badge text-white bg-[#9dad37] py-[13px] px-6 font-semibold">
                    Add to cart
                  </button>
                  <button className=" px-1 rounded-md hover:scale-105 transition-all duration-500 text-red-600 text-center py-1 bg-gray-200 text-2xl font-semibold">
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;

import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DashboardBtn from "../../../components/dashboardBtn";

const Users = () => {
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>

      <p className="text-center mb-4">Monitor User Status</p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]"> Manage Users</span>
      </h2>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <div>
        <div>
          total length
          {/* <UserPageHeader
                              userheading={`Applied Jobs : ${singleApplicantsData.length} `}></UserPageHeader> */}
        </div>

        {/* Table */}
        <div className="overflow-x-auto md:overflow-x-visible  mt-12 m-1 mx-auto card rounded-none md:w-[90%] shadow-xl w-[90%]  mb-12">
          <table className="table w-full p-8">
            {/* head#b0c5ca 353547*/}
            <thead className="bg-[#f5f7fa]">
              <tr className="text-[1rem] font-base text-gray-500 z-50">
                <th>#</th>
                <th>Image</th>
                <th>Name </th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* row 1 */}
              {/* {Object.values(singleApplicantsData).map((data) => ( */}
              {/* key={data._id} */}
              <tr>
                <td>
                  {/* <h3>{data.name}</h3> */}
                  <h3 className="font-semibold">1</h3>
                </td>
                <td>
                  <div className="w-12">
                    <img
                      className="rounded-full object-cover"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </td>

                <td>
                  <h3 className="font-semibold">name</h3>
                  {/* <h3>{data.jobTitle}</h3> */}
                </td>
                <td>
                  {/* <h3>{data.company}</h3> */}
                  <h3 className="font-semibold">
                    <FaUsers className="py-2 px-2 text-[40px] rounded-md transition-all duration-500 text-orange-500 hover:bg-[#d3cccc]"></FaUsers>
                  </h3>
                </td>

                <td>
                  <MdDelete className="py-2 px-2 text-[40px] rounded-md transition-all duration-500 text-red-500 hover:bg-[#d3cccc]" />
                </td>
              </tr>
            </tbody>

            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

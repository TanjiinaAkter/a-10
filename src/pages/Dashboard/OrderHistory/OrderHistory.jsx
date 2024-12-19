import { Link } from "react-router-dom";
import DashboardBtn from "../../../components/dashboardBtn";

const OrderHistory = () => {
  return (
    <div className="md:mt-12">
       <DashboardBtn></DashboardBtn>
       <p className="text-center mb-4 mt-[3rem] md:mt-0">Everything you've ordered</p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Order History</span>
      </h2>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />

      <div>
        <div>
          total length
          {/* <UserPageHeader
            userheading={`Applied Jobs : ${singleApplicantsData.length} `}></UserPageHeader> */}
        </div>

        {/* Table */}
        <div className="overflow-x-auto  mt-12 m-1 mx-auto card rounded-md md:w-[90%] shadow-xl w-[90%]  mb-12">
          <table className="table w-full p-8">
            {/* head#b0c5ca 353547*/}
            <thead className="bg-[#f5f7fa]">
              <tr className="text-[1rem] font-base text-gray-500 ">
                <th>#</th>
                <th>Price</th>

                <th>Transaction ID</th>
                <th>Date</th>

                <th>Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* row 1 */}
              {/* {Object.values(singleApplicantsData).map((data) => ( */}
              {/* key={data._id} */}
              <tr>
                <td>
                  {/* <h3>{data.name}</h3> */}
                  <h3 className="font-semibold">Price</h3>
                </td>
                <td>
                  {/* <h3>{data.email}</h3> */}
                  <h3 className="text-[#88bda9] font-semibold">
                    transaction id
                  </h3>
                </td>

                <td>
                  <h3 className="font-semibold">date</h3>
                  {/* <h3>{data.jobTitle}</h3> */}
                </td>
                <td>
                  {/* <h3>{data.company}</h3> */}
                  <h3 className="font-semibold">pending</h3>
                </td>
                {/* {
                  <td>
                    <a
                      href={`https://job-seeker-server-gamma.vercel.app/uploads/${data.resume}`} // Link to download the resume
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn  text-[#447de6] btn-sm rounded-full">
                     <FaDownload></FaDownload> 
                    </a>
                  </td>
                } */}
                <td>
                  {/* {data?.status?.status ||
                      (data?.status === "accepted" && ( */}
                  {/* /dashboard/interview */}
                  <Link to="">
                    <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-green-500 text-white  ">
                      {/* {data?.status?.status || data?.status} */}
                      status
                    </button>
                  </Link>
                  {/* // ))} */}
                  {/* {data?.status?.status ||
                      (data?.status === "rejected" && ( */}
                  <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-[#ff0000] text-white  ">
                    {/* {data?.status?.status || data?.status} */}
                  </button>
                  {/* ))} */}
                  {/* {data?.status?.status ||
                    data?.status === "pending" ||
                    "" ? ( */}
                  <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-yellow-500 text-white  ">
                    pending
                  </button>
                  {/* ) : (
                      ""
                    )} */}
                </td>
              </tr>
              {/* ))} */}
            </tbody>

            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

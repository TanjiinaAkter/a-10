import { Link } from "react-router-dom";
import DashboardBtn from "../../../components/dashboardBtn";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const OrderHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/single?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>
      <p className="text-center mb-4 mt-[3rem] md:mt-0">
        Everything you've ordered
      </p>
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
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>
                    <h3 className="font-semibold">{index}</h3>
                  </td>
                  <td>
                    {/* <h3>{data.name}</h3> */}
                    <h3 className="font-semibold">{payment.price}</h3>
                  </td>
                  <td>
                    {/* <h3>{data.email}</h3> */}
                    <h3 className="text-[#88bda9] font-semibold">
                      {payment.transactionId}
                    </h3>
                  </td>

                  <td>
                    <h3 className="font-semibold">{payment.date}</h3>
                    {/* <h3>{data.jobTitle}</h3> */}
                  </td>
                  <td>
                    {/* <h3>{data.company}</h3> */}
                    <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-yellow-500 text-white  ">
                      {payment.status}
                    </button>
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
                  {/* <td> */}
                  {/* {data?.status?.status ||
                      (data?.status === "accepted" && ( */}
                  {/* /dashboard/interview */}
                  {/* <Link to="">
                      <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-green-500 text-white  ">
                        {data?.status?.status || data?.status}
                        status
                      </button>
                    </Link> */}

                  {/* // ))} */}
                  {/* {data?.status?.status ||
                      (data?.status === "rejected" && ( */}
                  {/* <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-[#ff0000] text-white  ">
                      {data?.status?.status || data?.status}
                    </button> */}
                  {/* ))} */}

                  {/* {data?.status?.status ||
                    data?.status === "pending" ||
                    "" ? ( */}
                  {/* <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-yellow-500 text-white  ">
                      pending
                    </button> */}
                  {/* ) : (
                      ""
                    )} */}
                  {/* </td> */}
                </tr>
              ))}
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

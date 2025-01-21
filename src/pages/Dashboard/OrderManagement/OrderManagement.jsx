import { FaSyncAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import DashboardBtn from "../../../components/dashboardBtn";
import usePayments from "../../../hooks/usePayments";
import useAllproducts from "../../../hooks/useAllproducts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OrderManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [allproducts] = useAllproducts();
  const [payments, paymentrefetch] = usePayments();
  // console.log("all pay", payments);
  const handleStatus = (statusValue, payment) => {
    axiosSecure
      .patch(`payments/${payment._id}`, {
        status: statusValue,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount === 1) {
          paymentrefetch();
        }
      });
  };
  const handleDelete = (payment) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`payments/${payment._id}`).then((res) => {
          console.log(res.data);
          paymentrefetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>

      <p className="text-center mb-4 mt-[3rem] md:mt-0">
        Handle Customer Orders
      </p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Order Management</span>
      </h2>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <div>
        {/* Table */}
        <div className="overflow-x-auto md:overflow-x-visible  mt-12 m-1 mx-auto card rounded-none md:w-[90%] shadow-xl w-[90%]  mb-12">
          <table className="table w-full p-8">
            {/* head#b0c5ca 353547*/}
            <thead className="bg-[#f5f7fa]">
              <tr className="text-[1rem] font-base text-gray-500 z-50">
                <th>#</th>
                <th>Image</th>
                <th>Date </th>
                <th>Price</th>
                <th> Transaction ID</th>
                <th>Status</th>
                {/* ekhane confirem shipped delivered dropdown w ashbe jeta select korbo seta status e show korbe inititally status order korle  placed thakbe,then bakigulo dibo*/}
                <th>update</th>
                {/* <button className=" px-1 rounded-md hover:scale-105 transition-all duration-500 text-red-600 text-center py-1 bg-gray-200 text-2xl font-semibold">
                    <MdDelete />
                  </button> */}
                {/* p-2 rounded-md hover:bg-[#d3cccc] */}
                <th>delete</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {payments.map((payment, index) => {
                const relatedImages = payment.prodIds.map((prodId) => {
                  const product = allproducts.find(
                    (product) => product._id === prodId
                  );
                  return product ? product?.photo : null;
                });
                //  console.log(relatedImages);

                return (
                  <tr key={payment._id}>
                    <td>
                      {/* <h3>{data.name}</h3> */}
                      <h3 className="font-semibold">{index + 1}</h3>
                    </td>
                    <td>
                      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        {relatedImages.map(
                          (photo, idx) =>
                            photo && ( // Check if the photo exists
                              <div key={idx} className="avatar">
                                <div className="w-12">
                                  <img
                                    className="bg-slate-200 object-cover"
                                    src={photo}
                                    alt={`Product ${idx}`}
                                  />
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </td>

                    <td>
                      <h3 className="font-semibold">{payment.date}</h3>
                      {/* <h3>{data.jobTitle}</h3> */}
                    </td>
                    <td>
                      {/* <h3>{data.company}</h3> */}
                      <h3 className="font-semibold">${payment.price}</h3>
                    </td>
                    <td>{payment.transactionId}</td>
                    {/* <td>
                      <span
                        className={` font-semibold 
                          ${payment.status === "pending" ? "text-red-600" : ""}
                          ${
                            payment.status === "delivered"
                              ? "text-green-600"
                              : ""
                          } ${
                          payment.status === "confirmed"
                            ? "text-yellow-400"
                            : ""
                        } ${
                          payment.status === "shipped" ? "text-blue-600" : ""
                        }`}>
                        {payment.status}
                      </span>
                    </td> */}
                     <td>
                      <span
                        className={`text-white badge-md rounded-full py-[2px] font-semibold 
                          ${payment.status === "pending" ? "bg-red-500" : ""}
                          ${
                            payment.status === "delivered"
                              ? "bg-green-600"
                              : ""
                          } ${
                          payment.status === "confirmed"
                            ? "bg-yellow-400"
                            : ""
                        } ${
                          payment.status === "shipped" ? "bg-blue-500" : ""
                        }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td>
                      <details className="dropdown">
                        <summary className="btn m-1">
                          <FaSyncAlt className="p-2 rounded-full text-[38px] transition-all duration-500 text-green-500 hover:bg-[#d3cccc]"></FaSyncAlt>
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                          <li
                            onClick={() => handleStatus("delivered", payment)}>
                            <a>delivered</a>
                          </li>
                          <li
                            onClick={() => handleStatus("confirmed", payment)}>
                            <a>confirmed</a>
                          </li>
                          <li onClick={() => handleStatus("shipped", payment)}>
                            <a> shipped</a>
                          </li>
                        </ul>
                      </details>
                    </td>
                    <td>
                      <ImCross
                        onClick={() => handleDelete(payment)}
                        className="p-2 rounded-full text-[30px] bg-red-500  text-white hover:bg-[#d3cccc]"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DashboardBtn from "../../../components/dashboardBtn";
import useAllproducts from "../../../hooks/useAllproducts";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ManageProducts = () => {
  const axiosSecure = useAxiosSecure();
  const [allproducts, refetch] = useAllproducts();
  console.log(allproducts);
  const handleDeleteProduct = (product) => {
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
        axiosSecure.delete(`/allproducts/${product._id}`).then((res) => {
          console.log(res.data);
          refetch();
          if (result.data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>

      <p className="text-center mb-4">Track Product Listings</p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]"> Product Management</span>
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
                <th>Title </th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
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
              {/* row 1 */}
              {/* {Object.values(singleApplicantsData).map((data) => ( */}
              {/* key={data._id} */}
              {allproducts.map((product, index) => (
                <tr key={product._id}>
                  <td>
                    {/* <h3>{data.name}</h3> */}
                    <h3 className="font-semibold">{index + 1}</h3>
                  </td>
                  <td>
                    <div className="w-12 ">
                      <img
                        className="object-cover w-[5rem] h-[5rem] "
                        src={product.photo}
                      />
                    </div>
                  </td>

                  <td>
                    <h3 className="font-semibold">{product.title}</h3>
                    {/* <h3>{data.jobTitle}</h3> */}
                  </td>
                  <td>
                    {/* <h3>{data.company}</h3> */}
                    <h3 className="font-semibold">{product.thirdCategory}</h3>
                  </td>
                  <td>{product.price}</td>
                  <td className="text-gray-500  ">
                    S- {product.quantitysmall}, M- {product.quantitymedium}, L-{" "}
                    {product.quantitylarge}
                  </td>
                  <td>
                    <Link to="/dashboard/updateproduct" state={{ product }}>
                      <FaEdit className="py-2 px-2 text-[40px] rounded-md transition-all duration-500 text-green-500 hover:bg-[#d3cccc]"></FaEdit>
                    </Link>
                  </td>
                  <td>
                    <td>
                      <MdDelete
                        onClick={() => handleDeleteProduct(product)}
                        className="py-2 px-2 text-[40px] rounded-md transition-all duration-500 text-red-500 hover:bg-[#d3cccc]"
                      />
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;

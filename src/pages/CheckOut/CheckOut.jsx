import { useNavigate, useOutletContext } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import SubTotalCard from "../../components/subTotalCard";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("checkout form data", data);
    if (user?.email) {
      axiosSecure.post("/checkoutinfo", data).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Information added successfully!!!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/payment");
        }
      });
    }
  };
  const { subTotal, calculation } = useOutletContext();
  return (
    <div>
      <Breadcrumb className=" pl-8 md:pl-0 md:mt-0 "></Breadcrumb>
      <div className="mx-auto md:w-[86%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-full md:col-span-2 mb-6">
            <h2 className="uppercase text-xl md:text-2xl pl-8 md:px-0 mt-5 md:my-12 font-semibold">
              Billing & Payment Information
            </h2>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body md:p-0">
                <div className="md:flex gap-4 w-full">
                  <div className="form-control w-full md:w-1/2 ">
                    <label className="label">
                      <span className="label-text font-semibold">
                        First Name
                      </span>
                    </label>
                    <input
                      {...register("firstname", { required: true })}
                      type="text"
                      readOnly
                      defaultValue={user?.displayName}
                      placeholder="first name"
                      className="input input-bordered rounded-none focus:outline-none"
                      required
                    />
                    {errors.firstname && <span>This field is required</span>}
                  </div>
                  <div className="form-control w-full md:w-1/2">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Last Name
                      </span>
                    </label>
                    <input
                      {...register("lastname", { required: true })}
                      type="text"
                      placeholder="last name"
                      className="input input-bordered rounded-none focus:outline-none"
                      required
                    />
                    {errors.lastname && <span>This field is required</span>}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                    placeholder="email"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                  {errors.email && <span>This field is required</span>}
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">Address</span>
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="address"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                  {errors.address && <span>This field is required</span>}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">State</span>
                  </label>
                  <input
                    {...register("state", { required: true })}
                    type="text"
                    placeholder="state"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                  {errors.state && <span>This field is required</span>}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">Zip</span>
                  </label>
                  <input
                    {...register("zip", { required: true })}
                    type="number"
                    placeholder="zip"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                  {errors.zip && <span>This field is required</span>}
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">City</span>
                  </label>
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="city"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                  {errors.city && <span>This field is required</span>}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">Phone</span>
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    type="number"
                    placeholder="phone"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                  {errors.phone && <span>This field is required</span>}
                </div>
                <div className="form-control mt-6">
                  {/* /payment */}

                  <input
                    className="btn bg-black text-white rounded-none"
                    type="submit"
                    value="Continue to payment"
                  />
                </div>
              </form>
            </div>
          </div>
          <div>
            {/*================= SUBTOTAL ======================*/}
            <SubTotalCard
              subTotal={subTotal}
              calculation={calculation}></SubTotalCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

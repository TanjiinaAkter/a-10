import { Link, useOutletContext } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import SubTotalCard from "../../components/subTotalCard";

const CheckOut = () => {
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
              <form className="card-body md:p-0">
                <div className="md:flex gap-4 w-full">
                  <div className="form-control w-full md:w-1/2 ">
                    <label className="label">
                      <span className="label-text font-semibold">
                        First Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="first name"
                      className="input input-bordered rounded-none focus:outline-none"
                      required
                    />
                  </div>
                  <div className="form-control w-full md:w-1/2">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Last Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="last name"
                      className="input input-bordered rounded-none focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="address"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">State</span>
                  </label>
                  <input
                    type="text"
                    placeholder="state"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">Zip</span>
                  </label>
                  <input
                    type="number"
                    placeholder="zip"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">City</span>
                  </label>
                  <input
                    type="text"
                    placeholder="city"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="phone"
                    className="input input-bordered rounded-none focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <Link to="/payment">
                    <button className="btn bg-black text-white rounded-none">
                      Continue to payment
                    </button>
                  </Link>
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

import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const Pyment = () => {
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div className="mx-auto w-[86%] my-12">
        <div className="card bg-base-100 w-full md:w-96 mx-auto rounded-none shadow-xl">
          <div className="card-body">
            <p className="text-center border-b-orange-300">Payment</p>
            <h2 className="text-center text-2xl text-gray-400">
              Finalize Your Purchase
            </h2>
            <div className="divider "></div>
            <div className="card-actions justify-center mt-2">
              <Link to='/dashboard/orderhistory'>
                <button className="btn bg-black text-white rounded-none ">
                  Complete Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pyment;

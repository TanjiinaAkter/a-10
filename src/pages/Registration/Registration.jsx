import { FaHome } from "react-icons/fa";
import "./Registration.css";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div className="bg-img w-full">
        <div className="bg-darker top-0 left-0 right-0 bottom-0 p-3">
        <div className="">
          <Link to="/">
            <button className="btn rounded-none px-3 text-lg py-2 text-white hover:text-black border-white border-2 bg-transparent">
              <FaHome></FaHome> Back to home
            </button>
          </Link>
        </div>
        <div className="card mt-4 z-50 w-full md:w-[50%] lg:w-[35%] bg-[rgba(0,0,0,0.5)] p-4 mx-auto rounded-sm  shadow-2xl">
          <div className="md:pl-7">
            <h2 className="text-white">Create account</h2>
            <p className="text-white">
              Please register below to create an account First name
            </p>
          </div>
          <form className="card-body sm:p-4 md:p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Photo URL
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none rounded-none text-white text-[1.1rem] bg-[#9dad37]">
                Register
              </button>
            </div>
            <p className="text-white">
              Already have account?{" "}
              <Link to="/login">
                <span className="text-[#9dad37] border-b-2 border-[#9dad37] pr-1">
                  Login
                </span>
              </Link>
              now
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

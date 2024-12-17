import { Link } from "react-router-dom";

const AdminProfile = () => {
  return (
    <div className="px-8 md:px-20 mt-12 md:mt-0 md:pt-24 flex flex-col md:flex-row justify-between gap-2 md:gap-6 items-center">
      <div className="card m-3 bg-base-100 w-full md:w-1/3  mx-auto shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.pinimg.com/736x/4e/4b/48/4e4b48446ba1375e6f116a64742ea49f.jpg"
            alt="Shoes"
            className="rounded-full object-cover w-[10rem] h-[10rem]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">name || user?.displayName</h2>
          <p> email || user?.email</p>
        </div>
      </div>
      <div className="card bg-base-100 w-full md:w-2/3 mx-auto rounded-none shadow-xl">
        <div className="card-body md:flex md:justify-normal  space-y-6">
          <div className="md:flex items-center justify-start gap-4 ">
            <h2 className="md:text-xl font-semibold">Full Name:</h2>
            <h2 className="md:text-xl text-gray-500">
              name || user?.displayName
            </h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Email: </h2>
            <h2 className=" text-lg text-gray-500">email</h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Role :</h2>
            <h2 className=" text-lg text-gray-500"> role</h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Contact no. :</h2>
            <h2 className=" text-lg text-gray-500"> phone</h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Location :</h2>
            <h2 className=" text-lg text-gray-500"> location</h2>
          </div>

          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Gender :</h2>
            <h2 className=" text-lg text-gray-500"> gender</h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold">Skills:</h2>
            <h2 className=" text-lg text-gray-500"> skills</h2>
          </div>

          <div className="card-actions">
            <Link to="/dashboard/editprofile">
              <button className="btn px-12 bg-black text-white rounded-sm">
                Edit profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

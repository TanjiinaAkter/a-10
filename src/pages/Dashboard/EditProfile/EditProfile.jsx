const EditProfile = () => {
  return (
    <div className="md:mt-12">
       <p className="text-center mb-4 mt-[3rem] md:mt-0">Wanna Update?</p>
      <hr className="w-[20%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Update <span className="text-[#9dad37]">profile</span>
      </h2>
      <hr className="w-[20%] mx-auto h-[3px] bg-black" />
      <div className="card bg-base-100 w-[80%] mx-auto rounded-none  shadow-2xl my-6">
        {/* onSubmit={handleSubmit(onSubmit)} */}
        <form className="card-body  p-6">
          <div className="flex gap-3 flex-wrap md:flex-nowrap ">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">User Name</span>
              </label>
              <input
                placeholder="name"
                // {...register("name", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {/* {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )} */}
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                // {...register("email", { required: true })}
                type="email"
                // disabled
                readOnly
                placeholder="email"
                className="input input-bordered focus:outline-none rounded-sm "
              />
              {/* {errors.email && (
                <span className="text-red-600">email field is required</span>
              )} */}
            </div>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">
                   Contact Number
                </span>
              </label>
              <input
                placeholder="phone"
                // {...register("phone", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {/* {errors.phone && (
                <span className="text-red-600">contact field is required</span>
              )} */}
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Role</span>
              </label>
              <input
                // {...register("role", { required: true })}
                type="text"
                defaultValue={"user"}
                // disabled
                readOnly
                placeholder="role"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {/* {errors.role && (
                <span className="text-red-600">
                  job title field is required
                </span>
              )} */}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Location</span>
              </label>
              <input
                placeholder="location name"
                // {...register("location", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {/* {errors.location && (
                <span className="text-red-600">Name field is required</span>
              )} */}
            </div>

            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Picture URL</span>
              </label>
              <input
                // {...register("photo", { required: true })}
                type="text"
                placeholder="picture URL"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
              {/* {errors.photo && (
                <span className="text-red-600">
                  job title field is required
                </span>
              )} */}
            </div>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full  mb-5">
              <label className="label">
                <span className="label-text font-medium">Gender</span>
              </label>
              <input
                // {...register("gender", { required: true })}
                type="text"
                placeholder="gender"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {/* {errors.gender && (
                <span className="text-red-600">gender field is required</span>
              )} */}
            </div>
          
          </div>

          <input
            type="submit"
            value="Edit profile"
            className="btn bg-black text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

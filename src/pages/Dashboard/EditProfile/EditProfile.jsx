import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import useAllUsers from "../../../hooks/useAllUsers";
import Swal from "sweetalert2";
const EditProfile = () => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useAllUsers();
  const { user, updateUserProfile } = useAuth();
  const { data: userData = [] } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/single?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
    enabled: !!user?.email,
  });
  console.log(userData);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    //default value gulo te ei value show korabo
    setValue("name", user?.displayName);
    setValue("email", user?.email);
    setValue("photo", user?.photoURL);
  }, [setValue, user]);

  const onSubmit = async (data) => {
    console.log(data);
    const editprofile = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      photo: data.photo,
      role: data.role,
      location: data.location,
      gender: data.gender,
    };
    try {
      await updateUserProfile(data.name, data.photo);
      refetch();
      await axiosSecure
        .patch(`/users/single?email=${user?.email}`, editprofile)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Profile updated successfully",
              showConfirmButton: false,
              timer: 3000,
            });
          }
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
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
        <form onSubmit={handleSubmit(onSubmit)} className="card-body  p-6">
          <div className="flex gap-3 flex-wrap md:flex-nowrap ">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">User Name</span>
              </label>
              <input
                placeholder="name"
                {...register("name", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                readOnly
                placeholder="email"
                className="input input-bordered focus:outline-none rounded-sm "
              />
              {errors.email && (
                <span className="text-red-600">email field is required</span>
              )}
            </div>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Contact Number</span>
              </label>
              <input
                placeholder="phone"
                {...register("phone", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.phone && (
                <span className="text-red-600">contact field is required</span>
              )}
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Role</span>
              </label>
              <input
                {...register("role", { required: true })}
                type="text"
                defaultValue={userData?.role}
                readOnly
                placeholder="role"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.role && (
                <span className="text-red-600">role field is required</span>
              )}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Location</span>
              </label>
              <input
                placeholder="location name"
                {...register("location", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.location && (
                <span className="text-red-600">location field is required</span>
              )}
            </div>

            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Picture URL</span>
              </label>
              <input
                {...register("photo", { required: true })}
                type="text"
                readOnly
                defaultValue={userData?.photo}
                placeholder="picture URL"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
              {errors.photo && (
                <span className="text-red-600">photo field is required</span>
              )}
            </div>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full  mb-5">
              <label className="label">
                <span className="label-text font-medium">Gender</span>
              </label>
              <input
                {...register("gender", { required: true })}
                type="text"
                placeholder="gender"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.gender && (
                <span className="text-red-600">gender field is required</span>
              )}
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

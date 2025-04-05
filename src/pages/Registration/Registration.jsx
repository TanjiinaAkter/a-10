import { FaHome } from "react-icons/fa";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, emailVerify, logOut, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, data.email);
    createUser(data.email, data.password)
      // user create done
      .then((result) => {
        console.log(result.user);

        if (result.user) {
          // email verify
          emailVerify(data.email)
            .then(() => {
              Swal.fire({
                title: "Successfully Registered !!!",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
                },
              });
              logOut();
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }

        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userInfo = {
              email: data.email,
              name: data.name,
              photo: data.photo,
              role: "user",
            };
            console.log(userInfo);
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire("user profile created & updated !!");
              }
            });
            navigate("/login");
          })
          .catch((error) => {
            console.log("error during updating profile", error);
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("This email is already registered. Try logging in instead.");
      });
  };
  return (
    <div className="bg-img w-full">
      <Helmet>
        <title>Havenique | Registration</title>
      </Helmet>
      <div className="bg-darker top-0 left-0 right-0 bottom-0 p-3">
        <div>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body sm:p-4 md:p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Name
                </span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Email
                </span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Password
                </span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-semibold">
                  Photo URL
                </span>
              </label>
              <input
                {...register("photo", { required: true })}
                type="text"
                placeholder="Photo url"
                className="input  input-bordered border rounded-none bg-transparent text-white  border-white"
                required
              />
              {errors.photo && <span>This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none rounded-none text-white text-[1.1rem] bg-[#9dad37]">
                Register
              </button>
            </div>
            <p className="text-white">
              Already have account?
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

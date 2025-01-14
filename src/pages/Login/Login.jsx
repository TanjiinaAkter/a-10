import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
  const [noEmail, setNoEmail] = useState("");
  const navigate = useNavigate();
  const { user, resetPassword } = useAuth();
  console.log(user);
  const { login, logOut } = useAuth();
 
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        if (result.user.emailVerified) {
          console.log(result);
          Swal.fire({
            title: "Login successfull !!!",
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
          navigate("/");
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Please Verify your email first, check your email !!!",
            showConfirmButton: false,
            timer: 1500,
          });
          logOut();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgetPassword = () => {
    const email = getValues("email");
    console.log(email);
    setNoEmail("");
    if (!email) {
      return setNoEmail("enter an email first!!!");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setNoEmail("Enter a valid email");
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: " check your email to reset password !!!",
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
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="bg-img  w-full">
      <Helmet>
        <title>Havenique | Login</title>
      </Helmet>
      <div className="bg-darker h-screen top-0 left-0 right-0 bottom-0 p-3">
        <div className="">
          <Link to="/">
            <button className="btn rounded-none px-3 text-lg py-2 text-white hover:text-black border-white border-2 bg-transparent">
              <FaHome></FaHome> Back to home
            </button>
          </Link>
        </div>
        <div className="card mt-4 z-50 w-full md:w-[50%] lg:w-[35%] bg-[rgba(0,0,0,0.5)] p-4 mx-auto rounded-sm  shadow-2xl">
          <div className="md:pl-7">
            <h2 className="text-white">Login to your account</h2>
            <p className="text-white">Please Login below</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body sm:p-4 md:p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white  text-lg font-semibold">
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
                <span className="label-text text-white text-lg font-semibold">
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
            <p
              onClick={handleForgetPassword}
              className="text-yellow-300 cursor-pointer text-base underline font-semibold">
              Forget Password*
            </p>
            {noEmail && (
              <p className="text-red-500 text-base  font-semibold">{noEmail}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn border-none rounded-none text-white text-[1.1rem] bg-[#9dad37]">
                Login
              </button>
            </div>
            <p className="text-white">
              Dont you have account?
              <Link to="/registration">
                <span className="text-[#9dad37] border-b-2 border-[#9dad37] pr-1">
                  Sign up
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

export default Login;

import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import errorimg from "../../assets/Animation(1).gif";
import { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="mx-auto w-full md:w-[70%] my-16">
      <div className="card bg-base-100  w-[60%] mx-auto rounded-none ">
        <div className="card-body">
          <img
            data-aos="fade-left"
            src={errorimg}
            style={{ height: "180px", width: "180px", alignSelf: "center" }}
            alt=""
          />
          <p className="text-center text-6xl text-[#a8e438] font-semibold">
            404
          </p>
          <p className="text-center text-3xl text-[#94ce28] font-semibold">
            Whoops! Page Not Found
          </p>
          <p className="text-center text-xl  font-semibold">
            We are sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <Link to="/">
            <div className="card-actions justify-center flex flex-row">
              <button className="btn btn-md bg-[#ff4848] text-white text-lg font-semibold rounded-none">
                <FaArrowLeftLong /> Back to Home
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardBtn = () => {
  return (
    <div className="flex justify-end">
      <Link to="/">
        <button className="bg-black btn text-white text-lg mr-5 rounded-md">
          <FaHome></FaHome> Home
        </button>
      </Link>
    </div>
  );
};

export default DashboardBtn;

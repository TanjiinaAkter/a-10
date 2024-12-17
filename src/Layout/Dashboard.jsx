import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import {
  FaBoxOpen,
  FaClipboardList,
  FaHome,
  FaShoppingBag,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
   const isAdmin = false;
  //const isAdmin = true;
  return (
    <div className="flex flex-col md:flex-row ">
      {/* ========================== SIDEBAR CONTENT  ==========================*/}
      <div className="w-full bg-img1 md:max-w-64 bg-black min-h-screen font-semibold text-white">
        <ul className=" menu space-y-3 p-3">
          {isAdmin ? (
            <>
              <li className="text-[1rem]">
                <NavLink to="/dashboard/adminprofile">
                  <CgProfile className="text-2xl text-[#9dad37]" />
                  Admin Profile
                </NavLink>
              </li>
              <li className="text-[1rem]">
                <NavLink to="/dashboard/stats">
                  {" "}
                  <IoStatsChart className="text-2xl text-[#9dad37]" /> Stats
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addproduct">
                  <FaBoxOpen className="text-2xl text-[#9dad37]" /> Add Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageproduct">
                  <FaTasks className="text-2xl text-[#9dad37]" />
                  Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/ordermanagement">
                  <FaClipboardList className="text-2xl text-[#9dad37]" />
                  Order Management
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers className="text-2xl text-[#9dad37]" />
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-[1rem]">
                <NavLink to="/dashboard/userprofile">
                  <CgProfile className="text-2xl text-[#9dad37]" />
                  User Profile
                </NavLink>
              </li>
              <li className="text-[1rem]">
                <NavLink to="/dashboard/editprofile">
                  <IoStatsChart className="text-2xl text-[#9dad37]" /> Profile
                  Edit
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/orderhistory">
                  <FaBoxOpen className="text-2xl text-[#9dad37]" /> Order
                  History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/wishlist">
                  <FaTasks className="text-2xl text-[#9dad37]" />
                  WishList
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaClipboardList className="text-2xl text-[#9dad37]" />
                  Review Products
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className=" text-[1rem]">
            <NavLink to="/">
              <FaHome className="text-2xl text-[#9dad37]"></FaHome>
              Home
            </NavLink>
          </li>
          <li className=" text-[1rem]">
            <NavLink to="/">
              <FaShoppingBag className="text-2xl text-[#9dad37]"></FaShoppingBag>
              All products
            </NavLink>
          </li>
          <li className=" text-[1rem]">
            <NavLink to="/">
              <BiLogOut className="text-2xl text-[#9dad37]"></BiLogOut>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      {/* ========================== DASHBOARD CONTENT  ==========================*/}
      <div className="w-full ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

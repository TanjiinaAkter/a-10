import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../../../assets/log.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useCarts from "../../../hooks/useCarts";
import { useState } from "react";
import useAllproducts from "../../../hooks/useAllproducts";
import useAdmin from "../../../hooks/useAdmin";
const Header = () => {
  const [isAdmin] = useAdmin();
  const [allproducts] = useAllproducts();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [cart] = useCarts();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  //========= DROPDOWN TOGGLE =========//
  const toggleDropDown = (category) => {
    // category jodi theke thake then kichui dekhabo na ar na thakle category(men, women, kids, or decor r ki) show korbo
    setIsOpen(isOpen === category ? null : category);
  };
  // proti ta topcategory ar thirdcategory niye notun object create hobe seta [] array er moddhe nibo
  const categoryMapping = {};
  allproducts.forEach((product) => {
    const { topCategory, thirdCategory } = product;
    if (!categoryMapping[topCategory]) {
      // topcategory first time add hole nibo empty array er moddhe
      categoryMapping[topCategory] = [];
    }
    if (!categoryMapping[topCategory].includes(thirdCategory)) {
      categoryMapping[topCategory].push(thirdCategory);
    }
  });

  //console.log(categoryMapping);
  const lists = (
    <div className="flex flex-col space-y-4 md:space-y-0 lg:flex-row justify-between items-center  lg:text-white">
      <li className="mr-4 text-green uppercase text-[1rem] font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* ekhane topcategory holo oije man women eigulo and thirdcat hocche men women er under e 'shirt','pant' eigulo so thirdCategory pabo ['shirt','pant'] emn.........jeta amra map kore ber kortesi dropdown e*/}
      {Object.entries(categoryMapping).map(([topCategory, thirdCategories]) => (
        <li
          key={topCategory}
          className="flex items-center cursor-pointer select-none"
          onClick={() => toggleDropDown(topCategory)}>
          <span className="text-[1rem] uppercase font-semibold">
            {topCategory}
          </span>
          {isOpen === topCategory && (
            <ul className="absolute cursor-pointer  z-40   shadow-lg rounded-md p-4 text-center bg-black text-[18px] top-[27px] left-[-5rem] md:top-16 md:left-[-5rem] md:bg-[#000000C6] text-white  w-48 ">
              {thirdCategories.map((thirdCategory, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setIsOpen(null);
                    navigate(
                      `/brandproducts?topCategory=${topCategory}&thirdCategory=${thirdCategory}`
                    );
                  }}
                  className=" hover:bg-[#9dad37db] rounded-sm transition-all duration-500 px-2 py-2 ml-0 hover:text-white w-full">
                  {thirdCategory}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </div>
  );

  return (
    //bg-[#B58753]

    <div className="py-4 bg-[rgba(0,0,0,0.8)] top-0 w-full fixed  z-10 mb-[18rem]   mx-auto items-center ">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row md:justify-between">
        {/* ====================NAVBAR-1======================= */}

        <div className="flex navbar-start w-full flex-1 ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {lists}
            </ul>
          </div>

          <div className="hidden lg:block ">
            <ul className="menu menu-horizontal px-1">{lists}</ul>
          </div>
        </div>
        {/*==================== NAVBAR-1==================== */}
        <div className="flex mt-1 md:flex-1  justify-center   gap-1">
          <img className="w-[2rem] h-[2rem] mt-1" src={logo} alt="" />
          <Link to="/">
            <span className="font-extrabold text-3xl md:text-4xl mt-3 text-white">
              Havenique.
            </span>
          </Link>
        </div>
        {/* ====================NAVBAR-3======================= */}
        <div className="flex mt-4 md:mt-0 items-center  md:justify-center justify-center">
          <FaSearch className="text-4xl mr-3 md:text-[2.5rem] text-white hover:text-[#9dad37] transition-all duration-300 hover:bg-white p-2 rounded-full"></FaSearch>
          {user && user?.email ? (
            <Link to="/dashboard/wishlist">
              <FaRegHeart className="text-4xl mr-3 md:text-[2.5rem] text-white hover:text-[#9dad37] transition-all duration-300 hover:bg-white p-2 rounded-full" />
            </Link>
          ) : (
            ""
          )}
          <span className=" text-3xl hidden md:block text-white text-center mx-2">
            |
          </span>
          {user && user?.email ? (
            <div className="relative">
              <Link to="/mycart">
                <HiOutlineShoppingBag className="text-5xl md:text-[2.7rem] text-white hover:text-[#9dad37] transition-all duration-300 hover:bg-white p-2 rounded-full" />
              </Link>
              <span className="w-5 h-5 absolute top-[-6%] right-[-19%] bg-red-500 inline-block text-center text-lg text-white leading-6 rounded-full">
                {cart.length}
              </span>
            </div>
          ) : (
            <div className="relative">
              <Link to="/mycart">
                <HiOutlineShoppingBag className="text-5xl md:text-[2.7rem] text-white hover:text-[#9dad37] transition-all duration-300 hover:bg-white p-2 rounded-full" />
              </Link>
              <span className="w-5 h-5 absolute top-[-6%] right-[-19%] bg-red-500 inline-block text-center text-lg text-white leading-6 rounded-full">
                0
              </span>
            </div>
          )}
          <div>
            {user && isAdmin === false ? (
              <>
                <div className=" w-full flex justify-between gap-6 items-center">
                  <Link to="/dashboard/userprofile">
                    <img
                      className="w-[2.5rem] rounded-full h-[2.5rem] md:w-[3rem] md:h-[3rem] object-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  </Link>
                  <span className="text-[#9dad37] text-lg font-semibold">
                    Hi! {user.displayName}
                  </span>
                  <button
                    onClick={handleLogOut}
                    className=" font-semibold text-lg text-white px-3 py-1 rounded-sm bg-[#9dad37]">
                    logout
                  </button>
                </div>
              </>
            ) : user && isAdmin === true ? (
              <>
                <div className=" w-full flex justify-between gap-6 items-center">
                  <Link to="/dashboard/adminprofile">
                    <img
                      className="w-[2.5rem] rounded-full h-[2.5rem] md:w-[3rem] md:h-[3rem] object-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  </Link>
                  <span className="text-[#9dad37] text-lg font-semibold">
                    Hi! {user.displayName}
                  </span>
                  <button
                    onClick={handleLogOut}
                    className=" font-semibold text-lg text-white px-3 py-1 rounded-sm bg-[#9dad37]">
                    logout
                  </button>
                </div>
              </>
            ) : (
              <details className="dropdown">
                <summary className="text-white flex m-1 list-none cursor-pointer font-semiboldi">
                  My Account <RiArrowDropDownLine className="text-2xl" />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-none z-[1] w-52 p-2 shadow space-y-2">
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/registration">Register</NavLink>
                  </li>
                </ul>
              </details>
            )}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import MyCart from "../pages/MyCart/MyCart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Pyment from "../pages/Pyment/Pyment";
//import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import Stats from "../pages/Dashboard/Stats/Stats";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import OrderManagement from "../pages/Dashboard/OrderManagement/OrderManagement";
import Users from "../pages/Dashboard/Users/Users";

import OrderHistory from "../pages/Dashboard/OrderHistory/OrderHistory";
import ReviewProducts from "../pages/Dashboard/ReviewProducts/ReviewProducts";
import WishList from "../pages/Dashboard/WishList/WishList";
import CategorySubTypes from "../pages/CategorySubTypes/CategorySubTypes";
import EditUserProfile from "../pages/Dashboard/EditUserProfile/EditUserProfile";
import EditProfile from "../pages/Dashboard/EditProfile/EditProfile";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";

const router = createBrowserRouter([
  //======================= UI PART=====================//
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/brandproducts",
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: "/categorysubtypes",
        element: <CategorySubTypes></CategorySubTypes>,
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/payment",
        element: <Pyment></Pyment>,
      },

      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  //================ADMIN DASHBOARD====================//
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "adminprofile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "editprofile/:email",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "stats",
        element: <Stats></Stats>,
      },
      {
        path: "manageproduct",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "ordermanagement",
        element: <OrderManagement></OrderManagement>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      //================USER DASHBOARD====================//
      {
        path: "userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "edituserprofile/:email",
        element: <EditUserProfile></EditUserProfile>,
      },
      {
        path: "orderhistory",
        element: <OrderHistory></OrderHistory>,
      },
      {
        path: "review",
        element: <ReviewProducts></ReviewProducts>,
      },
      {
        path: "wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
]);

export default router;

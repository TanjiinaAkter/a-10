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
import EditUserProfile from "../pages/Dashboard/EditUserProfile/EditUserProfile";
import EditProfile from "../pages/Dashboard/EditProfile/EditProfile";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";
import PrivateRouter from "./PrivateRouter";

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
        path: "/productdetails/:id",
        element: (
          <PrivateRouter>
            <ProductDetail></ProductDetail>
          </PrivateRouter>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRouter>
            <MyCart></MyCart>
          </PrivateRouter>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRouter>
            <CheckOut></CheckOut>
          </PrivateRouter>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRouter>
            <Pyment></Pyment>
          </PrivateRouter>
        ),
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
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "updateproduct",
        element: <UpdateProduct></UpdateProduct>,
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
        element: (
          <PrivateRouter>
            <UserProfile></UserProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "edituserprofile/:email",
        element: (
          <PrivateRouter>
            <EditUserProfile></EditUserProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "orderhistory",
        element: (
          <PrivateRouter>
            <OrderHistory></OrderHistory>
          </PrivateRouter>
        ),
      },
      {
        path: "review",
        element: (
          <PrivateRouter>
            <ReviewProducts></ReviewProducts>
          </PrivateRouter>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRouter>
            <WishList></WishList>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;

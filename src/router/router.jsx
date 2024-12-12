import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";

import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import MyCart from "../pages/MyCart/MyCart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Pyment from "../pages/Pyment/Pyment";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/brandproducts",
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: "/productdetails",
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
        path: "/paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;

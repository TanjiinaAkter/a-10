import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";

import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

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
    
    ],
  },
]);

export default router;

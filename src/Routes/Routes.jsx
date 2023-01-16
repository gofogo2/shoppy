import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "../Views/AllProducts";
import MyCart from "../Views/MyCart";
import NewProduct from "../Views/NewProduct";
import NotFound from "../Views/NotFound";
import ProductsDetail from "../Views/ProductsDetail";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<NotFound/>,
    children:[{
        index:true,
        element:<div>Index</div>,
        
    },{
        path:'products',
        element:<AllProducts/>
    },{
        path:'products/new',
            element:<NewProduct/>
        },{
        path:'products/:id',
        element:<ProductsDetail/>
    },{
        path:'carts',
        element:<MyCart/>
    }]
  },
  {
    path: "/test",
    element: <div>Test</div>,
  },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;

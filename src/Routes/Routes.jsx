import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[{
        index:true,
        element:<div>Index</div>
    },{
        path:'products',
        element:<div>products</div>
    },{
        path:'products/new',
            element:<div>products/new</div>
        },{
        path:'products/:id',
        element:<div>products/:id</div>
    },{
        path:'carts',
        element:<div>carts</div>
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

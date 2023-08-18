import React from 'react'
import Home from './../screens/Home.tsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Product from '../screens/Product.tsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/product",
        element: <Product/>,
      },
  ]);

const Navigation = () => {
  return (
    <div className='home-container'>
 <RouterProvider router={router} />
    </div>
   
  )
}

export default Navigation
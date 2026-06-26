import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Page/Home';
import Rootlayout from './layout/Rootlayout';

const App = () => {
  let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      // { path: "about", Component: About },
      
    ],
  },
]);

  return (
    <>
   
    <RouterProvider router={router} />

    </>
  )
}

export default App

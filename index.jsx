import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

import About from "./Components/About";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import CountryDetail from "./Components/CountryDetail";
import CountryDetail2 from "./Components/CountryDetail2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      //static routing
      // { path: "/CountryDetail", element: <CountryDetail /> },
      //dynamic routing
      { path: "/:countryName", element: <CountryDetail2 /> },
      { path: "/code/:countryCode", element: <CountryDetail2 /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

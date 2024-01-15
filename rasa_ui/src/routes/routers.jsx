import React, { lazy } from "react";
// import Layout from "../Layout";
import Basic from "../components/basic";
import DefaultLayout from "../components/DefaultLayout";
import AuthLayout from "../components/AuthLayout";

import { createBrowserRouter } from "react-router-dom";
// import Sidebar from "../components/sidebar";
const Sidebar = lazy(() => import("../components/sidebar"));
const Layout = lazy(() => import("../Layout"));
const routers = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Layout /> },
      { path: "/basic", element: <Basic /> },
      //   { path: "/sidebar", element: <Sidebar /> },
      //   { path: "/layout", element: <Layout /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      //dashbord
      { path: "/", element: <Layout /> },
      { path: "/basic", element: <Basic /> },
      //   { path: "/sidebar", element: <Sidebar /> },
      { path: "/layout", element: <Layout /> },
    ],
  },
]);

export default routers;

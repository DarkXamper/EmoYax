import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Layout from "../Layout";
const DefaultLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DefaultLayout;

import React, { useState, useEffect } from "react";
import App from "./App";
import "./Layout.css";
import Basic from "./components/basic";
import { Navigate } from "react-router-dom";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      //   setLoading(false);
      setLoading((prev) => (prev = false));
    }, 5000);
    console.log(loading);
    // return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div
          id="loader"
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center opacity-100 animate-scale-up z-50 bg-blue-400 text-white text-2xl font-abc font-sans"
        >
          {/* <div id="loader-inner" className="flex justify-center items-center"> */}
          take a deep breath
          {/* </div> */}
        </div>
      ) : (
        <>
          <Navigate to={"/basic"} />
        </>
      )}
    </>
  );
};

export default Layout;

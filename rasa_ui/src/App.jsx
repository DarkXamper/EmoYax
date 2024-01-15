import React from "react";
import lg from "./assets/EmoYax.png";
import lg1 from "./assets/Frame 4.svg";
import lg2 from "./assets/emoyax logo.svg";
import lg3 from "./assets/em.svg";
import bg1 from "./assets/rockWater.jpg";
import Layout from "./Layout";
import routers from "./routes/routers";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Basic from "./components/basic";
function App() {
  return (
    <>
      {/* <Outlet /> */}
      <Navigate to="/basic" replace={true} />
    </>
  );
}

export default App;

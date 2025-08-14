import React from "react";
import Header from "../common/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer.jsx";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

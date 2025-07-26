import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/UI/Navigation/Navigation";
import Layout from "../Components/UI/Layout/Layout";
const RootElement = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Layout.Footer />
    </>
  );
};

export default RootElement;

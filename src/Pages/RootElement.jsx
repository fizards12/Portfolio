import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Components/UI/Navigation/Navigation";
const RootElement = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navigation />}
      <Outlet />
    </>
  );
};

export default RootElement;

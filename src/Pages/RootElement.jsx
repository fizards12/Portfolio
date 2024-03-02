import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavList from "../Components/UI/Navigation/NavList";

const RootElement = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavList />}
      <Outlet />
    </>
  );
};

export default RootElement;

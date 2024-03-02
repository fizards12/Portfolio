import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/UI/Navigation/NavList";
import Logo from "../assets/logo.svg"
const RootElement = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && (
        <Nav>
          <Nav.Heading className={"flex"} icon={true}>
            <img src={Logo} alt="Diamond" />
            <span>Mahmoud Sameh</span>
          </Nav.Heading>
        </Nav>
        )}
      <Outlet />
    </>
  );
};

export default RootElement;

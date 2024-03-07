import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = ({ children, className }) => {
  return (
    <div className="flex justify-center absolute top-0 left-1/2 -translate-x-1/2 pt-10 w-full min-w-max">
      <nav
        className={`${classes.nav} rounded-full ${
          className || ""
        } flex justify-between items-center w-11/12`}
      >
        {children}
      </nav>
    </div>
  );
};

Nav.Heading = ({ children, className, ...props }) => {
  return (
    <h3 className={`${classes.heading} ${className || ""}`} {...props}>
      {children}
    </h3>
  );
};

Nav.NavLinks = ({ children, className, ...props }) => {
  return (
    <ul
      className={`list-none flex justify-between ${classes["nav-links"]} ${className || ""} flex`}
      {...props}
    >
      {children}
    </ul>
  );
};

Nav.Link = ({
  className,
  pendingClass,
  activeClass,
  children,
  style = {},
  ...props
}) => {
  return (
    <li style={style} className={`${className || ""}`}>
      <NavLink
        {...props}
        className={({ isActive, isPending }) =>
          `lnk ${
            isActive
              ? activeClass || "active"
              : isPending
              ? pendingClass || "pending"
              : ""
          }`
        }
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Nav;

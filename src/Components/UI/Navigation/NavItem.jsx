import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ className,pendingClass,activeClass, children, style = {}, ...props }) => {
  return (
    <li style={style} className={`${className || ""}`}>
      <NavLink
        {...props}
        className={({ isActive, isPending }) =>
          isActive
            ? activeClass || "active"
            : isPending
            ? pendingClass || "pending"
            : ""
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;

import React from "react";
import classes from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Nav = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-100px" }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: "-100px" }}
      className="flex justify-center absolute top-0 max-lg:pt-0 pt-10 w-full z-50"
    >
      <nav
        className={`${classes.nav} ${className || ""}
         flex justify-between items-center rounded-full`}
      >
        {children}
      </nav>
    </motion.div>
  );
};
Nav.Header = ({ children, className, ...props }) => {
  return <div className={className}>{children}</div>;
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
      className={`${className || ""}
      `}
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
  to,
  ...props
}) => {
  const { pathname } = useLocation();
  return (
    <motion.li
      whileHover={{ fontWeight: "var(--heavy-576)" }}
      transition={{ type: "spring" }}
      style={style}
      className="flex w-full"
    >
      <NavLink
        {...props}
        className={({ isActive, isPending }) =>
          `${classes.lnk} ${
            isActive
              ? activeClass || classes.active
              : isPending
              ? pendingClass || classes.pending
              : ""
          } 
          ${className || ""} w-full px-4 py-2`
        }
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </motion.li>
  );
};

export default Nav;

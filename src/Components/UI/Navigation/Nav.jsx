import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
const Nav = ({ children, className }) => {
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, translateY: "-100px" }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: "-100px" }}
        className="fixed bg-secondary-10/50 w-full z-10"
      >
          <nav
            className={`${className || ""} md:container flex justify-between mx-auto items-center`}
          >
            {children}
          </nav>
      </motion.div>
    </div>
  );
};
Nav.Header = ({ children, className, ...props }) => {
  return <div className={className}>{children}</div>;
};
Nav.Heading = ({ children, className, ...props }) => {
  return (
    <h3
      className={`${className || ""} text-white lg:text-h4-576 font-heavy-576 text-base font-["Source Sans 3", sans-serif]`}
      {...props}
    >
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
  return (
    <li
      style={style}
      className="flex w-full"
    >
      <NavLink
        {...props}
        className={({ isActive, isPending }) =>
          `text-white font-normal 
        max-md:hover:bg-secondary-7 md:text-lnk-md md:font-heavy-0 
        md:hover:text-secondary-7 
        transition-colors text-lnk-md ease-linear duration-150
         ${isActive
            ? activeClass || "md:!text-primary-6 max-md:!bg-primary-6 font-heavy-576"
            : isPending
              ? pendingClass || ""
              : ""
          } 
          ${className || ""} w-full px-4 py-2`
        }
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Nav;

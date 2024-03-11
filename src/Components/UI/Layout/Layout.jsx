import React from "react";
import classes from "./Layout.module.css";
const Layout = ({ children, className, ...props }) => {
  return (
    <div className={`${classes["layout"]} ${className} bg-repeat-y w-full flex flex-col items-center`}>
      {children}
    </div>
  );
};

export default Layout;

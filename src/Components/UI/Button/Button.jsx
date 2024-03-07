import React, { forwardRef } from "react";
import "./Button.css";
import { motion } from "framer-motion";
const Button = forwardRef(
  (
    { children, inverse, whileHover, mode = "fill", className, ...props },
    ref
  ) => {
    let btnClassName = `btn ${className || ""}`;

    btnClassName = inverse ? btnClassName + " btn-inverse" : btnClassName;
    return (
      <motion.button
        mode={mode}
        whileHover={
          whileHover || {
            scale: 1.3,
            transition: { type: "spring", stiffness: 300 },
          }
        }
        ref={ref}
        className={btnClassName}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

export default Button;

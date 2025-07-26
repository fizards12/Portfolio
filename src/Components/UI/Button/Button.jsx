import React, { forwardRef } from "react";
import { motion } from "motion/react";

const Button = forwardRef(
  (
    { children, whileHover, mode = "fill", className, ...props },
    ref
  ) => {
    let btnClassName = `btn btn-primary ${className || ""}`;
    if(mode === "outline") {
      btnClassName = `btn btn-outline ${btnClassName || ""}`
    } else if(mode === "text"){
      btnClassName = `btn btn-text ${btnClassName || ""}`
    }
    return (
      <motion.button
        mode={mode}
        whileHover={whileHover}
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 300 },
        }}
        ref={ref}
        className={btnClassName}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.LeftIcon = ({ Icon, ...props }) => {
  return Icon && <span {...props} key='left'><Icon /></span>;
};
Button.RightIcon = ({ Icon = null, ...props }) => {
  return Icon && (<span {...props} key='right'><Icon /></span>);
};

export default Button;

import React from "react";
import BackgroundImage from "../UI/BackgroundImage";
import BgDiamond from "../../assets/Diamond.svg";
import Background from "./Background";
import { motion } from "framer-motion";
const Layout = ({ classes, children }) => {
  return (
    <div className={`isolate ${classes.layout}`}>
      <Background className={classes.bg}>
        <motion.div
          style={{ skewX: "10deg" }}
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={{ scale: 1, borderRadius: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className=" max-xl:hidden"
        />
        <BackgroundImage
          src={BgDiamond}
          alt={"Diamond"}
          className={classes["bg-image"] + " max-xl:left-1/2"}
        />
      </Background>
      <div className={"flex align-items-center " + classes.container}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import BackgroundImage from "../UI/BackgroundImage";
import BgDiamond from "../../assets/Diamond.svg";
import Background from "./Background";
import { motion } from "motion/react";
const Layout = ({ children }) => {
  return (
    <div className={`isolate relative overflow-hidden`}>
      <Background className={`w-3/5 h-screen`}>
        <motion.div
          style={{ skewX: "10deg" }}
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={{ scale: 1, borderRadius: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className=" max-xl:hidden absolute top-0 left-1/2 h-full w-3/5 skew-x-[10deg] -z-[2] bg-white"
        />
        <BackgroundImage
          src={BgDiamond}
          alt={"Diamond"}
          className={"absolute top-1/2 left-0 h-[72%] w-auto -translate-x-1/2 -translate-y-1/2 -z-[3] max-xl:left-1/2"}
        />
      </Background>
      <div className={"flex align-items-center absolute top-0 left-0 w-screen h-screen overflow-hidden "}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

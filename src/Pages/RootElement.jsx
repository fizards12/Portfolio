import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Components/UI/Navigation/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import useWidthBreakPoint from "../Hooks/use-widthBreakPoint";
import { createPortal } from "react-dom";
import Button from "../Components/UI/Button/Button";
import { TfiMenuAlt } from "react-icons/tfi";
const RootElement = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const clickHandler = () => setShow(!show);
  const isInSize = useWidthBreakPoint("1024");
  return (
    <>
      <AnimatePresence>
        {location.pathname !== "/" && (show || !isInSize) && (
          <Navigation key="nav" onShow={clickHandler} />
        )}
      </AnimatePresence>
      {show &&
        isInSize &&
        createPortal(
          <div
            className="z-40 absolute top-0 left-0 w-full h-full bg-blue-950 bg-opacity-70 blur-3xl"
            onClick={() => setShow(false)}
          />,
          document.getElementById("backdrop")
        )}
      {!show && isInSize && (
        <div key={"open-button"} className="absolute top-0 right-0 m-5 z-40">
          <Button
            initial={{ opacity: 0, translateY: "-50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "-50px" }}
            mode={"text"}
            className={"p-0"}
            onClick={clickHandler}
          >
            <TfiMenuAlt className=" text-2xl" />
          </Button>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default RootElement;

import React, { useState } from "react";
import Nav from "./Nav";
import Logo from "../../../assets/logo.svg";
import Button from "../Button/Button";
import { MdClear } from "react-icons/md";
import { useLocation } from "react-router-dom";
import useWidthBreakPoint from "../../../Hooks/use-widthBreakPoint";
import { createPortal } from "react-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { AnimatePresence } from "motion/react";
const Navigation = ({ onShow }) => {
  return (
    <>
      <Nav className={`px-6 py-3 max-md:pb-6 gap-5 max-md:flex-col max-md:px-0`}>
        <Nav.Header className={"flex max-md:w-full items-center max-md:p-2"}>
          <Nav.Heading className={`flex gap-2 items-center max-md:w-full`}>
            <img className="w-12" src={Logo} alt="Diamond" />
            <span>Mahmoud Sameh</span>
          </Nav.Heading>
          <button
            className={"btn btn-ghost p-2 rounded-full max-md:flex hidden"}
            onClick={onShow}>
            <MdClear size={30} />
          </button>
        </Nav.Header>
        <Nav.NavLinks
          className={`justify-between list-none flex 
              max-md:flex-col 
              relative
              max-md:w-full max-md:before:w-full max-md:before:absolute max-md:before:top-0 max-md:before:h-1 max-md:before:bg-primary-7`}
        >
          <Nav.Link
            className={`max-md:py-3`}
            to="/about-me"
          >
            About
          </Nav.Link>
          <Nav.Link
            className={`max-md:py-3`}
            to="/skills"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            className={`max-md:py-3`}
            to="/portfolio"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className={`max-md:py-3`}
            to="/testimontials"
          >
            Testimontials
          </Nav.Link>
        </Nav.NavLinks>
        <Button className={"rounded-full btn btn-md"}>Let's Talk</Button>
      </Nav>
    </>
  );
};

const Navbar = ({ children, className, ...props }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const clickHandler = () => setShow(!show);
  const isInSize = useWidthBreakPoint("768");
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
            className="z-[2] absolute top-0 left-0 w-full h-full bg-blue-950 bg-opacity-70 blur-3xl"
            onClick={() => setShow(false)}
          />,
          document.getElementById("backdrop")
        )}
      {!show && isInSize && (
        <div key={"open-button"} className="fixed top-0 right-0 m-5 z-40">
          <Button
            initial={{ opacity: 0, translateY: "-50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "-50px" }}
            mode={"text"}
            className={"p-3 !bg-secondary-95/50 rounded-full"}
            onClick={clickHandler}
          >
            <TfiMenuAlt className="text-2xl" />
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import Nav from "./Nav";
import Logo from "../../../assets/logo.svg";
import Button from "../Button/Button";
const Navigation = ({ onShow }) => {
  return (
    <>
      <Nav
        className={`px-6 py-3 w-fit gap-5
            max-lg:flex-col 
            max-lg:items-start 
            max-lg:rounded-none 
            max-lg:w-full
            max-lg:px-0
            `}
      >
        <Nav.Header className={"flex max-lg:w-full"}>
          <Nav.Heading
            className={`flex gap-2 items-center
                max-lg:p-4 max-lg:w-full`}
          >
            <img className="w-12" src={Logo} alt="Diamond" />
            <span>Mahmoud Sameh</span>
          </Nav.Heading>
          <Button
            mode={"text"}
            className={"btn-lg max-lg:block hidden"}
            onClick={onShow}
          >
            X
          </Button>
        </Nav.Header>
        <Nav.NavLinks
          className={`justify-between list-none flex 
              max-lg:flex-col 
              relative
              max-lg:w-full 
              max-lg:before:w-full 
              max-lg:before:absolute 
              max-lg:before:top-0
              max-lg:before:h-0.5
            max-lg:before:bg-purple-950`}
        >
          <Nav.Link
            className={` 
                max-lg:py-3 
              max-lg:hover:bg-purple-950
                `}
            to="/about-me"
          >
            About
          </Nav.Link>
          <Nav.Link
            className={` 
                max-lg:py-3 
              max-lg:hover:bg-purple-950
                `}
            to="/skills"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            className={` 
                max-lg:py-3 
              max-lg:hover:bg-purple-950
                `}
            to="/skills"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className={` 
                max-lg:py-3 
              max-lg:hover:bg-purple-950
                `}
            to="/skills"
          >
            Testimontials
          </Nav.Link>
        </Nav.NavLinks>
        <div
          className={`px-3 flex
              max-lg:w-full
              max-lg:justify-center
              max-lg:py-2
              `}
        >
          <Button
            initial={{ backgroundColor: "var(--purple-9-5)" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--purple-8)",
              transition: { type: "spring", stiffness: 300 },
            }}
            className={"rounded-full btn-lg"}
          >
            Let's Talk
          </Button>
        </div>
      </Nav>
    </>
  );
};

export default Navigation;

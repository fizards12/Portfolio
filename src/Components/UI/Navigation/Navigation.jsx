import React from "react";
import Nav from "./Nav";
import Logo from "../../../assets/logo.svg";
import Button from "../Button/Button";
const Navigation = () => {
  return (
    <Nav className={"px-10 py-3"}>
      <Nav.Heading className={"flex gap-2 items-center min-w-fit"} icon={"true"}>
        <img className="w-12" src={Logo} alt="Diamond" />
        <span>Mahmoud Sameh</span>
      </Nav.Heading>
      <Nav.NavLinks className={"w-full px-5"}>
        <Nav.Link to="/about-me">About</Nav.Link>
        <Nav.Link to="/Skills">Skills</Nav.Link>
        <Nav.Link to="/Skills">Portfolio</Nav.Link>
        <Nav.Link to="/Skills">Testimontials</Nav.Link>
      </Nav.NavLinks>
      <div className="min-w-fit">
        <Button
          initial={{ backgroundColor: "var(--purple-9-5)" }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "var(--purple-8)",
            transition: { type: "spring", stiffness: 300 },
          }}
          className={"rounded-full"}
        >
          Let's Talk
        </Button>
      </div>
    </Nav>
  );
};

export default Navigation;

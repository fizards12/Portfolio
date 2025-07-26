import React from "react";
import classes from "./Layout.module.css";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Logo from "../../../assets/logo.svg";
const Layout = ({ children, className, ...props }) => {
  return (
    <div
      className={`${classes["layout"]} ${className} bg-repeat-y bg-cover w-full flex flex-col items-center gap-16`}
    >
      {children}
    </div>
  );
};

Layout.Header = ({
  title,
  children,
  img,
  imgClass,
  alt,
  className,
  ...props
}) => {
  return (
    <div
      className={`${className} relative flex bg-cover bg-center justify-center items-center w-full h-[800px]`}
      style={{ backgroundImage: `url(${img})` }}
      {...props}
    >
      <div>
        <h1 className={`text-dis-lg-576 font-heavy-1200 uppercase`}>{title}</h1>
      </div>
    </div>
  );
};
Layout.Body = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`${className} py-8 flex justify-center flex-col w-full px-6
      `}
      {...props}
    >
      {children}
    </div>
  );
};

Layout.Footer = () => {
  return (
    <div>
      <div className="w-full bg-secondary-10/70">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-6 gap-4 py-12 px-3">
          <div className="flex flex-col justify-center items-center text-center lg:col-span-2 col-span-3 text-h1-0 font-heavy-1200 text-primary-default gap-4">
            <h1>Mahmoud Sameh</h1>
            <h1>Software Developer</h1>
          </div>
          <div className="grid max-lg:grid-cols-1 grid-cols-2 justify-around lg:gap-4 gap-8 lg:col-span-4 col-span-3">
            <div className="flex flex-col text-center gap-10 items-center">
              <h4 className="text-gradient-1 max-w-max text-h3-1200 font-heavy-576">Chat With Me</h4>
              <div className="flex justify-center gap-4 *:transition-colors">
                <a href="#" className="text-blue-700 hover:text-blue-800">
                  <FaFacebook size={30} />
                </a>
                <a href="#" className="text-green-700 hover:text-green-800">
                  <FaWhatsapp size={30} />
                </a>
                <a href="#" className="text-blue-800 hover:text-blue-900">
                  <FaLinkedinIn size={30} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="btn text-secondary-95 text-h3-576 h-fit rounded-full bg-gradient-1">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex max-sm:flex-col justify-center items-center gap-2 bg-secondary-95 px-7 md:px-16 py-4">
        <img className="size-16" fill="white" src={Logo} alt="Diamond" />
        <div className="text-secondary-1 text-center text-lg">
          <span> ©2024 Copyright <strong className="text-primary-default">Portfolio</strong> All rights reserved.</span>
          <span>This template is made by  <strong className="text-primary-default">Mahmoud Sameh</strong>.</span>
        </div>
      </div>
    </div>
  )
}


export default Layout;

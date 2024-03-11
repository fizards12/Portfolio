import React from "react";
import BackgroundImage from "./BackgroundImage";

const Header = ({
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
      className={`${className} relative flex justify-center items-center w-full h-screen`}
      {...props}
    >
      <BackgroundImage
        className={imgClass + " h-full min-w-fit w-full"}
        src={img}
        alt={alt}
      />
      <div className=" absolute">
        <div className="flex relative justify-center">
          <h1 className="h-large absolute">{title}</h1>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Header;

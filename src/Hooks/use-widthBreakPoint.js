import { useEffect, useState } from "react";

const useWidthBreakPoint = (breakPoint) => {
  const currentWidth = window.innerWidth;
  const [isInSize, setIsSized] = useState(+currentWidth <= +breakPoint);
  useEffect(() => {
    const checkIsSized = () => {
      const currentWidth = window.innerWidth;
      if (+currentWidth <= +breakPoint) {
        setIsSized(true);
      } else {
        setIsSized(false);
      }
    };
    window.onresize = window.onload = checkIsSized;
    return () => {
      window.onresize = window.onload = () => {};
    };
  });

  return isInSize
};

export default useWidthBreakPoint;

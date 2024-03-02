import React from "react";
import developerImage from "../../assets/myFace.png";
import { AnimatePresence, motion } from "framer-motion";
const DeveloperImage = ({ className }) => {
  return (
    <AnimatePresence>
      <div className={className + " max-lg:h-full max-xl:right-1/2 max-xl:translate-x-1/2 w-fit"}>
        <div
          // initial={{ scale: 1.5, opacity: 0 }}
          // animate={{ scale: 1, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.8 }}
          className="h-full w-auto min-w-max"
        >
          <motion.img
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={developerImage}
            alt="Mahmoud Sameh"
            className=""
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default DeveloperImage;

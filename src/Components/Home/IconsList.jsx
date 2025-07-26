import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiAxios, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "motion/react";

const variants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};
const iconsList = [
  { id: 1, Icon: FaReact },
  { id: 2, Icon: SiRedux },
  { id: 3, Icon: SiAxios },
  { id: 4, Icon: BiLogoPostgresql },
  { id: 5, Icon: SiMongodb },
];
const IconsList = () => {
  return (
    <div className="absolute bottom-0 w-screen flex justify-center">
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ staggerChildren: 0.5, delayChildren: 1.5 }}
        className="flex text-primary-7 justify-between list-none py-5 w-2/3 max-w-6xl min-w-56"
      >
        {iconsList.map(({ id, Icon }) => (
          <motion.li
            whileHover={{
              scale: 1.3,
              transition: { type: "spring", stiffness: 300 },
            }}
            variants={variants}
            key={id}
          >
            <Icon className="text-7xl max-sm:text-4xl max-lg:text-6xl" />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default IconsList;

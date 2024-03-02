import React from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button/Button";
import { Form } from "react-router-dom";

const hidden = {
  opacity: 0,
  scale: 0,
};
const visible = {
  opacity: 1,
  scale: 1,
};

const Content = ({ classes }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ staggerChildren: 0.2, type: "spring" }}
      className=" w-1/2 flex flex-col items-center justify-center max-xl:w-screen"
    >
      <motion.h1
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 300 },
        }}
        variants={{ hidden, visible }}
        className={"h-large text-center " + classes.heading}
      >
        MAHMOUD SAMEH <br /> I am Software Developer
      </motion.h1>
      <Form method="POST">
        <Button
          variants={{ hidden, visible }}
          className={"flex align-center"}
          inverse
        >
          Start
        </Button>
      </Form>
    </motion.div>
  );
};
export default Content;

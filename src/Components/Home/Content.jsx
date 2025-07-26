import React from "react";
import { motion } from "motion/react";
import Button from "../UI/Button/Button";
import { Form } from "react-router-dom";
import GlassyContainer from "../UI/GlassyContainer";

const hidden = {
  opacity: 0,
  scale: 0,
};
const visible = {
  opacity: 1,
  scale: 1,
  transition: { staggerChildren: 0.2, when: "beforeChildren", type: "spring", stiffness:200 },
};

const Content = () => {
  return (
    <div className=" w-1/2 flex flex-col items-center justify-center max-xl:w-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{ hidden, visible }}
        className="max-sm:w-11/12 flex justify-center"
      >
        <GlassyContainer
          maxScreen="xl"
          className="flex flex-col items-center justify-center xl:!bg-[unset]"
        >
          <motion.h1
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            variants={{ hidden, visible }}
            className={"h-large text-center text-white"}
          >
            MAHMOUD SAMEH <br />I am Software Developer
          </motion.h1>
          <Form method="POST">
            <Button
              variants={{ hidden, visible }}
              className={"flex items-center btn-lg"}
              inverse
            >
              <span className="mx-2">Start</span>
            </Button>
          </Form>
        </GlassyContainer>
      </motion.div>
    </div>
  );
};
export default Content;

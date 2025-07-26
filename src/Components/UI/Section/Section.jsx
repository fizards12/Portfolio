import React from "react";
import { motion } from "motion/react";
const Section = ({ className, children, ...props },ref) => {
  return (
    <motion.article ref={ref} className={`${className} flex flex-col justify-center`} {...props}>
      {children}
    </motion.article>
  );
};

export const Heading = React.forwardRef(({ className = "", children, title, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={props.initial || { opacity: 0, x: 100 }}
      whileInView={props.whileInView || { opacity: 1, x: 0 }}
      transition={props.transition || { duration: 1.2, type: 'spring', stiffness: 75, damping: 30 }}
      viewport={props.viewport || { once: true, amount: 0.1 }}
      className={`${className} isolate relative *:!font-heavy-1200 flex justify-center items-end w-full uppercase p-3 py-16`}
      {...props}>
      <h1 className={`absolute w-fit -z-10 max-sm:hidden text-[90px] text-primary-7/50`}>{title}</h1>
      <h2 className={`h-large w-fit
        bg-clip-text text-fill-transparent bg-gradient-to-r from-pink-500 to-blue-500 
        max-sm:text-4xl`}>{title}</h2>
    </motion.div>
  );
});

export const Content = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <motion.div ref={ref} className={`${className}`} {...props}>
      {children}
    </motion.div>
  );
});

export default React.forwardRef(Section);

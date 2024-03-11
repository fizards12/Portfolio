import React from "react";
import classes from "./About.module.css";
import BackgroundImage from "../../Components/UI/BackgroundImage";
import AboutImage from "../../assets/photo1.png";
import Header from "../../Components/UI/Header";
import Layout from "../../Components/UI/Layout/Layout";
const About = () => {
  return (
    <Layout>
      <Header
        img={AboutImage}
        alt={"Mahmoud Sameh"}
        title={"About"}
        className={classes["about-header"]}
      />
      <div className={` container flex justify-center`}>
        <div
          className={`${classes["sec-heading"]} isolate relative flex justify-center items-center w-full uppercase`}
        >
          <h1 className={`w-fit absolute -z-10 -top-5`}>My Story</h1>
          <h2 className={`h-large w-fit`}>My Story</h2>
        </div>
      </div>
    </Layout>
  );
};

export const loader = () => {};

export default About;

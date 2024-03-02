import React, { useEffect } from "react";
import Button from "../../Components/UI/Button/Button";
import classes from "./Home.module.css";
import DeveloperImage from "../../Components/Home/DeveloperImage";
import Layout from "../../Components/Home/Layout";
import { motion, useAnimate } from "framer-motion";
import IconsList from "../../Components/Home/IconsList";
import Content from "../../Components/Home/Content";

const Home = () => {
  return (
    <Layout classes={classes}>
      <DeveloperImage className={classes["dev-image"]} />
      <Content classes={classes}/>
      <IconsList/>
    </Layout>
  );
};

export default Home;

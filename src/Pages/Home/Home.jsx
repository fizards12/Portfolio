import React, { useEffect } from "react";
import classes from "./Home.module.css";
import DeveloperImage from "../../Components/Home/DeveloperImage";
import Layout from "../../Components/Home/Layout";
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

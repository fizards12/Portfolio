import React from "react";
import DeveloperImage from "../../Components/Home/DeveloperImage";
import Layout from "../../Components/Home/Layout";
import IconsList from "../../Components/Home/IconsList";
import Content from "../../Components/Home/Content";

const Home = () => {
  return (
    <Layout>
      <DeveloperImage />
      <Content />
      <IconsList/>
    </Layout>
  );
};

export default Home;

import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { logo } from "./index.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage src="../images/icon.png" alt="logo" className={logo} />
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export default IndexPage;

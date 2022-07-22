import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { StaticImage } from "gatsby-plugin-image";
import { logo } from "../styles/index.module.css";

const IndexPage = () => {
  return (
    <DefaultLayout pageTitle="Home Page">
      <StaticImage src="../images/icon.png" alt="logo" className={logo} />
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </DefaultLayout>
  );
};

export default IndexPage;

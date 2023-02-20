import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import siteText from "./siteText.js";

const About = ({ lang }) => {
  return (
    <div id="about">
      <span className="splash-span">
        <img
          src={require("./logo-connex-lim.gif")}
          alt="gif logo of connexion limitée"
        />
        <span>
          <h2>{siteText[lang].presentation_title}</h2>
          <p>{siteText[lang].presentation}</p>
        </span>
      </span>
    </div>
  );
};

export default About;

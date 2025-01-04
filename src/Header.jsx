import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import siteText from "./siteText.js";

const Header = ({ lang }) => {
  return (
    <div className="title-section">
      <span id="title">
        <h1>Connexion Limitée // Limited Connection</h1>
      </span>
      <span id="title-menu">
        <span className="spacer-span"/>
        <div id="menu" role="navigation">
          <Link id="switch-lang" to={lang === "en" ? "/fr" : "/en"}>
            {siteText[lang].change_language}
          </Link>
        </div>
      </span>
    </div>
  );
};

export default Header;

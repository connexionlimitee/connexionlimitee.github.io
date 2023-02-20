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
        <span className="spacer-span">
          <a id="skip-nav" className="sr-only sr-only-focusable" href="#about">
            Skip to description
          </a>
          <a
            id="skip-members"
            className="sr-only sr-only-focusable"
            href="#members"
          >
            Skip to members
          </a>
          <a
            id="skip-proj"
            className="sr-only sr-only-focusable"
            href="#projects"
          >
            Skip to projects
          </a>
          <a
            id="skip-contact"
            className="sr-only sr-only-focusable"
            href="#footer"
          >
            Skip to contact
          </a>
        </span>
        <div id="menu" role="navigation">
          <Link id="switch-lang" to={lang === "en" ? "/fr" : "/en"}>
            {siteText[lang].change_language}
          </Link>
          <a href="#about">{siteText[lang].about}</a>
          <a href="#books">{siteText[lang].books}</a>
          <a href="#members">{siteText[lang].members}</a>
          <a href="#projects">{siteText[lang].projects}</a>
          <a href="#footer">{siteText[lang].contact}</a>
        </div>
      </span>
    </div>
  );
};

export default Header;

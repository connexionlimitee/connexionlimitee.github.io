import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import siteText from "./siteText.js";

const Friends = ({ lang }) => {
  return (
    <span className="column">
      <h2>{siteText[lang].nos_amis}</h2>
      <h4 className="author-title">
        <a href="http://revuepointdechute.fr/">Revue Point de Chute</a>
      </h4>
      <h4 className="author-title">
        <a href="https://www.jefklak.org/">Revue Jef Klak</a>
      </h4>
      <h4 className="author-title">
        <a href="https://fragile-revue.fr/">Revue Fragile</a>
      </h4>
      <h4 className="author-title">
        <a href="https://quarantine-university.tumblr.com/">
          Poems from a University Quarantine
        </a>
      </h4>
      <h4 className="author-title">
        <a href="https://doublechange.org/">Double Change</a>
      </h4>
    </span>
  );
};

export default Friends;

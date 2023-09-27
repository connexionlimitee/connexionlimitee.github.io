import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import siteText from "./siteText.js";

const Members = ({ lang }) => {
  return (
    <div className="description" id="members">
      <h2>{siteText[lang].active_members}</h2>
      <span>
        <span className="inline">
          <div className="member-bio">
            <h4>Shira Abramovich</h4>
            <p>{siteText[lang].shira_bio}</p>
          </div>
          <div className="member-bio">
            <h4>Camille Blanc</h4>
            <p>{siteText[lang].camille_bio}</p>
          </div>
          <div className="member-bio">
            <h4>Sidney Cadot-Sambosi</h4>
            <p>{siteText[lang].sidney_bio}</p>
          </div>
          <div className="member-bio">
            <h4>Lénaïg Cariou</h4>
            <p>{siteText[lang].lena_bio}</p>
          </div>

        </span>
      </span>
      <h2>{siteText[lang].past_members}</h2>
      <div className="member-bio">
        <h4>Nadia Wolff</h4>
        <p>{siteText[lang].nadia_bio}</p>
      </div>
    </div>
  );
};

export default Members;

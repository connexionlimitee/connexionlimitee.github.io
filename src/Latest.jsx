import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import siteText from "./siteText.js";

const Latest = ({ lang }) => {
  return (
    <div id="latest">
      <h2>{siteText[lang].actu}</h2>
      <p>
        <a
          href={
            "https://www.asymptotejournal.com/poetry/the-hand-of-the-hand-laura-vazquez/"
          }
        >
          {siteText[lang].actu_1}
        </a>
      </p>
      {/* <p>{siteText[lang].actu_2}</p>
          <p>{siteText[lang].actu_3}</p>
          <p>{siteText[lang].actu_4}</p> */}
      <h2>{siteText[lang].past}</h2>
      <p>
        <a href="https://cipmarseille.fr/evenement_fiche.php?id=1459">
          {siteText[lang].past_1}
        </a>
      </p>
      <p>
        <a href="https://poetesses.hypotheses.org/">{siteText[lang].past_2}</a>
      </p>
      <p>
        <a href="https://www.jefklak.org/">{siteText[lang].past_3}</a>
      </p>
      <p>
        <a href="https://fragile-revue.fr/la-lettre/6-82/">
          {siteText[lang].past_4}
        </a>
      </p>
    </div>
  );
};

export default Latest;
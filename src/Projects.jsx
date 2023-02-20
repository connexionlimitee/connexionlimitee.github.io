import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import siteText from "./siteText.js";

const Projects = ({ lang }) => {
  return (
    <>
      <h2>{siteText[lang].projects}</h2>
      <div className="two-column" id="projects">
        <div className="column" id="projects-fr">
          <h2>{siteText[lang].en_to_fr}</h2>
          <h3>{siteText[lang].pubs}</h3>
          <h4 className="author-title">
            Eleni Sikelianos,{" "}
            <a href="https://nightboat.org/book/what-i-knew/">What I Knew</a>
          </h4>
          <img
            src={require("./what-I-knew.jpg")}
            alt="Cover of Eleni Sikelianos's What I knew"
          />
          <p>{siteText[lang].eleni_1}</p>
          <p>{siteText[lang].eleni_2}</p>
          <p>{siteText[lang].eleni_3}</p>
          <p>{siteText[lang].eleni_4}</p>
          <h4 className="author-title">
            Mόnica de la Torre,{" "}
            <a href="http://www.jocaseria.fr/Livres/Fiche%20livre/happyend.html">
              The Happy End / All Welcome
            </a>
          </h4>
          <img
            src="http://www.jocaseria.fr/Livres/Fiche%20livre/happyend_files/debordements.jpg"
            alt="Cover of Mónica de la Torre's The Happy End/All Welcome"
          />
          <p>{siteText[lang].monica_1}</p>
          <p>{siteText[lang].monica_2}</p>
          <p>{siteText[lang].monica_3}</p>
          <p>{siteText[lang].monica_4}</p>
          <h4 className="author-title">
            Traduction d'Adrienne Rich sur la{" "}
            <a href="https://www.jefklak.org/">Revue Jef Klak</a>
          </h4>
          <h4 className="author-title">
            Interview sur la{" "}
            <a href="https://fragile-revue.fr/la-lettre/connexion-limitee-limited-connection/">
              Revue Fragile
            </a>
          </h4>
          <h4 className="author-title">
            Traduction du poète Chen Chen sur la{" "}
            <a href="https://fragile-revue.fr/la-lettre/didier-et-zizou-par-chen-chen/">
              Revue Fragile
            </a>
          </h4>
          <h4 className="author-title">
            Traduction de Mónica de la Torre sur la{" "}
            <a href="https://fragile-revue.fr/la-lettre/6-82/">Revue Fragile</a>
          </h4>
        </div>
        <div className="column" id="projects-en">
          <span>
            <h2>{siteText[lang].fr_to_en}</h2>
            <h3>{siteText[lang].books}</h3>
            <h4 className="author-title">
              Laura Vazquez,{" "}
              <a href="http://www.cheyne-editeur.com/index.php/prix-de-la-vocation/274-la-main-de-la-main">
                La Main de La Main
              </a>
            </h4>
            <img
              src="https://globaluserfiles.com/media/108961_3ebf0072c2e66ced883fa39d7e761ff42c9f5033.jpeg/v1/w_800,h_0,dpr_2/la-main-de-la-main.webp"
              alt="Cover of Laura Vazquez's La Main de La Main"
            />
            <p>{siteText[lang].laura_1}</p>
            <p>{siteText[lang].laura_2}</p>
            <p>{siteText[lang].laura_3}</p>
            <p>{siteText[lang].laura_4}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Projects;

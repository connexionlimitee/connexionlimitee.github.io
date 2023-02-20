import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import siteText from "./siteText.js";
import Header from "./Header";
import About from "./About";
import Latest from "./Latest";
import Books from "./Books";
import Members from "./Members";
import Friends from "./Friends";
import Projects from "./Projects";

function MainPage({ lang }) {
  return (
    <div className="app-page">
      <Header lang={lang} />
      <div className="main">
        <About lang={lang} />
        <Books lang={lang} />
        <Latest lang={lang} />
        <div className="quote-div">
          <p>“Language is the seed of possibility.”</p>
          <p className="right-align">–Mónica de la Torre</p>
        </div>
        <Members lang={lang} />
        <div className="quote-div">
          <p className="left-align">“On se fait une p'tite...pause Linguée?”</p>
          <p className="right-align">
            Traduction: “Il nous faut encore du café.”
          </p>
        </div>
        <Projects lang={lang} />
        <span className="two-column">
          <Friends lang={lang} />
          <div className="quote-div">
            <p className="left-align">What I am I cannot say.</p>
            <p className="quote-attribution">- Éleni Sikelianos</p>
          </div>
        </span>
      </div>
      <div id="footer">
        <h3>{siteText[lang].contact}</h3>
        <p>
          <a href="mailto:connexionlimitee@gmail.com">
            connexionlimitée@gmail.com
          </a>
        </p>
        <div>
          <p>
            {siteText[lang].site_elabore}
            <a href="https://shiraab.github.io/contact.html">
              {siteText[lang].son_contact}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

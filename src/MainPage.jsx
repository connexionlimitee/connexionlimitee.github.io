import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import siteText from './siteText.js';

function MainPage(props) {
  return (
    <div className='app-page'>
      <div className='title-section'>


        <span id="title">
          <h1>Connexion Limitée // Limited Connection</h1>
        </span>
        <span id="title-menu">
        <span className='spacer-span'>
          <a id="skip-nav" className="sr-only sr-only-focusable" href="#about">Skip to description</a>
          <a id="skip-members" className="sr-only sr-only-focusable" href="#members">Skip to members</a>
          <a id="skip-proj" className="sr-only sr-only-focusable" href="#projects">Skip to projects</a>
          <a id="skip-contact" className="sr-only sr-only-focusable" href="#footer">Skip to contact</a>
        </span>
        <div id="menu" role="navigation">
          <Link id='switch-lang' to={props.lang === 'en' ? '/fr' : '/en'}>{siteText[props.lang].change_language}</Link>
          <a href="#about">{siteText[props.lang].about}</a>
          <a href="#members">{siteText[props.lang].members}</a>
          <a href="#projects">{siteText[props.lang].projects}</a>
          <a href="#footer">{siteText[props.lang].contact}</a>
        </div>
      </span>
      </div>
      <div className="main">
        <div id="about">
            <span className='splash-span'>
            <img src={require("./logo-connex-lim.gif")} alt="gif logo of connexion limitée"/>
              <span>
              <h2>{siteText[props.lang].presentation_title}</h2>
              <p>
              {siteText[props.lang].presentation}
              </p>
              </span>
            </span>
        </div>
        <div id="splash-announcement">
          <a href="http://www.jocaseria.fr/Livres/Fiche%20livre/happyend.html"><img src="http://www.jocaseria.fr/Livres/Fiche%20livre/happyend_files/debordements.jpg" alt="Cover of Mónica de la Torre's The Happy End/All Welcome"/></a>
          <h2>Notre traduction de <i>The Happy End/Bienvenue à Tous</i> <a href="http://www.jocaseria.fr/Livres/Fiche%20livre/happyend.html">paraît chez Joca Seria!</a></h2>
        </div>
        <div id="latest">
          <h2>{siteText[props.lang].actu}</h2>
          <p>{siteText[props.lang].actu_1}</p>
          <p>{siteText[props.lang].actu_2}</p>
          <p>{siteText[props.lang].actu_3}</p>
          <p>{siteText[props.lang].actu_4}</p>
          <h2>{siteText[props.lang].past}</h2>
          <p><a href='https://cipmarseille.fr/evenement_fiche.php?id=1459'>{siteText[props.lang].past_1}</a></p>
          <p><a href='https://poetesses.hypotheses.org/'>{siteText[props.lang].past_2}</a></p>
          <p><a href="https://www.jefklak.org/">{siteText[props.lang].past_3}</a></p>
          <p><a href="https://fragile-revue.fr/la-lettre/6-82/">{siteText[props.lang].past_4}</a></p>
        </div>
        <div className="quote-div">
          <p>“Language is the seed of possibility.”</p>
          <p className="right-align">–Mónica de la Torre</p>
        </div>
        <div className='description' id="members">
          <h2>{siteText[props.lang].members}</h2>
          <span className='inline'>
            <div className='member-bio'>
              <h4>Shira Abramovich</h4>
              <p>
                {siteText[props.lang].shira_bio}
              </p>
            </div>
            <div className='member-bio'>
              <h4>Camille Blanc</h4>
              <p>
                {siteText[props.lang].camille_bio}
              </p>
            </div>
            <div className='member-bio'>
              <h4>Lénaïg Cariou</h4>
              <p>
                {siteText[props.lang].lena_bio}
              </p>
            </div>
            <div className='member-bio'>
              <h4>Nadia Wolff</h4>
              <p>
              {siteText[props.lang].nadia_bio}
            </p>
            </div>
          </span>
        </div>
        <div className="quote-div">
          <p className="left-align">“On se fait une p'tite...pause Linguée?”</p>
          <p className="right-align">Traduction: “Il nous faut encore du café.”</p>
        </div>
        <h2>
          {siteText[props.lang].projects}
        </h2>
        <div className='two-column' id="projects">
          <div className='column' id="projects-fr">
          <h2>
            {siteText[props.lang].en_to_fr}
          </h2>
          <h3>{siteText[props.lang].pubs}</h3>
            <h4 className='author-title'>Mόnica de la Torre, <a href="http://www.jocaseria.fr/Livres/Fiche%20livre/happyend.html">The Happy End / All Welcome</a></h4>
            <img src="http://www.jocaseria.fr/Livres/Fiche%20livre/happyend_files/debordements.jpg" alt="Cover of Mónica de la Torre's The Happy End/All Welcome"/>
            <p>{siteText[props.lang].monica_1}</p>
            <p>{siteText[props.lang].monica_2}</p>
            <p>{siteText[props.lang].monica_3}</p>
            <p>{siteText[props.lang].monica_4}</p>
            <h4 className='author-title'>Traduction d'Adrienne Rich sur la <a href="https://www.jefklak.org/">Revue Jeff Klak</a></h4>
            <h4 className='author-title'>Interview sur la <a href="https://fragile-revue.fr/la-lettre/connexion-limitee-limited-connection/">Revue Fragile</a></h4>
            <h4 className='author-title'>Traduction du poète Chen Chen sur la <a href="https://fragile-revue.fr/la-lettre/didier-et-zizou-par-chen-chen/">Revue Fragile</a></h4>
            <h4 className='author-title'>Traduction de Mónica de la Torre sur la <a href="https://fragile-revue.fr/la-lettre/6-82/">Revue Fragile</a></h4>
            <h3>{siteText[props.lang].ongoing_projects}</h3>
            <h4 className='author-title'>Eleni Sikelianos, <a href="https://nightboat.org/book/what-i-knew/">What I Knew</a></h4>
            <img src={require("./what-I-knew.jpg")} alt="Cover of Eleni Sikelianos's What I knew"/>
            <p>{siteText[props.lang].eleni_1}</p>
            <p>{siteText[props.lang].eleni_2}</p>
            <p>{siteText[props.lang].eleni_3}</p>
            <p>{siteText[props.lang].eleni_4}</p>
            
          </div>
          <div className='column' id="projects-en">
            <span>
            <h2>
              {siteText[props.lang].fr_to_en}
            </h2>
            <h3>{siteText[props.lang].books}</h3>
            <h4 className='author-title'>Laura Vazquez, <a href="http://www.cheyne-editeur.com/index.php/prix-de-la-vocation/274-la-main-de-la-main">La Main de La Main</a></h4>
            <img src="http://www.cheyne-editeur.com/images/vocation/La%20Main%20de%20la%20main.jpg" alt="Cover of Laura Vazquez's La Main de La Main"/>
            <p>{siteText[props.lang].laura_1}</p>
            <p>{siteText[props.lang].laura_2}</p>
            <p>{siteText[props.lang].laura_3}</p>
            <p>{siteText[props.lang].laura_4}</p>
            </span>
            <div className="quote-div">
              <p className="left-align">What I am I cannot say.</p>
              <p className="quote-attribution">- Éleni Sikelianos</p>
            </div>
            <span>
              <h2>{siteText[props.lang].nos_amis}</h2>
              <h4 className='author-title'><a href="http://revuepointdechute.fr/">Revue Point de Chute</a></h4>
              <h4 className='author-title'><a href="https://www.jefklak.org/">Revue Jeff Klak</a></h4>
              <h4 className='author-title'><a href="https://fragile-revue.fr/">Revue Fragile</a></h4>
              <h4 className='author-title'><a href="https://quarantine-university.tumblr.com/">Poems from a University Quarantine</a></h4>
              <h4 className='author-title'><a href="https://doublechange.org/">Double Change</a></h4>
            </span>
          </div>
        </div>
      </div>
      <div id="footer">
        <h3>{siteText[props.lang].contact}</h3>
        <p><a href="mailto:connexionlimitee@gmail.com">connexionlimitée@gmail.com</a></p>
          <div>
            <p>{siteText[props.lang].site_elabore}<a href="https://shiraab.github.io/contact.html">{siteText[props.lang].son_contact}</a></p>
          </div>
      </div>
    </div>
  );
}

export default MainPage;

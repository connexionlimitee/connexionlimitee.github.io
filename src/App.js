import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app-page'>
      <div className='title-section'>


        <span id="title">
          <h1>Connexion Limitée</h1> <h1>//</h1> <h1>Limited Connection</h1>
        </span>
        <span id="title-menu">
        <a id="skip-nav" className="sr-only sr-only-focusable" href="#about">Skip to description</a>
        <a id="skip-members" className="sr-only sr-only-focusable" href="#members">Skip to members</a>
        <a id="skip-proj" className="sr-only sr-only-focusable" href="#projects">Skip to projects</a>
        <a id="skip-contact" className="sr-only sr-only-focusable" href="#contact-container">Skip to contact</a>
        <div id="menu" role="navigation">
          <a className="#about" href="./index.html">About</a>
          <a href="#members">Members</a>
          <a href="#projects">Projects</a>
          <a href="#footer">Contact</a>
        </div>
      </span>
      </div>
      <div className="main">
        <div className='two-column'>



        </div>
        <div className='two-column' id="about">
          <a className="sr-only sr-only-focusable skip-column" href="about-fr">Présentation française</a>
          <a className="sr-only sr-only-focusable skip-column" href="about-en">English description</a>
          <div className='column' id="about-fr">
            <h2>Collectif de traduction littéraire Franco-Américain</h2>
            <p>
            Le collectif <b>Connexion Limitée / Limited Connection</b> est né d’une rencontre transatlantique entre Providence (Etats-Unis) et Paris (France) en septembre 2019, d’un désir commun de quatre jeunes poètes de contribuer à ouvrir le champ poétique étatsunien ultra-contemporain à la France et réciproquement. Nous sommes deux français.e.s et deux américain.e.s, qui tou.te.s ont vécu dans l’autre pays, et étudié l’art et la littérature. Nous représentons des identités raciales et sexuelles diverses. Des valeurs nous rassemblent, au-delà de notre passion commune pour la poésie et le travail de la langue ; parmi elles, l’attention particulière à faire connaître par nos traductions des poètes qui, pour des raisons économiques ou politiques, nous paraissent moins bien visibilisé.e.s par le monde éditorial. Nous avons également soin de travailler en accord et en dialogue avec les auteur.rices que nous avons choisi de traduire. La dimension collective de nos traductions est au coeur de notre projet, puisqu’elle donne lieu à une traduction enrichie par nos savoirs et expériences divers.
            </p>
          </div>
          <div className='column' id="about-en">
            <h2>French-American literary translation collective</h2>
            <p>
              <b>Limited Connection Collective/Connexion Limitée</b> is a transatlantic translation collective founded in 2019 out of a desire to open contemporary US-American poetics to the French literary scene and vice-versa. Currently, the collective is based both in Paris and in Providence, RI, comprising two American and two French poets. All four members have lived in both countries, and all have their own art and literary practices. One of the collective’s primary goals is to translate underrepresented poets in literary translation, and to work in conversation with the poets they translate. They have translated works by poets such as Mónica de la Torre and Eleni Sikelianos into French; Laura Vasquez’s <i>The Hand of the Hand</i> is their first translation from French to English.
              The name, Limited Connection, comes from a translation residency in rural Normandy, where cell service was extremely limited. Even after returning to city life, the name stuck, reflecting the members’ belief in translation as a form of limited connection, and in the possibility of creating symbiotic worlds and communities.
            </p>
          </div>
        </div>
        <div className="quote-div">
          <p>“Language is the seed of possibility.”</p>
          <p className="right-align">–Mónica de la Torre</p>
        </div>
        <div className='description'>
        <div className="two-column" id="members">
          <div className="column">
            <h2>Les Traducteur.trices</h2>
          </div>
          <div className="column">
            <h2>The Translators</h2>
          </div>
        </div>
          <span className='inline'>
            <div className='member-bio'>
              <h4>Shira Abramovich</h4>
              <p>
                Shira reçoit son premier livre
                en français à l&#39;âge de trois mois, lors d’un voyage en France. Ses poèmes en anglais ont été
                publiés dans les revues littéraires Crashtest, Polyphony HS et The Adroit Journal. Son oeuvre
                poétique a également reçu les prix Claudia Ann Seaman et Edwin M. Honig. Elle est
                actuellement étudiante à l’université de Brown (Rhode Island), où elle étudie l’intersection
                entre les langues, les langages écrits, et l’informatique. Elle est très satisfaite de son prénom,
                qui signifie “poésie” en hébreu !
              </p>
            </div>
            <div className='member-bio'>
              <h4>Camille Blanc</h4>
              <p>
                Camille est une poète française qui
                préfère écrire en anglais depuis qu’elle a découvert la poésie américaine en 2012. Elle a fait
                ses études de littérature à l’université de Yale (Connecticut) avant d’enseigner l’anglais en
                lycée à Baltimore (Maryland). De retour en France, elle entame sa carrière de comédienne et
                est en parallèle traductrice de travaux de recherche en sociologie et politique de drogues.
                Outre la poésie, Camille travaille dans une association qui défend les droits des usagers de
                drogues, une double vie qui a tendance à susciter la curiosité.
              </p>
            </div>
            <div className='member-bio'>
              <h4>Lénaïg Cariou</h4>
              <p>
              Lénaïg est une poète et
  chercheuse française. Durant ses études de littératures à l’Ecole Normale Supérieure (Paris),
  Lénaïg a pu enseigner un an aux Etats-Unis en tant que lectrice de littérature française à Johns
  Hopkins University (Maryland) et a séjourné un semestre à Providence (Rhode Island) où elle
  a pu rencontrer de nombreux.ses poètes et lire abondamment de la poésie américaine. De
  retour en France, elle obtient l’agrégation de Lettres Modernes puis commence un doctorat de
  poésie contemporaine à l’Université Paris 8 Vincennes Saint-Denis. Ses poèmes ont été
  publiés dans les revues Lichen, Fragile, The Goose… et elle est cocréatrice de la revue de
  poésie Point de Chute. Elle fait également des portraits radiophoniques de femmes* pour
  Radio Campus Paris. Elle saute sur toutes les occasions qui lui sont présentées pour voyager
  hors de Paris et à l’étranger, le sac sur le dos, un livre de poésie et un carnet en poche...
              </p>
            </div>
            <div className='member-bio'>
              <h4>Nadia Wolff</h4>
              <p>
              Nadia est une artiste, designer,
  et écrivain.e haïtien.ne-américain.e. L’oeuvre de Nadia – qui prend des formes aussi diverses
  que des installations, des oeuvres textiles, des performances artistiques, de la lithographie, et
  des interventions poétiques – explore l’esthétique, l’histoire, et l’incarnation
  queer/noires/caribéennes à travers le prisme de l’intimité. Nadia vit à Providence (Rhode
  Island) où elle étudie le design textile à la Rhode Island School of Design et la création à
  l’université de Brown. La première exposition en solo de Nadia s’est produite au Bay Parc de
  Miami ; ses oeuvres ont aussi été exposées lors de l’Art Basel de Miami ; au Franklin Street
  Works ; au Granoff Center for the Creative Arts ; au RISD Museum ; à l’Ori Art Gallery à
  Portland ; à la Rubell Family Collection et à la National YoungArts Foundation à Miami ; et
  au John F. Kennedy Center à Washington, D.C.
            </p>
            </div>
          </span>
        </div>
        <div className="quote-div">
          <p className="left-align">“On se fait une p'tite...pause Linguée?”</p>
          <p className="right-align">Traduction: “Il nous faut encore de café.”</p>
        </div>
        <div className='two-column' id="projects">
          <a className="sr-only sr-only-focusable skip-column" href="#projects-fr">Projets</a>
          <a className="sr-only sr-only-focusable skip-column" href="#projects-en">Skip to English projects</a>
          <div className='column' id="projects-fr">
            <h2>
              Nos Projets
            </h2>
            <h3>Livres</h3>
            <h4 className='author-title'>Mόnica de la Torre, <a href="https://uglyducklingpresse.org/publications/the-happy-end-all-welcome/">The Happy End / All Welcome</a></h4>
            <img src={require("./happy-end-all-welcome.jpg")} alt="Cover of Mónica de la Torre's The Happy End/All Welcome"/>
            <p>
            C’est une rencontre avec Mónica de la Torre à New York qui a donné naissance au
  désir de traduire son oeuvre. Notre traduction s’est construite collectivement et en dialogue
  avec la poète au cours de l’automne 2019.</p>
  <p>L’oeuvre de Mónica de la Torre se construit parallèlement en espagnol et en anglais,
  elle n’a toutefois pas encore été traduite en français ; seuls quelques poèmes ont été traduits
  par Olivier Brossard à l’occasion d’une lecture qu’elle a donnée à Paris le 4 Juillet 2019 (dans
  le cadre de la série de lectures bilingues Double Change).</p>
  <p>L’oeuvre hybride de Mónica de la Torre s’inspire de productions artistiques diverses,
  des arts décoratifs à la vidéo en passant par la performance. À l’intersection entre deux
  cultures, elle joue avec la matérialité de la langue et les possibilités polysémiques de la
  rencontre entre divers vocabulaires et contextes d’expression. Au centre de The Happy End /
  All Welcome, le motif du fauteuil, à première vue anodin, cristallise diverses intentions
  poétiques : la prégnance de la référence au design (le texte est truffé d’ ekphraseis ), et
  l’évocation ironique au monde du travail en entreprise (le fauteuil est tantôt celui du cadre à
  sa table de travail, tantôt celui de l’entretien d’embauche). La langue poétique de Mónica de
  la Torre dans ce recueil oscille entre plusieurs univers : celui de la critique d’art, de la
  publicité et du monde managérial ; la poète s’en empare avec humour et les juxtapose de
  manière hétéroclite, pour mettre en évidence leur étrangeté et leur absurdité. En ressort un
  portrait grinçant du monde capitaliste et productiviste.</p>
  <p>Le monde dont se joue Mónica de la Torre dans The Happy End / All Welcome, s’il s’ancre dans un contexte nord-américain, est bel est bien le nôtre : d’où notre désir de faire
  découvrir ce recueil à un lectorat francophone.
            </p>
            <h4 className='author-title'>Eleni Sikelianos, <a href="https://nightboat.org/book/what-i-knew/">What I Knew</a></h4>
            <img src={require("./what-I-knew.jpg")} alt="Cover of Eleni Sikelianos's What I knew"/>
            <p>
            Parce qu’elle est amoureuse de la France et enseigne la création littéraire à Providence
  aux Etats-Unis, nos rencontres avec Eleni Sikelianos furent multiples. Son enthousiasme, ses
  idées féministes et écologistes et la singularité de sa recherche poétique de cette poète
  étatsunienne d’origine grecque nous ont convaincues de traduire, avec son accord, son dernier
  recueil What I knew.
  </p>
  <p>
  Les liens entre Eleni Sikelianos et la France sont étroits et anciens : elle s’y rend
  régulièrement pour des lectures (dans le cadre de la série Double Change, du festival
  Littérature en bords de mer, ou encore Littérature au Centre au printemps 2021), et plusieurs
  de ses livres y ont déjà été traduits (Le poème Californie, Animale Machine).
  </p>
  <p>
  Dans <i>What I knew</i>, Eleni Sikelianos renoue avec la veine épique qui caractérisait déjà
  <i>The California Poem</i>, pour proposer une réflexion nouvelle sur le caractère éphémère de la
  connaissance. Elle y énumère ses souvenirs hétéroclites et disparates, les paroles qu’elle a lues
  ou entendues, au hasard des livres et des chemins, ses réflexions sur l’urgence écologique, ses
  désirs de femme. Derrière la voix, puissante, de la poète, s’élève donc une multiplicité
  d’autres voix, d’autres êtres, derrière qui elle s’efface parfois, ou dont elle se fait la porte-
  parole, attestant du paysage d’une époque, et tout particulièrement des dérèglements de celle-
  là.
  </p>
  <p>
  Proposer au lectorat francophone une traduction de What I knew semble donc d’autant
  plus naturel que l’œuvre d’Eleni Sikelianos a déjà sa place dans les rayons poésie des
  librairies francophones.
            </p>
            <h3>Publications en ligne</h3>
            <h4 className='author-title'>Interview sur la <a href="https://fragile-revue.fr/la-lettre/connexion-limitee-limited-connection/">Revue Fragile</a></h4>
            <h4 className='author-title'>Traductions sur la <a href="">Revue Fragile</a></h4>
          </div>
          <div className='column' id="projects-en">
            <span>
            <h2>Projects</h2>
            <h3>Books</h3>
            <h4 className='author-title'>Laura Vazquez, <a href="http://www.cheyne-editeur.com/index.php/prix-de-la-vocation/274-la-main-de-la-main">La Main de La Main</a></h4>
            <img src="http://www.cheyne-editeur.com/images/vocation/La%20Main%20de%20la%20main.jpg" alt="Cover of Laura Vazquez's La Main de La Main"/>
            <p>
            Our translation of Laura Vazquez's text arose from Lénaïg's discovery of the text at the L'Hydre bookstore in the mille têtes neighborhood
            of Marseille, just before quarantine began. With the poet's consent, Shira and Lénaïg began whittling away at a new translation during
            that strange time...
            </p>
            <p>
            Laura Vazquez is a poet from the south of France who, over the past several years, has developed a broad and varied body of work,
            from poetry to performance by way of song (with the band Tsuku) and the literary journal Muscle.
            </p>
            <p>
            In <i>La Main de la Main</i>, Vazquez deftly weaves a subaltern world at the intersection of the poetic and the grotesque.
             Where is the line between our everyday troubles, our things, and the ecosystem in which we live?
             Vazquez's language, deceptively simple at first glance, exposes the subtle cracks in everyday speech to reveal their
             uncanny interior.
            </p>
            <p>
            Never before translated into English, Laura Vazquez herself publishes translations into
            French from a broad spectrum of other languages. We believe her work deserves an English
            readership, if only to put a strange glint in their eyes...
            </p>
            </span>
            <div className="quote-div">
              <p className="left-align">“Tu comprends, n'est-ce pas?”</p>
              <p className="right-align">“Bien sûr que je comprends.”</p>
              <p className="quote-attribution">- Une carte postale que Léna a envoyé à Shira</p>
            </div>
            <span>
              <h2>If you like what we do, check out...</h2>
              <h4 className='author-title'><a href="http://revuepointdechute.fr/">Revue Point de Chute</a></h4>
              <h4 className='author-title'><a href="https://fragile-revue.fr/">Revue Fragile</a></h4>
              <h4 className='author-title'><a href="https://quarantine-university.tumblr.com/">Poems from a University Quarantine</a></h4>
              <h4 className='author-title'><a href="https://doublechange.org/">Double Change</a></h4>
            </span>
          </div>
        </div>
      </div>
      <div id="footer">
        <h3>Contact(e):</h3>
        <p><a href="mailto:connexionlimitee@gmail.com">connexionlimitée@gmail.com</a></p>
        <div className='two-column'>
          <div className='column'>
            <p>C'est Shira qui a écrit ce site. Si vous auriez de questions ou des suggestions pour elle, <a href="https://shiraab.github.io/contact.html">contactez-la.</a></p>
          </div>
          <div className='column'>
            <p>Shira made this site. If you have any requests or complaints, <a href="https://shiraab.github.io/contact.html">contact her.</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-page'>
      <div className='title-section'>

        <h1 className='title-text massive fr'>Collectif</h1>
        <h1 className='title-text fr'>Connexion Limitée</h1>
        <span className='divider'/>
        <h1 className='title-text en'>Limited Connection</h1>
        <h1 className='title-text massive en'>Collective</h1>

      </div>
      <div className='two-column'>
        <h2 className='column'>collectif de traduction littéraire franco-américain</h2>
        <h2 className='column'>french-american literary translation collective</h2>
      </div>
      <div className='description'>
        <h3>connexionlimitee [à / at] gmail [.] com</h3>
      </div>
      <span className='divider'/>
      <div className='two-column'>
        <div className='column'>
          <h2>Présentation</h2>
          <p>
          Le collectif <b>Connexion Limitée / Limited Connection</b> est né d’une rencontre transatlantique entre Providence (Etats-Unis) et Paris (France) en septembre 2019, d’un désir commun de quatre jeunes poètes de contribuer à ouvrir le champ poétique étatsunien ultra-contemporain à la France et réciproquement. Nous sommes deux français.e.s et deux américain.e.s, qui tou.te.s ont vécu dans l’autre pays, et étudié l’art et la littérature. Nous représentons des identités raciales et sexuelles diverses. Des valeurs nous rassemblent, au-delà de notre passion commune pour la poésie et le travail de la langue ; parmi elles, l’attention particulière à faire connaître par nos traductions des poètes qui, pour des raisons économiques ou politiques, nous paraissent moins bien visibilisé.e.s par le monde éditorial. Nous avons également soin de travailler en accord et en dialogue avec les auteur.rices que nous avons choisi de traduire. La dimension collective de nos traductions est au coeur de notre projet, puisqu’elle donne lieu à une traduction enrichie par nos savoirs et expériences divers.
          </p>
          <h2>Nous sommes:</h2>
        </div>
        <div className='column'>
          <h2>About</h2>
          <p>
            <b>Limited Connection Collective/Connexion Limitée</b> is a transatlantic translation collective founded in 2019 out of a desire to open contemporary US-American poetics to the French literary scene and vice-versa. Currently, the collective is based both in Paris and in Providence, RI, comprising two American and two French poets. All four members have lived in both countries, and all have their own art and literary practices. One of the collective’s primary goals is to translate underrepresented poets in literary translation, and to work in conversation with the poets they translate. They have translated works by poets such as Mónica de la Torre and Eleni Sikelianos into French; Laura Vasquez’s <i>The Hand of the Hand</i> is their first translation from French to English.
            The name, Limited Connection, comes from a translation residency in rural Normandy, where cell service was extremely limited. Even after returning to city life, the name stuck, reflecting the members’ belief in translation as a form of limited connection, and in the possibility of creating symbiotic worlds and communities.
          </p>
          <h2>Our current members are:</h2>
        </div>
      </div>
      <div className='description divider-bottom'>
        <span className='inline'>
          <p>Shira Abramovich</p>
          <p>Camille Blanc</p>
          <p>Lénaïg Cariou</p>
          <p>Nadia Wolff</p>
        </span>
      </div>
      <div className='two-column divider-bottom'>
        <h2 className='column'>Ce site est en cours de construction. Revenez bientôt !</h2>
        <h2 className='column'>This site is under construction. Check back soon!</h2>
      </div>
    </div>
  );
}

export default App;

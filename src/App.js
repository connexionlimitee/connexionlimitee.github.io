import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage.jsx';

function App() {
  let lang = navigator.language;
  if (lang.length > 2) {
    lang = lang.slice(0, 2);
  }
  const redirectstr = "/" + lang;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/en">
          <MainPage lang="en"/>
        </Route>
        <Route exact path="/fr">
          <MainPage lang="fr"/>
        </Route>
        <Route exact path="/">
          {
            lang === "en" || lang === "fr" ?
            <Redirect to={redirectstr}/>
            :
              <div className="mainpage-button-container">
                <h1>Connexion Limitée</h1>
                <h2>Veuillez selectionner votre langue // Please select your language</h2>
                <span>
                  <Link className="mainpage-button" to="/fr">Français</Link>
                  <Link className="mainpage-button" to="/en">English</Link>
                </span>
              </div>
          }
        </Route>
        <Route path="/*">
          <Redirect to='../public/index.html'/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

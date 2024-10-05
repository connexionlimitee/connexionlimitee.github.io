import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import splashText from "./splashText";

const Splash = ({lang, option}) => {

  const renderLabel = (option) => {
    switch(option) {
      case 'adrienne_audio':
        return <p>{splashText[lang]['adrienne_audio']}</p>
      default: return null;
    }
  }

  const renderContent = (option) => {
    switch(option) {
      case 'adrienne_audio':
        return(
        <audio controls>
          <source src={require("./media/gruenenwald_adrienne.mp3")} type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
        )
      default:
        return(<iframe
          title="Lecture avec Mónica de la Torre"
          width="560" height="315"
          src="https://www.youtube.com/embed/2lZZnmC3iR4?si=K2ysOMTZ5RR9SFOZ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{"margin": "auto"}}
        />)
    }
  }

  return (
    <div id="splash">
      <span className="splash-span">
        {renderLabel(option)}
        {renderContent(option)}
      </span>
    </div>
  );
};

export default Splash;

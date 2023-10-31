import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Splash = ({ lang }) => {
  return (
    <div id="splash">
      <span className="splash-span">
        <iframe
          title="Lecture avec Mónica de la Torre"
          width="560" height="315"
          src="https://www.youtube.com/embed/2lZZnmC3iR4?si=K2ysOMTZ5RR9SFOZ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{"margin": "auto"}}
        />
      </span>
    </div>
  );
};

export default Splash;

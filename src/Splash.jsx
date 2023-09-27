import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Splash = ({ lang }) => {
  return (
    <div id="splash">
      <span className="splash-span">
        <iframe
          title="Lecture avec Mónica de la Torre"
          width="600"
          height="350"
          src="https://www.youtube.com/watch?v=2lZZnmC3iR4"
          style={{"margin": "auto"}}
        />
      </span>
    </div>
  );
};

export default Splash;

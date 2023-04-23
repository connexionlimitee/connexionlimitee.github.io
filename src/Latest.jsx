import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import latestText from "./latestText";

const renderLinkItem = (item) => {
  const { text, url } = item;
  return <p>{url ? <a href={url}>{text}</a> : text}</p>;
};

const Latest = ({ lang }) => {
  return (
    <div id="latest" className="section">
      <h2>{latestText[lang].actu}</h2>
      {latestText[lang].actu_events.map(renderLinkItem)}
      <h2>{latestText[lang].past}</h2>
      {latestText[lang].past_events.map(renderLinkItem)}
    </div>
  );
};

export default Latest;

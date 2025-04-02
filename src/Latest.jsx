import React from "react";
import _ from "lodash";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import latestText from "./latestText";

const renderLinkItem = (item) => {
  const { text, url } = item;
  return text ? <p>{url ? <a href={url}>{text}</a> : text}</p> : null;
};

const Latest = ({ lang }) => {
  const latestEvents = latestText[lang].events.slice(0, 4).toReversed();
  return (
    <div id="latest" className="section">
      {(latestEvents.filter(item => !_.isEmpty(item)).length) ? <h2>{latestText[lang].actu}</h2> : null}
      {latestEvents.map(renderLinkItem)}
      <h2>{latestText[lang].past}</h2>
      {latestText[lang].events.slice(4, 10).map(renderLinkItem)}
    </div>
  );
};

export default Latest;

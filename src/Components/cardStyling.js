import React from "react";

const cardStyling = (props) => {
  return (
    <div className="container">
      <header>
        <h1>{props.info.title}</h1>
        <h2>{props.info.copyright}</h2>
        <p>{props.info.date}</p>
      </header>
    </div>
  );
};

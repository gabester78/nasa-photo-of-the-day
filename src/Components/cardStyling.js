import React from "react";

const CardStyling = (props) => {
  return (
    <div className="container">
      <header>
        <h1>{props.data.title}</h1>
        <h3>Author: {props.data.copyright}</h3>
        <h4>{props.data.date}</h4>
      </header>
      <div className="imgContainer">
        <img className="iotd" alt="Image of the day" src={props.data.url}></img>
        <h3>About this photo</h3>
        <p>{props.data.explanation}</p>
      </div>
    </div>
  );
};

export default CardStyling;

import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const CardStyling = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="border border-light p-3 w-50 bg-secondary ">
        <CardImg
          top
          width="100%"
          className="rounded-lg mb-3 shadow-sm"
          src={props.data.url}
          alt="Card image cap"
        />
        <CardBody className="p-0">
          <h1 className="text-light text-uppercase">{props.data.title}</h1>
          <h3 className="text-light mb-2">Author: {props.data.copyright}</h3>
          <h4 className="text-light mb-2">Date: {props.data.date}</h4>
          <p className="text-light mb-0">{props.data.explanation}</p>
        </CardBody>
      </Card>
    </div>
  );
};

// <div className="container">
//   <header>
//     <h1>{props.data.title}</h1>
//     <h3>Author: {props.data.copyright}</h3>
//     <h4>{props.data.date}</h4>
//   </header>
//   <div className="imgContainer">
//     <img className="iotd" alt="Image of the day" src={props.data.url}></img>
//     <h3>About this photo</h3>
//     <p>{props.data.explanation}</p>
//   </div>
// </div>
//   );
// };

export default CardStyling;

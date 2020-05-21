import React, { useState, useEffect } from "react";
import axios from "axios";
import CardStyling from "./CardStyling";

export default function CardData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=bYvfakGHRLIWCbWchDF6bsB9Fb336Qg5nJ3UUb2G"
      )
      .then((response) => {
        console.log(response.data);
        // console.log(data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div>
      <CardStyling data={data} />
    </div>
  );
}

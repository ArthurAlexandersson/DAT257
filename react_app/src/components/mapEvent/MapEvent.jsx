import React, { useState } from "react";
import { Circle, MarkerF } from "@react-google-maps/api";


const MapEvent = ({ lat, lng, radius,}) => {
  const [clicked, setClicked] = useState(false);
  if (clicked)
    return (
      <Circle
        center={{ lat: lat, lng: lng }}
        radius={radius}
        onClick={() => {
          setClicked(!clicked);
        }}
      ></Circle>
    );
  return (
    <MarkerF
      position={{ lat: lat, lng: lng }}
      onClick={() => {
        setClicked(!clicked);
      }}
      //This label is need in order to ensure correct shape of symbol :(
      label={""}
      icon={{
          url: (require("./fire.svg").default),
          scaledSize: {width: 30, height: 30}
      }}
    ></MarkerF>
  );
};

export default MapEvent;

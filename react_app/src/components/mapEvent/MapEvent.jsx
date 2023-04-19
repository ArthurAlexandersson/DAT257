import React, { useState } from "react";
import { Circle, MarkerF } from "@react-google-maps/api";
const google = window.google;


const MapEvent = ({ lat, lng, radius, label }) => {
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
      label={label}
      onClick={() => {
        setClicked(!clicked);
      }}
      icon={{
          url: (require("./fire.svg").default),
          scaledSize: new google.maps.Size(30,30)
      }}
    ></MarkerF>
  );
};

export default MapEvent;

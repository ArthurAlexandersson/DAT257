import React, { useState } from "react";
import { Circle, MarkerF } from "@react-google-maps/api";


const MapEvent = ({ lat, lng, radius, label, color, openInfo, event}) => {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <Circle
        center={{ lat: lat, lng: lng }}
        radius={radius}
        options={{ fillColor: color, strokeColor: color }}
        onClick={() => {
          setClicked(!clicked);
        }}
      ></Circle>
    );
  }
  return (
    <MarkerF
      position={{ lat: lat, lng: lng }}
      label={label}
      onClick={() => {
        setClicked(!clicked);
        openInfo(event);
      }}
    ></MarkerF>
  );
};

export default MapEvent;

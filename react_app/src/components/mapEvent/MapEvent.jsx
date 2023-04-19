import React, { useState } from "react";
import { Circle, MarkerF } from "@react-google-maps/api";

const colors = [
  {
    name: "dark",
    threshhold: 10,
    color: "#FF0000",
  },
  {
    name: "medium",
    threshhold: 30,
    color: "#FF7400",
  },
  {
    name: "bright",
    threshhold: 50,
    color: "#FFFF00",
  },
];

const MapEvent = ({ lat, lng, radius, label, color }) => {
  const [clicked, setClicked] = useState(true);
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
      }}
    ></MarkerF>
  );
};

export default MapEvent;

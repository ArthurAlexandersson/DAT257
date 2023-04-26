import React, { useState } from "react";
import { Circle, MarkerF } from "@react-google-maps/api";

const MapEvent = ({ lat, lng, radius, color, openInfo, event, clusterer }) => {
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
      onClick={() => {
        setClicked(!clicked);
        openInfo(event);
      }}
      //This label is need in order to ensure correct shape of symbol :(
      label={""}
      icon={{
        url: require("./fire.svg").default,
        scaledSize: { width: 30, height: 30 },
      }}
      clusterer={clusterer}
    ></MarkerF>
  );
};

export default MapEvent;

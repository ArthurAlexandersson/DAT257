import React from "react";
import "./interactiveMap.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import MapEvent from "../mapEvent/MapEvent";

const mapOptions = {
  zoom: 12,
  center: { lat: 57.9, lng: 12.5 },
};

const InteractiveMap = ({ eventData }) => {
  const slicedArray = eventData.slice(0, 9000);
  const fireMarkers = slicedArray.map((event) => {
    const color = `rgb(255, ${
      (parseFloat(event.brightness - 300) / 90) * 100
    }, 0`;

    return (
      <MapEvent
        lat={parseFloat(event.latitude)}
        lng={parseFloat(event.longitude)}
        radius={parseFloat(event.frp * 10)}
        color={color}
        label={"Eld"}
      ></MapEvent>
    );
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div></div>;
  return (
    <GoogleMap options={mapOptions} mapContainerClassName="map_container">
      {fireMarkers}
    </GoogleMap>
  );
};

export default React.memo(InteractiveMap);

import React from "react";
import "./interactiveMap.css";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const InteractiveMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map_container"
    ></GoogleMap>
  );
};

export default React.memo(InteractiveMap);

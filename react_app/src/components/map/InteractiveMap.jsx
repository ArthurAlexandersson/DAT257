import React, { useMemo } from "react";
import "./interactiveMap.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import MapEvent from "../mapEvent/MapEvent";

const InteractiveMap = ({ eventData }) => {
  const fireMarkers = eventData.map((event) => {
    if (event.categories[0].title === "Wildfires") {
      return (
        <MapEvent
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          radius={5000}
          label={"led"}
        ></MapEvent>
      );
    }
    return null;
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: 57.9, lng: 12.5 }), []);
  const hermansHus = useMemo(
    () => ({ lat: 57.8849039096269, lng: 12.473770972272334 }),
    []
  );

  if (!isLoaded) return <div></div>;
  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName="map_container">
      <MarkerF position={hermansHus} label={"Hermans Hus! :D"}></MarkerF>
      {fireMarkers}
    </GoogleMap>
  );
};

export default React.memo(InteractiveMap);

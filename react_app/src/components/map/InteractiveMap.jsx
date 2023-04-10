import React, { useMemo } from "react";
import "./interactiveMap.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const InteractiveMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: 57.9, lng: 12.5 }), []);
  const hermansHus = useMemo(
    () => ({ lat: 57.8849039096269, lng: 12.473770972272334 }),
    []
  );

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName="map_container">
      <MarkerF position={hermansHus} label={"Hermans Hus! :D"}></MarkerF>
    </GoogleMap>
  );
};

export default React.memo(InteractiveMap);

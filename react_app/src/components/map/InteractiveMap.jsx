import React, { useEffect, useMemo, useContext, useState } from "react";
import "./interactiveMap.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import FireInfoWindow from "../infowindow/FireInfoWindow";
import MapEvent from "../mapEvent/MapEvent";
import { darkModeContext, leaderboardContext } from "../../App";
import darkModeMapStyle from "./mapStyles/darkModeMapStyle.js";
import mapStyle from "./mapStyles/mapStyle.js";
import Leaderboard from "../leaderboard/Leaderboard";

const InteractiveMap = ({ eventData }) => {
  const { isDarkModeState } = useContext(darkModeContext);
  const { leaderboardShown } = useContext(leaderboardContext);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleMarkerClick = (event) => {
    setSelectedEvent(event);
  };

  const handleInfoClose = () => {
    setSelectedEvent(null);
  };

  const slicedArray = eventData.slice(0, 500);

  const fireMarkers = slicedArray.map((event) => {
    const color = `rgb(255, ${
      (parseFloat(event.brightness - 300) / 90) * 100
    }, 0`;

    return (
      <MapEvent
        lat={parseFloat(event.latitude)}
        lng={parseFloat(event.longitude)}
        radius={parseFloat(event.frp * 5)}
        color={color}
        openInfo={handleMarkerClick}
        event={event}
      ></MapEvent>
    );
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: 57.9, lng: 12.5 }), []);
  const hermansHus = useMemo(
    () => ({ lat: 57.8849039096269, lng: 12.473770972272334 }),
    []
  );

  const [mapStyles, setMapStyles] = useState([]);

  const OPTIONS = {
    minZoom: 4,
    maxZoom: 80,
    restriction: {
      latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
    },
  };

  useEffect(() => {
    if (isDarkModeState) {
      setMapStyles(darkModeMapStyle);
    } else {
      setMapStyles(mapStyle);
    }
  }, [isDarkModeState]);

  useEffect(() => {
    if (leaderboardShown) {
      console.log("leaderboard is shown");
    } else {
      console.log("leaderboard is NOT shown");
    }
  }, [leaderboardShown]);

  const mapHeight = `calc(100vh - 60px - 60px)`;

  if (!isLoaded) return <div></div>;
  return (
    <>
      <div style={{ height: mapHeight }} class="scrollable">
        <GoogleMap
          options={{
            ...OPTIONS,
            styles: mapStyles,
            disableDefaultUI: true,
            gestureHandling: "greedy",
          }}
          zoom={12}
          center={center}
          mapContainerStyle={{ height: "100%" }}
          mapContainerClassName="map_container"
        >
          <MarkerF position={hermansHus} label={"Hermans Hus! :D"}></MarkerF>
          {fireMarkers}
          {selectedEvent && (
            <FireInfoWindow event={selectedEvent} onClose={handleInfoClose} />
          )}
        </GoogleMap>

        {leaderboardShown && <Leaderboard data={slicedArray} />}
      </div>
    </>
  );
};

export default InteractiveMap;

import React, { useEffect, useMemo, useContext, useState } from "react";
import "./interactiveMap.css";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  MarkerClusterer,
} from "@react-google-maps/api";
import FireInfoWindow from "../infowindow/FireInfoWindow";
import MapEvent from "../mapEvent/MapEvent";
import MapLoader from "../loader/MapLoader";
import small from "./cluster_icons/small.png";
import medium from "./cluster_icons/medium.png";
import large from "./cluster_icons/large.png";
import { darkModeContext, headerContext } from "../../App";
import darkModeStyle from "./mapStyles/darkModeMapStyle.js";
import mapStyle from "./mapStyles/mapStyle.js";
import Leaderboard from "../leaderboard/Leaderboard";
import FilterWindow from "../filter/FilterWindow";

const InteractiveMap = ({ eventData }) => {
  const { isDarkModeState } = useContext(darkModeContext);
  const { leaderboardShown } = useContext(headerContext);
  const { filterShown } = useContext(headerContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mapStyles, setMapStyles] = useState([]);

  const toggleInfoOnMarkerClick = (event) => {
    if (event === selectedEvent) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
    }
  };
  const filterData = (year, month, region) => {
    console.log(year + " " + month + " " + region)
  };

  const handleInfoClose = () => {
    setSelectedEvent(null);
  };

  // Custom cluster styles.
  const clusterStyles = [
    {
      textColor: "white",
      url: small,
      height: 20,
      width: 20,
    },
    {
      textColor: "white",
      url: medium,
      height: 30,
      width: 30,
    },
    {
      textColor: "white",
      url: large,
      height: 40,
      width: 40,
    },
  ];
  const slicedArray = eventData.slice(0, 10000);
  const fireMarkers = (
    <MarkerClusterer
      styles={clusterStyles}
      options={{
        gridSize: 50,
        minimumClusterSize: 2,
      }}
    >
      {(clusterer) =>
        slicedArray.map((event, index) => {
          const color = `rgb(255, ${
            (parseFloat(event.brightness - 300) / 90) * 100
          }, 0`;
          return (
            <MapEvent
              key={index}
              lat={parseFloat(event.latitude)}
              lng={parseFloat(event.longitude)}
              radius={parseFloat(event.frp * 5)}
              color={color}
              toggleInfo={toggleInfoOnMarkerClick}
              event={event}
              selected={selectedEvent}
              clusterer={clusterer}
            ></MapEvent>
          );
        })
      }
    </MarkerClusterer>
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [center, setCenter] = useState({ lat: 57.9, lng: 12.5 });

  const hermansHus = useMemo(
    () => ({ lat: 57.8849039096269, lng: 12.473770972272334 }),
    []
  );

  const OPTIONS = {
    minZoom: 4,
    maxZoom: 80,
    restriction: {
      latLngBounds: { north: 85, south: -85, west: -180, east: 180 },
    },
  };

  // Change center
  const handleCenterChange = (newCenter) => {
    setCenter(newCenter);
  };

  //Toggle darkmode
  useEffect(() => {
    if (isDarkModeState) {
      setMapStyles(darkModeStyle);
    } else {
      setMapStyles(mapStyle);
    }
  }, [isDarkModeState]);

  //Toggle leaderboard
  useEffect(() => {
    if (leaderboardShown) {
      console.log("leaderboard is shown");
    } else {
      console.log("leaderboard is NOT shown");
    }
  }, [leaderboardShown]);
  const mapHeight = `calc(100vh - 60px - 60px)`;
  if (!isLoaded) return <MapLoader />;
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
          {fireMarkers}
          <MarkerF position={hermansHus} label={"Hermans Hus! :D"}></MarkerF>
          {selectedEvent && (
            <FireInfoWindow event={selectedEvent} onClose={handleInfoClose} />
          )}
        </GoogleMap>
        {leaderboardShown && (
          <Leaderboard
            data={eventData}
            handleCenterChange={handleCenterChange}
          />
        )}
        {filterShown && (
            <FilterWindow filterData={filterData}
            ></FilterWindow >
        )}
      </div>
    </>
  );
};

export default React.memo(InteractiveMap);

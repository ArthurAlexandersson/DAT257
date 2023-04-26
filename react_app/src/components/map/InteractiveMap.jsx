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
import { darkModeContext } from "../../App";
import MapLoader from "../loader/MapLoader";

import small from "./cluster_icons/small.png";
import medium from "./cluster_icons/medium.png";
import large from "./cluster_icons/large.png";

const InteractiveMap = ({ eventData }) => {
  const { isDarkModeState } = useContext(darkModeContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mapStyles, setMapStyles] = useState([]);

  const handleMarkerClick = (event) => {
    setSelectedEvent(event);
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
              openInfo={handleMarkerClick}
              event={event}
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

  const center = useMemo(() => ({ lat: 57.9, lng: 12.5 }), []);
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

  useEffect(() => {
    if (isDarkModeState) {
      setMapStyles([]);
    } else {
      setMapStyles([
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ]);
    }
  }, [isDarkModeState]);

  const mapHeight = `calc(100vh - 60px - 60px)`;
  if (!isLoaded) return <MapLoader />;
  return (
    <>
      <div style={{ height: mapHeight }}>
        <GoogleMap
          options={{ ...OPTIONS, styles: mapStyles, disableDefaultUI: true }}
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
      </div>
    </>
  );
};

export default React.memo(InteractiveMap);

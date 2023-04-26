import React, { useEffect, useMemo, useContext, useState } from "react";
import "./interactiveMap.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import FireInfoWindow from "../infowindow/FireInfoWindow";
import MapEvent from "../mapEvent/MapEvent";
import { darkModeContext } from "../../App";

const InteractiveMap = ({ eventData }) => {
  const { isDarkModeState } = useContext(darkModeContext);

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

  const mapHeight = `calc(100vh - 60px)`;
  if (!isLoaded) return <div></div>;
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
          <MarkerF position={hermansHus} label={"Hermans Hus! :D"}></MarkerF>
          {fireMarkers}
          {selectedEvent && (
            <FireInfoWindow event={selectedEvent} onClose={handleInfoClose} />
          )}
        </GoogleMap>
      </div>
    </>
  );
};

export default InteractiveMap;

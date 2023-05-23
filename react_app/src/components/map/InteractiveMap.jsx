import React, {
  useEffect,
  useMemo,
  useContext,
  useState,
  useRef,
  createContext,
} from "react";
import "./interactiveMap.css";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  MarkerClusterer,
} from "@react-google-maps/api";
import FireInfoWindow from "../infowindow/FireInfoWindow";
import FilterWindow from "../filter/FilterWindow";
import MapEvent from "../mapEvent/MapEvent";
import MapLoader from "../loader/MapLoader";
import small from "./cluster_icons/small.png";
import medium from "./cluster_icons/medium.png";
import large from "./cluster_icons/large.png";
import { darkModeContext, headerContext, searchContext } from "../../App";
import darkModeStyle from "./mapStyles/darkModeMapStyle.js";
import mapStyle from "./mapStyles/mapStyle.js";
import Leaderboard from "../leaderboard/Leaderboard";
import { filter } from "../filter/Filtering";
import axios from "axios";
import CurrentFiltering from "../filter/CurrentFiltering";

export const prevZoomContext = createContext();

const InteractiveMap = ({ eventData }) => {
  const { isDarkModeState } = useContext(darkModeContext);
  const { locationState } = useContext(searchContext);
  const { leaderboardShown } = useContext(headerContext);
  const { filterShown } = useContext(headerContext);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mapStyles, setMapStyles] = useState([]);
  const [markerKey, setMarkerKey] = useState(0);
  const [shownData, setShownData] = useState(eventData);
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredMonth, setFilteredMonth] = useState("01");
  const [filteredRegion, setFilteredRegion] = useState("Whole world");
  const [searchBounds, setsearchBounds] = useState(["", "", "", ""]);
  const [zoom, setzoom] = useState(12);
  const [prevZoom, setPrevZoom] = useState(zoom);

  const mapRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setShownData(eventData);
    };

    fetchEvents();
  }, [eventData]);

  function clearMarkers() {
    setMarkerKey(markerKey + 1);
    closeInfo();
  }

  const toggleInfoOnMarkerClick = (event) => {
    if (event === selectedEvent) {
      closeInfo();
    } else {
      setSelectedEvent(event);
    }
  };
  const filterData = (year, month, region) => {
    clearMarkers();
    let newData = filter(year, month, region);
    setShownData(newData);
  };

  const closeInfo = () => {
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
  const fireMarkers = (
    <MarkerClusterer
      key={markerKey}
      styles={clusterStyles}
      options={{
        gridSize: 50,
        minimumClusterSize: 2,
      }}
    >
      {(clusterer) =>
        shownData.map((event, index) => {
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
    language: "en",
  });

  const [center, setCenter] = useState({ lat: 57.9, lng: 12.5 });

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

  //searchPlace
  useEffect(() => {
    if (locationState) {
      (async () => {
        try {
          const response = await axios.get(
            `https://geocode.maps.co/search?q=${encodeURIComponent(
              locationState
            )}`
          );
          const { lat, lon, boundingbox } = response.data[0];

          setCenter({ lat: parseFloat(lat), lng: parseFloat(lon) });
          setsearchBounds([
            boundingbox[0],
            boundingbox[1],
            boundingbox[2],
            boundingbox[3],
          ]);
          console.log(searchBounds);
        } catch (error) {
          console.error("Error fetching location coordinates:", error);
        }
      })();
    }
  }, [locationState]);

  if (!isLoaded) return <MapLoader />;
  return (
    <>
      <div style={{ height: "100vh" }} class="scrollable">
        <GoogleMap
          ref={mapRef} // Add the ref to the GoogleMap component
          options={{
            ...OPTIONS,
            styles: mapStyles,
            disableDefaultUI: true,
            gestureHandling: "greedy",
          }}
          zoom={zoom}
          center={center}
          fitBounds={{
            south: searchBounds[0],
            west: searchBounds[1],
            north: searchBounds[2],
            east: searchBounds[3],
          }}
          mapContainerClassName="map_container"
        >
          <prevZoomContext.Provider value={{ prevZoom, setPrevZoom }}>
            {fireMarkers}
            {selectedEvent && (
              <FireInfoWindow event={selectedEvent} onClose={closeInfo} />
            )}
          </prevZoomContext.Provider>
          <CurrentFiltering
            year={filteredYear}
            month={filteredMonth}
            region={filteredRegion}
          />
          {leaderboardShown && (
            <Leaderboard
              data={shownData}
              handleCenterChange={handleCenterChange}
              toggleInfo={toggleInfoOnMarkerClick}
            />
          )}
        </GoogleMap>

        {filterShown && (
          <FilterWindow
            filterData={filterData}
            filteredYear={filteredYear}
            setFilteredYear={setFilteredYear}
            filteredMonth={filteredMonth}
            setFilteredMonth={setFilteredMonth}
            filteredRegion={filteredRegion}
            setFilteredRegion={setFilteredRegion}
            handleCenterChange={handleCenterChange}
          />
        )}
      </div>
    </>
  );
};

export default React.memo(InteractiveMap);

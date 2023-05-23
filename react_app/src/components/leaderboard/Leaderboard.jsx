import React from "react";
import "./leaderboard.css";
import { useGoogleMap } from "@react-google-maps/api";
const Leaderboard = React.memo(({ data, handleCenterChange, toggleInfo }) => {
  const map = useGoogleMap();
  const zoom = function (targetZoom) {
    if (map) {
      let currentZoom = map.getZoom();
      let currentStep = 0;

      const interval = 300; // how often to change the zoom level
      const steps = targetZoom - currentZoom;
      console.log(steps);
      const stepChange = 1.5;

      const zoomInterval = setInterval(() => {
        if (currentStep < steps) {
          currentZoom += stepChange;
          // If currentZoom exceeds targetZoom, set it to targetZoom
          if (currentZoom > targetZoom) {
            currentZoom = targetZoom;
            currentStep = steps;
          }
          map.setZoom(currentZoom);
          currentStep++;
        } else {
          clearInterval(zoomInterval);
        }
      }, interval);
    }
  };
  const quickSort = (arr, prop) => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0][prop];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i][prop] > pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left, prop), arr[0], ...quickSort(right, prop)];
  };

  const sortedData = quickSort(data, "frp");

  const divs = sortedData.slice(0, 10).map((event) => (
    <div
      className="event"
      onClick={() => {
        handleCenterChange({ lat: event.latitude, lng: event.longitude });
        toggleInfo(event);
        zoom(12);
      }}
    >
      <p>
        Region: {event.region}
        <br />
        Longitude: {event.longitude} Latitude: {event.latitude}
        <br />
        frp: {event.frp}
      </p>
    </div>
  ));

  return (
    <div className="leaderboard">
      <h2>Largest Fires</h2>
      {divs}
    </div>
  );
});

export default Leaderboard;

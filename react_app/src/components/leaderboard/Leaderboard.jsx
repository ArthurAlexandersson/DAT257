import React from "react";
import "./leaderboard.css";

const Leaderboard = ({ data, handleCenterChange }) => {
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
      <h2>Leaderboard</h2>
      {divs}
    </div>
  );
};

export default Leaderboard;

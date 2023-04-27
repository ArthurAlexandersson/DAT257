import React from "react";
import "./leaderboard.css";

const Leaderboard = ({ data }) => {
  const divs = data.slice(0, 10).map((event) => (
    <div className="event">
      <p>
        Longitude: {event.longitude} Latitude: {event.latitude}
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

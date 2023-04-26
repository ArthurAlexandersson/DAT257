import "./fireInfoWindow.css";
import {InfoWindow} from "@react-google-maps/api";
import React from "react";

const FireInfoWindow = ({ event, onClose }) => {
  // Change these from hard coded to match the json data
  const lat = parseFloat(event.latitude);
  const lng = parseFloat(event.longitude);
  const brightness = parseFloat(event.brightness);
  const acq_date = event.acq_date;
  const frp = parseFloat(event.frp);

  const position = {lat: lat , lng: lng}

  // Possible to get country/the closest city or something from coordinates passed? Title no longer in our data
  const title = "Wildfire somewhere in the world";

  return (
      <InfoWindow
          position = {position}
          onCloseClick={() => onClose()}
      >
        <div className="info-window">
          <text className="coordinates">Cooridnates: </text>
          <text className="info-coordinates">{`  ${lat}, ${lng}`}</text>
          <br/>
          <br/>
          <text className="date">Acquried date: </text>
          {`  ${acq_date}`}
          <br/>
          <text className="brightness">Brightness: </text>
          {`  ${brightness}`}
          <br/>
          <text className="frp">Fire Radiative Power (FRP): </text>
          {`  ${frp}`}
        </div>

      </InfoWindow>
  );
/*
  return (
      <div className="info-container">
          <button className="close-button" onClick={handleClose}>
            {" "}
          </button>
          <div className="info-content">
            <div className="info-title">{title}</div>
            <div className="info-coordinates">
              <p className="coordinates">Coordinates:</p>
              {` ${lat}, ${lng}`}
            </div>
            <div className="info">
              <p className="date">Date:</p>
              {` ${acq_date}`}
              <br />
              <br />
              <p className="brightness">Brightness:</p>
              {` ${brightness}`}
              <br />
              <br />
              <p className="frp">Fire Radiative Power (FRP):</p>
              {` ${frp}`}
            </div>

            <div className="info-"></div>
          </div>
        </div>
      );
*/
};


export default FireInfoWindow;

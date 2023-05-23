import "./fireInfoWindow.css";
import { InfoWindow, useGoogleMap } from "@react-google-maps/api";
import React, { useContext } from "react";
import { prevZoomContext } from "../map/InteractiveMap";

const FireInfoWindow = ({ event, onClose }) => {
  const map = useGoogleMap();
  const { prevZoom } = useContext(prevZoomContext);

  // Change these from hard coded to match the json data
  const lat = parseFloat(event.latitude);
  const lng = parseFloat(event.longitude);
  const brightness = parseFloat(event.brightness);
  const acq_date = event.acq_date;
  const frp = parseFloat(event.frp);

  const position = { lat: lat, lng: lng };

  const zoomOut = function () {
    if (map) {
      let currentZoom = map.getZoom();
      let currentStep = 0;

      const targetZoom = prevZoom; // the desired zoom level
      const interval = 300; // how often to change the zoom level
      const steps = currentZoom - targetZoom;
      const stepChange = -1.5;

      const zoomInterval = setInterval(() => {
        if (currentStep < steps) {
          currentZoom += stepChange;
          // If currentZoom exceeds targetZoom, set it to targetZoom
          if (currentZoom < targetZoom) {
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

  const onCloseClick = () => {
    zoomOut();
    onClose();
  };

  return (
    <InfoWindow position={position} onCloseClick={() => onCloseClick()}>
      <div className="info-window">
        <text className="coordinates">Coordinates: </text>
        <text className="info-coordinates">{`  ${lat}, ${lng}`}</text>
        <br />
        <br />
        <text className="date">Acquired date: </text>
        {`  ${acq_date}`}
        <br />
        <text className="brightness">Brightness: </text>
        {`  ${brightness}`}
        <br />
        <text className="frp">Fire Radiative Power (FRP): </text>
        {`  ${frp}`}
      </div>
    </InfoWindow>
  );
};

export default FireInfoWindow;

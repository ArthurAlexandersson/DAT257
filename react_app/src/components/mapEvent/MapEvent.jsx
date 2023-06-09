import React, { useCallback, useContext } from "react";
import { Circle, MarkerF, useGoogleMap } from "@react-google-maps/api";
import { prevZoomContext } from "../map/InteractiveMap";
const MapEvent = React.memo(
  ({ lat, lng, radius, color, toggleInfo, event, selected, clusterer }) => {
    const { setPrevZoom } = useContext(prevZoomContext);
    const position = { lat, lng };

    const map = useGoogleMap();

    const zoomToMarker = function () {
      if (map) {
        let currentZoom = map.getZoom();
        let currentStep = 0;

        const targetZoom = 13; // the desired zoom level
        const interval = 300; // how often to change the zoom level
        const steps = targetZoom - currentZoom;
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

    const handleMarkerClick = () => {
      if (map) {
        zoomToMarker();
        map.panTo(position);
      }
    };

    const onClick = useCallback(() => {
      setPrevZoom(map.getZoom());
      toggleInfo(event);
      handleMarkerClick(lat, lng);
    }, []);

    if (selected === event) {
      return (
        <Circle
          center={{ lat: lat, lng: lng }}
          radius={radius}
          options={{ fillColor: color, strokeColor: color }}
          onClick={() => {
            toggleInfo(event);
          }}
        ></Circle>
      );
    }
    return (
      <MarkerF
        position={{ lat: lat, lng: lng }}
        onClick={onClick}
        //This label is need in order to ensure correct shape of symbol :(
        label={""}
        icon={{
          url: require("./fire.svg").default,
          scaledSize: { width: 30, height: 30 },
        }}
        clusterer={clusterer}
      ></MarkerF>
    );
  }
);

export default MapEvent;

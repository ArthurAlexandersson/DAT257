import React, { useRef, useContext } from "react";
import { Circle, MarkerF, useGoogleMap } from "@react-google-maps/api";
import { mapStateContext } from "../map/InteractiveMap";

const MapEvent = ({
  lat,
  lng,
  radius,
  color,
  toggleInfo,
  event,
  selected,
  clusterer,
}) => {
  const { mapState, setMapState } = useContext(mapStateContext);

  /**
   *      center: {
            lat: lat,
            lng: lng,
          },
   */

  const targetZoom = 14;
  const zoomDuration = 1000;
  const zoomStep = 0.25;
  const zoomTimeout = 30;

  const map = useGoogleMap();

  const lerp = (start, end, t) => {
    return start + t * (end - start);
  };

  const animateZoomAndPan = (map, targetPosition, targetZoom, duration) => {
    const startZoom = map.getZoom();
    const startPosition = map.getCenter();
    const startTime = performance.now();
    const projection = map.getProjection();

    const step = (timestamp) => {
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);

      const currentZoom = lerp(startZoom, targetZoom, t);
      const scale = 2 ** currentZoom;
      const startWorldPoint = projection.fromLatLngToPoint(startPosition);
      const targetWorldPoint = projection.fromLatLngToPoint(targetPosition);
      const currentWorldPoint = new window.google.maps.Point(
        lerp(startWorldPoint.x, targetWorldPoint.x, t),
        lerp(startWorldPoint.y, targetWorldPoint.y, t)
      );

      const currentLatLng = projection.fromPointToLatLng(currentWorldPoint);

      map.setZoom(currentZoom);
      map.setCenter(currentLatLng);

      if (t < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleMarkerClick = (lat, lng) => {
    if (map) {
      animateZoomAndPan(map, { lat, lng }, targetZoom, zoomDuration);
    }
  };

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
      onClick={() => {
        toggleInfo(event);
        handleMarkerClick(lat, lng);
      }}
      //This label is need in order to ensure correct shape of symbol :(
      label={""}
      icon={{
        url: require("./fire.svg").default,
        scaledSize: { width: 30, height: 30 },
      }}
      clusterer={clusterer}
    ></MarkerF>
  );
};

export default MapEvent;

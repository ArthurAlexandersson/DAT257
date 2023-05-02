import React, { useRef, useContext, useCallback } from "react";
import { Circle, MarkerF, useGoogleMap } from "@react-google-maps/api";
import { mapStateContext } from "../map/InteractiveMap";

const MemoizedMarker = React.memo(({ position, onClick }) => {
  return <MarkerF position={position} onClick={onClick} />;
});

const MapEvent = React.memo(
  ({ lat, lng, radius, color, toggleInfo, event, selected, clusterer }) => {
    const { mapState, setMapState } = useContext(mapStateContext);

    /**
   *      center: {
            lat: lat,
            lng: lng,
          },
   */

    const targetZoom = 13;
    const animationDuration = 1000;
    const position = { lat, lng };

    const map = useGoogleMap();

    const lerp = (start, end, t) => {
      return start + t * (end - start);
    };

    const animateZoomAndPan = (map, targetPosition, targetZoom, duration) => {
      const startZoom = map.getZoom();
      const startPosition = map.getCenter();
      const startTime = performance.now();

      const step = (timestamp) => {
        const elapsed = timestamp - startTime;
        const t = Math.min(elapsed / duration, 1);

        const currentZoom = lerp(startZoom, targetZoom, t);
        const currentLat = lerp(startPosition.lat(), targetPosition.lat, t);
        const currentLng = lerp(startPosition.lng(), targetPosition.lng, t);

        map.setZoom(currentZoom);
        map.setCenter({ lat: currentLat, lng: currentLng });

        if (t < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const handleMarkerClick = () => {
      if (map) {
        animateZoomAndPan(map, position, targetZoom, animationDuration);
      }
    };

    const onClick = useCallback(() => {
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

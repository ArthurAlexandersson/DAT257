import { Circle, MarkerF } from "@react-google-maps/api";

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

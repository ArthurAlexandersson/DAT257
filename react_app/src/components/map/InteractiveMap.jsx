import React, { useState, useCallback, useMemo } from "react";
import "./interactiveMap.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const InteractiveMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    const [markers, setMarkers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const center = useMemo(() => ({ lat: 57.9, lng: 12.5 }), []);

    const addMarker = useCallback((lat, lng, label, priority) => {
        setMarkers((prevMarkers) => [
            ...prevMarkers,
            { position: { lat: parseFloat(lat), lng: parseFloat(lng) }, label, priority: parseInt(priority) },
        ].sort((a, b) => a.priority - b.priority));
    }, []);

    const removeMarker = useCallback((indexToRemove) => {
        setMarkers((prevMarkers) =>
            prevMarkers.filter((_, index) => index !== indexToRemove)
        );
    }, []);

    const handleSubmit = () => {
        const lat = document.getElementById("latitude").value;
        const lng = document.getElementById("longitude").value;
        const label = document.getElementById("label").value;
        const priority = document.getElementById("priority").value;

        if (lat < -90 || lat > 90 || lng < -180 || lng > 180 || priority < 1 || priority > 100) {
            setErrorMessage("Invalid input. Please check the entered values.");
            return;
        }
        addMarker(lat, lng, label, priority);
        setErrorMessage("");
    };

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
            <div className="add_marker_form" style={{ top: "1", left: "1" }}>
                <label>
                    Latitude (-90 to 90):
                    <input type="number" id="latitude" min="-90" max="90" step="any" />
                </label>
                <label>
                    Longitude (-180 to 180):
                    <input type="number" id="longitude" min="-180" max="180" step="any" />
                </label>
                <label>
                    Label:
                    <input type="text" id="label" />
                </label>
                <label>
                    Priority (1-100):
                    <input type="number" id="priority" min="1" max="100" />
                </label>
                <button onClick={handleSubmit}>Add Marker</button>
                {errorMessage && <div className="error_message">{errorMessage}</div>}
            </div>
            <div className="marker_list">
                <h3>Marker List:</h3>
                <div className="scroll_container">
                    <ul>
                        {markers.map((marker, index) => (
                            <li key={index}>
                                {marker.label} ({marker.position.lat}, {marker.position.lng}) - Priority: {marker.priority}
                                <button onClick={() => removeMarker(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName="map_container"
            >
                {markers.map((marker, index) => (
                    <MarkerF
                        key={index}
                        position={marker.position}
                        label={marker.label}
                    ></MarkerF>
                ))}
            </GoogleMap>
        </>
    );
};

export default React.memo(InteractiveMap);
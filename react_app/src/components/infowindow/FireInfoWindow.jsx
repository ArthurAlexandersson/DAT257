import { useState } from "react";
import "./fireInfoWindow.css";

const FireInfoWindow = ({ event, onClose }) => {
    const lat = event.geometries[0].coordinates[1];
    const lng = event.geometries[0].coordinates[0];
    const title = event.title;
    const fire_date = event.geometries[0].date;
    const handleClose = () => {
        onClose();
    };
    return (
        <div className="info-container">
            <button className="close-button" onClick={handleClose}> > </button>
            <div className="info-content">
                <div className="info-title">
                    {title}
                </div>
                <div className="info-coordinates">
                    Coordinates:
                    <br/>
                    {`${lat}, ${lng}`}
                </div>

                <div className="info-date">

                    {`Date: ${fire_date}`}
                </div>
            </div>
        </div>
    );
};

export default FireInfoWindow;

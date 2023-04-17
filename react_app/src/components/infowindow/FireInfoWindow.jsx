import { useState } from "react";
import "./fireInfoWindow.css";

const FireInfoWindow = ({ event, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);
    const lat = event.geometries[0].coordinates[1];
    const lng = event.geometries[0].coordinates[0];
    const title = event.title;
    const firedate = event.geometries[0].date;
    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`info_div ${isOpen ? "open" : "closed"}`}>
            <h1>{title}</h1>
            <button className="close-button" onClick={handleClose}>
                X
            </button>
            <div className="info-content">
                <p>{`lat: ${lat}, long: ${lng}`}</p>
                <p>{`Date: ${firedate}`}</p>
            </div>
        </div>
    );
};

export default FireInfoWindow;

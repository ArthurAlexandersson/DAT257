import "./fireInfoWindow.css";

const FireInfoWindow = ({ event, onClose }) => {

    // Change these from hard coded to match the json data
    const lat = event.geometries[0].coordinates[1];
    const lng = event.geometries[0].coordinates[0];
    const brightness = 332.9;
    const acq_date = "2021-01-14";
    const frp = 41.2;

    // Possible to get country/the closest city or something from coordinates passed? Title no longer in our data
    const title = "Wildfire somewhere in the world";
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
                    <p className="coordinates">
                        Coordinates:
                    </p>
                    {` ${lat}, ${lng}`}
                </div>
                <div className="info">
                    <p className="date">
                        Date:
                    </p>
                    {` ${acq_date}`}
                    <br/><br/>
                    <p className="brightness">
                        Brightness:
                    </p>
                    {` ${brightness}`}
                    <br/><br/>
                    <p className="frp">
                        Fire Radiative Power (FRP):
                    </p>
                    {` ${frp}`}

                </div>

                <div className="info-"></div>
            </div>
        </div>
    );
};

export default FireInfoWindow;

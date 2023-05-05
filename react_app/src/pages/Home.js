import React, {useEffect, useState} from "react";
import "../App.css";
import InteractiveMap from "../components/map/InteractiveMap";
import MapLoader from "../components/loader/MapLoader";
import fireData from "../fireValues/output.json";

function Home(){
    const [eventData, setEventData] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoadingData(true);
            /*
            const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
            const { events } = await res.json();
            */

            /* setEventData(events); */
            setEventData(fireData);
            setLoadingData(false);
        };

        fetchEvents();
    }, []);

    return (<div className="App">
            {!loadingData ? (
                <InteractiveMap eventData={eventData} />
            ) : (
                <MapLoader />
            )}
    </div>
    );
}

export default Home;
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
            let filteredData = fireData.filter(obj => obj.acq_date.includes("-01-"));
            setEventData(filteredData);
            console.log(filteredData.length)
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
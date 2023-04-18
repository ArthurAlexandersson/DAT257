import { useEffect, useState } from "react";
import "./App.css";
import InteractiveMap from "./components/map/InteractiveMap";
import MapLoader from "./components/loader/MapLoader";
import Header from "./components/header/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingData(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoadingData(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Header/>
      {!loadingData ? <InteractiveMap eventData={eventData} /> : <MapLoader />}
      
    </div>
     
  );
}

export default App;

import { useEffect, useState, createContext } from "react";
import "./App.css";
import InteractiveMap from "./components/map/InteractiveMap";
import MapLoader from "./components/loader/MapLoader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import fireData from "./fireValues/output.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const darkModeContext = createContext();

function App() {
  const [eventData, setEventData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [isDarkModeState, setDarkModeState] = useState(false);

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

  return (
    <div className="App">
      <darkModeContext.Provider
        value={{
          isDarkModeState,
          setDarkModeState,
        }}
      >
        <Header />
        {!loadingData ? (
          <InteractiveMap eventData={eventData} />
        ) : (
          <MapLoader />
        )}
        <Footer />
      </darkModeContext.Provider>
    </div>
  );
}

export default App;

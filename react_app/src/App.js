import { useEffect, useState, createContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ErrorPage from "./pages/errorPage";

import fireData from "./fireValues/output.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const darkModeContext = createContext();
export const leaderboardContext = createContext();

function App() {

  const [isDarkModeState, setDarkModeState] = useState(false);
  const [leaderboardShown, setLeaderboardShown] = useState(false);

/*  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingData(true);
      /!*
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      *!/

      /!* setEventData(events); *!/
      setEventData(fireData);
      setLoadingData(false);
    };

    fetchEvents();
  }, []);*/

  return (
    <div className="App">
      <darkModeContext.Provider
        value={{
          isDarkModeState,
          setDarkModeState,
        }}
      >
        <leaderboardContext.Provider
          value={{
            leaderboardShown,
            setLeaderboardShown,
          }}
        >
          <Header />
          {!loadingData ? (
            <InteractiveMap eventData={eventData} />
          ) : (
            <MapLoader />
          )}
          <Footer />
        </leaderboardContext.Provider>
      </darkModeContext.Provider>
    </div>
  );
}

export default App;

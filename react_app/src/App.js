import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ErrorPage from "./pages/errorPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Firetips from "./popups/Firetips";

export const darkModeContext = createContext();
export const headerContext = createContext();
export const searchContext = createContext();

function App() {
  const [isDarkModeState, setDarkModeState] = useState(false);
  const [leaderboardShown, setLeaderboardShown] = useState(false);
  const [filterShown, setFilterShown] = useState(false);
  const [firetipsPopupShown, setFiretipsPopupShown] = useState(false);
  const [locationState, setLocationState] = useState();

  //Content in this file has been moved to Home.js in pages folder!!!
  return (
    <div className="App">
      <Router>
        <searchContext.Provider value={{ locationState, setLocationState }}>
          <darkModeContext.Provider
            value={{
              isDarkModeState,
              setDarkModeState,
            }}
          >
            <headerContext.Provider
              value={{
                leaderboardShown,
                setLeaderboardShown,
                filterShown,
                setFilterShown,
                firetipsPopupShown,
                setFiretipsPopupShown,
              }}
            >
              {firetipsPopupShown && <Firetips />}
              <Header />
              <Routes>
                <Route path="DAT257/" element={<Home />} />
                <Route path="DAT257/aboutus" element={<AboutUs />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </headerContext.Provider>
          </darkModeContext.Provider>
        </searchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
